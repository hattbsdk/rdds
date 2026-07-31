/**
 * Generates /robots.txt at build time.
 * Before this file existed, /robots.txt returned empty.
 *
 * The AI crawlers are allowed deliberately. A growing share of "best jeweller
 * in Amritsar" style questions now happen inside AI assistants, and those
 * tools carry no incumbency bias — they will read this site and a competitor's
 * as equals. It is the fastest realistic route to being the named answer.
 */

import type { MetadataRoute } from "next";
import { brand } from "@/lib/brand";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
    ],
    sitemap: `${brand.siteUrl}/sitemap.xml`,
    host: brand.siteUrl,
  };
}
