import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";
import Registration from "@/components/Registration";

const ALL_NEWS_QUERY = defineQuery(`
  *[_type == "newsItem" && defined(slug.current) && defined(postedAt)]
    | order(postedAt desc){
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

export default async function NewsPage() {
  const allNews = await client.fetch(ALL_NEWS_QUERY);

  return (
    <>
      {/* Page Header */}
      <div className="relative bg-[#222b31] py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2229]/80 to-[#2d2d2d]" />
        <div className="absolute bottom-0 inset-x-0 h-1 bg-blue-500" />
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">News</h1>
          <p className="text-slate-300 text-lg">Latest updates from Bicycle Newfoundland and Labrador</p>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* News Articles */}
        <section className="mb-10">
          <div className="space-y-5">
            {allNews.length > 0 ? (
              allNews.map((item) => (
                <article
                  key={item._id}
                  className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow"
                >
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">
                    {formatPostedAt(item.postedAt)}
                  </p>
                  <Link
                    href={`/news/${item.slug}`}
                    className="text-xl font-bold text-slate-900 hover:text-blue-700 leading-snug block mb-3"
                  >
                    {item.title}
                  </Link>
                  <p className="text-slate-600 leading-relaxed">
                    {item.shortenedContent}
                  </p>
                  <Link
                    href={`/news/${item.slug}`}
                    className="inline-block mt-4 text-sm font-semibold text-blue-600 hover:text-blue-800"
                  >
                    Read More →
                  </Link>
                </article>
              ))
            ) : (
              <div className="bg-white rounded-xl p-12 text-center border border-slate-100">
                <p className="text-slate-500">No news articles available at this time.</p>
              </div>
            )}
          </div>
        </section>

        <Registration />
      </main>
    </>
  );
}