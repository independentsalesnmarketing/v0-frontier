"use client"

import { useMemo } from "react"

interface InstallDatePickerProps {
  value: string // "YYYY-MM-DD"
  onChange: (date: string) => void
}

function toKey(d: Date): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, "0")
  const day = String(d.getDate()).padStart(2, "0")
  return `${y}-${m}-${day}`
}

function addDays(base: Date, n: number): Date {
  const d = new Date(base)
  d.setDate(d.getDate() + n)
  return d
}

const DAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

export function InstallDatePicker({ value, onChange }: InstallDatePickerProps) {
  const today = useMemo(() => {
    const d = new Date()
    d.setHours(0, 0, 0, 0)
    return d
  }, [])

  // First bookable date = today + 2
  const firstAvailable = useMemo(() => addDays(today, 2), [today])
  // 14-day window
  const lastAvailable = useMemo(() => addDays(firstAvailable, 13), [firstAvailable])

  const firstKey = toKey(firstAvailable)
  const lastKey = toKey(lastAvailable)

  // Grid: from Sunday of week containing firstAvailable
  //        through Saturday of week containing lastAvailable
  const cells = useMemo(() => {
    const start = new Date(firstAvailable)
    start.setDate(start.getDate() - start.getDay()) // Sunday

    const end = new Date(lastAvailable)
    end.setDate(end.getDate() + (6 - end.getDay())) // Saturday

    const days: Date[] = []
    const cur = new Date(start)
    while (cur <= end) {
      days.push(new Date(cur))
      cur.setDate(cur.getDate() + 1)
    }
    return days
  }, [firstAvailable, lastAvailable])

  // Month label — "April 2026" or "April – May 2026"
  const monthLabel = useMemo(() => {
    const opts: Intl.DateTimeFormatOptions = { month: "long", year: "numeric" }
    if (firstAvailable.getMonth() === lastAvailable.getMonth()) {
      return firstAvailable.toLocaleDateString("en-US", opts)
    }
    return (
      firstAvailable.toLocaleDateString("en-US", { month: "long" }) +
      " – " +
      lastAvailable.toLocaleDateString("en-US", opts)
    )
  }, [firstAvailable, lastAvailable])

  // Availability badge label
  const rangeLabel = useMemo(() => {
    const fmt: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" }
    return (
      firstAvailable.toLocaleDateString("en-US", fmt) +
      " – " +
      lastAvailable.toLocaleDateString("en-US", fmt)
    )
  }, [firstAvailable, lastAvailable])

  const selectedDisplay = useMemo(() => {
    if (!value) return null
    return new Date(value + "T00:00:00").toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }, [value])

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm w-full select-none">
      {/* Month heading */}
      <p className="text-center text-sm font-semibold text-[#0A1E3C] mb-3 tracking-wide">
        {monthLabel}
      </p>

      {/* Day-of-week headers */}
      <div className="grid grid-cols-7 mb-1">
        {DAY_LABELS.map((d) => (
          <div key={d} className="text-center text-[11px] font-medium text-gray-400 py-0.5">
            {d}
          </div>
        ))}
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7 gap-y-1">
        {cells.map((day) => {
          const key = toKey(day)
          const inWindow = key >= firstKey && key <= lastKey
          const isSelected = key === value
          const isFirst = key === firstKey
          const isLast = key === lastKey

          let cellClass =
            "relative flex items-center justify-center h-9 text-sm font-medium transition-colors "

          if (isSelected) {
            cellClass += "z-10"
          } else if (inWindow) {
            // range band background
            const isStartOfRow = day.getDay() === 0
            const isEndOfRow = day.getDay() === 6
            const roundLeft = isFirst || isStartOfRow
            const roundRight = isLast || isEndOfRow
            cellClass +=
              "bg-[#EEF2FF] " +
              (roundLeft ? "rounded-l-full " : "") +
              (roundRight ? "rounded-r-full " : "")
          }

          return (
            <div key={key} className={cellClass}>
              <button
                type="button"
                disabled={!inWindow}
                onClick={() => onChange(key)}
                className={[
                  "relative z-10 flex items-center justify-center w-8 h-8 rounded-full text-sm transition-colors",
                  isSelected
                    ? "bg-[#0A1E3C] text-white font-bold shadow"
                    : inWindow
                    ? "text-[#0A1E3C] font-semibold hover:bg-[#0A1E3C] hover:text-white cursor-pointer"
                    : "text-gray-300 cursor-default",
                ].join(" ")}
                aria-label={day.toLocaleDateString("en-US", { month: "long", day: "numeric" })}
                aria-pressed={isSelected}
              >
                {day.getDate()}
              </button>
            </div>
          )
        })}
      </div>

      {/* Footer */}
      <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col items-center gap-1">
        <p className="text-[11px] text-gray-400">
          Available dates: <span className="text-[#0A1E3C] font-medium">{rangeLabel}</span>
        </p>
        {selectedDisplay && (
          <p className="text-[11px] text-gray-500">
            Selected:{" "}
            <span className="font-semibold text-[#0A1E3C]">{selectedDisplay}</span>
          </p>
        )}
      </div>
    </div>
  )
}
