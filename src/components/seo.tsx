import { useEffect } from "react";
import { company, ogImage } from "@/data/site";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  schema?: object | object[];
}

const buildSchema = (schema: object | object[]) =>
  Array.isArray(schema) ? schema : [schema];

export const SEO = ({ title, description, path = "/", image = ogImage, schema }: SEOProps) => {
  useEffect(() => {
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:image", image);
    setMeta("property", "og:url", path);
    setMeta("property", "og:type", "website");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    // remove old schema scripts
    document.querySelectorAll('script[data-seo="1"]').forEach((s) => s.remove());
    if (schema) {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.setAttribute("data-seo", "1");
      s.text = JSON.stringify(buildSchema(schema));
      document.head.appendChild(s);
    }
    return () => {
      document.querySelectorAll('script[data-seo="1"]').forEach((s) => s.remove());
    };
  }, [title, description, path, image, schema]);

  return null;
};

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  telephone: company.phone,
  email: company.email,
  url: "/",
  image: ogImage,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pine",
    addressRegion: "CO",
    postalCode: "80470",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Jefferson County, CO" },
    { "@type": "AdministrativeArea", name: "Park County, CO" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "187",
  },
  openingHours: "Mo-Sa 07:00-18:00",
};

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: item.path,
  })),
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const articleSchema = (post: { title: string; excerpt: string; date: string; author: string }) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  description: post.excerpt,
  datePublished: post.date,
  author: { "@type": "Organization", name: post.author },
  publisher: { "@type": "Organization", name: company.name },
});
