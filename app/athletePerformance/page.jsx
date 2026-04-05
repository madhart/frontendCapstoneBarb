import Membership from "@/components/Membership";
import News from "@/components/News";
import Image from "next/image";
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/sanity/lib/client';

export default async function athletePerformance(){
    const ATHLETE_QUERY = `*[_type == "athletePerformanceInfo"][0]{
        mainHeader,
        athletePerformanceDescription,
        cyclingActivitySubheading,
        cyclingActivityDescription,
        cyclingActivityTable,
        contact,
        highPerformanceSubheading,
        highPerformanceDescription,
        roadHighPerformanceSubheading,
        roadHighPerformanceAddress,
        mountainHighPerformanceSubheading,
        mountainHighPerformanceAddress,
        canadaGamesSubheading,
        canadaGamesDescription,
        teamsTable,
        teamLocationDescription,
        roadTeamImage,
        mountainTeamImage,
        teamExpectationsSubheading,
        teamExpectations
    }`;

    const athlete = await client.fetch(ATHLETE_QUERY);

    if (!athlete) return <div>Loading...</div>;

    return (
        <main style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <h1>{athlete.mainHeader}</h1>

            <div>
                <PortableText value={athlete.athletePerformanceDescription} />
            </div>

            <h2>{athlete.cyclingActivitySubheading}</h2>
            <div>
                <PortableText value={athlete.cyclingActivityDescription} />
            </div>

            {/* Cycling Activity Table */}
            <table border="1" style={{ width: '100%', marginBottom: '20px' }}>
                <tbody>
                {athlete.cyclingActivityTable?.rows?.map((row, idx) => (
                    <tr key={idx}>
                        <td style={{ padding: '10px', fontWeight: 'bold' }}>{row.cells[0]}</td>
                        <td style={{ padding: '10px' }}>{row.cells[1]}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div>
                <PortableText value={athlete.contact} />
            </div>

            <h2>{athlete.highPerformanceSubheading}</h2>
            <div>
                <PortableText value={athlete.highPerformanceDescription} />
            </div>

            <h3>{athlete.roadHighPerformanceSubheading}</h3>
            <a href={`mailto:${athlete.roadHighPerformanceAddress}`}>{athlete.roadHighPerformanceAddress}</a>

            <h3>{athlete.mountainHighPerformanceSubheading}</h3>
            <a href={`mailto:${athlete.mountainHighPerformanceAddress}`}>{athlete.mountainHighPerformanceAddress}</a>

            <h2>{athlete.canadaGamesSubheading}</h2>
            <div>
                <PortableText value={athlete.canadaGamesDescription} />
            </div>

            {/* Teams Table */}
            <table border="1" style={{ width: '100%', marginBottom: '20px' }}>
                <tbody>
                {athlete.teamsTable?.rows?.map((row, idx) => (
                    <tr key={idx}>
                        <td style={{ padding: '10px' }}>{row.cells[0]}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div>
                <PortableText value={athlete.teamLocationDescription} />
            </div>

            {/* Images */}
            {athlete.roadTeamImage && (
                <img src={urlFor(athlete.roadTeamImage).url()} alt="Road Team" style={{ maxWidth: '100%', height: 'auto' }} />
            )}
            {athlete.mountainTeamImage && (
                <img src={urlFor(athlete.mountainTeamImage).url()} alt="Mountain Team" style={{ maxWidth: '100%', height: 'auto' }} />
            )}

            <h2>{athlete.teamExpectationsSubheading}</h2>
            <div>
                <PortableText value={athlete.teamExpectations} />
            </div>

            <News />
            <Membership />
        </main>
    )
}