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

	if (!label && !href) return <span className="opacity-70">—</span>;
	if (!href) return <span>{label || "Registration"}</span>;

	return (
		<Link href={href} className="underline">
			{label || "Registration"}
		</Link>
	);
}

export default async function EventsTable() {
	const items = await client.fetch(EVENTS_QUERY);

	return (
		<section>
			<table className="w-full table-auto border-collapse">
				<thead>
					<tr className="text-left">
						<th className="p-2">Date</th>
						<th className="p-2">Race Name</th>
						<th className="p-2">Discipline</th>
						<th className="p-2">Location</th>
						<th className="p-2">Link to Registration</th>
					</tr>
				</thead>

				<tbody>
					{items.map((item) => (
						<tr key={item._id} className="border-t">
							<td className="p-2">{formatEventDate(item.eventDate)}</td>
							<td className="p-2">{item.raceName || ""}</td>
							<td className="p-2">{item.discipline || ""}</td>
							<td className="p-2">{item.location || ""}</td>
							<td className="p-2">
								<RegistrationCell linkName={item.linkName} linkUrl={item.linkUrl} />
							</td>
						</tr>
					))}

					{items.length === 0 ? (
						<tr className="border-t">
							<td className="p-2 opacity-70" colSpan={5}>
								No events found.
							</td>
						</tr>
					) : null}
				</tbody>
			</table>
		</section>
	);
}

