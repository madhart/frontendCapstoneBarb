import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t-4 border-blue-500 bg-blue-900 text-white mt-12">
            <div className="mx-auto max-w-5xl px-4 py-8">
                {/* Social links for Bicycle NL's official pages */}
                <nav
                    aria-label="Bicycle NL social media"
                    className="flex flex-wrap items-center justify-center gap-6 sm:gap-8"
                >
                    {/* Facebook */}
                    <Link
                        href="https://www.facebook.com/BicycleNL/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:opacity-80"
                        aria-label="Bicycle NL Facebook"
                    >
                        <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                    </Link>

                    {/* Instagram */}
                    <Link
                        href="https://www.instagram.com/bicyclenl709/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:opacity-80"
                        aria-label="Bicycle NL Instagram"
                    >
                        <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                        </svg>
                    </Link>

                    {/* X (Twitter) */}
                    <Link
                        href="https://x.com/bicyclenl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:opacity-80"
                        aria-label="Bicycle NL X"
                    >
                        <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 002.856-3.26c-1.012.505-2.062.805-3.106.902a5.548 5.548 0 002.432-3.06 11.04 11.04 0 01-3.514 1.342 5.523 5.523 0 00-9.404 5.037 15.67 15.67 0 01-11.36-5.773 5.518 5.518 0 001.71 7.38 5.49 5.49 0 01-2.5-.69v.07a5.523 5.523 0 004.435 5.41 5.52 5.52 0 01-2.493.095 5.525 5.525 0 005.159 3.832 11.09 11.09 0 01-6.868 2.369c-.446 0-.888-.027-1.325-.08a15.645 15.645 0 008.455 2.475c10.146 0 15.657-8.433 15.657-15.738 0-.24-.005-.479-.015-.718a11.18 11.18 0 002.739-2.86z"/>
                        </svg>
                    </Link>
                </nav>

                <div className="mt-6 border-t border-blue-700 pt-4 text-center text-sm text-blue-200">
                    <p>
                        &copy; {new Date().getFullYear()} Bicycle Newfoundland and Labrador. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}