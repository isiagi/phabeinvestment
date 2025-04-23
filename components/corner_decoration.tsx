import { cn } from "@/lib/utils"

interface CornerDecorationProps {
  className?: string
  variant?: "light" | "green" | "purple"
}

export function CornerDecoration({ className, variant = "light" }: CornerDecorationProps) {
  const variantClasses = {
    light: "bg-white/10",
    green: "bg-green/10",
    purple: "bg-purple-500/10",
  }

  return (
    <div className={cn("absolute top-0 right-0 w-32 h-32 overflow-hidden", className)}>
      <div
        className={cn(
          "absolute -top-16 -right-16 w-32 h-32 rotate-45 transform origin-bottom-left",
          variantClasses[variant],
        )}
      />
    </div>
  )
}
