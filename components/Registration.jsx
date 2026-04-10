import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";
import { PortableText } from "@portabletext/react";

const REGISTRATION_QUERY = defineQuery(`
  *[_type == "membershipInsuranceInfo" && title == "Registration Link"][0] {
    _id,
    content,
    title,
    order
  }
`);

export default async function Registration() {
  const registrationData = await client.fetch(REGISTRATION_QUERY);

  if (!registrationData) {
    return null;
  }

  return (
    <section className="my-10">
      <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg">
        {/* Accent bar */}
        <div className="h-1 bg-blue-500" />
        <div className="p-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
            Official BNL Registration Platform
          </p>
          <h3 className="text-2xl font-bold text-white mb-2">
            {registrationData.title || "Ready to Ride?"}
          </h3>
          <p className="text-slate-400 text-sm mb-5 max-w-lg mx-auto">
            BNL uses <span className="text-slate-200 font-medium">CCNBikes.com</span> — Canada&apos;s
            national cycling registration system — to manage memberships, event entries, and licenses.
          </p>
          <PortableText
            value={registrationData.content}
            components={{
              block: {
                normal: ({ children }) => (
                  <p className="text-slate-400 mb-4 max-w-xl mx-auto text-sm">{children}</p>
                ),
              },
              marks: {
                strong: ({ children }) => (
                  <strong className="font-bold text-white">{children}</strong>
                ),
                em: ({ children }) => (
                  <em className="italic text-slate-300">{children}</em>
                ),
                link: ({ value, children }) => (
                  <a
                    href={value.href}
                    className="inline-flex items-center gap-2 mt-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3 rounded-lg transition-colors shadow-md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                    <span className="text-blue-200 text-xs font-normal">ccnbikes.com</span>
                  </a>
                ),
              },
            }}
          />
        </div>
      </div>
    </section>
  );
}
