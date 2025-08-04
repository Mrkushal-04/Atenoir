import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import { ProductSection } from "@/components/product-section" // Re-import ProductSection
import { TestimonialSection } from "@/components/testimonial-section"
import { AutoChangingBrandingPosts } from "@/components/auto-changing-branding-posts"
import { Footer } from "@/components/footer"
import type { Product, Testimonial, BrandingPostData } from "@/lib/types"

export default function Home() {
  // Dummy data for demonstration (moved back to home page)
  const newArrivals: Product[] = [
    {
      id: "classic-black-tee",
      name: "Classic Black Tee",
      price: 350.0,
      image: "/images/black-tshirt.jpeg",
      description: "Soft cotton tee for everyday comfort.",
    },
    {
      id: "branded-black-tee",
      name: "Branded Black Tee",
      price: 420.0,
      image: "/images/black-barco-tshirt.jpeg",
      description: "Premium black tee with subtle branding.",
    },
    {
      id: "champagne-short-sleeve",
      name: "Champagne Short Sleeve",
      price: 480.0,
      image: "/images/champagne-shirt.jpeg",
      description: "Elegant short-sleeve shirt in a luxurious champagne hue.",
    },
    {
      id: "vibrant-yellow-button-up",
      name: "Vibrant Yellow Button-Up",
      price: 450.0,
      image: "/images/yellow-button-up.jpeg",
      description: "Stylish yellow button-up for a fresh look.",
    },
  ]

  const bestSellers: Product[] = [
    {
      id: "crisp-white-tee",
      name: "Crisp White Tee",
      price: 380.0,
      image: "/images/white-tshirt.jpeg",
      description: "Essential white tee for versatile styling.",
    },
    {
      id: "white-logo-tee",
      name: "White Logo Tee",
      price: 410.0,
      image: "/images/white-tshirt-alt.jpeg",
      description: "Classic white tee with a minimalist logo.",
    },
    {
      id: "yellow-long-sleeve",
      name: "Yellow Long Sleeve",
      price: 490.0,
      image: "/images/yellow-long-sleeve.jpeg",
      description: "Comfortable long-sleeve shirt in a soft yellow.",
    },
    {
      id: "sunny-yellow-tee",
      name: "Sunny Yellow Tee",
      price: 320.0,
      image: "/images/yellow-tshirt.jpeg",
      description: "Bright yellow tee for a cheerful vibe.",
    },
  ]

  const testimonials: Testimonial[] = [
    {
      id: "t1",
      quote: "Atenoir's clothing is simply exceptional. The quality and style are unmatched!",
      author: "Sarah L.",
      rating: 5,
    },
    {
      id: "t2",
      quote: "I've never felt more confident in my outfits. Atenoir truly delivers on timeless elegance.",
      author: "Mark T.",
      rating: 5,
    },
    {
      id: "t3",
      quote: "Comfortable, stylish, and durable. Atenoir has become my go-to for everyday wear.",
      author: "Jessica R.",
      rating: 4,
    },
    {
      id: "t4",
      quote: "The attention to detail in every piece is incredible. Highly recommend!",
      author: "David K.",
      rating: 5,
    },
  ]

  const brandingPosts: BrandingPostData[] = [
    {
      id: "b1",
      title: "Crafted for the Modern Individual",
      description:
        "At Atenoir, we believe in the power of timeless design and exceptional quality. Our collections are meticulously crafted to offer comfort, durability, and a sophisticated aesthetic that transcends fleeting trends. Discover pieces that not only complement your style but also empower your everyday.",
      image: "/images/collection-rack-2.jpeg",
    },
    {
      id: "b2",
      title: "Sustainable Fashion, Ethical Choices",
      description:
        "We are committed to sustainability and ethical practices. Atenoir sources eco-friendly materials and ensures fair labor practices throughout our supply chain. Wear your values with confidence, knowing your style contributes to a better planet.",
      image: "/images/collection-grid.jpeg",
    },
    {
      id: "b3",
      title: "Beyond Trends: A Legacy of Style",
      description:
        "Atenoir is more than just clothing; it's a statement. We design pieces that stand the test of time, becoming staples in your wardrobe for years to come. Invest in quality, embrace versatility, and build a legacy of personal style.",
      image: "/images/collection-rack-1.jpeg",
    },
    {
      id: "b4",
      title: "Join the Atenoir Community",
      description:
        "Become part of a community that values elegance, quality, and conscious living. Follow us on social media, sign up for our newsletter, and share your Atenoir moments. Your journey to timeless style starts here.",
      image: "/images/collection-organized.jpeg",
    },
  ]

  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Ambient background with moving particles */}
      <div className="h-full w-full absolute inset-0 z-0"></div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AutoChangingBrandingPosts posts={brandingPosts} />
        {/* Product Sections are back on the home page */}
        <div className="container mx-auto px-6 py-16">
          <ProductSection title="New Arrivals" products={newArrivals} />
          <ProductSection title="Best Sellers" products={bestSellers} />
          <TestimonialSection testimonials={testimonials} />
        </div>
        <Footer />
      </div>
    </main>
  )
}
