import Navbar from "@/components/Navbar";
import News from "@/components/News.jsx";
import Registration from "@/components/Registration";
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
              <tr key={rowIdx} className="border-b border-gray-200 hover:bg-slate-50">
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
    <article key={section._id} className="mb-6 p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      {section.title && <h3 className="text-xl font-semibold text-blue-700 mb-4">{section.title}</h3>}
      <PortableText
        value={section.content}
        components={portableTextComponents}
      />
    </article>
  );

  return (
    <>
      {/* Page Header */}
      <div className="relative bg-[#222b31] py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2229]/80 to-[#2d2d2d]" />
        <div className="absolute bottom-0 inset-x-0 h-1 bg-blue-500" />
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Company</h1>
          <p className="text-slate-300 text-lg">About Bicycle Newfoundland and Labrador</p>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* Header Section - from Sanity */}
        {sectionsByCategory.header ? (
          <section className="mb-10 bg-white rounded-xl shadow-sm border border-slate-100 p-8">
            <PortableText
              value={sectionsByCategory.header.content}
              components={{
                block: {
                  normal: ({ children }) => <p className="text-slate-700 leading-relaxed mb-4">{children}</p>,
                  h1: ({ children }) => <h1 className="text-3xl font-bold text-slate-900 mb-4">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-2xl font-bold text-slate-900 mb-3">{children}</h2>,
                },
                marks: {
                  strong: ({ children }) => <strong className="font-bold text-slate-900">{children}</strong>,
                  em: ({ children }) => <em className="italic text-slate-700">{children}</em>,
                },
              }}
            />
          </section>
        ) : null}

        {/* About Section */}
        {sectionsByCategory.about.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-blue-500 pb-3 mb-6">About</h2>
            {sectionsByCategory.about.map(renderSection)}
          </section>
        )}

        {/* Strategic Plan Section */}
        {sectionsByCategory.strategic.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-blue-500 pb-3 mb-6">Strategic Plan</h2>
            {sectionsByCategory.strategic.map(renderSection)}
          </section>
        )}

        {/* Policies Section - Frontend PDFs */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-blue-500 pb-3 mb-6">Policies</h2>
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
            <p className="text-slate-700 mb-6">BNL policies and governance documents:</p>
            
            {/* Main Policies */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Policy Documents</h3>
              <ul className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <li>
                  <a href="/policies/BNL Appeal Policy.pdf" 
                     className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center"
                     target="_blank" 
                     rel="noopener noreferrer">
                    📄 Appeal Policy
                  </a>
                </li>
                <li>
                  <a href="/policies/BNL Athlete Protection Policy.pdf" 
                     className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center"
                     target="_blank" 
                     rel="noopener noreferrer">
                    📄 Athlete Protection Policy
                  </a>
                </li>
                <li>
                  <a href="/policies/BNL Club Affiliation Policy.pdf" 
                     className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center"
                     target="_blank" 
                     rel="noopener noreferrer">
                    📄 Club Affiliation Policy
                  </a>
                </li>
                <li>
                  <a href="/policies/BNL Code of Conduct and Ethics.pdf" 
                     className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center"
                     target="_blank" 
                     rel="noopener noreferrer">
                    📄 Code of Conduct and Ethics
                  </a>
                </li>
                <li>
                  <a href="/policies/BNL Conflict of Interest Policy.pdf" 
                     className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center"
                     target="_blank" 
                     rel="noopener noreferrer">
                    📄 Conflict of Interest Policy
                  </a>
                </li>
                <li>
                  <a href="/policies/BNL Discipline and Complaint Policy.pdf" 
                     className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center"
                     target="_blank" 
                     rel="noopener noreferrer">
                    📄 Discipline and Complaint Policy
                  </a>
                </li>
                <li>
                  <a href="/policies/BNL Dispute Resolution Policy.pdf" 
                     className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center"
                     target="_blank" 
                     rel="noopener noreferrer">
                    📄 Dispute Resolution Policy
                  </a>
                </li>
                <li>
                  <a href="/policies/BNL Healthy Eating Policy.pdf" 
                     className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center"
                     target="_blank" 
                     rel="noopener noreferrer">
                    📄 Healthy Eating Policy
                  </a>
                </li>
                <li>
                  <a href="/policies/BNL Safe Sport Policy.pdf" 
                     className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center"
                     target="_blank" 
                     rel="noopener noreferrer">
                    📄 Safe Sport Policy
                  </a>
                </li>
                <li>
                  <a href="/policies/BNL Screening Policy.pdf" 
                     className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center"
                     target="_blank" 
                     rel="noopener noreferrer">
                    📄 Screening Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Safe Sport Resources */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Safe Sport Resources</h3>
              <ul className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <li>
                  <a href="/policies/Safe Sport - 1 - ITP Safe Sport Complaint Process.pdf" 
                     className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center"
                     target="_blank" 
                     rel="noopener noreferrer">
                    📄 Safe Sport Complaint Process
                  </a>
                </li>
                <li>
                  <a href="/policies/Safe Sport - 2 - ITP Sport Case  Manager - Your Guide Through the Complaint Process.pdf" 
                     className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center"
                     target="_blank" 
                     rel="noopener noreferrer">
                    📄 Case Manager Guide
                  </a>
                </li>
                <li>
                  <a href="/policies/Safe Sport - 3 - Flowchart-R6.jpg" 
                     className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center"
                     target="_blank" 
                     rel="noopener noreferrer">
                    📊 Complaint Process Flowchart
                  </a>
                </li>
                <li>
                  <a href="/policies/Safe Sport - 4 - Step by Step Guide To Filing a Complaint.pdf" 
                     className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center"
                     target="_blank" 
                     rel="noopener noreferrer">
                    📄 Step by Step Complaint Guide
                  </a>
                </li>
                <li>
                  <a href="/policies/Safe Sport - 6 - About ITP Sport & Recreation.pdf" 
                     className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center"
                     target="_blank" 
                     rel="noopener noreferrer">
                    📄 About ITP Sport & Recreation
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* AGM and Financial Statements Section */}
        {(sectionsByCategory.agm.length > 0) && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-blue-500 pb-3 mb-6">Annual General Meeting (AGM) &amp; Financial Statements</h2>
            {sectionsByCategory.agm.map(renderSection)}
            
            {/* Financial Reports */}
            <div className="mt-6 bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Financial Reports</h3>
              <p className="text-slate-600 mb-5">View our financial transparency documents:</p>
              <ul className="space-y-3">
                <li>
                  <a href="/financialreports/BNL Event Expense Report.xlsx" 
                     className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-2 font-medium"
                     download>
                    📊 BNL Event Expense Report
                  </a>
                </li>
                <li>
                  <a href="/financialreports/BNL Expense Report.xlsx" 
                     className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-2 font-medium"
                     download>
                    📊 BNL Expense Report
                  </a>
                </li>
              </ul>
            </div>
          </section>
        )}

        {/* Awards Section */}
        {sectionsByCategory.awards.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-blue-500 pb-3 mb-6">{sectionsByCategory.awards[0].title}</h2>
            {sectionsByCategory.awards.map(renderSection)}
          </section>
        )}

        {/* Registration Section */}
        <Registration />

        {/* News Section */}
        <section className="mt-10 pt-10 border-t border-slate-200">
          <News />
        </section>
      </main>
    </>
  );
}
