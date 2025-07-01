"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  animation?: "fade-in-up" | "fade-in-left" | "fade-in-right" | "scale-in" | "fade-in"
  delay?: string
  className?: string
  threshold?: number
}

export function AnimatedSection({
  children,
  animation = "fade-in-up",
  delay = "",
  className = "",
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold })

  return (
    <div ref={elementRef} className={`animate-${animation} ${delay} ${isVisible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  )
}
