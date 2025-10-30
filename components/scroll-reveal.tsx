"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  direction?: "left" | "right" | "up" | "down"
  delay?: number
  className?: string
  duration?: number
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  duration = 800,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add("scroll-reveal-active")
            }, delay)
            observer.unobserve(element)
          }
        })
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" // Biraz daha önce başlasın
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [delay])

  const directionClasses = {
    left: "scroll-reveal-left",
    right: "scroll-reveal-right",
    up: "scroll-reveal-up",
    down: "scroll-reveal-down",
  }

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${directionClasses[direction]} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  )
}
