import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface DecoratedTitleProps {
  children: ReactNode
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  variant?: "default" | "green" | "purple" | "light" | "yellowgreen"
  size?: "sm" | "md" | "lg" | "xl"
}

export function DecoratedTitle({
  children,
  className,
  as: Component = "h2",
  variant = "default",
  size = "md",
}: DecoratedTitleProps) {
  // Add yellowgreen to the variants
  const variantStyles = {
    default: { color: "#6D4FA7" }, // Changed to purple
    green: { color: "#66C496" },
    purple: { color: "#6D4FA7" },
    light: { color: "#ffffff" },
    yellowgreen: { color: "#9ccc65" },
  }

  const sizeClasses = {
    sm: "text-xl md:text-2xl",
    md: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-4xl",
    xl: "text-4xl md:text-5xl",
  }

  const triangleSize = {
    sm: { width: 20, height: 20 },
    md: { width: 25, height: 25 },
    lg: { width: 30, height: 30 },
    xl: { width: 40, height: 40 },
  }

  // Ensure we have valid values with fallbacks
  const validVariant = variantStyles[variant] ? variant : "default"
  const validSize = triangleSize[size] ? size : "md"

  const { width, height } = triangleSize[validSize]
  const style = variantStyles[validVariant]

  return (
    <div className="relative inline-block">
      <Component className={cn("relative font-bold tracking-tight", sizeClasses[validSize], className)}>
        {children}
      </Component>
      <div className="absolute -top-2 -right-2 pointer-events-none">
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={`M0 0L${width} 0L${width} ${height}Z`} fill={style.color} fillOpacity="0.15" />
        </svg>
      </div>
    </div>
  )
}
