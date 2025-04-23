"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { DecoratedTitle } from "@/components/decorated-title"

interface CoreValue {
  icon: React.ReactNode
  title: string
  description: string
}

interface CoreValuesSliderProps {
  values: CoreValue[]
}

export function CoreValuesSlider({ values }: CoreValuesSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  // The minimum swipe distance (in px) to trigger a slide change
  const minSwipeDistance = 50

  // Calculate how many items to show based on screen width
  const [itemsToShow, setItemsToShow] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1)
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2)
      } else {
        setItemsToShow(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    if (currentIndex < values.length - itemsToShow) {
      setCurrentIndex((prevIndex) => prevIndex + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1)
    }
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && currentIndex < values.length - itemsToShow) {
      nextSlide()
    } else if (isRightSwipe && currentIndex > 0) {
      prevSlide()
    }
  }

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < values.length - itemsToShow) {
        nextSlide()
      } else {
        setCurrentIndex(0) // Reset to beginning when reaching the end
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, values.length, itemsToShow])

  const isNextDisabled = currentIndex >= values.length - itemsToShow
  const isPrevDisabled = currentIndex <= 0

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={sliderRef}
        className="relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
        >
          {values.map((value, index) => (
            <div key={value.title} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4">
              <AnimatedSection
                className="h-full flex flex-col items-center space-y-4 rounded-xl border bg-background p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                delay={100 * (index % itemsToShow)}
                type="fade-slide"
              >
                <div className="rounded-full bg-green/10 p-6 mb-2">{value.icon}</div>
                <DecoratedTitle as="h3" variant="purple" size="md" className="text-purple text-center">
                  {value.title}
                </DecoratedTitle>
                <p className="text-muted-foreground text-center text-lg">{value.description}</p>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <Button
        variant="outline"
        size="icon"
        className={cn(
          "absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 z-10",
          isPrevDisabled && "opacity-50 cursor-not-allowed",
        )}
        onClick={prevSlide}
        disabled={isPrevDisabled}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className={cn(
          "absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 z-10",
          isNextDisabled && "opacity-50 cursor-not-allowed",
        )}
        onClick={nextSlide}
        disabled={isNextDisabled}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next</span>
      </Button>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: Math.ceil(values.length / itemsToShow) }).map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              Math.floor(currentIndex / itemsToShow) === index ? "bg-primary w-4" : "bg-muted",
            )}
            onClick={() => goToSlide(index * itemsToShow)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
