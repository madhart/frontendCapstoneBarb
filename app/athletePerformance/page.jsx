import {PortableText} from '@portabletext/react'
import imageUrlBuilder from '@sanity/image-url'
import {client} from '@/sanity/lib/client'
import Membership from '@/components/Membership'
import News from '@/components/News'

const builder = imageUrlBuilder(client)
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
                <div className="my-6 overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                        {headerCells.length > 0 && (
                            <thead>
                            <tr>
                                {headerCells.map((cell, i) => (
                                    <th
                                        key={`h-${i}`}
                                        className="border border-gray-300 bg-gray-100 px-3 py-2 text-left font-semibold"
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
                                <tr key={row?._key || `r-${rowIndex}`}>
                                    {cells.map((cell, cellIndex) => (
                                        <td key={`c-${rowIndex}-${cellIndex}`} className="border border-gray-300 px-3 py-2">
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
        <main className="mx-auto max-w-5xl p-6 space-y-8">
            {blocks.map((block, index) => {
                if (block.type === 'comparisonTable') {
                    return (
                        <section key={`comparison-table-${index}`}>
                            <table className="w-full border-collapse">
                                <tbody>
                                {comparisonTableSections.map((section) => {
                                    const label = section.title?.trim() || `Section ${section.order}`
                                    return (
                                        <tr key={section._id} className="align-top border-b border-gray-200">
                                            <th className="w-1/3 p-4 text-left font-semibold text-gray-900">{label}</th>
                                            <td className="w-2/3 p-4">
                                                {section?.content?.length ? (
                                                    <PortableText value={section.content} components={portableTextComponents} />
                                                ) : (
                                                    <p className="text-gray-500">No content yet.</p>
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
                    <article key={block.section._id}>
                        <PortableText value={block.section.content} components={portableTextComponents} />
                    </article>
                )
            })}

            <article>
                <News />
                <Membership />
            </article>
        </main>
    )
}