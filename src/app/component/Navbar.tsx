"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, ChevronDown, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'

const navItems = [
  { name: 'OVERVIEW', items: ['About Us', 'Vision And Mission', 'Licence & Certificates', 'Our Associates'] },
  { name: 'SERVICES', items: ['HRD & Recruitment', 'Banking & Finance', 'Hospitality Industries', 'Gems & Jewellery Industries', 'Construction Industry'] },
  { name: 'OPENING', href: '/opening' },
  { name: 'EMPLOYER', items: ['Demand Letter & Power Of Attorney Sample', 'Visa Procedure & Documentation', 'Flow Chart', 'Post Your Requirements'] },
  { name: 'RESUME', href: '/resume' },
  { name: 'CLIENTS', href: '/clients' },
  { name: 'CONTACT', items: ['Contact Us', 'Grievance Redressal Form'] },
  { name: 'APPLICATION FORM', href: '/application-form' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <nav className="w-full">
      <div className="h-[100px] border-b bg-white">
        <div className="container mx-auto flex h-full items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Image 
              src="/placeholder.svg?height=80&width=80" 
              alt="Nice Overseas Service Logo" 
              width={80} 
              height={80}
              className="object-contain" 
            />
            <div>
              <h1 className="text-[22px] font-bold text-[#0066CC]">NICE OVERSEAS SERVICE</h1>
              <p className="text-[13px] text-gray-600">Human Resources Consultants</p>
              <p className="text-[13px] text-gray-600">REGD. No. B-0771/MUM/PER/1000-/S/7489/2006</p>
            </div>
          </div>
          
          <div className="hidden items-center gap-6 md:flex">
            <div className="flex items-center gap-2">
              <div className="text-right">
                <p className="text-[13px] font-medium text-gray-600">CALL US NOW :</p>
                <a href="tel:+919820337086" className="text-[15px] font-bold text-gray-800 hover:text-[#0066CC]">
                  +91-9820337086
                </a>
              </div>
            </div>
            <Link 
              href="#"
              className="text-[13px] font-medium text-[#FF6600] hover:text-[#FF8533]"
            >
              Download Brochure
            </Link>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <MobileMenu setIsOpen={setIsOpen} />
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="h-[40px] bg-[#333333]">
        <div className="container mx-auto h-full px-4">
          <ul className="hidden h-full items-center justify-between md:flex">
            {navItems.map((item) => (
              <li 
                key={item.name} 
                className="h-full"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.items ? (
                  <DropdownMenu open={hoveredItem === item.name}>
                    <DropdownMenuTrigger className={`h-full px-4 text-[13px] font-medium transition-colors ${
                      hoveredItem === item.name ? 'text-[#FF6600]' : 'text-white'
                    }`}>
                      {item.name}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {item.items.map((subItem) => (
                        <DropdownMenuItem key={subItem} asChild>
                          <Link 
                            href={`/${subItem.toLowerCase().replace(/ /g, '-')}`}
                            className="text-[13px]"
                          >
                            {subItem}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link 
                    href={item.href || '/'} 
                    className={`h-full flex items-center px-4 text-[13px] font-medium transition-colors ${
                      hoveredItem === item.name ? 'text-[#FF6600]' : 'text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

function MobileMenu({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) {
  return (
    <div className="py-4">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-bold">Menu</h2>
        <SheetClose asChild>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </Button>
        </SheetClose>
      </div>
      
      <div className="mb-6">
        <p className="text-sm font-medium text-gray-600">CALL US NOW</p>
        <a href="tel:+919820337086" className="text-lg font-bold text-gray-800 hover:text-[#0066CC]">
          +91-9820337086
        </a>
      </div>
      
      <Link 
        href="#"
        className="mb-6 block text-sm font-medium text-[#FF6600] hover:text-[#FF8533]"
      >
        Download Brochure
      </Link>

      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item.name}>
            {item.items ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex w-full items-center justify-between text-sm font-medium">
                  <span className="flex items-center gap-2">
                    {item.name}
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {item.items.map((subItem) => (
                    <DropdownMenuItem key={subItem} asChild>
                      <Link 
                        href={`/${subItem.toLowerCase().replace(/ /g, '-')}`}
                        className="text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link 
                href={item.href || '/'} 
                className="text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

