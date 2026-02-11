"use client"

import type React from "react"
import { useEffect, useRef } from "react"

const FiberAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const fiberLines: FiberLine[] = []
    const lineCount = 20

    class FiberLine {
      startX: number
      startY: number
      endX: number
      endY: number
      speed: number
      progress: number
      color: string

      constructor() {
        this.startX = Math.random() * canvas.width
        this.startY = Math.random() * canvas.height
        this.endX = Math.random() * canvas.width
        this.endY = Math.random() * canvas.height
        this.speed = Math.random() * 0.002 + 0.001
        this.progress = 0
        this.color = `hsl(${Math.random() * 60 + 180}, 100%, 50%)`
      }

      update() {
        this.progress += this.speed
        if (this.progress >= 1) {
          this.progress = 0
          this.startX = this.endX
          this.startY = this.endY
          this.endX = Math.random() * canvas.width
          this.endY = Math.random() * canvas.height
        }
      }

      draw() {
        const x = this.startX + (this.endX - this.startX) * this.progress
        const y = this.startY + (this.endY - this.startY) * this.progress

        ctx!.strokeStyle = this.color
        ctx!.lineWidth = 2
        ctx!.lineCap = "round"
        ctx!.beginPath()
        ctx!.moveTo(this.startX, this.startY)
        ctx!.lineTo(x, y)
        ctx!.stroke()

        ctx!.fillStyle = "white"
        ctx!.beginPath()
        ctx!.arc(x, y, 3, 0, Math.PI * 2)
        ctx!.fill()
      }
    }

    for (let i = 0; i < lineCount; i++) {
      fiberLines.push(new FiberLine())
    }

    function animate() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      fiberLines.forEach((line) => {
        line.update()
        line.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-50" />
}

export default FiberAnimation
