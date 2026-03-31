import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-200 py-6">
            {/* Social links for Bicycle NL's official pages */}
            <nav
                aria-label="Bicycle NL social media"
                className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-6 px-4"
            >
                <Link
                    href="https://www.facebook.com/BicycleNL/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-700 hover:text-black"
                >
                    Facebook
                </Link>

                <Link
                    href="https://www.instagram.com/bicyclenl709/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-700 hover:text-black"
                >
                    Instagram
                </Link>

                <Link
                    href="https://x.com/bicyclenl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-700 hover:text-black"
                >
                    X
                </Link>
            </nav>
        </footer>
    );
}