import { PortableText } from "@portabletext/react";
import { client } from "../sanity/lib/client";

const MEMBERSHIP_TABLE_QUERY = `*[_type == "membershipInsuranceInfo" && (order == 2 || order == "2")][0] {
  _id,
  title,
  order,
  content
}`;

const MEMBERSHIP_FALLBACK_QUERY = `*[_type == "membershipInsuranceInfo"] | order(order asc) {
  _id,
  title,
  order,
  content
}`;

const portableTextComponents = {
  types: {
    table: ({ value }) => {
      if (!value || !value.rows) return null;

      return (
        <div className="overflow-x-auto rounded-xl shadow-sm border border-slate-200 my-4">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="bg-[#222b31] text-white text-sm">
                {value.rows[0]?.cells?.map((cell, cellIdx) => (
                  <th
                    key={cellIdx}
                    scope="col"
                    className="px-5 py-3 text-left font-semibold"
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {value.rows.slice(1).map((row, rowIdx) => (
                <tr key={rowIdx} className={`text-sm hover:bg-slate-50 transition-colors ${rowIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                  {row.cells?.map((cell, cellIdx) => (
                    <td key={cellIdx} className="px-5 py-3 text-slate-800">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
  },
};

export default async function Membership() {
  let membershipContent = await client.fetch(MEMBERSHIP_TABLE_QUERY);

  // Fallback for documents where order is stored inconsistently.
  if (!membershipContent) {
    const allMembershipContent = await client.fetch(MEMBERSHIP_FALLBACK_QUERY);
    membershipContent =
      allMembershipContent?.find((item) =>
        item?.content?.some((block) => block?._type === "table")
      ) || null;
  }

  const tableOnlyContent =
    membershipContent?.content?.filter((block) => block?._type === "table") || [];

  return (
    <>
      {tableOnlyContent.length > 0 ? (
        <PortableText value={tableOnlyContent} components={portableTextComponents} />
      ) : (
        <p>
          No table found. Confirm the Sanity document is published and has a table
          block in content.
        </p>
      )}
    </>
  );
}
    