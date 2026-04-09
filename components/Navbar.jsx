'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/company", label: "Company" },
        { href: "/membership", label: "Membership" },
        { href: "/athletePerformance", label: "Athlete Performance" },
        { href: "/events", label: "Events" },
        { href: "/news", label: "News" },
        { href: "/contact", label: "Contact" },
    ];

    const isActive = (href) => {
        if (href === "/" && pathname === "/") return true;
        if (href !== "/" && pathname.startsWith(href)) return true;
        return false;
    };

    return (
        <nav className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg" aria-label="Primary navigation">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo/Brand */}
                    <Link href="/" className="text-xl font-bold text-white hover:text-blue-100 transition-colors">
                        BNL
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                    isActive(link.href)
                                        ? "bg-blue-800 text-white"
                                        : "text-blue-100 hover:bg-blue-600 hover:text-white"
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button (placeholder for future implementation) */}
                    <button className="md:hidden text-white hover:text-blue-100">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}