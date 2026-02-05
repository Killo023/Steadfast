"use client";

import Link from "next/link";
import Image from "next/image";
import { images } from "@/lib/images";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white backdrop-blur-md shadow-md shadow-gray-200/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-[0.175rem]">
        <Link href="/" className="flex items-center group">
          <div className="relative h-24 w-[288px] md:h-32 md:w-[384px] flex-shrink-0">
            <Image
              src={images.logoSide}
              alt="Steadfast Tactical"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </Link>
        <nav className="flex gap-6" aria-label="Main navigation">
          <Link
            href="#pricing"
            className="text-sm font-medium text-gray-800 transition-all hover:text-accent hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white rounded-md px-2 py-1"
          >
            Pricing
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium text-gray-800 transition-all hover:text-accent hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white rounded-md px-2 py-1"
          >
            FAQ
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-gray-800 transition-all hover:text-accent hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white rounded-md px-2 py-1"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
