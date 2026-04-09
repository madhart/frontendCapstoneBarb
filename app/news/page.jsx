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
    timeStyle: "short",
  }).format(new Date(value));
}

export default async function NewsPage() {
  const allNews = await client.fetch(ALL_NEWS_QUERY);

  return (
    <>
      <main className="max-w-6xl mx-auto px-4 py-8">
        <section className="mb-12 text-center py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg px-8">
          <h1 className="text-4xl font-bold text-gray-900">All News</h1>
        </section>

        {/* News Section */}
        <section className="mb-12">
          <div className="space-y-6">
            {allNews.length > 0 ? (
              allNews.map((item) => (
                <article key={item._id} className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition">
                  <Link href={`/news/${item.slug}`} className="text-2xl font-bold text-blue-600 hover:text-blue-800 hover:underline">
                    {item.title}
                  </Link>
                  <div className="text-sm text-gray-500 mt-2">
                    {formatPostedAt(item.postedAt)}
                  </div>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    {item.shortenedContent}
                  </p>
                  <Link 
                    href={`/news/${item.slug}`}
                    className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </article>
              ))
            ) : (
              <p className="text-gray-600 text-center py-12">No news articles available at this time.</p>
            )}
          </div>
        </section>

        {/* BNL Membership Section */}
        <Registration />
      </main>
    </>
  );
}