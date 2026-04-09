import Navbar from "@/components/Navbar";
import Membership from "@/components/Membership";
import News from "@/components/News";
import Sponsors from "@/components/Sponsors";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";

const CONTACT_QUERY = `*[_type == "contactInfo"][0] {
  _id,
  content,
  title
}`;

// Custom PortableText components with Tailwind styling
const portableTextComponents = {
  types: {
    table: ({ value }) => {
      if (!value || !value.rows) return null;
      
      return (
        <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-md my-6">
          <tbody>
            {value.rows.map((row, rowIdx) => (
              <tr key={rowIdx} className="border-b border-gray-200 hover:bg-blue-50">
                {row.cells?.map((cell, cellIdx) => (
                  <td key={cellIdx} className="px-6 py-4 text-gray-800">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    },
  },
  block: {
    normal: ({ children }) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
    h1: ({ children }) => <h1 className="text-4xl font-bold text-gray-900 mb-6 mt-8">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold text-blue-700 mb-4 mt-6">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-4">{children}</h3>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
    em: ({ children }) => <em className="italic text-gray-700">{children}</em>,
    link: ({ value, children }) => (
      <a 
        href={value.href} 
        className="text-blue-600 hover:text-blue-800 hover:underline" 
        target={value.href?.startsWith("mailto:") ? undefined : "_blank"}
        rel={value.href?.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      >
        {children}
      </a>
    ),
  },
};

export default async function ContactPage() {
  const contactContent = await client.fetch(CONTACT_QUERY);

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <section className="mb-12 text-center py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us for More Information</h1>
        </section>
        {contactContent ? (
          <section className="mb-12">
            <div className="p-8 bg-white rounded-lg border border-gray-200 space-y-6">
              <PortableText value={contactContent.content} components={portableTextComponents} />
            </div>
          </section>
        ) : (
          <section className="mb-12 p-6 bg-yellow-50 border-l-4 border-yellow-400">
            <p className="text-gray-600">Contact content not yet available.</p>
          </section>
        )}
        <section className="mt-16 pt-12 border-t-2 border-gray-300 mb-12">
          <Membership />
        </section>
        <section className="mt-16 pt-12 border-t-2 border-gray-300 mb-12">
          <Sponsors />
        </section>
        <section className="mt-16 pt-12 border-t-2 border-gray-300">
          <News />
        </section>
      </main>
    </>
  );
}
