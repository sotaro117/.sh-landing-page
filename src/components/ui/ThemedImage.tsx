"use client"
import Image from "next/image"

const ThemedImage = ({
  alt,
  width,
  height,
  className,
}: {
  alt: string
  width: number
  height: number
  className?: string
}) => {
  const src = "/videos/presentation-video-sh.gif"

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
    />
  )
}

export default ThemedImage
