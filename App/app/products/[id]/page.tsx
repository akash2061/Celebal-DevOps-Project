"use client"

import { useState } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Star, ShoppingCart, Heart, Share2, Leaf, Award, Coffee, Minus, Plus } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { coffees } from "@/lib/data"
import React from "react"

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export default function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = React.use(params)
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const coffee = coffees.find((p) => p.id === resolvedParams.id)

  if (!coffee) {
    notFound()
  }

  const handleAddToCart = () => {
    addToCart(coffee, quantity)
  }

  const incrementQuantity = () => {
    if (quantity < coffee.stock) {
      setQuantity(quantity + 1)
    }
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
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
    <div className="container mx-auto px-4 py-8 bg-gray-900 min-h-screen">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="aspect-square relative overflow-hidden rounded-lg border border-gray-700">
          <Image src={coffee.image || "/placeholder.svg"} alt={coffee.name} fill className="object-cover" />
          <div className="absolute top-4 left-4 flex flex-col gap-2">
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

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary">{coffee.category}</Badge>
              {coffee.roastLevel && (
                <Badge className={getRoastColor(coffee.roastLevel)}>{coffee.roastLevel} roast</Badge>
              )}
            </div>
            <h1 className="text-3xl font-bold text-white">{coffee.name}</h1>
            {coffee.origin && <p className="text-lg text-orange-400 font-medium mt-2">Origin: {coffee.origin}</p>}
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(coffee.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-300">
              {coffee.rating} ({coffee.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="text-3xl font-bold text-white">${coffee.price}</div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed">{coffee.description}</p>

          {/* Brewing Methods */}
          {coffee.brewingMethod && coffee.brewingMethod.length > 0 && (
            <div>
              <h3 className="font-semibold text-white mb-2">Recommended Brewing Methods:</h3>
              <div className="flex flex-wrap gap-2">
                {coffee.brewingMethod.map((method) => (
                  <Badge key={method} variant="outline" className="border-amber-300 text-amber-700">
                    <Coffee className="h-3 w-3 mr-1" />
                    {method}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <Separator />

          {/* Stock Status */}
          <div className="flex items-center space-x-2">
            <span className="font-medium text-white">Stock:</span>
            <Badge variant={coffee.stock > 10 ? "default" : coffee.stock > 0 ? "secondary" : "destructive"}>
              {coffee.stock > 10 ? "In Stock" : coffee.stock > 0 ? `Only ${coffee.stock} left` : "Out of Stock"}
            </Badge>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4">
            <span className="font-medium text-white">Quantity:</span>
            <div className="flex items-center border border-gray-600 rounded-md">
              <Button variant="ghost" size="icon" onClick={decrementQuantity} disabled={quantity <= 1}>
                <Minus className="h-4 w-4" />
              </Button>
              <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
              <Button variant="ghost" size="icon" onClick={incrementQuantity} disabled={quantity >= coffee.stock}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={handleAddToCart}
              disabled={coffee.stock === 0}
              className="flex-1 bg-orange-600 hover:bg-orange-700"
              size="lg"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {coffee.stock === 0 ? "Out of Stock" : "Add to Cart"}
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white"
            >
              <Heart className="h-4 w-4 mr-2" />
              Wishlist
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Tasting Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">
              This coffee offers a complex flavor profile with notes that vary depending on the brewing method. Perfect
              for both casual coffee drinkers and connoisseurs alike.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Storage Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">
              Store in a cool, dry place away from direct sunlight. For best freshness, use within 2-4 weeks of roast
              date. Keep beans in an airtight container.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
