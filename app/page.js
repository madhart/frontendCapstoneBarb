import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client.js";
import { defineQuery } from "next-sanity";
import { PortableText } from "@portabletext/react";
import Carousel from "@/components/Carousel";
import News from "@/components/News.jsx";


export default async function Home() {
  const GREETING_QUERY = defineQuery("*[_type=='greetingItem']{content}")

  const greeting = await client.fetch(GREETING_QUERY)

  return (
    <>
      <Carousel 
        title="Bicycle Newfoundland and Labrador"
        description="Join our vibrant cycling community"
        autoScroll={true}
        scrollInterval={5000}
      />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Bicycle Newfoundland and Labrador (BNL) is a non-profit, volunteer-based organization
            and the official governing body for the sport of cycling in Newfoundland and Labrador.
            BNL has been part of the provincial sports community for over thirty years (1994). BNL
            is an affiliated provincial sport organization (PSO) of Sport NL and a member of Cycling
            Canada (CC) and operates under the authority of the world governing body of cycling,
            the Union Cycliste Internationale (UCI).
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We are governed by a province-wide volunteer board of directors. There has been a
            steady growth in membership through the development and promotion of both
            competitive and non-competitive events.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to create a well-recognized and safe, province-wide cycling community.
            We provide education and leadership to help create a vibrant and healthy cycling
            experience for the benefit of members, partners and the public.
          </p>
        </section>

        <section className="mb-12 text-center">
          <Link 
            href="https://ccnbikes.com/#!/" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition"
          >
            REGISTER HERE!
          </Link>
        </section>

        <section className="mt-16 pt-12 border-t-2 border-gray-300">
          <News />
        </section>

        {greeting.length > 0 && (
          <section className="mt-16 pt-12 border-t-2 border-gray-300">
            {greeting.map((item, index) => (
              <PortableText key={index} value={item.content} />
            ))}
          </section>
        )}
      </main>
    </>
  );
}
