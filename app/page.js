import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client.js";
import { defineQuery } from "next-sanity";
import { PortableText } from "@portabletext/react";
import Carousel from "@/components/Carousel";
import News from "@/components/News.jsx";
import Registration from "@/components/Registration";

const quickLinks = [
  {
    href: "/membership",
    label: "Membership",
    svg: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
  },
  {
    href: "/events",
    label: "Events",
    svg: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    ),
  },
  {
    href: "/coaching-officials",
    label: "Coaching & Officials",
    svg: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    href: "/athletePerformance",
    label: "Athlete Performance",
    svg: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
  {
    href: "/company",
    label: "About BNL",
    svg: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
      </svg>
    ),
  },
  {
    href: "/contact",
    label: "Contact Us",
    svg: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

export default async function Home() {
  const GREETING_QUERY = defineQuery("*[_type=='greetingItem']{content}")
  const greeting = await client.fetch(GREETING_QUERY)

  return (
    <>
      <Carousel
        title="Bicycle Newfoundland and Labrador"
        description="Your province-wide cycling community"
        autoScroll={true}
        scrollInterval={5000}
      />

      {/* Who We Are */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 border-b-2 border-blue-500 pb-3 mb-6">
            Who We Are
          </h2>
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8">
            <p className="text-slate-700 leading-relaxed mb-4">
              Bicycle Newfoundland and Labrador (BNL) is a non-profit, volunteer-based organization
              and the official governing body for the sport of cycling in Newfoundland and Labrador.
              BNL has been part of the provincial sports community for over thirty years (1994). BNL
              is an affiliated provincial sport organization (PSO) of Sport NL and a member of Cycling
              Canada (CC) and operates under the authority of the world governing body of cycling,
              the Union Cycliste Internationale (UCI).
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              We are governed by a province-wide volunteer board of directors. There has been a
              steady growth in membership through the development and promotion of both
              competitive and non-competitive events.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Our mission is to create a well-recognized and safe, province-wide cycling community.
              We provide education and leadership to help create a vibrant and healthy cycling
              experience for the benefit of members, partners and the public.
            </p>
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 border-b-2 border-blue-500 pb-3 mb-6">
            Explore BNL
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-white rounded-xl shadow-sm border border-slate-100 p-5 flex flex-col items-center text-center hover:shadow-md hover:border-blue-300 transition-all group"
              >
                <span className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                  {link.svg}
                </span>
                <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-700 leading-tight">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Registration CTA */}
        <Registration />

        {/* News */}
        <section className="mt-10 pt-10 border-t border-slate-200">
          <News />
        </section>

        {/* Greeting from Sanity */}
        {greeting.some((item) => item.content?.length > 0) && (
          <section className="mt-10 pt-10 border-t border-slate-200 bg-white rounded-xl p-8 shadow-sm border border-slate-100">
            {greeting.map((item, index) =>
              item.content?.length > 0 ? (
                <PortableText key={index} value={item.content} />
              ) : null
            )}
          </section>
        )}
      </main>
    </>
  );
}

