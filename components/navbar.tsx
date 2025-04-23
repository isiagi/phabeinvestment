"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Building2,
  ChevronDown,
  Menu,
  X,
  Home,
  Info,
  Phone,
  Truck,
  LineChart,
  Building,
  Leaf,
  Banknote,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Get the height of the top nav (approximately 40px)
      const topNavHeight = 40
      if (window.scrollY > topNavHeight) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const services = [
    { name: "Logistics Management", href: "/logistics", icon: <Truck className="h-4 w-4" /> },
    { name: "Consultancy Services", href: "/consultancy", icon: <LineChart className="h-4 w-4" /> },
    { name: "Real Estate Development", href: "/real-estate", icon: <Building className="h-4 w-4" /> },
    { name: "Agribusiness", href: "/agribusiness", icon: <Leaf className="h-4 w-4" /> },
    { name: "Financial Services", href: "/financial-services", icon: <Banknote className="h-4 w-4" /> },
  ]

  const navItems = [
    { name: "Home", href: "/", icon: <Home className="h-4 w-4" /> },
    { name: "About", href: "/about", icon: <Info className="h-4 w-4" /> },
    { name: "Contact", href: "/contact", icon: <Phone className="h-4 w-4" /> },
  ]

  return (
    <header
      className={cn(
        "w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50",
        scrolled ? "fixed top-0 animate-in fade-in slide-in-from-top-4 duration-300" : "relative",
      )}
    >
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Building2 className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block">Phabe Investment Ltd</span>
        </Link>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                <Building2 className="h-6 w-6" />
                <span className="font-bold">Phabe Investment Ltd</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="mt-8 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary flex items-center gap-2",
                    pathname === item.href && "text-primary font-semibold",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}

              <div className="py-2">
                <h3 className="mb-2 text-lg font-semibold">Services</h3>
                <div className="flex flex-col gap-3 pl-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={cn(
                        "text-base transition-colors hover:text-primary flex items-center gap-2",
                        pathname === service.href && "text-primary font-medium",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {service.icon}
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center space-x-4 md:space-x-6 lg:flex">
          {navItems.map((item) =>
            item.name !== "Services" ? (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary group flex items-center gap-1",
                  pathname === item.href && "text-primary font-semibold",
                )}
              >
                <span>{item.name}</span>
                <span
                  className={cn(
                    "transition-opacity",
                    pathname === item.href ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                  )}
                >
                  {item.icon}
                </span>
              </Link>
            ) : null,
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1 px-4 py-2 group">
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[220px]">
              {services.map((service) => (
                <DropdownMenuItem key={service.href} asChild>
                  <Link
                    href={service.href}
                    className={cn(
                      "w-full cursor-pointer flex items-center gap-2",
                      pathname === service.href && "font-medium",
                    )}
                  >
                    {service.icon}
                    {service.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  )
}
