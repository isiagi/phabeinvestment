"use client"

import { useEffect, useRef, useState } from "react"

type AnimationDirection = "up" | "down" | "left" | "right" | "none"
type AnimationType = "fade" | "slide" | "scale" | "fade-slide"

interface UseScrollAnimationProps {
  threshold?: number
  delay?: number
  direction?: AnimationDirection
  type?: AnimationType
  duration?: number
  once?: boolean
}

export function useScrollAnimation({
  threshold = 0.1,
  delay = 0,
  direction = "up",
  type = "fade-slide",
  duration = 600,
  once = true,
}: UseScrollAnimationProps = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, once])

  const getAnimationStyles = () => {
    const baseStyles = {
      opacity: isVisible ? 1 : 0,
      transform: "none",
      transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
      transitionDelay: `${delay}ms`,
    }

    if (!isVisible) {
      switch (type) {
        case "fade":
          return { ...baseStyles }
        case "slide":
          return {
            ...baseStyles,
            transform: getTransformValue(direction, 50),
          }
        case "scale":
          return {
            ...baseStyles,
            transform: "scale(0.9)",
          }
        case "fade-slide":
        default:
          return {
            ...baseStyles,
            transform: getTransformValue(direction, 30),
          }
      }
    }

    return baseStyles
  }

  const getTransformValue = (direction: AnimationDirection, distance: number) => {
    switch (direction) {
      case "up":
        return `translateY(${distance}px)`
      case "down":
        return `translateY(-${distance}px)`
      case "left":
        return `translateX(${distance}px)`
      case "right":
        return `translateX(-${distance}px)`
      case "none":
      default:
        return "none"
    }
  }

  return { ref, isVisible, style: getAnimationStyles() }
}
