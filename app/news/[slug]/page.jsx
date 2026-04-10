import { notFound } from "next/navigation";
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
      return <img src={src} alt="" className="my-6 w-full h-auto" loading="lazy" />;
    },
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
    <article className="prose max-w-none">
      <br /><b><h1>{item.title}</h1></b>
      <div className="text-sm opacity-80">{formatPostedAt(item.postedAt)}</div><br />
      <PortableText value={item.content ?? []} components={portableTextComponents} />
    </article>
  );
}