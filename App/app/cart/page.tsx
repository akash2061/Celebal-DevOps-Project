"use client"

import Image from "next/image"
import Link from "next/link"
import { Trash2, Plus, Minus, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/contexts/cart-context"

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart()
  const totalPrice = getTotalPrice()

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center bg-gray-900 min-h-screen">
        <Coffee className="h-24 w-24 text-orange-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4 text-white">Your cart is empty</h1>
        <p className="text-gray-300 mb-8">Looks like you haven't added any coffee to your cart yet.</p>
        <Link href="/products">
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
            Continue Shopping
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-white">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <Card key={item.product.id} className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="relative h-20 w-20 overflow-hidden rounded-md">
                    <Image
                      src={item.product.image || "/placeholder.svg"}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <Link href={`/products/${item.product.id}`}>
                      <h3 className="font-semibold hover:text-orange-600 transition-colors text-white">
                        {item.product.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-orange-400">{item.product.category}</p>
                    {item.product.origin && <p className="text-sm text-orange-400">Origin: {item.product.origin}</p>}
                    <p className="font-bold text-white">${item.product.price}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className="border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center text-white">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      disabled={item.quantity >= item.product.stock}
                      className="border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-white">${(item.product.price * item.quantity).toFixed(2)}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="flex justify-between items-center pt-4">
            <Button
              variant="outline"
              onClick={clearCart}
              className="border-orange-500 text-orange-500 hover:bg-gray-700 hover:text-white"
            >
              Clear Cart
            </Button>
            <Link href="/products">
              <Button
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-gray-700 hover:text-white"
              >
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-white">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-white">
                <span>Shipping</span>
                <span>{totalPrice > 25 ? "Free" : "$4.99"}</span>
              </div>
              <div className="flex justify-between text-white">
                <span>Tax</span>
                <span>${(totalPrice * 0.08).toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg text-white">
                <span>Total</span>
                <span>${(totalPrice + (totalPrice > 25 ? 0 : 4.99) + totalPrice * 0.08).toFixed(2)}</span>
              </div>

              <Button className="w-full bg-orange-600 hover:bg-orange-700" size="lg">
                Proceed to Checkout
              </Button>

              <div className="text-center text-sm text-gray-400">
                {totalPrice < 25 && <p>Add ${(25 - totalPrice).toFixed(2)} more for free shipping!</p>}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
