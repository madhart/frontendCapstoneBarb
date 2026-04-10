
import Membership from "@/components/Membership";
import News from "@/components/News";
import Registration from "@/components/Registration";
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
      if (!value || !value.rows || value.rows.length === 0) return null;
      const [headerRow, ...bodyRows] = value.rows;
      return (
        <div className="overflow-x-auto rounded-xl shadow-sm border border-slate-100 my-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#222b31] text-white">
                {headerRow.cells?.map((cell, i) => (
                  <th key={i} className="px-5 py-3 text-left text-sm font-semibold uppercase tracking-wide whitespace-nowrap">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bodyRows.map((row, rowIdx) => (
                <tr key={rowIdx} className={rowIdx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  {row.cells?.map((cell, cellIdx) => (
                    <td key={cellIdx} className="px-5 py-3 text-slate-700 text-sm border-t border-slate-100">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
  },
  block: {
    normal: ({ children }) => <p className="text-slate-700 leading-relaxed mb-4">{children}</p>,
    h1: ({ children }) => <h1 className="text-3xl font-bold text-slate-900 mb-5 mt-8 pb-2 border-b border-slate-200">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold text-[#222b31] mb-3 mt-6">{children}</h2>,
    h3: ({ children }) => <h3 className="text-lg font-semibold text-slate-900 mb-2 mt-4">{children}</h3>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-slate-900">{children}</strong>,
    em: ({ children }) => <em className="italic text-slate-600">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value.href}
        className="text-blue-600 hover:text-blue-800 underline underline-offset-2 transition-colors"
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
      {/* Page Header */}
      <div className="relative bg-[#222b31] py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2229]/80 to-[#2d2d2d]" />
        <div className="absolute bottom-0 inset-x-0 h-1 bg-blue-500" />
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Contact Us</h1>
          <p className="text-slate-300 text-lg">Get in touch with Bicycle Newfoundland and Labrador</p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {contactContent ? (
          <section className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 mb-10">
            <PortableText value={contactContent.content} components={portableTextComponents} />
          </section>
        ) : (
          <section className="mb-10 p-6 bg-slate-50 border-l-4 border-blue-500 rounded-lg">
            <p className="text-slate-600">Contact content not yet available.</p>
          </section>
        )}
        <Registration />
      </main>
    </>
  );
}
