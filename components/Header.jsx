import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <>
        {/* Header component with logo and navigation links, temporarily the image is out of position and is a placeholder. Styling will be added later */}
        <Image alt="Bicycle NL Logo" src="/next.svg" width={100} height={100}></Image>
        <Link href="/">Home</Link>
        <Link href="/characters">Characters</Link>
        <Link href="/company">Company</Link>
        </>
    )
}