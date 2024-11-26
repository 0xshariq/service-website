"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const slides = [
  {
    url: "https://www.niceoverseasservice.com/wp-content/uploads/2022/10/saudi-arabia-2048x1084.jpg",
    alt: "Saudi Arabia Cityscape",
  },
  {
    url: "https://www.niceoverseasservice.com/wp-content/uploads/2022/10/qatar.jpg",
    alt: "Qatar Cityscape",
  },
  {
    url: "https://www.niceoverseasservice.com/wp-content/uploads/2022/10/dubai.jpg",
    alt: "Dubai Cityscape",
  },
  {
    url: "https://www.niceoverseasservice.com/wp-content/uploads/2022/10/Riyadh_Skyline.jpg",
    alt: "Riyadh Skyline",
  },
]

export function ImageSlider() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isHovering, setIsHovering] = React.useState(false)
  const [isTransitioning, setIsTransitioning] = React.useState(false)
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  const goToNext = React.useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }
  }, [isTransitioning])

  const goToPrevious = React.useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
    }
  }, [isTransitioning])

  const goToSlide = (index: number) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true)
      setCurrentIndex(index)
    }
  }

  React.useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(goToNext, 5000)
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [currentIndex, goToNext])

  React.useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false)
      }, 500) // Match this with the CSS transition duration
      return () => clearTimeout(timer)
    }
  }, [isTransitioning])

  return (
    <div
      className="group relative h-[calc(100vh-12rem)] w-full overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.url}
            className={cn(
              "absolute h-full w-full transition-all duration-500 ease-in-out",
              index === currentIndex
                ? "opacity-100 translate-x-0"
                : index < currentIndex
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full"
            )}
          >
            <Image
              src={slide.url}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className={cn(
          "absolute left-0 top-0 flex h-full w-24 items-center justify-center opacity-0 transition-opacity",
          isHovering && "opacity-100"
        )}
        aria-label="Previous slide"
      >
        <div className="text-white/90">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 19L8 12L15 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      <button
        onClick={goToNext}
        className={cn(
          "absolute right-0 top-0 flex h-full w-24 items-center justify-center opacity-0 transition-opacity",
          isHovering && "opacity-100"
        )}
        aria-label="Next slide"
      >
        <div className="text-white/90">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5L16 12L9 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              index === currentIndex
                ? "bg-white"
                : "bg-white/50 hover:bg-white/75"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

