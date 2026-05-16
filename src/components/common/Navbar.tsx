'use client';

import { navbarConfig } from '@/config/Navbar';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

import Container from './Container';

export default function Navbar() {
  return (
    <Container className="sticky top-0 z-20 rounded-md py-4 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/">
          <Image
            className="h-12 w-12 rounded-md border border-gray-200 bg-blue-300 transition-all duration-300 ease-in-out hover:scale-90 dark:bg-yellow-300"
            src={navbarConfig.logo.src}
            alt={navbarConfig.logo.alt}
            width={navbarConfig.logo.width}
            height={navbarConfig.logo.height}
          />
        </Link>

        {/* Desktop Navigation (md+) */}
        <nav className="hidden md:flex items-center justify-center gap-4 px-5">
          {navbarConfig.navItems.map((item) => (
            <Link
              className="text-sm lg:text-base transition-all duration-300 ease-in-out hover:underline hover:decoration-2 hover:underline-offset-4"
              key={item.label}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Menu (below md) */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted transition-colors"
              aria-label="Open menu"
            >
              <Menu className="size-6" />
            </button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[280px] sm:w-[320px]">
            <SheetHeader className="text-left">
              <SheetTitle className="flex items-center gap-3">
                <Image
                  className="h-8 w-8 rounded-md border border-gray-200 bg-blue-300 dark:bg-yellow-300"
                  src={navbarConfig.logo.src}
                  alt={navbarConfig.logo.alt}
                  width={32}
                  height={32}
                />
                <span className="text-base font-semibold">
                  Benedicto Geraldo
                </span>
              </SheetTitle>
            </SheetHeader>

            <nav className="mt-8 flex flex-col gap-1">
              {navbarConfig.navItems.map((item) => (
                <SheetClose key={item.label} asChild>
                  <Link
                    className="flex items-center rounded-lg px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </Container>
  );
}
