import Link from "next/link";

export default async function CoachingOfficials() {
    return (
        <>
            {/* Page Header */}
            <div className="relative bg-[#222b31] py-16 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a2229]/80 to-[#2d2d2d]" />
                <div className="absolute bottom-0 inset-x-0 h-1 bg-blue-500" />
                <div className="relative max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Coaching &amp; Officials</h1>
                    <p className="text-slate-300 text-lg">Resources and information for coaches and officials in Newfoundland and Labrador cycling.</p>
                </div>
            </div>

            <main className="max-w-6xl mx-auto px-4 py-12">
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-10 text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Content Coming Soon</h2>
                    <p className="text-slate-600 leading-relaxed max-w-xl mx-auto mb-8">
                        This page is currently under review. Coaching and officials resources will be available here shortly.
                        In the meantime, please visit the Cycling Canada website or contact us directly.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="https://www.cyclingcanada.ca/coaches-officials/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                        >
                            Visit Cycling Canada
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-block bg-white border border-blue-700 text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                            Contact BNL
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}
