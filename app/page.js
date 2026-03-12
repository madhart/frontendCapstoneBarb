import Image from "next/image";

export default function Home() {
  return (
    <>
      <h2>Rick and Morty Page</h2>
      <p>Welcome to the page, checkout some of the characters</p>
      <Image alt="Eric" src="/Eric.jpg" width={200} height={200}></Image>
    </>
  );
}
