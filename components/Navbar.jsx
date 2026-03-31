import Link from "next/link";

export default function Navbar() {
    return (
        <nav aria-label="Primary navigation">
            <Link href="/">Home</Link>
            <Link href="/characters">Characters</Link>
            <Link href="/company">Company</Link>
        </nav>
    );
}