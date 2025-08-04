import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black/[0.96] border-t border-white/10 py-12 text-gray-400">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/atenoir-logo.png"
              alt="Atenoir Logo"
              width={200} // Adjust width as needed
              height={100} // Adjust height as needed
              className="h-auto"
            />
          </Link>
          <p className="text-sm text-center md:text-left">&copy; {currentYear} Atenoir. All rights reserved.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-4 text-center md:text-left">
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold text-white mb-2">Company</h3>
            <Link href="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/our-story" className="hover:text-white transition-colors">
              Our Story
            </Link>
            <Link href="/sustainability" className="hover:text-white transition-colors">
              Sustainability
            </Link>
            <Link href="/careers" className="hover:text-white transition-colors">
              Careers
            </Link>
            <Link href="/press-media" className="hover:text-white transition-colors">
              Press & Media
            </Link>
          </div>

          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold text-white mb-2">Help & Support</h3>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
            <Link href="/faqs" className="hover:text-white transition-colors">
              FAQs
            </Link>
            <Link href="/returns-exchanges" className="hover:text-white transition-colors">
              Returns & Exchanges
            </Link>
            <Link href="/shipping-information" className="hover:text-white transition-colors">
              Shipping Information
            </Link>
          </div>

          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold text-white mb-2">Resources</h3>
            <Link href="/lookbook" className="hover:text-white transition-colors">
              Lookbook
            </Link>
            <Link href="/style-guide" className="hover:text-white transition-colors">
              Style Guide
            </Link>
            <Link href="/size-guide" className="hover:text-white transition-colors">
              Size Guide
            </Link>
            <Link href="/affiliate-program" className="hover:text-white transition-colors">
              Affiliate Program
            </Link>
            <Link href="/blogs" className="hover:text-white transition-colors">
              Blogs & Editorial
            </Link>
          </div>

          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold text-white mb-2">Customization</h3>
            <Link href="/customization" className="hover:text-white transition-colors">
              Customize Your Style
            </Link>
            <Link href="/customization/style-quiz" className="hover:text-white transition-colors">
              Style Quiz
            </Link>
            <Link href="/customization/virtual-tryon" className="hover:text-white transition-colors">
              Virtual Try-On
            </Link>
            <Link href="/customization/ai-stylist" className="hover:text-white transition-colors">
              AI Stylist
            </Link>
          </div>

          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold text-white mb-2">Legal</h3>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
