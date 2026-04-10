'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/company", label: "Company" },
        { href: "/membership", label: "Membership" },
        { href: "/athletePerformance", label: "Athlete Performance" },
        { href: "/events", label: "Events" },
        { href: "/coaching-officials", label: "Coaching & Officials" },
        { href: "/news", label: "News" },
        { href: "/contact", label: "Contact" },
    ];

    const isActive = (href) => {
        if (href === "/" && pathname === "/") return true;
        if (href !== "/" && pathname.startsWith(href)) return true;
        return false;
    };

    return (
        <nav className="bg-[#222b31] shadow-lg sticky top-0 z-50" aria-label="Primary navigation">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo/Brand */}
                    <Link href="/" className="flex items-center py-2 hover:opacity-80 transition-opacity shrink-0">
                        <Image
                            src="/carousel/bicyclenl_logo2_horizontal_30.webp"
                            alt="Bicycle Newfoundland and Labrador Logo"
                            width={140}
                            height={40}
                            priority
                            style={{ objectFit: 'contain', height: 'auto' }}
                        />
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex items-center space-x-0.5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-150 ${
                                    isActive(link.href)
                                        ? "bg-white/20 text-white border-b-2 border-white"
                                        : "text-slate-200 hover:bg-white/10 hover:text-white"
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white hover:text-slate-200 p-2 rounded-md transition-colors"
                        onClick={() => setMobileOpen((prev) => !prev)}
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileOpen}
                    >
                        {mobileOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileOpen && (
                <div className="lg:hidden border-t border-white/10 bg-[#1a2229]">
                    <div className="px-2 py-3 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                                    isActive(link.href)
                                        ? "bg-white/20 text-white"
                                        : "text-slate-200 hover:bg-white/10 hover:text-white"
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}