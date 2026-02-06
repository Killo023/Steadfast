import Image from "next/image";
import { Shield } from "lucide-react";
import { images } from "@/lib/images";

export function Footer() {
  return (
    <footer className="border-t border-accent/20 bg-gradient-to-b from-navy to-navy-light px-4 py-12" role="contentinfo">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="relative h-16 w-auto">
            <Image
              src={images.logoSide}
              alt="Steadfast Tactical"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
          <div className="text-center md:text-right">
            <p className="text-lg font-medium italic text-white mb-2 flex items-center justify-center md:justify-end gap-2">
              <Shield className="h-5 w-5 text-accent flex-shrink-0" aria-hidden />
              Chosen by Many. Trusted by More.
            </p>
            <p className="text-sm text-gray-400 mb-2">
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
