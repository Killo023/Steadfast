import Image from "next/image";
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
            <p className="text-lg font-medium italic text-white mb-2">
              Chosen by Many. Trusted by More.
            </p>
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} Steadfast Tactical. Accredited firearm competency training, Lenasia.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
