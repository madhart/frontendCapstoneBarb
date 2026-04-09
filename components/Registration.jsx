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
    <section className="mb-12">
      <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{registrationData.title}</h3>
        <PortableText 
          value={registrationData.content}
          components={{
            block: {
              normal: ({ children }) => <p className="text-gray-700 mb-4">{children}</p>,
            },
            marks: {
              strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
              em: ({ children }) => <em className="italic text-gray-700">{children}</em>,
              link: ({ value, children }) => (
                <a 
                  href={value.href} 
                  className="text-blue-600 hover:text-blue-800 hover:underline font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
            },
          }}
        />
      </div>
    </section>
  );
}
