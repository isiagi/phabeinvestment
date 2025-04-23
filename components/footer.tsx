import Link from "next/link"
import { Building2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-[#252B35] text-white py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Building2 className="h-5 w-5" />
          <p className="text-sm font-medium">© 2025 Phabe Investment Ltd. All rights reserved.</p>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            href="/privacy-policy"
            className="text-sm font-medium hover:underline underline-offset-4 text-white/90 hover:text-white"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="text-sm font-medium hover:underline underline-offset-4 text-white/90 hover:text-white"
          >
            Terms of Service
          </Link>
          <Link
            href="/cookie-policy"
            className="text-sm font-medium hover:underline underline-offset-4 text-white/90 hover:text-white"
          >
            Cookie Policy
          </Link>
        </nav>
      </div>
    </footer>
  )
}
