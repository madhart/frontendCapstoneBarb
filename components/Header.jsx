import Link from "next/link";
export default function Header() {
    return (
        <>
        <Link href="/">Home</Link>
        <Link href="/characters">Characters</Link>
        <Link href="/company">Company</Link>
        </>
    )
}