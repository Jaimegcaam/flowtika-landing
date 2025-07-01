"use client"

import { useEffect, useState } from "react"

interface TypingTextProps {
  texts: string[]
  className?: string
  speed?: number
}

export function TypingText({ texts, className = "", speed = 100 }: TypingTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const timeout = setTimeout(
      () => {
        const fullText = texts[currentTextIndex]

        if (!isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length + 1))

          if (currentText === fullText) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          setCurrentText(fullText.substring(0, currentText.length - 1))

          if (currentText === "") {
            setIsDeleting(false)
            setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? speed / 2 : speed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentTextIndex, texts, speed, isClient])

  if (!isClient) {
    return (
      <span className={className}>
        {texts[0]}
        <span className="animate-pulse">|</span>
      </span>
    )
  }

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
