# Design: Blogs Feature Implementation

## Context
The project uses Next.js 16 with App Router. Pages are server components that fetch data server-side. The project follows an i18n pattern with dictionaries for Persian (fa) language. The blogs API returns dynamic data that needs to be fetched and displayed.

## Goals / Non-Goals

### Goals
- Display list of blogs fetched from the API on the articles page
- Display individual blog post content using slug-based routing
- Handle loading and error states gracefully
- Maintain consistency with existing page patterns (async server components, dictionary usage)
- Support RTL layout for Persian content

### Non-Goals
- Blog creation/editing functionality (admin features)
- Comments or interaction features
- Search or filtering on the list page (can be added later)
- Pagination (assume API returns all blogs for now)

## Decisions

### Decision: Server-Side Data Fetching
**What**: Use Next.js server components with async/await for API calls
**Why**: 
- Consistent with existing page patterns (about, mentorship pages)
- Better SEO and initial load performance
- No client-side JavaScript needed for data fetching

**Alternatives considered**:
- Client-side fetching with useEffect: Rejected due to SEO concerns and inconsistency with existing patterns
- Static generation with ISR: Could be considered later if needed, but dynamic fetching is simpler for now

### Decision: Slug-Based Routing
**What**: Use Next.js dynamic route `[slug]` for individual blog posts
**Why**:
- Clean URLs: `/fa/articles/New_Blog_Post`
- Standard Next.js pattern
- Slug is provided by API

**Alternatives considered**:
- ID-based routing: Rejected in favor of SEO-friendly slugs

### Decision: Type Safety
**What**: Create TypeScript interfaces matching the API response structure
**Why**:
- Type safety for API data
- Better developer experience
- Catch errors at compile time

### Decision: Error Handling Strategy
**What**: Display user-friendly error messages when API calls fail
**Why**:
- Better UX than blank pages or crashes
- Allows graceful degradation

**Alternatives considered**:
- Silent failures: Rejected for better user experience

## Risks / Trade-offs

### Risk: API Availability
**Mitigation**: Implement proper error handling and fallback UI

### Risk: Large Number of Blogs
**Mitigation**: Start with simple list display. Can add pagination later if needed.

### Risk: Missing or Null Fields
**Mitigation**: Handle optional fields (like `summary`, `published_at`) gracefully with null checks

## Migration Plan
- No migration needed - this is a new feature
- Existing empty articles page will be replaced with functional implementation

## Open Questions
- Should we filter by `status` field (e.g., only show published blogs)?
- Should we sort blogs by `published_at` or `created_at`?
- Do we need to handle blog post images/cover images?

