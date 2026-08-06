import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/local-business-schema";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // Explicitly welcome AI / LLM crawlers to index our schema-rich entity content.
      {
        userAgent: ["Google-Extended", "GPTBot", "OAI-SearchBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "anthropic-ai", "Bingbot", "Applebot"],
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}