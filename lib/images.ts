/**
 * Local image paths (relative to public folder).
 * Using the actual filenames from public/images/
 */

export const images = {
  // Logo files
  logoEmblem: "/images/logo emblem.png",
  logoText: "/images/logo text.png",
  logoSide: "/images/logo side.png",
  
  // Section images
  heroPoster: "/images/Section2 (1).jpg",
  handgun: "/images/Section2 (2).jpg",
  training: "/images/Section2 (3).jpg",
  security: "/images/Section2 (4).jpg",
  rifle: "/images/Section2 (5).jpg",
  target: "/images/Section2 (6).jpg",
  section7: "/images/Section2 (7).jpg",
  regulation: "/images/regulation.jpg",
  
  /** Custom brand icon (save your icon as public/images/brand-icon.png) */
  brandIcon: "/images/brand-icon.png",

  // Logo variations (can be used for different sections)
  logo1: "/images/Logo (1).png",
  logo2: "/images/Logo (2).png",
  logo3: "/images/Logo (3).png",
  logo4: "/images/Logo (4).png",
  logo5: "/images/Logo (5).png",
  logo6: "/images/logo (6).png",
} as const;

/** Fallback if local image fails (neutral gradient) */
export const fallbackImage =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%230f1629'/%3E%3Cstop offset='100%25' style='stop-color:%230a0e17'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g)' width='800' height='600'/%3E%3C/svg%3E";
