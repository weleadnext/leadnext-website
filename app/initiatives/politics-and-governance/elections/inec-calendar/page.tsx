import { FadeIn } from '@/components/animations/FadeIn'
import { client } from '@/sanity/lib/client'
import { INEC_ELECTION_CALENDAR_QUERY } from '@/lib/sanity/queries'
import { ArrowLeft, CalendarDays, ExternalLink, Info } from 'lucide-react'
import Link from 'next/link'

export const revalidate = 60

interface InecCalendarItem {
  _id: string
  title: string
  electionDate: string
  status: 'upcoming' | 'past' | 'watch' | 'archived'
  scope?: string
  state?: string
  sourceUrl?: string
  lastVerified?: string
  publicNote?: string
}

function formatDate(value?: string) {
  if (!value) return 'Date pending'
  const parsedDate = new Date(`${value}T00:00:00Z`)
  if (Number.isNaN(parsedDate.getTime())) return value

  return new Intl.DateTimeFormat('en-NG', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(parsedDate)
}

function statusLabel(status?: string) {
  return String(status || 'watch')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
}

function statusClass(status?: string) {
  if (status === 'upcoming') return 'bg-emerald-50 text-emerald-700 border-emerald-100'
  if (status === 'past') return 'bg-slate-100 text-slate-600 border-slate-200'
  if (status === 'archived') return 'bg-gray-100 text-gray-500 border-gray-200'
  return 'bg-amber-50 text-amber-700 border-amber-100'
}

export default async function InecCalendarPage() {
  const items = await client.fetch<InecCalendarItem[]>(INEC_ELECTION_CALENDAR_QUERY)
  const upcomingCount = items.filter((item) => item.status === 'upcoming').length
  const lastVerified = items
    .map((item) => item.lastVerified)
    .filter(Boolean)
    .sort()
    .at(-1)

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-navy px-6 py-12 text-white">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <Link
              href="/initiatives/politics-and-governance/elections"
              className="mb-6 inline-flex items-center gap-2 text-teal transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Elections</span>
            </Link>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-3 flex items-center gap-3 text-gold">
                  <CalendarDays className="h-7 w-7" />
                  <span className="text-sm font-bold uppercase tracking-widest">INEC Source Watch</span>
                </div>
                <h1 className="font-serif text-4xl font-bold md:text-5xl">INEC Election Calendar</h1>
                <p className="mt-4 max-w-3xl text-lg text-gray-200">
                  Source-backed election dates monitored from official INEC publications and reviewed before public updates.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="border border-white/15 bg-white/10 p-4">
                  <p className="text-gray-300">Upcoming</p>
                  <p className="mt-1 text-2xl font-bold">{upcomingCount}</p>
                </div>
                <div className="border border-white/15 bg-white/10 p-4">
                  <p className="text-gray-300">Last Verified</p>
                  <p className="mt-1 font-semibold">{formatDate(lastVerified)}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <FadeIn>
          {items.length === 0 ? (
            <div className="border border-gray-200 bg-white p-10 text-center">
              <CalendarDays className="mx-auto mb-4 h-12 w-12 text-gray-300" />
              <h2 className="text-lg font-semibold text-navy">No calendar records published yet</h2>
              <p className="mt-2 text-gray-600">
                Reviewed INEC calendar records will appear here after they are approved and published through Sanity.
              </p>
            </div>
          ) : (
            <div className="overflow-hidden border border-gray-200 bg-white">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
                  <thead className="bg-slate-100 text-xs uppercase tracking-wide text-gray-600">
                    <tr>
                      <th className="px-5 py-4 font-bold">Election</th>
                      <th className="px-5 py-4 font-bold">Date</th>
                      <th className="px-5 py-4 font-bold">Scope</th>
                      <th className="px-5 py-4 font-bold">Status</th>
                      <th className="px-5 py-4 font-bold">Source</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {items.map((item) => (
                      <tr key={item._id} className="align-top">
                        <td className="px-5 py-4">
                          <p className="font-semibold text-navy">{item.title}</p>
                          {item.publicNote && <p className="mt-2 max-w-xl text-gray-600">{item.publicNote}</p>}
                          {item.lastVerified && (
                            <p className="mt-2 text-xs text-gray-500">Verified {formatDate(item.lastVerified)}</p>
                          )}
                        </td>
                        <td className="whitespace-nowrap px-5 py-4 font-medium text-gray-900">
                          {formatDate(item.electionDate)}
                        </td>
                        <td className="px-5 py-4 text-gray-700">
                          {[item.scope, item.state].filter(Boolean).join(' - ') || 'Not specified'}
                        </td>
                        <td className="px-5 py-4">
                          <span className={`inline-flex border px-3 py-1 text-xs font-bold ${statusClass(item.status)}`}>
                            {statusLabel(item.status)}
                          </span>
                        </td>
                        <td className="px-5 py-4">
                          {item.sourceUrl ? (
                            <a
                              href={item.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 font-semibold text-navy hover:text-gold"
                            >
                              INEC
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          ) : (
                            <span className="text-gray-400">Pending</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </FadeIn>

        <div className="mt-8 flex items-start gap-3 border border-blue-100 bg-blue-50 p-4 text-sm text-blue-900">
          <Info className="mt-0.5 h-4 w-4 shrink-0" />
          <p>
            Election dates should be checked against INEC before public action. LeadNext keeps this page source-backed and
            review-gated to reduce the risk of stale voter information.
          </p>
        </div>
      </section>
    </main>
  )
}
