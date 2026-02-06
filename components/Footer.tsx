import Image from "next/image";
import Link from "next/link";
import { Shield } from "lucide-react";
import { images } from "@/lib/images";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-4 py-12" role="contentinfo">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Link href="/" className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded border border-gray-200 bg-gray-50 flex items-center justify-center text-accent">
              <i className="fa-solid fa-person-rifle text-xl md:text-2xl" aria-hidden />
            </div>
            <div className="relative h-14 w-[200px] md:h-16 md:w-[240px]">
              <Image
                src={images.logoSide}
                alt="Steadfast Tactical"
                fill
                className="object-contain object-left"
                unoptimized
              />
            </div>
          </Link>
          <div className="text-center md:text-right">
            <p className="text-lg font-medium italic text-gray-800 mb-2 flex items-center justify-center md:justify-end gap-2">
              <Shield className="h-5 w-5 text-accent flex-shrink-0" aria-hidden />
              Chosen by Many. Trusted by More.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              © {new Date().getFullYear()} Steadfast Tactical. SAPS & PFTC Accredited firearm competency training.
            </p>
            <div className="flex items-center justify-center md:justify-end gap-3 text-xs text-gray-500">
              <span>SAPS Accredited</span>
              <span>•</span>
              <span>PFTC Accredited</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
