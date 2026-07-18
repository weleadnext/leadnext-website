# LeadNext Governance Agent Publishing Workflow

This document defines how the LeadNext governance monitoring agent should turn approved freshness findings, civic news scans, and social drafts into reviewed website and social publishing actions.

## Operating Model

The agent should move beyond problem identification. For each approved refresh task, it should prepare a fix package and ask the reviewer only for final approval before publishing.

Core loop:

1. Run the scheduled governance web scan.
2. Compare source-backed findings against the LeadNext website baseline memory.
3. Draft the recommended website update, social post, or both.
4. Add the item to the review queue with source links and memory timeline context.
5. On approval, route the fix to the correct publishing path.
6. Record what changed, who approved it, source URLs, PR or Sanity record references, preview URL, and production URL.

## Daily Scan Tasks

The daily `Web Scan` workflow should initiate these four tasks:

1. Headline consensus scan: compare leading Nigerian news outlets and official releases, identify civic-relevant issues repeated across multiple credible sources, and draft audience-facing social posts.
2. INEC party alignment scan: compare LeadNext political party records against INEC-published party information, including party names, chairpersons, and secretaries where available.
3. INEC calendar and notices scan: check INEC election calendars, notices, result notices, and official announcements for website or social updates.
4. Official profile freshness scan: check official government pages for senators, House of Representatives members, federal cabinet, state cabinets, local government officials, and other public-office profile changes.

The routine schedule target is 6:00 AM Nigeria time.

## Publishing Decision Rule

Classify every approved fix before publishing:

- Sanity content update only: the factual correction already fits the current Sanity schema and website UI.
- GitHub PR only: the change affects routes, components, copy, styling, queries, schema, or workflow code.
- Both: the content requires a Sanity update and the website also needs schema, query, or rendering support.

## Confirmed LeadNext Stack

- Framework: Next.js App Router.
- Main routes live under `app/`.
- Content layer: Sanity.
- Sanity Studio route: `/studio`.
- Deployment path: GitHub pull request preview through Vercel, then production deployment after merge.

## Key Paths

- Home page: `app/page.tsx`.
- Root layout: `app/layout.tsx`.
- Federal government hub: `app/initiatives/politics-and-governance/executive-eye/federal/page.tsx`.
- Federal cabinet page: `app/initiatives/politics-and-governance/executive-eye/federal/cabinet/page.tsx`.
- Political parties page: `app/initiatives/politics-and-governance/political-heart/political-parties/page.tsx`.
- Election results tracker: `app/initiatives/politics-and-governance/elections/results-tracker/page.tsx`.
- Sanity queries: `lib/sanity/queries.ts`.
- Sanity client: `sanity/lib/client.ts`.
- Cabinet schema: `sanity/schemas/cabinet-member.ts`.
- Political party schema: `sanity/schemas/political-party.ts`.

## Website Fix Examples

- Political party alignment: update Sanity `politicalParty` records when the current schema already supports the correction. If chairperson and secretary need to be public-facing fields, open a PR to add schema fields, query them, and render them on the political parties page.
- Federal cabinet freshness: update Sanity `cabinetMember` records when the current schema supports the correction. If source URLs, appointment dates, or current/former status need to be shown publicly, open a PR to add schema fields, query them, and render them on the cabinet page.
- INEC calendar/notices: likely requires a route or component if the current page only tracks election results and does not support notices or calendar records.

## Review Queue Requirements

Each review item should show:

- Proposed website change.
- External source URL.
- LeadNext page URL or affected route.
- Source-to-memory timeline match, including older related records when relevant.
- Confidence level and why the item was flagged.
- Publishing route: Sanity, GitHub PR, or both.
- Reviewer actions: approve, revise, need source, or delete.

`Revise` and `Need Source` should trigger a fix task. `Delete` should remove the item from the active queue while preserving audit history.

## Social Publishing Requirements

Social drafts should be grouped by platform and include:

- Civic engagement framing.
- LeadNext website link when an approved LeadNext item exists.
- External source link.
- Platform-specific copy.
- Delete option before publishing.

For X posts, include both the LeadNext link and the external source link when possible.

## GitHub PR Workflow

Use fork-based PRs when direct branch creation in `weleadnext/leadnext-website` is unavailable.

Current fork route:

- Base repository: `weleadnext/leadnext-website`.
- Base branch: `main`.
- Fork repository: `Lonnewulff/leadnext-website`.
- Working branch pattern: `leadnext/update/<record-slug>`.

PR steps:

1. Start from the fork `main` branch.
2. Create or update a branch named `leadnext/update/<record-slug>`.
3. Apply route, schema, query, component, or documentation changes.
4. Commit with a source-backed message.
5. Open a draft PR into `weleadnext/leadnext-website:main`.
6. Include source links, affected pages, reviewer approval note, and Sanity update notes if applicable.
7. Wait for the Vercel preview.
8. Review the preview for content accuracy, layout, mobile rendering, source links, and broken states.
9. Merge only after preview approval.
10. Record PR URL, Vercel preview URL, production URL, source URL, and reviewer.

## Guardrails

- Do not publish directly from a scan result without review approval.
- Prefer official sources for final factual corrections involving office holders, INEC data, election calendars, and public appointments.
- Use credible news outlets for headline consensus and civic social drafting, but keep factual website updates anchored in official records whenever available.
- Preserve the baseline memory trail so stale or obsolete information can be detected later.
- Never store private credentials, tokens, or secrets in review items, memory records, PRs, or social drafts.
