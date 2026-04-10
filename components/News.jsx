import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";

const LATEST_NEWS_QUERY = defineQuery(`
  *[_type == "newsItem" && defined(slug.current) && defined(postedAt)]
    | order(postedAt desc)[0...4]{
      _id,
      title,
      postedAt,
      "slug": slug.current,
      shortenedContent
    }
`);

function formatPostedAt(value) {
  if (!value) return "";
  return new Intl.DateTimeFormat("en-CA", {
    dateStyle: "medium",
  }).format(new Date(value));
}

export default async function News() {
  const items = await client.fetch(LATEST_NEWS_QUERY);

  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-blue-500 pb-3 mb-6">
        Recent News
      </h2>

      {items.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {items.map((item) => (
            <article
              key={item._id}
              className="bg-white rounded-xl shadow-sm border border-slate-100 p-5 flex flex-col hover:shadow-md transition-shadow"
            >
              <p className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-2">
                {formatPostedAt(item.postedAt)}
              </p>
              <Link
                href={`/news/${item.slug}`}
                className="font-semibold text-slate-900 hover:text-blue-600 leading-snug mb-3 line-clamp-3"
              >
                {item.title}
              </Link>
              {item.shortenedContent && (
                <p className="text-sm text-slate-600 leading-relaxed flex-1 line-clamp-4">
                  {item.shortenedContent}
                </p>
              )}
              <Link
                href={`/news/${item.slug}`}
                className="mt-4 text-xs font-semibold text-blue-600 hover:text-blue-800 uppercase tracking-wide"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p className="text-slate-500 py-6">No news articles available.</p>
      )}

      <div className="text-center">
        <Link
          href="/news"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2.5 px-8 rounded-lg transition-colors shadow-sm"
        >
          View All News
        </Link>
      </div>
    </section>
  );
}
