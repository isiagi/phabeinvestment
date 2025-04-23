import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { DecoratedTitle } from "@/components/decorated-title"

interface PageHeaderProps {
  title: string
  description?: string
  backgroundImage?: string
  icon?: React.ReactNode
  showBackLink?: boolean
}

export function PageHeader({ title, description, backgroundImage, icon, showBackLink = true }: PageHeaderProps) {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {backgroundImage ? (
          <Image
            src={backgroundImage || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover opacity-60"
            priority
          />
        ) : (
          <div className="w-full h-full bg-purple"></div>
        )}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
          {showBackLink && (
            <Link
              href="/"
              className="inline-flex items-center rounded-md border border-green/20 bg-green/10 px-3 py-1 text-sm text-green-foreground shadow-sm transition-colors hover:bg-green/20 self-start mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          )}
          <div className="space-y-4">
            {icon && (
              <div className="inline-flex items-center rounded-md border border-green/20 bg-green/10 px-3 py-1 text-sm text-green-foreground shadow-sm">
                {icon}
              </div>
            )}
            <DecoratedTitle
              as="h1"
              size="xl"
              variant="light"
              className="text-4xl font-bold tracking-tighter sm:text-5xl text-white"
            >
              {title}
            </DecoratedTitle>
            {description && <p className="max-w-[800px] text-white/80 md:text-xl mx-auto">{description}</p>}
          </div>
        </div>
      </div>
    </section>
  )
}
