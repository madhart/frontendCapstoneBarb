import {PortableText} from '@portabletext/react'
import {createImageUrlBuilder} from '@sanity/image-url'
import {client} from '@/sanity/lib/client'
import EventsTable from '@/components/EventsTable'
import Membership from '@/components/Membership'
import News from '@/components/News'

const builder = createImageUrlBuilder(client)
const urlFor = (source) => builder.image(source)

const EVENTS_PAGE_QUERY = `
  *[_type == "nlCyclingEventsInfo"]
  | order(order asc, _createdAt asc) {
    _id,
    title,
    order,
    content
  }
`

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

function getComponentForTitle(title) {
    const key = String(title || '').trim().toLowerCase()
    if (key === 'membership') return Membership
    if (key === 'news') return News
    if (key === 'contact') return Contact
    return null
}

function isEventsTableDoc(title) {
    const key = String(title || '').trim().toLowerCase()
    return key === 'events table' || key === 'eventstable'
}

export default async function EventsPage() {
    const sections = await client.fetch(EVENTS_PAGE_QUERY)

    if (!sections?.length) {
        return <main className="mx-auto max-w-5xl p-6">No events content found.</main>
    }

    const sortedSections = [...sections].sort((a, b) => {
        const aOrder = Number.isFinite(Number(a.order)) ? Number(a.order) : Number.MAX_SAFE_INTEGER
        const bOrder = Number.isFinite(Number(b.order)) ? Number(b.order) : Number.MAX_SAFE_INTEGER
        return aOrder - bOrder
    })

    // Keep everything with order <= 2 above EventsTable.
    const topSections = sortedSections.filter((s) => Number(s.order) <= 2 && !isEventsTableDoc(s.title))

    // Everything else goes below EventsTable.
    const bottomSections = sortedSections.filter((s) => Number(s.order) > 2 && !isEventsTableDoc(s.title))

    const renderSection = (section) => {
        const Component = getComponentForTitle(section.title)

        if (Component) {
            return (
                <section key={section._id}>
                    <Component />
                </section>
            )
        }

        return (
            <article key={section._id}>
                {section?.content?.length ? (
                    <PortableText value={section.content} components={portableTextComponents} />
                ) : (
                    <p className="text-gray-500">No content yet.</p>
                )}
            </article>
        )
    }

    return (
        <>
            {/* Page Header */}
                <div className="relative bg-[#222b31] py-16 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a2229]/80 to-[#2d2d2d]" />
                <div className="absolute bottom-0 inset-x-0 h-1 bg-blue-500" />
                <div className="relative max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Events</h1>
                    <p className="text-slate-300 text-lg">Upcoming cycling events in Newfoundland and Labrador</p>
                </div>
            </div>

            <main className="mx-auto max-w-5xl px-4 py-10 space-y-8">
                {topSections.map(renderSection)}

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-blue-500 pb-3 mb-6">Event Schedule</h2>
                    <EventsTable />
                </section>

                {bottomSections.map(renderSection)}
            </main>
        </>
    )
}