import { PortableText } from "@portabletext/react";
import { client } from "../../sanity/lib/client";
import Membership from "../../components/Membership";
import Registration from "../../components/Registration";
import News from "../../components/News";

const MEMBERSHIP_HEADER_QUERY = `*[_type == "membershipInsuranceInfo" && (order == 1 || order == "1")][0]{
  _id,
  title,
  order,
  content
}`;

const MEMBERSHIP_TABLE_QUERY = `*[_type == "membershipInsuranceInfo" && (order == 4 || order == "4")][0]{
  _id,
  title,
  order,
  content
}`;

const MEMBERSHIP_FIVE_QUERY = `*[_type == "membershipInsuranceInfo" && (order == 5 || order == "5")][0]{
  _id,
  title,
  order,
  content
}`;

const MEMBERSHIP_SIX_QUERY = `*[_type == "membershipInsuranceInfo" && (order == 6 || order == "6")][0]{
  _id,
  title,
  order,
  content
}`;

const MEMBERSHIP_SEVEN_QUERY = `*[_type == "membershipInsuranceInfo" && (order == 7 || order == "7")][0]{
  _id,
  title,
  order,
  content
}`;

const MEMBERSHIP_NINE_QUERY = `*[_type == "membershipInsuranceInfo" && (order == 9 || order == "9")][0]{
  _id,
  title,
  order,
  content
}`;

const MEMBERSHIP_TEN_QUERY = `*[_type == "membershipInsuranceInfo" && (order == 10 || order == "10")][0]{
  _id,
  title,
  order,
  content
}`;

const MEMBERSHIP_TWELVE_QUERY = `*[_type == "membershipInsuranceInfo" && (order == 12 || order == "12")][0]{
  _id,
  title,
  order,
  content
}`;

const MEMBERSHIP_FALLBACK_QUERY = `*[_type == "membershipInsuranceInfo"] | order(order asc){
  _id,
  title,
  order,
  content
}`;

const portableTextComponents = {
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 space-y-2 my-4 text-gray-800">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 space-y-2 my-4 text-gray-800">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  types: {
    table: ({ value }) => {
      if (!value || !value.rows) return null;

      return (
        <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-md my-6">
          <thead>
            <tr className="bg-blue-100 border-b border-blue-200">
              {value.rows[0]?.cells?.map((cell, cellIdx) => (
                <th
                  key={cellIdx}
                  scope="col"
                  className="px-6 py-4 text-left text-blue-900 font-semibold"
                >
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {value.rows.slice(1).map((row, rowIdx) => (
              <tr key={rowIdx} className="border-b border-gray-200 hover:bg-blue-50">
                {row.cells?.map((cell, cellIdx) => (
                  <td key={cellIdx} className="px-6 py-4 text-gray-800">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    },
  },
};

export default async function MembershipPage() {
  const membershipHeader = await client.fetch(MEMBERSHIP_HEADER_QUERY);
  let membershipContent = await client.fetch(MEMBERSHIP_TABLE_QUERY);
  const membershipFive = await client.fetch(MEMBERSHIP_FIVE_QUERY);
  const membershipSix = await client.fetch(MEMBERSHIP_SIX_QUERY);
  const membershipSeven = await client.fetch(MEMBERSHIP_SEVEN_QUERY);
  const membershipNine = await client.fetch(MEMBERSHIP_NINE_QUERY);
  const membershipTen = await client.fetch(MEMBERSHIP_TEN_QUERY);
  const membershipTwelve = await client.fetch(MEMBERSHIP_TWELVE_QUERY);

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
    <main className="mx-auto max-w-5xl px-4 py-10">
      {membershipHeader ? (
        <section className="mb-10 space-y-4 border-b border-slate-200 pb-8">
          {membershipHeader.content ? (
            <PortableText
              value={membershipHeader.content}
              components={portableTextComponents}
            />
          ) : null}
        </section>
      ) : null}

      <section className="space-y-4 border-b border-slate-200 py-8">
        <Membership />
      </section>

      {tableOnlyContent.length > 0 ? (
        <section className="space-y-4 border-b border-slate-200 py-8">
          <PortableText value={tableOnlyContent} components={portableTextComponents} />
        </section>
      ) : (
        <p className="py-8 text-slate-600">
          No table found. Confirm the Sanity document is published and has a table
          block in content.
        </p>
      )}

      {membershipTwelve ? (
        <section className="space-y-4 border-b border-slate-200 py-8">
          {membershipTwelve.content ? (
            <PortableText
              value={membershipTwelve.content}
              components={portableTextComponents}
            />
          ) : null}
        </section>
      ) : null}

      {membershipNine ? (
        <section className="space-y-4 border-b border-slate-200 py-8">
          {membershipNine.content ? (
            <PortableText
              value={membershipNine.content}
              components={portableTextComponents}
            />
          ) : null}
        </section>
      ) : null}

      {membershipTen ? (
        <section className="space-y-4 border-b border-slate-200 py-8">
          {membershipTen.content ? (
            <PortableText
              value={membershipTen.content}
              components={portableTextComponents}
            />
          ) : null}
        </section>
      ) : null}

      {membershipFive ? (
        <section className="space-y-4 border-b border-slate-200 py-8">
          {membershipFive.content ? (
            <PortableText
              value={membershipFive.content}
              components={portableTextComponents}
            />
          ) : null}
        </section>
      ) : null}

      {membershipSix ? (
        <section className="space-y-4 py-8">
          {membershipSix.content ? (
            <PortableText
              value={membershipSix.content}
              components={portableTextComponents}
            />
          ) : null}
        </section>
      ) : null}

      {membershipSeven ? (
        <section className="space-y-4 border-b border-t border-slate-200 py-8">
          {membershipSeven.content ? (
            <PortableText
              value={membershipSeven.content}
              components={portableTextComponents}
            />
          ) : null}
        </section>
      ) : null}

      <section className="space-y-4 border-b border-slate-200 py-8">
        <Registration />
      </section>

      <section className="space-y-4 py-8">
        <News />
      </section>
    </main>
  );
}