"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
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
    href: "/",
  },
  {
    name: "OVERVIEW",
    href: "/overview",
    items: [
      { name: "About Us", href: "/overview/about-us" },
      { name: "Vision And Mission", href: "/overview/vision-and-mission" },
      {
        name: "Licence & Certificates",
        href: "/overview/licence-and-certificates",
      },
      { name: "Our Associates", href: "/overview/our-associates" },
    ],
  },
  {
    name: "SERVICES",
    href: "/services",
    items: [
      { name: "HRD & Recruitment", href: "/services/hrd-and-recruitment" },
      { name: "Banking & Finance", href: "/services/banking-and-finance" },
      {
        name: "Hospitality Industries",
        href: "/services/hospitality-industries",
      },
      {
        name: "Gems & Jewellery Industries",
        href: "/services/gems-and-jewellery-industries",
      },
      {
        name: "Construction Industry",
        href: "/services/construction-industry",
      },
    ],
  },
  { name: "JOBS", href: "/jobs" },
  {
    name: "EMPLOYER",
    href: "/employer",
    items: [
      {
        name: "Demand Letter & Power Of Attorney Sample",
        href: "/employer/demand-letter-and-power-of-attorney-sample",
      },
      {
        name: "Visa Procedure & Documentation",
        href: "/employer/visa-procedure-and-documentation",
      },
      { name: "Flow Chart", href: "/employer/flow-chart" },
      {
        name: "Post Your Requirements",
        href: "/employer/post-your-requirements",
      },
    ],
  },
  { name: "RESUME", href: "/resume" },
  { name: "CLIENTS", href: "/clients" },
  {
    name: "CONTACT",
    href: "/contact",
    items: [
      { name: "Contact Us", href: "/contact/contact-us" },
      {
        name: "Grievance Redressal Form",
        href: "/contact/grievance-redressal-form",
      },
    ],
  },
  { name: "APPLICATION FORM", href: "/application-form" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const currentNavItem = navItems.find((item) => {
      if (pathname === item.href) return true;
      if (item.items?.some((subItem) => pathname === subItem.href)) return true;
      return false;
    });
    setActiveItem(currentNavItem?.name || null);
  }, [pathname]);

  const isItemActive = (item: (typeof navItems)[0]) => {
    if (pathname === item.href) return true;
    if (item.items?.some((subItem) => pathname === subItem.href)) return true;
    return false;
  };

  return (
    <nav className="w-full bg-white">
      <div className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-start gap-4">
              <div className="w-[180px] h-[100px] relative flex-shrink-0">
                <Image
                  src="https://www.niceoverseasservice.com/wp-content/uploads/2022/02/nice-overseas-services-blue.jpg"
                  alt="Nice Overseas Service Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="text-right">
                <p className="text-[15px] font-medium text-gray-600">
                  CALL US NOW :
                </p>
                <a
                  href="tel:+919820337086"
                  className="text-[17px] font-bold text-gray-800 hover:text-[#0066CC]"
                >
                  +91-9820337086
                </a>
              </div>
              <Link
                href="/brochure"
                className="text-[15px] font-medium text-[#FF6600] hover:text-[#FF8533]"
              >
                Download Brochure
              </Link>
            </div>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[300px] p-0">
                <MobileMenu setIsOpen={setIsOpen} activeItem={activeItem} />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <div className="bg-[#333333] border-t border-gray-200">
        <div className="container mx-auto px-4">
          <ul className="hidden lg:flex h-[60px] items-center justify-between">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="h-full flex-shrink-0"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.items ? (
                  <DropdownMenu
                    open={hoveredItem === item.name}
                    onOpenChange={(open) => {
                      if (!open) setHoveredItem(null);
                    }}
                  >
                    <DropdownMenuTrigger
                      className={`h-full px-4 text-[15px] font-medium transition-colors relative
                        ${
                          isItemActive(item) || hoveredItem === item.name
                            ? "text-[#FF6600]"
                            : "text-white hover:text-[#FF6600]"
                        }
                        ${
                          isItemActive(item)
                            ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#FF6600]"
                            : ""
                        }
                      `}
                    >
                      {item.name}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="w-[220px] bg-white"
                    >
                      {item.items.map((subItem) => (
                        <DropdownMenuItem
                          key={subItem.name}
                          className={`${
                            pathname === subItem.href ? "text-[#FF6600]" : ""
                          }`}
                        >
                          <Link
                            href={subItem.href}
                            className="w-full text-[15px] py-2 hover:text-[#FF6600]"
                            onClick={() => {
                              setActiveItem(item.name);
                              setHoveredItem(null);
                            }}
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
                    className={`h-full flex items-center px-4 text-[15px] font-medium transition-colors relative
                      ${
                        isItemActive(item) || hoveredItem === item.name
                          ? "text-[#FF6600]"
                          : "text-white hover:text-[#FF6600]"
                      }
                      ${
                        isItemActive(item)
                          ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#FF6600]"
                          : ""
                      }
                    `}
                    onClick={() => setActiveItem(item.name)}
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

function MobileMenu({
  setIsOpen,
  activeItem,
}: {
  setIsOpen: (isOpen: boolean) => void;
  activeItem: string | null;
}) {
  const pathname = usePathname();

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
                  <AccordionTrigger
                    className={`px-4 py-2 text-sm font-medium hover:text-[#FF6600] ${
                      activeItem === item.name ? "text-[#FF6600]" : ""
                    }`}
                  >
                    {item.name}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="pl-4">
                      {item.items.map((subItem) => (
                        <li key={subItem.name} className="py-2">
                          <Link
                            href={subItem.href}
                            className={`text-sm ${
                              pathname === subItem.href
                                ? "text-[#FF6600] font-medium"
                                : "text-gray-600 hover:text-[#FF6600]"
                            }`}
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
                    className={`text-sm font-medium ${
                      activeItem === item.name
                        ? "text-[#FF6600]"
                        : "hover:text-[#FF6600]"
                    }`}
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
