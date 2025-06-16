"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingCart, Leaf, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Coffee } from "@/lib/types"
import { useCart } from "@/contexts/cart-context"

interface CoffeeCardProps {
  coffee: Coffee
}

export default function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { addToCart } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart(coffee)
  }

  const getRoastColor = (roast?: string) => {
    switch (roast) {
      case "light":
        return "bg-amber-200 text-amber-800"
      case "medium":
        return "bg-amber-500 text-white"
      case "dark":
        return "bg-amber-800 text-white"
      default:
        return "bg-gray-200 text-gray-800"
    }
  }

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300 bg-gray-800 border-gray-700 hover:bg-gray-750">
      <Link href={`/products/${coffee.id}`}>
        <CardContent className="p-4">
          <div className="aspect-square relative mb-4 overflow-hidden rounded-md">
            <Image
              src={coffee.image || "/placeholder.svg"}
              alt={coffee.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {coffee.stock < 10 && (
              <Badge className="absolute top-2 right-2" variant="destructive">
                Low Stock
              </Badge>
            )}
            <div className="absolute top-2 left-2 flex flex-col gap-1">
              {coffee.isOrganic && (
                <Badge className="bg-green-600 text-white">
                  <Leaf className="h-3 w-3 mr-1" />
                  Organic
                </Badge>
              )}
              {coffee.isFairTrade && (
                <Badge className="bg-blue-600 text-white">
                  <Award className="h-3 w-3 mr-1" />
                  Fair Trade
                </Badge>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs">
                {coffee.category}
              </Badge>
              {coffee.roastLevel && (
                <Badge className={`text-xs ${getRoastColor(coffee.roastLevel)}`}>{coffee.roastLevel} roast</Badge>
              )}
            </div>

            <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-orange-400 transition-colors">
              {coffee.name}
            </h3>

            {coffee.origin && <p className="text-sm text-orange-400 font-medium">Origin: {coffee.origin}</p>}

            <p className="text-sm text-gray-400 line-clamp-2">{coffee.description}</p>

            <div className="flex items-center space-x-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(coffee.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({coffee.reviews})</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-white">${coffee.price}</span>
            </div>
          </div>
        </CardContent>
      </Link>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full bg-orange-600 hover:bg-orange-700"
          disabled={coffee.stock === 0}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {coffee.stock === 0 ? "Out of Stock" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  )
}
