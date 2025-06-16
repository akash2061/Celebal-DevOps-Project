import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Coffee, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import CoffeeCard from "@/components/coffee-card"
import { coffees } from "@/lib/data"

export default function HomePage() {
  const featuredCoffees = coffees.slice(0, 4)

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/carousel-1.jpg" alt="Coffee and beans" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <div className="flex items-center mb-6">
              <Coffee className="h-16 w-16 text-orange-500 mr-4" />
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-orange-500">Brew</span>Master
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Experience the perfect cup. From single-origin treasures to expertly crafted blends, discover coffee that
              awakens your senses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg"
                >
                  Explore Coffee
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-2 border-gray-700 bg-gray-700 text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
                >
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">Crafted with Passion</h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Every cup tells a story. From the highlands of Ethiopia to the mountains of Colombia, we source the
                finest beans and roast them to perfection.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Our master roasters bring decades of experience, ensuring each batch captures the unique character and
                flavor profile that makes great coffee extraordinary.
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3">Learn More About Us</Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/images/about.png" alt="Coffee splash" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Why Choose BrewMaster?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="relative h-20 w-20 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image src="/images/service-2.jpg" alt="Premium beans" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Premium Beans</h3>
                <p className="text-gray-400">
                  Hand-selected beans from the world's finest coffee regions, ensuring exceptional quality in every cup.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="relative h-20 w-20 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image src="/images/menu-2.jpg" alt="Expert craftsmanship" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Expert Craftsmanship</h3>
                <p className="text-gray-400">
                  Our master roasters and baristas bring years of expertise to create the perfect coffee experience.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="relative h-20 w-20 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image src="/images/service-3.jpg" alt="Fresh roasted" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Fresh Roasted</h3>
                <p className="text-gray-400">
                  Roasted to order and shipped within 24 hours to ensure maximum freshness and flavor.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="relative h-20 w-20 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image src="/images/service-4.jpg" alt="Complete experience" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Complete Experience</h3>
                <p className="text-gray-400">
                  From beans to brewing equipment, everything you need for the perfect coffee experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-4xl font-bold text-white">Featured Coffee</h2>
            <Link href="/products">
              <Button
                variant="outline"
                className="border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white"
              >
                View All Coffee
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCoffees.map((coffee) => (
              <CoffeeCard key={coffee.id} coffee={coffee} />
            ))}
          </div>
        </div>
      </section>

      {/* Coffee Education */}
      <section
        className="py-20 relative"
        style={{
          backgroundImage: `url('/images/bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Master Your Brew</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover the art and science behind exceptional coffee. From bean selection to brewing techniques, elevate
            your coffee experience with expert knowledge.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/90 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="relative h-24 w-24 mx-auto mb-6 rounded-lg overflow-hidden">
                  <Image src="/images/menu-3.jpg" alt="Brewing methods" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Brewing Methods</h3>
                <p className="text-gray-400 mb-6">
                  Master different brewing techniques from pour-over to espresso, each bringing out unique flavors.
                </p>
                <Button
                  variant="outline"
                  className="border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/90 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="relative h-24 w-24 mx-auto mb-6 rounded-lg overflow-hidden">
                  <Image src="/images/carousel-2.jpg" alt="Coffee origins" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Coffee Origins</h3>
                <p className="text-gray-400 mb-6">
                  Explore the unique characteristics and flavors from different coffee-growing regions worldwide.
                </p>
                <Button
                  variant="outline"
                  className="border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white"
                >
                  Explore Origins
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/90 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <Leaf className="h-24 w-24 text-green-500 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-white">Sustainability</h3>
                <p className="text-gray-400 mb-6">
                  Learn about our commitment to ethical sourcing and environmental responsibility.
                </p>
                <Button
                  variant="outline"
                  className="border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white"
                >
                  Our Mission
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
