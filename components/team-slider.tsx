"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronRight, ChevronLeft, Mail, Linkedin, Twitter } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { DecoratedTitle } from "@/components/decorated-title"

interface TeamMember {
  name: string
  position: string
  bio: string
  image: string
  email?: string
  linkedin?: string
  twitter?: string
}

interface TeamSliderProps {
  members: TeamMember[]
}

export function TeamSlider({ members }: TeamSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  // The minimum swipe distance (in px) to trigger a slide change
  const minSwipeDistance = 50

  const nextSlide = () => {
    if (currentIndex < members.length - itemsToShow) {
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

    if (isLeftSwipe && currentIndex < members.length - itemsToShow) {
      nextSlide()
    } else if (isRightSwipe && currentIndex > 0) {
      prevSlide()
    }
  }

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

  const isNextDisabled = currentIndex >= members.length - itemsToShow
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
          {members.map((member, index) => (
            <div key={member.name} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4">
              <AnimatedSection
                className="h-full rounded-xl border bg-background p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden group"
                delay={100 * (index % itemsToShow)}
                type="fade"
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-purple/10">
                    <Image
                      src={member.image || "/placeholder.svg?height=160&width=160"}
                      width={160}
                      height={160}
                      alt={member.name}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="text-center">
                    <DecoratedTitle as="h3" variant="purple" size="sm">
                      {member.name}
                    </DecoratedTitle>
                    <p className="text-green font-medium">{member.position}</p>
                    <p className="mt-2 text-muted-foreground">{member.bio}</p>
                  </div>
                  <div className="mt-4 flex gap-2 justify-center">
                    {member.email && (
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full h-8 w-8 bg-green-light/10 hover:bg-green-light/20 border-green-light/20 hover:scale-110 transition-transform"
                      >
                        <Mail className="h-4 w-4 text-green" />
                        <span className="sr-only">Email {member.name}</span>
                      </Button>
                    )}
                    {member.linkedin && (
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full h-8 w-8 bg-blue-light/10 hover:bg-blue-light/20 border-blue-light/20 hover:scale-110 transition-transform"
                      >
                        <Linkedin className="h-4 w-4 text-blue" />
                        <span className="sr-only">LinkedIn profile for {member.name}</span>
                      </Button>
                    )}
                    {member.twitter && (
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full h-8 w-8 bg-accent/10 hover:bg-accent/20 border-accent/20 hover:scale-110 transition-transform"
                      >
                        <Twitter className="h-4 w-4 text-accent" />
                        <span className="sr-only">Twitter profile for {member.name}</span>
                      </Button>
                    )}
                  </div>
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
        {Array.from({ length: Math.ceil(members.length / itemsToShow) }).map((_, index) => (
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
