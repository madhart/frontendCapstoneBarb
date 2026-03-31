import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t-4 border-cycling-500 bg-cycling-900 text-white">
            <div className="mx-auto max-w-5xl px-4 py-8">
                {/* Social links for Bicycle NL's official pages */}
                <nav
                    aria-label="Bicycle NL social media"
                    className="flex flex-wrap items-center justify-center gap-6 sm:gap-8"
                >
                    <Link
                        href="https://www.facebook.com/BicycleNL/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-cycling-100 transition hover:text-white hover:underline"
                    >
                        Facebook
                    </Link>

                    <Link
                        href="https://www.instagram.com/bicyclenl709/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-cycling-100 transition hover:text-white hover:underline"
                    >
                        Instagram
                    </Link>

                    <Link
                        href="https://x.com/bicyclenl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-cycling-100 transition hover:text-white hover:underline"
                    >
                        X
                    </Link>
                </nav>

                <div className="mt-6 border-t border-cycling-700 pt-4 text-center text-sm text-cycling-200">
                    <p>
                        &copy; {new Date().getFullYear()} Bicycle Newfoundland and Labrador. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}