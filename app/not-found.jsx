import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="relative bg-[#222b31] py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2229]/80 to-[#2d2d2d]" />
        <div className="absolute bottom-0 inset-x-0 h-1 bg-blue-500" />
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Page Not Found</h1>
          <p className="text-slate-300 text-lg">That page doesn&apos;t exist or may have moved.</p>
        </div>
      </div>

      <main className="max-w-2xl mx-auto px-4 py-20 text-center">
        <p className="text-8xl font-bold text-blue-500 mb-6 leading-none">404</p>
        <p className="text-slate-600 mb-10 text-lg">
          The page you&apos;re looking for can&apos;t be found.
          Head back home or use the navigation above.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-sm"
        >
          Back to Home
        </Link>
      </main>
    </>
  );
}
