"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import CoffeeCard from "@/components/coffee-card"
import { coffees, categories, roastLevels } from "@/lib/data"
import { Search, Filter } from "lucide-react"

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedRoast, setSelectedRoast] = useState("all")
  const [sortBy, setSortBy] = useState("name")
  const [showOrganic, setShowOrganic] = useState(false)
  const [showFairTrade, setShowFairTrade] = useState(false)

  const filteredCoffees = coffees
    .filter(
      (coffee) =>
        coffee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coffee.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coffee.origin?.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .filter((coffee) => selectedCategory === "all" || coffee.category === selectedCategory)
    .filter((coffee) => selectedRoast === "all" || coffee.roastLevel === selectedRoast)
    .filter((coffee) => !showOrganic || coffee.isOrganic)
    .filter((coffee) => !showFairTrade || coffee.isFairTrade)
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        default:
          return a.name.localeCompare(b.name)
      }
    })

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-900 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6 text-white">Our Coffee Collection</h1>

        {/* Filters */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-orange-600" />
            <h2 className="text-lg font-semibold text-white">Filters</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-orange-600" />
              <Input
                placeholder="Search coffee..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-gray-700 focus:border-orange-400 bg-gray-700 text-white"
              />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="border-gray-700 focus:border-orange-400 bg-gray-700 text-white">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedRoast} onValueChange={setSelectedRoast}>
              <SelectTrigger className="border-gray-700 focus:border-orange-400 bg-gray-700 text-white">
                <SelectValue placeholder="Roast Level" />
              </SelectTrigger>
              <SelectContent>
                {roastLevels.map((roast) => (
                  <SelectItem key={roast.value} value={roast.value}>
                    {roast.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="border-gray-700 focus:border-orange-400 bg-gray-700 text-white">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              variant={showOrganic ? "default" : "outline"}
              onClick={() => setShowOrganic(!showOrganic)}
              className={
                showOrganic
                  ? "bg-orange-600 hover:bg-orange-700"
                  : "border-orange-600 text-orange-600 hover:bg-orange-50"
              }
            >
              Organic Only
            </Button>
            <Button
              variant={showFairTrade ? "default" : "outline"}
              onClick={() => setShowFairTrade(!showFairTrade)}
              className={
                showFairTrade
                  ? "bg-orange-600 hover:bg-orange-700"
                  : "border-orange-600 text-orange-600 hover:bg-orange-50"
              }
            >
              Fair Trade Only
            </Button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {filteredCoffees.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCoffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-800 rounded-lg border border-gray-700">
          <p className="text-gray-400 text-lg mb-4">No coffee found matching your criteria.</p>
          <Button
            onClick={() => {
              setSearchTerm("")
              setSelectedCategory("all")
              setSelectedRoast("all")
              setShowOrganic(false)
              setShowFairTrade(false)
            }}
            className="bg-orange-600 hover:bg-orange-700"
          >
            Clear All Filters
          </Button>
        </div>
      )}
    </div>
  )
}
