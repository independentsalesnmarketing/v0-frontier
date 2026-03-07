"use client"

import { useState, useCallback, useRef, useEffect, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, ArrowUp, Clock, RotateCcw, Activity } from "lucide-react"

type Phase = "idle" | "ping" | "download" | "upload" | "complete"

interface Results {
  download: number
  upload: number
  ping: number
  jitter: number
}

/* ─── gauge geometry ─── */
const CX = 150
const CY = 150
const R = 115
const CIRC = 2 * Math.PI * R
const ARC_DEG = 270
const ARC_LEN = CIRC * (ARC_DEG / 360)
const GAP_DEG = 360 - ARC_DEG
const ROTATE = 90 + GAP_DEG / 2

/* ─── log-scale mapping  (1 → 5 000 Mbps) ─── */
const LOG_MAX = Math.log10(5000)
function speedFrac(mbps: number) {
  if (mbps <= 1) return 0
  return Math.min(Math.log10(mbps) / LOG_MAX, 1)
}

/* ─── ticks ─── */
const MAJOR = [
  { s: 1, l: "1" }, { s: 10, l: "10" }, { s: 50, l: "50" },
  { s: 100, l: "100" }, { s: 250, l: "250" }, { s: 500, l: "500" },
  { s: 1000, l: "1G" }, { s: 2500, l: "2.5G" }, { s: 5000, l: "5G" },
]
const MINOR_N = 54

function tickPt(frac: number, r: number) {
  const rad = ((ROTATE + frac * ARC_DEG) * Math.PI) / 180
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) }
}

function fmtSpeed(mbps: number) {
  if (mbps >= 1000) return { v: (mbps / 1000).toFixed(1), u: "Gbps" }
  if (mbps >= 100) return { v: Math.round(mbps).toString(), u: "Mbps" }
  if (mbps > 0) return { v: mbps.toFixed(1), u: "Mbps" }
  return { v: "—", u: "" }
}
function fmtStr(mbps: number) {
  const { v, u } = fmtSpeed(mbps)
  return v === "—" ? "—" : `${v} ${u}`
}

