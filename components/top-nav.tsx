"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export function TopNav() {
  return (
    <div className="w-full bg-purple text-purple-foreground py-2">
      <div className="container flex flex-col sm:flex-row justify-between items-center">
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
          <div className="flex items-center text-sm">
            <Phone className="h-4 w-4 mr-2" />
            <span>+256 700 123 456</span>
          </div>
          <div className="flex items-center text-sm">
            <Mail className="h-4 w-4 mr-2" />
            <span>info@phabeinvestment.com</span>
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2" />
            <span>Seeta, Mukono, Uganda</span>
          </div>
        </div>
        <div className="flex gap-3 mt-2 sm:mt-0">
          <Link href="#" className="text-purple-foreground hover:text-white transition-colors">
            <Facebook className="h-4 w-4" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="text-purple-foreground hover:text-white transition-colors">
            <Instagram className="h-4 w-4" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="text-purple-foreground hover:text-white transition-colors">
            <Twitter className="h-4 w-4" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="text-purple-foreground hover:text-white transition-colors">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
