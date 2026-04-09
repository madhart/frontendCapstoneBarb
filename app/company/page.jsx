import Navbar from "@/components/Navbar";
import News from "@/components/News.jsx";
import HeroSection from "@/components/HeroSection";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";

const COMPANY_INFO_QUERY = `*[_type == "companyInfo"] | order(order asc) {
  _id,
  content,
  title,
  order
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
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
    em: ({ children }) => <em className="italic text-gray-700">{children}</em>,
    link: ({ value, children }) => (
      <a href={value.href} className="text-blue-600 hover:text-blue-800 hover:underline" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};



export default async function CompanyPage() {
  const companyInfo = await client.fetch(COMPANY_INFO_QUERY);
  
  // Organize sections by category for proper display order
  const sectionsByCategory = {
    header: null,
    about: [],
    strategic: [],
    agm: [],
    awards: [],
  };

  // Categorize sections based on title and order
  companyInfo.forEach((section) => {
    const title = section.title?.toLowerCase() || "";
    const order = section.order?.toString() || "";
    
    if (title.includes("header") || order === "1") {
      sectionsByCategory.header = section;
    } else if (title.includes("about") || order.startsWith("2")) {
      sectionsByCategory.about.push(section);
    } else if (title.includes("strategic") || order === "3") {
      sectionsByCategory.strategic.push(section);
    } else if (title.includes("agm") || title.includes("annual general") || order === "6") {
      sectionsByCategory.agm.push(section);
    } else if (title.includes("award") || order === "7") {
      sectionsByCategory.awards.push(section);
    }
  });

  // Helper to render a section with title and content
  const renderSection = (section) => (
    <article key={section._id} className="mb-8 p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      {section.title && <h3 className="text-2xl font-semibold text-blue-700 mb-4">{section.title}</h3>}
      <PortableText 
        value={section.content}
        components={portableTextComponents}
      />
    </article>
  );

  return (
    <>
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Header Section - from Sanity */}
        {sectionsByCategory.header ? (
          <section className="mb-12 text-left py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg px-8">
            <PortableText 
              value={sectionsByCategory.header.content}
              components={{
                block: {
                  normal: ({ children }) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
                  h1: ({ children }) => <h1 className="text-4xl font-bold text-gray-900 mb-6">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-3xl font-bold text-gray-900 mb-4">{children}</h2>,
                },
                marks: {
                  strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
                  em: ({ children }) => <em className="italic text-gray-700">{children}</em>,
                },
              }}
            />
          </section>
        ) : null}

        {/* About Section */}
        {sectionsByCategory.about.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-blue-500 pb-3 mb-8">About</h2>
            {sectionsByCategory.about.map(renderSection)}
          </section>
        )}

        {/* Strategic Plan Section */}
        {sectionsByCategory.strategic.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-blue-500 pb-3 mb-8">Strategic Plan</h2>
            {sectionsByCategory.strategic.map(renderSection)}
          </section>
        )}

        {/* Policies Section - Frontend PDFs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-blue-500 pb-3 mb-8">Policies</h2>
          <div className="p-6 bg-white rounded-lg border border-gray-200">
            <p className="text-gray-700 mb-6">BNL policies and governance documents:</p>
            <ul className="space-y-3">
              <li>
                <a href="https://drive.google.com/drive/folders/1uZKSClDPi-YlDOtbhT" 
                   className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center"
                   target="_blank" 
                   rel="noopener noreferrer">
                  📄 Access BNL Policies (Google Drive)
                  <span className="ml-2">↗</span>
                </a>
              </li>
            </ul>
            <p className="text-sm text-gray-500 mt-6">To be updated with individual policy documents</p>
          </div>
        </section>

        {/* AGM and Financial Statements Section */}
        {sectionsByCategory.agm.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-blue-500 pb-3 mb-8">Annual General Meeting (AGM) & Financial Statements</h2>
            {sectionsByCategory.agm.map(renderSection)}
          </section>
        )}

        {/* Awards Section */}
        {sectionsByCategory.awards.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-blue-500 pb-3 mb-8">{sectionsByCategory.awards[0].title}</h2>
            {sectionsByCategory.awards.map(renderSection)}
          </section>
        )}

        {/* News Section */}
        <section className="mt-16 pt-12 border-t-2 border-gray-300">
          <News />
        </section>
      </main>
    </>
  );
}
