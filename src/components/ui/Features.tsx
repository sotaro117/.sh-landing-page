"use client"

//To get started, run "npm i cobe"
import Image from "next/image"
import { useEffect, useState } from "react"
import FeatureItems from "./FeatureItems"

export default function Features() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    {
      src: "/images/chat-screen.png",
      alt: "chat screen",
    },
    {
      src: "/images/planner-screen.png",
      alt: "planner screen",
    },
    {
      src: "/images/preference-screen.png",
      alt: "preference screen",
    },
    {
      src: "/images/report-screen.png",
      alt: "report screen",
    },
    {
      src: "/images/home-screen.png",
      alt: "home screen",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <>
      <div className="mx-auto w-full max-w-6xl px-3 py-4 sm:py-20">
        <h2
          id="features-title"
          className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-3xl font-bold tracking-tighter text-transparent sm:text-5xl dark:from-gray-50 dark:to-gray-300"
        >
          Your shopping <span className="text-purple-500">buddy</span>
        </h2>
        <div className="relative z-10 mx-auto mb-10 mt-4 flex aspect-[2/3] w-[400px] items-center justify-center">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex h-full items-center justify-center transition-opacity duration-1000 ${
                index === currentImageIndex
                  ? "z-[1] opacity-100"
                  : "z-0 opacity-0"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill={true}
                priority={index === 0}
                className="object-contain"
                sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, 400px"
              />
            </div>
          ))}
        </div>
        <div className="mt-8">
          <div className="relative z-20">
            <h3 className="text-2xl font-semibold text-gray-950 dark:text-gray-50">
              Features
            </h3>
            <FeatureItems />
          </div>
        </div>
      </div>
    </>
  )
}
