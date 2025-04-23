import { cn } from "@/lib/utils"

interface FancyCornerProps {
  className?: string
  color?: string
}

export function FancyCorner({ className, color = "#ffffff" }: FancyCornerProps) {
  return (
    <div className={cn("absolute top-0 right-0 w-40 h-40 overflow-hidden pointer-events-none", className)}>
      <svg
        width="160"
        height="160"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-10 -right-10"
      >
        <path d="M0 0L160 0L160 160Z" fill={color} fillOpacity="0.1" />
        <path d="M40 0L160 0L160 120Z" fill={color} fillOpacity="0.05" />
        <path d="M80 0L160 0L160 80Z" fill={color} fillOpacity="0.025" />
      </svg>
    </div>
  )
}
