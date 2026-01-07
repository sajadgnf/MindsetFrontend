# Change: Add Blogs List and Blog Detail Pages

## Why

The articles page currently exists but is empty. We need to implement a complete blogs feature that displays a list of blogs from the API and allows users to view individual blog posts. This will provide users with access to blog content dynamically fetched from the backend API.

## What Changes

- Implement blogs list page at `src/app/[lang]/articles/page.tsx` to display all blogs from the API
- Create blog detail page at `src/app/[lang]/articles/[slug]/page.tsx` for individual blog posts
- Add TypeScript types for blog data structure matching the API response
- Integrate with the blogs API endpoint: `https://mindsetapi.azibom.com/api/v1/blogs/`
- Add error handling and loading states for API calls
- Add dictionary entries for blog-related UI text

## Impact

- Affected specs: New capability `blogs` (blog listing and detail views)
- Affected code:
  - `src/app/[lang]/articles/page.tsx` - Blogs list page
  - `src/app/[lang]/articles/[slug]/page.tsx` - Blog detail page (new)
  - `src/types/common.ts` - Blog type definitions
  - `src/dictionaries/fa.json` - Dictionary entries for blogs
  - `src/constants/paths.ts` - Potentially add blog detail path helper
