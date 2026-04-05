import Membership from "@/components/Membership";
import News from "@/components/News";
import Sponsors from "@/components/Sponsors";
import Link from 'next/link';
import { client } from "@/sanity/lib/client";

const CONTACT_QUERY = `
            *[_type == "contactInfo"][0]{
            mainHeader,
            mailingAddressHeading,
            mailingAddress,
            generalInquiriesHeading,
            generalInquiriesEmail,
            presidentHeading,
            presidentEmail,
            boardOfDirectorsHeading,
            boardOfDirectorsDescription,
            currentBoardHeading,
            currentBoardTable
        }
            `;

export default async function contactPage() {
    const contact = await client.fetch(CONTACT_QUERY);

    return (
        <main>
            <section className="p-6">
            <h1 className="text-3xl font-bold mb-6">{contact.mainHeader}</h1>

        {/* Mailing Address */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold">{contact.mailingAddressHeading}</h2>
                <p className="mt-2">{contact.mailingAddress}</p>
            </div>

        {/* General Inquiries */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold">{contact.generalInquiriesHeading}</h2>
                <a href={`mailto:${contact.generalInquiriesEmail}`} className="text-blue-600 underline">
                    {contact.generalInquiriesEmail}
                </a>
            </div>

        {/* President */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold">{contact.presidentHeading}</h2>
                <a href={`mailto:${contact.presidentEmail}`} className="text-blue-600 underline">
                    {contact.presidentEmail}
                </a>
            </div>

        {/* Board of Directors */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold">{contact.boardOfDirectorsHeading}</h2>
                <p className="mt-2">{contact.boardOfDirectorsDescription}</p>
            </div>

        {/* Board Table */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold">{contact.currentBoardHeading}</h2>
                <table className="w-full mt-4 border-collapse border border-gray-300">
                    <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 p-2 text-left">Position</th>
                        <th className="border border-gray-300 p-2 text-left">Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {contact.currentBoardTable?.rows?.map((row, idx) => (
                        <tr key={idx}>
                            <td className="border border-gray-300 p-2">{row.cells[0]}</td>
                            <td className="border border-gray-300 p-2">{row.cells[1]}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </section>
            <Membership /><br />
            <News /><br />
        </main>
    );
}