/* ═══════════════════════════════════════════ */
export function SpeedTestTool() {
  const [phase, setPhase] = useState<Phase>("idle")
  const [results, setResults] = useState<Results>({ download: 0, upload: 0, ping: 0, jitter: 0 })
  const [liveSpeed, setLiveSpeed] = useState(0)
  const [displaySpeed, setDisplaySpeed] = useState(0)
  const [progress, setProgress] = useState(0)

  /* smooth gauge animation */
  const dispRef = useRef(0)
  useEffect(() => {
    let active = true
    const step = () => {
      if (!active) return
      const diff = liveSpeed - dispRef.current
      if (Math.abs(diff) < 0.4) {
        dispRef.current = liveSpeed
        setDisplaySpeed(liveSpeed)
        return
      }
      dispRef.current += diff * 0.12
      setDisplaySpeed(dispRef.current)
      requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
    return () => { active = false }
  }, [liveSpeed])

  /* ─── measurement ─── */
  const measurePing = useCallback(async () => {
    const samples: number[] = []
    for (let i = 0; i < 10; i++) {
      const t = performance.now()
      try {
        await fetch(`/api/speed-test?size=1&t=${Date.now()}-${i}`, { cache: "no-store" })
      } catch { /* skip */ }
      samples.push(performance.now() - t)
    }
    samples.sort((a, b) => a - b)
    const trimmed = samples.slice(2, -2)
    const avg = trimmed.reduce((a, b) => a + b, 0) / trimmed.length
    const jitter = Math.sqrt(trimmed.reduce((s, p) => s + (p - avg) ** 2, 0) / trimmed.length)
    return { ping: Math.round(avg), jitter: Math.round(jitter * 10) / 10 }
  }, [])

  const measureDownload = useCallback(async () => {
    // warm-up to establish connection
    await fetch(`/api/speed-test?size=100000&t=${Date.now()}`, { cache: "no-store" })
    // quick estimate
    const t0 = performance.now()
    const r0 = await fetch(`/api/speed-test?size=2000000&t=${Date.now()}`, { cache: "no-store" })
    const b0 = await r0.arrayBuffer()
    const est = (b0.byteLength * 8) / ((performance.now() - t0) / 1000) / 1e6
    setLiveSpeed(est)
    setProgress(15)
    // parallel multi-connection test
    const PAR = 3
    const PER = Math.min(Math.max(Math.round((est * 250000) / PAR), 1e6), 10e6)
    const speeds: number[] = []
    for (let rd = 0; rd < 4; rd++) {
      setProgress(15 + (rd + 1) * 21)
      const t = performance.now()
      try {
        const bufs = await Promise.all(
          Array.from({ length: PAR }, (_, i) =>
            fetch(`/api/speed-test?size=${PER}&t=${Date.now()}-${rd}-${i}`, { cache: "no-store" })
              .then((r) => r.arrayBuffer()),
          ),
        )
        const elapsed = (performance.now() - t) / 1000
        const total = bufs.reduce((s, b) => s + b.byteLength, 0)
        if (elapsed > 0.05) { speeds.push((total * 8) / elapsed / 1e6); setLiveSpeed((total * 8) / elapsed / 1e6) }
      } catch { /* skip failed round */ }
    }
    if (!speeds.length) return est
    speeds.sort((a, b) => a - b)
    const tr = speeds.length > 2 ? speeds.slice(1) : speeds
    return tr.reduce((a, b) => a + b, 0) / tr.length
  }, [])

  const measureUpload = useCallback(async () => {
    await fetch("/api/speed-test", { method: "POST", body: new Uint8Array(50000), cache: "no-store" })
    const t0 = performance.now()
    await fetch("/api/speed-test", { method: "POST", body: new Uint8Array(500000), cache: "no-store" })
    const est = (500000 * 8) / ((performance.now() - t0) / 1000) / 1e6
    setLiveSpeed(est)
    setProgress(15)
    const PAR = 2
    const PER = Math.min(Math.max(Math.round((est * 250000) / PAR), 500000), 5e6)
    const speeds: number[] = []
    for (let rd = 0; rd < 4; rd++) {
      setProgress(15 + (rd + 1) * 21)
      const t = performance.now()
      try {
        await Promise.all(
          Array.from({ length: PAR }, () =>
            fetch("/api/speed-test", { method: "POST", body: new Uint8Array(PER), cache: "no-store" }),
          ),
        )
        const elapsed = (performance.now() - t) / 1000
        if (elapsed > 0.05) { const spd = (PAR * PER * 8) / elapsed / 1e6; speeds.push(spd); setLiveSpeed(spd) }
      } catch { /* skip */ }
    }
    if (!speeds.length) return est
    speeds.sort((a, b) => a - b)
    const tr = speeds.length > 2 ? speeds.slice(1) : speeds
    return tr.reduce((a, b) => a + b, 0) / tr.length
  }, [])

  /* ─── orchestrate ─── */
  const runTest = useCallback(async () => {
    setResults({ download: 0, upload: 0, ping: 0, jitter: 0 })
    setLiveSpeed(0); dispRef.current = 0; setDisplaySpeed(0); setProgress(0)
    setPhase("ping")
    const { ping, jitter } = await measurePing()
    setResults((r) => ({ ...r, ping, jitter }))
    setPhase("download")
    setLiveSpeed(0); dispRef.current = 0; setDisplaySpeed(0); setProgress(0)
    const dl = await measureDownload()
    setResults((r) => ({ ...r, download: dl }))
    setPhase("upload")
    setLiveSpeed(0); dispRef.current = 0; setDisplaySpeed(0); setProgress(0)
    const ul = await measureUpload()
    setResults((r) => ({ ...r, upload: ul }))
    setLiveSpeed(dl)
    setPhase("complete")
  }, [measurePing, measureDownload, measureUpload])

  /* ─── derived ─── */
  const running = phase !== "idle" && phase !== "complete"
  const frac = speedFrac(displaySpeed)
  const offset = ARC_LEN * (1 - frac)
  const { v: spdV, u: spdU } = fmtSpeed(displaySpeed)

  return (
    <div className="max-w-lg mx-auto w-full select-none">
      {/* ── SVG Gauge ── */}
      <div className="relative">
        <svg viewBox="0 0 300 240" className="w-full" aria-hidden="true">
          <defs>
            <linearGradient id="sg" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="25%" stopColor="#f59e0b" />
              <stop offset="55%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <filter id="gl" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="5" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* decorative ring */}
          <circle cx={CX} cy={CY} r={R + 14} fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />

          {/* background arc */}
          <circle
            cx={CX} cy={CY} r={R} fill="none"
            stroke="rgba(255,255,255,0.06)" strokeWidth="12"
            strokeDasharray={`${ARC_LEN} ${CIRC}`}
            transform={`rotate(${ROTATE} ${CX} ${CY})`}
            strokeLinecap="round"
          />

          {/* minor ticks */}
          {Array.from({ length: MINOR_N + 1 }, (_, i) => {
            const f = i / MINOR_N
            const a = tickPt(f, R - 6), b = tickPt(f, R + 2)
            return <line key={`m${i}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          })}

          {/* major ticks + labels */}
          {MAJOR.map(({ s, l }) => {
            const f = speedFrac(s)
            const a = tickPt(f, R - 16), b = tickPt(f, R + 4), lp = tickPt(f, R - 28)
            return (
              <g key={s}>
                <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
                <text x={lp.x} y={lp.y} textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.3)" fontSize="8" fontWeight="500">{l}</text>
              </g>
            )
          })}

          {/* active gradient arc */}
          {(running || phase === "complete") && (
            <circle
              cx={CX} cy={CY} r={R} fill="none"
              stroke="url(#sg)" strokeWidth="12"
              strokeDasharray={`${ARC_LEN} ${CIRC}`}
              strokeDashoffset={offset}
              transform={`rotate(${ROTATE} ${CX} ${CY})`}
              strokeLinecap="round"
              filter="url(#gl)"
              style={{ transition: "stroke-dashoffset 0.3s cubic-bezier(.4,0,.2,1)" }}
            />
          )}

          {/* ── centre readout ── */}
          {phase === "idle" && (
            <>
              <text x={CX} y={CY - 8} textAnchor="middle" fill="rgba(255,255,255,0.18)" fontSize="52" fontWeight="900">?</text>
              <text x={CX} y={CY + 22} textAnchor="middle" fill="rgba(255,255,255,0.18)" fontSize="12">Ready</text>
            </>
          )}
          {phase === "ping" && (
            <>
              <circle cx={CX} cy={CY - 4} r="16" fill="none" stroke="rgba(100,255,218,0.25)" strokeWidth="2">
                <animate attributeName="r" values="12;22;12" dur="1.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite" />
              </circle>
              <text x={CX} y={CY + 2} textAnchor="middle" fill="#64ffda" fontSize="14" fontWeight="700">PING</text>
              <text x={CX} y={CY + 22} textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="10">Measuring latency…</text>
            </>
          )}
          {(phase === "download" || phase === "upload") && (
            <>
              <text x={CX} y={CY - 6} textAnchor="middle" fill="white" fontSize="48" fontWeight="900">{spdV}</text>
              <text x={CX} y={CY + 18} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="15" fontWeight="600">{spdU}</text>
              <text x={CX} y={CY + 38} textAnchor="middle" fill="#64ffda" fontSize="11" fontWeight="600">
                {phase === "download" ? "↓ DOWNLOAD" : "↑ UPLOAD"}
              </text>
            </>
          )}
          {phase === "complete" && (() => {
            const d = fmtSpeed(results.download)
            return (
              <>
                <text x={CX} y={CY - 6} textAnchor="middle" fill="white" fontSize="48" fontWeight="900">{d.v}</text>
                <text x={CX} y={CY + 18} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="15" fontWeight="600">{d.u}</text>
                <text x={CX} y={CY + 38} textAnchor="middle" fill="#64ffda" fontSize="11" fontWeight="600">DOWNLOAD</text>
              </>
            )
          })()}
        </svg>

        {/* pulse glow while testing */}
        {running && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ top: "-4%" }}>
            <div className="rounded-full bg-[#64ffda]/[0.04] animate-ping" style={{ width: "55%", height: "55%", animationDuration: "2.5s" }} />
          </div>
        )}
      </div>

      {/* ── Result cards ── */}
      {(phase === "complete" || (running && results.ping > 0)) && (
        <div className="grid grid-cols-4 gap-2 -mt-2 mb-4 px-2">
          <Stat icon={<ArrowDown className="w-3.5 h-3.5" />} label="Download" value={results.download > 0 ? fmtStr(results.download) : "—"} />
          <Stat icon={<ArrowUp className="w-3.5 h-3.5" />} label="Upload" value={results.upload > 0 ? fmtStr(results.upload) : "—"} />
          <Stat icon={<Clock className="w-3.5 h-3.5" />} label="Ping" value={results.ping > 0 ? `${results.ping} ms` : "—"} />
          <Stat icon={<Activity className="w-3.5 h-3.5" />} label="Jitter" value={results.jitter > 0 ? `${results.jitter} ms` : "—"} />
        </div>
      )}

      {/* ── Action button ── */}
      <div className="text-center mt-2">
        {phase === "idle" && (
          <button onClick={runTest} className="group relative inline-flex items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-[#DA202C] blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
            <span className="relative inline-flex items-center bg-gradient-to-br from-[#DA202C] to-[#ff4444] text-white font-extrabold text-lg px-12 py-4 rounded-full shadow-2xl shadow-[#DA202C]/25 group-hover:shadow-[#DA202C]/40 transition-all">
              Start Speed Test
            </span>
          </button>
        )}
        {running && (
          <p className="text-white/40 text-sm">
            {phase === "ping" && "Measuring network latency…"}
            {phase === "download" && `Testing download · ${progress}%`}
            {phase === "upload" && `Testing upload · ${progress}%`}
          </p>
        )}
        {phase === "complete" && (
          <Button
            onClick={runTest}
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 bg-transparent font-bold px-8 h-12 rounded-full"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Test Again
          </Button>
        )}
      </div>
    </div>
  )
}

/* small result stat card */
function Stat({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="bg-white/[0.04] rounded-xl py-2.5 px-1 text-center border border-white/[0.06]">
      <div className="flex items-center justify-center gap-1 mb-0.5 text-[#64ffda]">
        {icon}
        <span className="text-[10px] uppercase tracking-wider text-white/40">{label}</span>
      </div>
      <p className="text-white font-bold text-xs leading-tight">{value}</p>
    </div>
  )
}
