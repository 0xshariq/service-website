import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t bg-gray-100">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:py-4">
        <div className="text-center text-sm text-gray-600 md:text-left">
          <p>
            © {currentYear} Copyright © 2022 Nice Overseas Service. All rights reserved | {" "}
            <span className="whitespace-nowrap">
              Powered by{" "}
              <Link 
                href="/"
                className="text-gray-700 hover:text-gray-900 hover:underline"
              >
                Web Solutions
              </Link>
            </span>
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gray-200 p-2 text-gray-600 transition-colors hover:bg-gray-300 hover:text-gray-900"
            aria-label="Visit our Facebook page"
          >
            <Facebook className="h-5 w-5" />
          </Link>
          
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gray-200 p-2 text-gray-600 transition-colors hover:bg-gray-300 hover:text-gray-900"
            aria-label="Visit our Instagram profile"
          >
            <Instagram className="h-5 w-5" />
          </Link>
          
          <Link
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gray-200 p-2 text-gray-600 transition-colors hover:bg-gray-300 hover:text-gray-900"
            aria-label="Visit our Twitter profile"
          >
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

