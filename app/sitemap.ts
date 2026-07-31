/**
 * Generates /sitemap.xml at build time.
 * Before this file existed, /sitemap.xml returned empty and the site had
 * zero pages in Google's index.
 *
 * Only list pages that actually exist and have real content — a sitemap
 * pointing at empty stubs or 404s damages crawl trust.
 */

import type { MetadataRoute } from "next";
import { brand } from "@/lib/brand";

const SITE = brand.siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    {
      url: `${SITE}/jewellers-in-amritsar`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE}/heritage`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE}/our-name`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
