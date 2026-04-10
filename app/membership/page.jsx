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
      <ul className="list-disc pl-6 space-y-2 my-4 text-slate-700">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 space-y-2 my-4 text-slate-700">{children}</ol>
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
        <div className="overflow-x-auto rounded-xl shadow-sm border border-slate-100 my-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#222b31] text-white">
                {value.rows[0]?.cells?.map((cell, cellIdx) => (
                  <th
                    key={cellIdx}
                    scope="col"
                    className="px-5 py-3 text-left text-sm font-semibold uppercase tracking-wide whitespace-nowrap"
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {value.rows.slice(1).map((row, rowIdx) => (
                <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  {row.cells?.map((cell, cellIdx) => (
                    <td key={cellIdx} className="px-5 py-3 text-slate-700 text-sm border-t border-slate-100">
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
    <>
      {/* Page Header */}
      <div className="relative bg-[#222b31] py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2229]/80 to-[#2d2d2d]" />
        <div className="absolute bottom-0 inset-x-0 h-1 bg-blue-500" />
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Membership</h1>
          <p className="text-slate-300 text-lg">Join the BNL cycling community today</p>
        </div>
      </div>

      <main className="mx-auto max-w-5xl px-4 py-10">
      {membershipHeader ? (
        <section className="mb-10 bg-white rounded-xl shadow-sm border border-slate-100 p-8 space-y-4">
          {membershipHeader.content ? (
            <PortableText
              value={membershipHeader.content}
              components={portableTextComponents}
            />
          ) : null}
        </section>
      ) : null}

      <section className="mb-8">
        <Membership />
      </section>

      {tableOnlyContent.length > 0 ? (
        <section className="mb-8 bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          <PortableText value={tableOnlyContent} components={portableTextComponents} />
        </section>
      ) : null}

      {membershipTwelve ? (
        <section className="mb-8 bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          {membershipTwelve.content ? (
            <PortableText
              value={membershipTwelve.content}
              components={portableTextComponents}
            />
          ) : null}
        </section>
      ) : null}

      {membershipNine ? (
        <section className="mb-8 bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          {membershipNine.content ? (
            <PortableText
              value={membershipNine.content}
              components={portableTextComponents}
            />
          ) : null}
        </section>
      ) : null}

      {membershipTen ? (
        <section className="mb-8 bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          {membershipTen.content ? (
            <PortableText
              value={membershipTen.content}
              components={portableTextComponents}
            />
          ) : null}
        </section>
      ) : null}

      {membershipFive ? (
        <section className="mb-8 bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          {membershipFive.content ? (
            <PortableText
              value={membershipFive.content}
              components={portableTextComponents}
            />
          ) : null}
        </section>
      ) : null}

      {membershipSix ? (
        <section className="mb-8 bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          {membershipSix.content ? (
            <PortableText
              value={membershipSix.content}
              components={portableTextComponents}
            />
          ) : null}
        </section>
      ) : null}

      {membershipSeven ? (
        <section className="mb-8 bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          {membershipSeven.content ? (
            <PortableText
              value={membershipSeven.content}
              components={portableTextComponents}
            />
          ) : null}
        </section>
      ) : null}

      <Registration />

      <section className="mt-10 pt-10 border-t border-slate-200">
        <News />
      </section>
    </main>
    </>
  );
}