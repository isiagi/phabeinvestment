import { cn } from "@/lib/utils"

interface HeaderPatternProps {
  className?: string
  variant?: "light" | "dark" | "green"
}

export function HeaderPattern({ className, variant = "light" }: HeaderPatternProps) {
  const baseClasses = "absolute pointer-events-none"

  // Different color variants
  const variantClasses = {
    light: "text-gray-100",
    dark: "text-gray-800/10",
    green: "text-green/10",
  }

  return (
    <div className={cn(baseClasses, variantClasses[variant], className)}>
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <g opacity="0.3">
          <path d="M0 200H400M200 0V400" stroke="currentColor" strokeWidth="1" />
          <path d="M0 0L400 400M400 0L0 400" stroke="currentColor" strokeWidth="1" />
          <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="200" cy="200" r="50" stroke="currentColor" strokeWidth="1" fill="none" />
        </g>
      </svg>
    </div>
  )
}
