import {PortableText} from '@portabletext/react'
import {createImageUrlBuilder} from '@sanity/image-url'
import {client} from '@/sanity/lib/client'
import Membership from '@/components/Membership'
import News from '@/components/News'
import Registration from '@/components/Registration'

const builder = createImageUrlBuilder(client)
const urlFor = (source) => builder.image(source)

// These are the rows for the special 2-column comparison table.
const COMPARISON_TABLE_START_ORDER = 3
const COMPARISON_TABLE_END_ORDER = 7

const ATHLETE_PERFORMANCE_QUERY = `
  *[_type == "athletePerformanceInfo"]
  | order(order asc, _createdAt asc) {
    _id,
    title,
    order,
    content
  }
`

function hasNumericOrder(value) {
    return Number.isFinite(Number(value))
}

function isComparisonTableOrder(value) {
    const n = Number(value)
    return Number.isFinite(n) && n >= COMPARISON_TABLE_START_ORDER && n <= COMPARISON_TABLE_END_ORDER
}

const portableTextComponents = {
    block: {
        normal: ({children}) => <p className="mb-4 leading-7">{children}</p>,
    },
    marks: {
        link: ({value, children}) => {
            const href = value?.href || ''
            const isExternal = href.startsWith('http')

            return (
                <a
                    href={href}
                    {...(isExternal ? {target: '_blank', rel: 'noopener noreferrer'} : {})}
                    className="text-blue-600 underline hover:text-blue-800"
                >
                    {children}
                </a>
            )
        },
    },
    types: {
        image: ({value}) => {
            if (!value?.asset) return null
            return (
                <img
                    src={urlFor(value).width(1400).fit('max').auto('format').url()}
                    alt={value?.alt || ''}
                    className="my-4 h-auto w-full rounded"
                />
            )
        },
        // Renderer for table blocks coming from @sanity/table in Portable Text content.
        table: ({value}) => {
            const rows = Array.isArray(value?.rows) ? value.rows : []
            if (!rows.length) return null

            const [headerRow, ...bodyRows] = rows
            const headerCells = Array.isArray(headerRow?.cells) ? headerRow.cells : []

            return (
                <div className="my-6 overflow-x-auto rounded-xl shadow-sm border border-slate-100">
                    <table className="w-full border-collapse">
                        {headerCells.length > 0 && (
                            <thead>
                            <tr className="bg-[#222b31] text-white">
                                {headerCells.map((cell, i) => (
                                    <th
                                        key={`h-${i}`}
                                        className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wide whitespace-nowrap"
                                    >
                                        {cell}
                                    </th>
                                ))}
                            </tr>
                            </thead>
                        )}
                        <tbody>
                        {bodyRows.map((row, rowIndex) => {
                            const cells = Array.isArray(row?.cells) ? row.cells : []
                            return (
                                <tr key={row?._key || `r-${rowIndex}`} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                                    {cells.map((cell, cellIndex) => (
                                        <td key={`c-${rowIndex}-${cellIndex}`} className="px-4 py-3 text-slate-700 text-sm border-t border-slate-100">
                                            {cell}
                                        </td>
                                    ))}
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            )
        },
    },
}

export default async function AthletePerformancePage() {
    const sections = await client.fetch(ATHLETE_PERFORMANCE_QUERY)

    if (!sections?.length) {
        return <main className="mx-auto max-w-5xl p-6">No athlete performance content found.</main>
    }

    const sortedSections = [...sections].sort((a, b) => {
        const aOrder = hasNumericOrder(a.order) ? Number(a.order) : Number.MAX_SAFE_INTEGER
        const bOrder = hasNumericOrder(b.order) ? Number(b.order) : Number.MAX_SAFE_INTEGER
        return aOrder - bOrder
    })

    // Build your special 2-column comparison table from orders 3..7.
    const comparisonTableSections = sortedSections.filter((section) => isComparisonTableOrder(section.order))
    const firstComparisonTableIndex = sortedSections.findIndex(
        (section) => Number(section.order) === COMPARISON_TABLE_START_ORDER
    )

    // Build chronological blocks: normal sections + one injected comparison table block.
    const blocks = []
    let comparisonTableInserted = false

    for (let i = 0; i < sortedSections.length; i += 1) {
        const section = sortedSections[i]
        const inComparisonTableRange = isComparisonTableOrder(section.order)

        if (
            !comparisonTableInserted &&
            i === firstComparisonTableIndex &&
            comparisonTableSections.length > 0
        ) {
            blocks.push({type: 'comparisonTable'})
            comparisonTableInserted = true
        }

        if (!inComparisonTableRange) {
            blocks.push({type: 'section', section})
        }
    }

    // Fallback: if 3 is missing but some 3..7 items exist, append the comparison table.
    if (!comparisonTableInserted && comparisonTableSections.length > 0) {
        blocks.push({type: 'comparisonTable'})
    }

    return (
        <>
            {/* Page Header */}
            <div className="relative bg-[#222b31] py-16 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a2229]/80 to-[#2d2d2d]" />
                <div className="absolute bottom-0 inset-x-0 h-1 bg-blue-500" />
                <div className="relative max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Athlete Performance</h1>
                    <p className="text-slate-300 text-lg">Development programs and performance resources for BNL athletes</p>
                </div>
            </div>

            <main className="mx-auto max-w-5xl px-4 py-10 space-y-8">
                {blocks.map((block, index) => {
                    if (block.type === 'comparisonTable') {
                        return (
                            <section key={`comparison-table-${index}`} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                                <table className="w-full">
                                    <tbody className="divide-y divide-slate-100">
                                    {comparisonTableSections.map((section) => {
                                        const label = section.title?.trim() || `Section ${section.order}`
                                        return (
                                            <tr key={section._id} className="align-top">
                                                <th className="w-1/3 px-6 py-5 text-left font-semibold text-slate-900 bg-slate-50 border-r border-slate-100">{label}</th>
                                                <td className="w-2/3 px-6 py-5">
                                                    {section?.content?.length ? (
                                                        <PortableText value={section.content} components={portableTextComponents} />
                                                    ) : (
                                                        <p className="text-slate-500">No content yet.</p>
                                                    )}
                                                </td>
                                            </tr>
                                        )
                                    })}
                                    </tbody>
                                </table>
                            </section>
                        )
                    }

                    return (
                        <article key={block.section._id} className="bg-white rounded-xl shadow-sm border border-slate-100 p-8">
                            <PortableText value={block.section.content} components={portableTextComponents} />
                        </article>
                    )
                })}

                <section className="pt-6 border-t border-slate-200 space-y-8">
                    <News />
                    <Registration />
                </section>
            </main>
        </>
    )
}