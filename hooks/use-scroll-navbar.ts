"use client"

import { useEffect, useState } from "react"

export function useScrollNavbar() {
  const [isVisible, setIsVisible] = useState(true) // Visible al inicio
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)

      // Visible al inicio (0-50px) o después de hacer scroll considerable (100px+)
      if (currentScrollY <= 50 || currentScrollY >= 100) {
        setIsVisible(true)
      } else {
        // Oculto en la zona intermedia (50px-100px)
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return { isVisible, isScrolled: scrollY > 50 }
}
