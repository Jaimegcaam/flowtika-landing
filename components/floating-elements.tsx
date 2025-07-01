"use client"

import { useEffect, useState } from "react"
import { Bot, Zap, Workflow, Settings, Target, TrendingUp } from "lucide-react"

const icons = [Bot, Zap, Workflow, Settings, Target, TrendingUp]
const colors = ["bg-blue-500", "bg-purple-500", "bg-indigo-500", "bg-cyan-500", "bg-pink-500", "bg-emerald-500"]

interface FloatingElement {
  id: number
  Icon: typeof Bot
  color: string
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  rotation: number
  rotationSpeed: number
}

export function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    // Initialize floating elements
    const newElements: FloatingElement[] = []
    for (let i = 0; i < 8; i++) {
      newElements.push({
        id: i,
        Icon: icons[Math.floor(Math.random() * icons.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 20 + 40,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 4,
      })
    }
    setElements(newElements)

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    const animate = () => {
      setElements((prev) =>
        prev.map((element) => {
          let newX = element.x + element.speedX
          let newY = element.y + element.speedY

          // Bounce off edges
          if (newX < 0 || newX > window.innerWidth - element.size) {
            element.speedX *= -1
            newX = element.x + element.speedX
          }
          if (newY < 0 || newY > window.innerHeight - element.size) {
            element.speedY *= -1
            newY = element.y + element.speedY
          }

          // Mouse interaction
          const distance = Math.sqrt(
            Math.pow(mousePosition.x - (newX + element.size / 2), 2) +
              Math.pow(mousePosition.y - (newY + element.size / 2), 2),
          )

          if (distance < 100) {
            const angle = Math.atan2(
              mousePosition.y - (newY + element.size / 2),
              mousePosition.x - (newX + element.size / 2),
            )
            newX -= Math.cos(angle) * 2
            newY -= Math.sin(angle) * 2
          }

          return {
            ...element,
            x: newX,
            y: newY,
            rotation: element.rotation + element.rotationSpeed,
          }
        }),
      )
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [mousePosition, isClient])

  if (!isClient) {
    return null
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element) => {
        const { Icon } = element
        return (
          <div
            key={element.id}
            className={`absolute ${element.color} rounded-full p-3 shadow-lg opacity-20 hover:opacity-40 transition-opacity duration-300`}
            style={{
              left: element.x,
              top: element.y,
              width: element.size,
              height: element.size,
              transform: `rotate(${element.rotation}deg)`,
            }}
          >
            <Icon className="w-full h-full text-white" />
          </div>
        )
      })}
    </div>
  )
}
