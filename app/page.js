import Image from "next/image";
import Link from "next/link";
import {client} from "@/sanity/lib/client.js"
import { defineQuery } from "next-sanity";
import { PortableText } from "@portabletext/react";


export default async function Home() {
  const GREETING_QUERY = defineQuery("*[_type=='greetingItem']{content}")

  const greeting = await client.fetch(GREETING_QUERY)

  return (
    <>
      <b><h2><br></br>Bicycle NL</h2></b>
      <p>Welcome to the in-progress Home page</p>
      {/* This image is the placeholder for scrolling images header section of the homepage */}
      <Image alt="Eric" src="/Eric.jpg" width={200} height={200}></Image>
      <b><h2><br></br>Who We Are</h2></b>
      <p>
Bicycle Newfoundland and Labrador (BNL) is a non-profit, volunteer-based organization
and the official governing body for the sport of cycling in Newfoundland and Labrador.
BNL has been part of the provincial sports community for over thirty years (1994). BNL
is an affiliated provincial sport organization (PSO) of Sport NL and a member of Cycling
Canada (CC) and operates under the authority of the world governing body of cycling,
the Union Cycliste Internationale (UCI).
We are governed by a province-wide volunteer board of directors. There has been a
steady growth in membership through the development and promotion of both
competitive and non-competitive events.
Our mission is to create a well-recognized and safe, province-wide cycling community.
We provide education and leadership to help create a vibrant and healthy cycling
experience for the benefit of members, partners and the public.</p><br></br>
      <b><h2>News</h2></b>
      <ul>
        <li>News Item 1</li>
        <li>News Item 2</li>
        <li>News Item 3</li>
        <li>News Item 4</li>
        <li>News Item 5</li>
      </ul>
      <br></br>
      <Link href="https://ccnbikes.com/#!/">REGISTER HERE!</Link>

      {greeting.map((item, index) => (
        <PortableText key={index} value={item.content} />
      ))}
    </>
  );
}
