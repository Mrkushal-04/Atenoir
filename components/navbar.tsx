"use client"

import { Button } from "@/components/ui/button"
import { Menu, ShoppingBag, User, Search, Shirt } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import type React from "react"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useCart } from "@/lib/hooks/useCart"

export default function Navbar() {
  const { getCartCount } = useCart()
  const cartCount = getCartCount()
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10 h-20"
    >
      <Link href="/" className="flex items-center">
        <Image
          src="/images/atenoir-logo.png"
          alt="Atenoir Logo"
          width={150} // Adjust width as needed for the navbar
          height={100} // Adjust height as needed for the navbar
          className="object-contain"
        />
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        <NavLink href="/Product">Product</NavLink>
        <NavLink href="/collections">Collections</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
        <NavLink href="/support">Support</NavLink>
        <NavLink href="/features">Features</NavLink>
        <NavLink href="/showroom">Showroom</NavLink>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-64 px-4 py-2 pl-10 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-yellow-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <Link href="/authentication/login">
          <Button variant="ghost" className="text-white rounded-full hover:text-lime-yellow-400 relative">
            <User className="w-5 h-5" />
          </Button>
        </Link>
        <Link href="/checkout">
          <Button variant="ghost" className="text-white rounded-full hover:text-lime-yellow-400 relative">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-lime-yellow-600 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Button>
        </Link>
      </div>

      <Button variant="ghost" size="icon" className="md:hidden text-white">
        <Menu className="w-6 h-6" />
      </Button>
    </motion.nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-300 hover:text-white transition-colors relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-yellow-500 transition-all group-hover:w-full" />
    </Link>
  )
}
