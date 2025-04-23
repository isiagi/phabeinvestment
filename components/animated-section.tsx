"use client"

import type React from "react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  type?: "fade" | "slide" | "scale" | "fade-slide"
  threshold?: number
  duration?: number
  once?: boolean
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  type = "fade-slide",
  threshold = 0.1,
  duration = 600,
  once = true,
}: AnimatedSectionProps) {
  const { ref, style } = useScrollAnimation({
    delay,
    direction,
    type,
    threshold,
    duration,
    once,
  })

  return (
    <div ref={ref} style={style} className={cn(className)}>
      {children}
    </div>
  )
}
