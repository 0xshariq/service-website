import Link from "next/link"
import { Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t bg-gray-100">
      <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-4 py-12 md:flex-row md:py-16">
        <div className="text-center text-sm text-gray-600 md:text-left">
          <p className="mb-2">
            © {currentYear} Nice Overseas Service. All rights reserved.
          </p>
          <p>
            <span className="whitespace-nowrap">
              Powered by{" "}
              <Link 
                href="/"
                className="text-gray-700 hover:text-gray-900 hover:underline transition-colors"
              >
                Web Solutions
              </Link>
            </span>
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#1877F2] p-3 text-white transition-transform hover:scale-110"
            aria-label="Visit our Facebook page"
          >
            <Facebook className="h-6 w-6" />
          </Link>
          
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-3 text-white transition-transform hover:scale-110"
            aria-label="Visit our Instagram profile"
          >
            <Instagram className="h-6 w-6" />
          </Link>
          
          <Link
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[##1DA1F2] p-3 text-white transition-transform hover:scale-110"
            aria-label="Visit our Twitter profile"
          >
            <Twitter className="h-6 w-6" />
          </Link>
        </div>

        <div className="text-center text-sm text-gray-500 md:text-right">
          <Link href="/privacy-policy" className="hover:text-gray-700 transition-colors">Privacy Policy</Link>
          {" | "}
          <Link href="/terms-of-service" className="hover:text-gray-700 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}

