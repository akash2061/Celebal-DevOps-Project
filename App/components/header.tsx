"use client"

import Link from "next/link"
import { ShoppingCart, Search, Menu, User, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"

export default function Header() {
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/75">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="h-8 w-8 bg-orange-600 rounded-full flex items-center justify-center">
              <Coffee className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-100">BrewMaster</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-orange-400 transition-colors text-gray-100">
              Home
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium hover:text-orange-400 transition-colors text-gray-100"
            >
              Shop Coffee
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-orange-400 transition-colors text-gray-100">
              About Us
            </Link>
            <Link
              href="/brewing-guide"
              className="text-sm font-medium hover:text-orange-400 transition-colors text-gray-100"
            >
              Brewing Guide
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-2 flex-1 max-w-sm mx-6">
            <div className="relative w-full">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search coffee..."
                className="pl-8 border-gray-700 focus:border-orange-400 bg-gray-800 text-gray-100 placeholder:text-gray-400 focus:ring-1 focus:ring-orange-400"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* User Button - Hidden on mobile */}
            <Button variant="ghost" size="icon" className="hidden md:flex text-gray-100 hover:text-orange-400 hover:bg-gray-800">
              <User className="h-5 w-5" />
              <span className="sr-only">User account</span>
            </Button>

            {/* Cart Button */}
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative text-gray-100 hover:text-orange-400 hover:bg-gray-800">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Shopping cart</span>
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-orange-600 text-white border-0">
                    {totalItems > 99 ? '99+' : totalItems}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-gray-100 hover:bg-gray-800">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-900 border-gray-800 text-gray-100">
                <SheetHeader>
                  <SheetTitle className="text-gray-100 text-left">Menu</SheetTitle>
                  <SheetDescription className="text-gray-400 text-left">
                    Navigate through our coffee store
                  </SheetDescription>
                </SheetHeader>

                <div className="mt-6 mb-6">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search coffee..."
                      className="pl-8 border-gray-700 focus:border-orange-400 bg-gray-800 text-gray-100 placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <nav className="flex flex-col space-y-4">
                  <Link
                    href="/"
                    className="text-sm font-medium hover:text-orange-400 transition-colors text-gray-100 py-2"
                  >
                    Home
                  </Link>
                  <Link
                    href="/products"
                    className="text-sm font-medium hover:text-orange-400 transition-colors text-gray-100 py-2"
                  >
                    Shop Coffee
                  </Link>
                  <Link
                    href="/about"
                    className="text-sm font-medium hover:text-orange-400 transition-colors text-gray-100 py-2"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/brewing-guide"
                    className="text-sm font-medium hover:text-orange-400 transition-colors text-gray-100 py-2"
                  >
                    Brewing Guide
                  </Link>

                  <div className="pt-4 border-t border-gray-700">
                    <Link
                      href="/account"
                      className="flex items-center space-x-2 text-sm font-medium hover:text-orange-400 transition-colors text-gray-100 py-2"
                    >
                      <User className="h-4 w-4" />
                      <span>My Account</span>
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
