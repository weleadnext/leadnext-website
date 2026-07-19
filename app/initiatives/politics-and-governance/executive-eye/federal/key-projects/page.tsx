import { FadeIn } from '@/components/animations/FadeIn'
import { client } from '@/sanity/lib/client'
import { FEDERAL_PROJECTS_QUERY } from '@/lib/sanity/queries'
import { ArrowLeft, BriefcaseBusiness, CalendarClock, ExternalLink, MapPin, WalletCards } from 'lucide-react'
import Link from 'next/link'

export const revalidate = 60

interface ProjectTimelineEvent {
  eventDate?: string
  status?: string
  title: string
  summary?: string
  sourceName?: string
  sourceUrl?: string
}

interface FederalProject {
  _id: string
  title: string
  sector?: string
  implementingAgency?: string
  location?: string
  status: string
  cost?: number
  costText?: string
  timeline?: string
  startDate?: string
  expectedCompletionDate?: string
  summary: string
  sourceName: string
  sourceType: string
  sourceUrl: string
  lastVerified?: string
  timelineEvents?: ProjectTimelineEvent[]
}

function formatDate(value?: string) {
  if (!value) return ''
  const parsedDate = new Date(`${value}T00:00:00Z`)
  if (Number.isNaN(parsedDate.getTime())) return value

  return new Intl.DateTimeFormat('en-NG', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(parsedDate)
}

function formatStatus(value?: string) {
  return String(value || 'needs_verification')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
}

function statusClass(value?: string) {
  if (value === 'completed' || value === 'commissioned') return 'bg-emerald-50 text-emerald-700 border-emerald-100'
  if (value === 'ongoing' || value === 'flagged_off') return 'bg-blue-50 text-blue-700 border-blue-100'
  if (value === 'delayed') return 'bg-red-50 text-red-700 border-red-100'
  if (value === 'approved' || value === 'awarded') return 'bg-amber-50 text-amber-700 border-amber-100'
  return 'bg-slate-100 text-slate-600 border-slate-200'
}

function costLabel(project: FederalProject) {
  if (project.costText) return project.costText
  if (!project.cost) return 'Cost pending'

  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(project.cost)
}

export default async function KeyProjectsPage() {
  const projects = await client.fetch<FederalProject[]>(FEDERAL_PROJECTS_QUERY)
  const activeCount = projects.filter((project) => ['ongoing', 'flagged_off', 'awarded'].includes(project.status)).length
  const verifiedCount = projects.filter((project) => project.lastVerified).length

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-navy px-6 py-12 text-white">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <Link
              href="/initiatives/politics-and-governance/executive-eye/federal"
              className="mb-6 inline-flex items-center gap-2 text-teal transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Federal Government</span>
            </Link>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-3 flex items-center gap-3 text-gold">
                  <BriefcaseBusiness className="h-7 w-7" />
                  <span className="text-sm font-bold uppercase tracking-widest">Executive Eye</span>
                </div>
                <h1 className="font-serif text-4xl font-bold md:text-5xl">Federal Key Projects</h1>
                <p className="mt-4 max-w-3xl text-lg text-gray-200">
                  Source-backed federal project records with cost, timeline, delivery status, and update trails.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="border border-white/15 bg-white/10 p-4">
                  <p className="text-gray-300">Tracked Projects</p>
                  <p className="mt-1 text-2xl font-bold">{projects.length}</p>
                </div>
                <div className="border border-white/15 bg-white/10 p-4">
                  <p className="text-gray-300">Active Signals</p>
                  <p className="mt-1 text-2xl font-bold">{activeCount || verifiedCount}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <FadeIn>
          {projects.length === 0 ? (
            <div className="border border-gray-200 bg-white p-10 text-center">
              <BriefcaseBusiness className="mx-auto mb-4 h-12 w-12 text-gray-300" />
              <h2 className="text-lg font-semibold text-navy">No federal projects published yet</h2>
              <p className="mt-2 text-gray-600">
                Reviewed project scanner records will appear here after approval and Sanity publishing.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {projects.map((project) => (
                <article key={project._id} className="border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
                        {project.sector || 'Federal Project'}
                      </p>
                      <h2 className="mt-2 font-serif text-2xl font-bold text-navy">{project.title}</h2>
                      {project.implementingAgency && (
                        <p className="mt-2 text-sm font-medium text-gray-700">{project.implementingAgency}</p>
                      )}
                    </div>
                    <span className={`inline-flex border px-3 py-1 text-xs font-bold ${statusClass(project.status)}`}>
                      {formatStatus(project.status)}
                    </span>
                  </div>

                  <p className="mt-5 text-gray-700">{project.summary}</p>

                  <div className="mt-6 grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
                    <div className="border border-gray-100 bg-slate-50 p-3">
                      <div className="mb-1 flex items-center gap-2 text-gray-500">
                        <WalletCards className="h-4 w-4" />
                        <span>Cost</span>
                      </div>
                      <p className="font-semibold text-navy">{costLabel(project)}</p>
                    </div>
                    <div className="border border-gray-100 bg-slate-50 p-3">
                      <div className="mb-1 flex items-center gap-2 text-gray-500">
                        <CalendarClock className="h-4 w-4" />
                        <span>Timeline</span>
                      </div>
                      <p className="font-semibold text-navy">{project.timeline || 'Timeline pending'}</p>
                    </div>
                    <div className="border border-gray-100 bg-slate-50 p-3">
                      <div className="mb-1 flex items-center gap-2 text-gray-500">
                        <MapPin className="h-4 w-4" />
                        <span>Location</span>
                      </div>
                      <p className="font-semibold text-navy">{project.location || 'Location pending'}</p>
                    </div>
                  </div>

                  {project.timelineEvents?.length ? (
                    <div className="mt-6 border-t border-gray-100 pt-5">
                      <h3 className="text-sm font-bold uppercase tracking-wide text-gray-500">Timeline Updates</h3>
                      <div className="mt-4 space-y-4">
                        {project.timelineEvents.slice(0, 4).map((event) => (
                          <div key={`${event.title}-${event.eventDate || event.sourceUrl}`} className="border-l-2 border-teal pl-4">
                            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                              {[formatDate(event.eventDate), formatStatus(event.status)].filter(Boolean).join(' - ')}
                            </p>
                            <p className="mt-1 font-semibold text-navy">{event.title}</p>
                            {event.summary && <p className="mt-1 text-sm text-gray-600">{event.summary}</p>}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-gray-500">
                    {project.lastVerified && <span>Verified {formatDate(project.lastVerified)}</span>}
                    <span>{project.sourceType}</span>
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-navy hover:text-gold"
                    >
                      {project.sourceName || 'Source'}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </FadeIn>
      </section>
    </main>
  )
}
