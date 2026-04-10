import Link from "next/link";
import { defineQuery } from "next-sanity";

import { client } from "@/sanity/lib/client";

const EVENTS_QUERY = defineQuery(`
	*[_type == "eventItem"]
		| order(coalesce(eventDate, "9999-12-31") asc){
			_id,
			eventDate,
			raceName,
			discipline,
			location,
			linkName,
			linkUrl
		}
`);

function formatEventDate(value) {
	if (!value) return "TBD";
	if (typeof value !== "string") return "TBD";

	const match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
	if (!match) return "TBD";

	const year = Number(match[1]);
	const month = Number(match[2]);
	const day = Number(match[3]);

	const date = new Date(Date.UTC(year, month - 1, day));
	if (Number.isNaN(date.getTime())) return "TBD";

	return new Intl.DateTimeFormat("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
		timeZone: "UTC",
	}).format(date);
}

function RegistrationCell({ linkName, linkUrl }) {
	const label = (linkName || "").trim();
	const href = (linkUrl || "").trim();

	if (!label && !href) return <span className="text-slate-400">—</span>;
	if (!href) return <span className="text-slate-600">{label || "Registration"}</span>;

	return (
		<Link
			href={href}
			className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded-md transition-colors"
			target="_blank"
			rel="noopener noreferrer"
		>
			{label || "Register"}
		</Link>
	);
}

export default async function EventsTable() {
	const items = await client.fetch(EVENTS_QUERY);

	return (
		<section>
			<div className="overflow-x-auto rounded-xl shadow-sm border border-slate-200">
				<table className="w-full table-auto">
					<thead>
						<tr className="bg-[#222b31] text-white text-sm">
							<th className="px-4 py-3 text-left font-semibold">Date</th>
							<th className="px-4 py-3 text-left font-semibold">Race Name</th>
							<th className="px-4 py-3 text-left font-semibold">Discipline</th>
							<th className="px-4 py-3 text-left font-semibold">Location</th>
							<th className="px-4 py-3 text-left font-semibold">Registration</th>
						</tr>
					</thead>

					<tbody className="divide-y divide-slate-100">
						{items.map((item, idx) => (
							<tr
								key={item._id}
								className={`text-sm hover:bg-slate-50 transition-colors ${
									idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'
								}`}
							>
								<td className="px-4 py-3 text-slate-700 whitespace-nowrap font-medium">{formatEventDate(item.eventDate)}</td>
								<td className="px-4 py-3 text-slate-900 font-medium">{item.raceName || ""}</td>
								<td className="px-4 py-3 text-slate-600">{item.discipline || ""}</td>
								<td className="px-4 py-3 text-slate-600">{item.location || ""}</td>
								<td className="px-4 py-3">
									<RegistrationCell linkName={item.linkName} linkUrl={item.linkUrl} />
								</td>
							</tr>
						))}

						{items.length === 0 && (
							<tr>
								<td className="px-4 py-8 text-slate-500 text-center" colSpan={5}>
									No upcoming events found.
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</section>
	);
}

