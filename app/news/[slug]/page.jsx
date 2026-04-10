import { notFound } from "next/navigation";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { defineQuery } from "next-sanity";
import { PortableText } from "@portabletext/react";

const NEWS_BY_SLUG_QUERY = defineQuery(`
  *[_type == "newsItem" && slug.current == $slug][0]{
    title,
    postedAt,
    content
  }
`);

function formatPostedAt(value) {
  if (!value) return "";
  return new Intl.DateTimeFormat("en-CA", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

const portableTextComponents = {
  types: {
    image: ({ value }) => {
      const src = urlFor(value).width(1200).auto("format").url();
      return <img src={src} alt={value?.alt || ""} className="my-6 w-full h-auto rounded-lg" loading="lazy" />;
    },
  },
  block: {
    normal: ({ children }) => <p className="text-slate-700 leading-relaxed mb-4">{children}</p>,
    h1: ({ children }) => <h1 className="text-3xl font-bold text-slate-900 mb-5 mt-8 pb-2 border-b border-slate-200">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold text-slate-900 mb-3 mt-6">{children}</h2>,
    h3: ({ children }) => <h3 className="text-lg font-semibold text-slate-900 mb-2 mt-4">{children}</h3>,
    blockquote: ({ children }) => <blockquote className="border-l-4 border-blue-500 pl-4 italic text-slate-500 my-4">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 space-y-1 my-4 text-slate-700">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 space-y-1 my-4 text-slate-700">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-slate-900">{children}</strong>,
    em: ({ children }) => <em className="italic text-slate-600">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        className="text-blue-600 hover:text-blue-800 underline underline-offset-2 transition-colors"
        target={value?.href?.startsWith("mailto:") ? undefined : "_blank"}
        rel={value?.href?.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      >
        {children}
      </a>
    ),
  },
};

export async function generateStaticParams() {
  const slugs = await client.fetch(
    `*[_type == "newsItem" && defined(slug.current)]{ "slug": slug.current }`
  );
  return slugs.map(({ slug }) => ({ slug }));
}

export default async function NewsItemPage({ params }) {
  const { slug } = await params;

  const item = await client.fetch(NEWS_BY_SLUG_QUERY, { slug });
  if (!item) notFound();

  return (
    <>
      {/* Page Header */}
      <div className="relative bg-[#222b31] py-14 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2229]/80 to-[#2d2d2d]" />
        <div className="absolute bottom-0 inset-x-0 h-1 bg-blue-500" />
        <div className="relative max-w-3xl mx-auto">
          <Link
            href="/news"
            className="inline-flex items-center text-slate-400 hover:text-white text-sm mb-5 transition-colors"
          >
            ← Back to News
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">{item.title}</h1>
          <p className="mt-3 text-slate-400 text-sm">{formatPostedAt(item.postedAt)}</p>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 py-10">
        <article className="bg-white rounded-xl shadow-sm border border-slate-100 p-8">
          <PortableText value={item.content ?? []} components={portableTextComponents} />
        </article>
      </main>
    </>
  );
}