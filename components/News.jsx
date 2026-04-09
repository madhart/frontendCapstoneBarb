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
    timeStyle: "short",
  }).format(new Date(value));
}

export default async function News() {
  const items = await client.fetch(LATEST_NEWS_QUERY);

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 border-b-4 border-blue-500 pb-3 mb-8">News</h2>

      <table className="w-full table-fixed mb-6">
        <tbody>
          <tr>
            {items.map((item) => (
              <td key={item._id} className="align-top p-4 w-1/4">
                <Link href={`/news/${item.slug}`} className="font-semibold text-blue-600 hover:text-blue-800 underline">
                  {item.title}
                </Link>

                <div className="text-sm text-gray-500 mt-1">
                  {formatPostedAt(item.postedAt)}
                </div>

                <p className="mt-2 text-gray-700">
                  {item.shortenedContent}
                </p>
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      <div className="text-center">
        <Link 
          href="/news" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition"
        >
          View All News
        </Link>
      </div>
    </section>
  );
}