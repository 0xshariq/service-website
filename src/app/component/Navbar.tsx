"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const navItems = [
  {
    name: "HOME",
    href: "/"
  },
  {
    name: "OVERVIEW",
    items: [
      { name: "About Us", href: "/overview/about-us" },
      { name: "Vision And Mission", href: "/overview/vision-and-mission" },
      { name: "Licence & Certificates", href: "/overview/licence-and-certificates" },
      { name: "Our Associates", href: "/overview/our-associates" },
    ]
  },
  {
    name: "SERVICES",
    items: [
      { name: "HRD & Recruitment", href: "/services/hrd-and-recruitment" },
      { name: "Banking & Finance", href: "/services/banking-and-finance" },
      { name: "Hospitality Industries", href: "/services/hospitality-industries" },
      { name: "Gems & Jewellery Industries", href: "/services/gems-and-jewellery-industries" },
      { name: "Construction Industry", href: "/services/construction-industry" },
    ],
  },
  { name: "OPENING", href: "/opening" },
  {
    name: "EMPLOYER",
    items: [
      { name: "Demand Letter & Power Of Attorney Sample", href: "/employer/demand-letter-and-power-of-attorney-sample" },
      { name: "Visa Procedure & Documentation", href: "/employer/visa-procedure-and-documentation" },
      { name: "Flow Chart", href: "/employer/flow-chart" },
      { name: "Post Your Requirements", href: "/employer/post-your-requirements" },
    ],
  },
  { name: "RESUME", href: "/resume" },
  { name: "CLIENTS", href: "/clients" },
  {
    name: "CONTACT",
    items: [
      { name: "Contact Us", href: "/contact/contact-us" },
      { name: "Grievance Redressal Form", href: "/contact/grievance-redressal-form" },
    ]
  },
  { name: "APPLICATION FORM", href: "/application-form" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <nav className="w-full bg-white">
      <div className="border-b">
        <div className="container mx-auto flex flex-col sm:flex-row sm:h-[140px] items-center justify-between px-4 py-4 sm:py-0">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-4 sm:mb-0">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="Nice Overseas Service Logo"
              width={100}
              height={100}
              className="object-contain"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-[28px] font-bold text-[#0066CC]">
                NICE OVERSEAS SERVICE
              </h1>
              <p className="text-sm sm:text-[15px] text-gray-600">
                Human Resources Consultants
              </p>
              <p className="text-sm sm:text-[15px] text-gray-600">
                REGD. No. B-0771/MUM/PER/1000-/S/7489/2006
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <div className="text-center sm:text-right">
              <p className="text-sm sm:text-[15px] font-medium text-gray-600">
                CALL US NOW :
              </p>
              <a
                href="tel:+919820337086"
                className="text-base sm:text-[17px] font-bold text-gray-800 hover:text-[#0066CC]"
              >
                +91-9820337086
              </a>
            </div>
            <Link
              href="/brochure"
              className="text-sm sm:text-[15px] font-medium text-[#FF6600] hover:text-[#FF8533]"
            >
              Download Brochure
            </Link>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="sm:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[300px] p-0">
              <MobileMenu setIsOpen={setIsOpen} />
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="bg-[#333333]">
        <div className="container mx-auto px-4">
          <ul className="hidden sm:flex h-[60px] items-center justify-between overflow-x-auto">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="h-full flex-shrink-0"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.items ? (
                  <DropdownMenu open={hoveredItem === item.name}>
                    <DropdownMenuTrigger
                      className={`h-full px-2 sm:px-4 text-xs sm:text-[15px] font-medium transition-colors hover:text-[#FF6600] ${
                        hoveredItem === item.name
                          ? "text-[#FF6600]"
                          : "text-white"
                      }`}
                    >
                      {item.name}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {item.items.map((subItem) => (
                        <DropdownMenuItem key={subItem.name} asChild>
                          <Link
                            href={subItem.href}
                            className="text-sm sm:text-[15px] hover:text-[#FF6600]"
                          >
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.href}
                    className={`h-full flex items-center px-2 sm:px-4 text-xs sm:text-[15px] font-medium transition-colors hover:text-[#FF6600] ${
                      hoveredItem === item.name
                        ? "text-[#FF6600]"
                        : "text-white"
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
  );
}

function MobileMenu({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Menu</h2>
          <SheetClose asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </SheetClose>
        </div>
      </div>

      <div className="flex-grow overflow-y-auto">
        <Accordion type="single" collapsible className="w-full">
          {navItems.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={item.name}>
              {item.items ? (
                <>
                  <AccordionTrigger className="px-4 py-2 text-sm font-medium hover:text-[#FF6600]">
                    {item.name}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="pl-4">
                      {item.items.map((subItem) => (
                        <li key={subItem.name} className="py-2">
                          <Link
                            href={subItem.href}
                            className="text-sm text-gray-600 hover:text-[#FF6600]"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </>
              ) : (
                <div className="px-4 py-2">
                  <Link
                    href={item.href}
                    className="text-sm font-medium hover:text-[#FF6600]"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </div>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="p-4 border-t mt-auto">
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-600">CALL US NOW</p>
          <a
            href="tel:+919820337086"
            className="text-lg font-bold text-gray-800 hover:text-[#0066CC]"
          >
            +91-9820337086
          </a>
        </div>

        <Link
          href="/brochure"
          className="block text-sm font-medium text-[#FF6600] hover:text-[#FF8533]"
        >
          Download Brochure
        </Link>
      </div>
    </div>
  );
}

