"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ChevronLeft, ArrowDownRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  image: string
}

interface ServiceSliderProps {
  services: Service[]
}

export function ServiceSlider({ services }: ServiceSliderProps) {
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
        setItemsToShow(3)
      } else {
        setItemsToShow(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    if (currentIndex < services.length - itemsToShow) {
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

    if (isLeftSwipe && currentIndex < services.length - itemsToShow) {
      nextSlide()
    } else if (isRightSwipe && currentIndex > 0) {
      prevSlide()
    }
  }

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < services.length - itemsToShow) {
        nextSlide()
      } else {
        setCurrentIndex(0) // Reset to beginning when reaching the end
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, services.length, itemsToShow])

  const isNextDisabled = currentIndex >= services.length - itemsToShow
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
          {services.map((service, index) => (
            <div key={service.title} className="flex-shrink-0 w-full sm:w-1/3 lg:w-1/4 p-4">
              <AnimatedSection
                className="group h-full relative overflow-hidden rounded-3xl bg-[#e6f5f3] shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105"
                delay={100 * (index % itemsToShow)}
                type="fade"
              >
                {/* Diagonal pattern */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -right-16 -top-16 h-64 w-64 rotate-45 bg-white/20"></div>
                </div>

                <div className="relative p-8 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">{service.title}</h3>

                  <div className="flex-grow flex items-center justify-center my-6">
                    <div className="rounded-full overflow-hidden w-40 h-40 border-4 border-white shadow-md">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        width={160}
                        height={160}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  <Link href={service.href} className="self-end group">
                    <div className="rounded-full bg-white/80 p-3 shadow-sm hover:bg-white transition-colors">
                      <ArrowDownRight className="h-5 w-5 text-gray-700 group-hover:rotate-90 transition-transform duration-300" />
                    </div>
                  </Link>
                </div>
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
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: Math.ceil(services.length / itemsToShow) }).map((_, index) => (
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
