## 1. Type Definitions
- [ ] 1.1 Create TypeScript interfaces for Blog and Author types in `src/types/common.ts`
- [ ] 1.2 Match types to API response structure (author, content, dates, slug, status, etc.)

## 2. API Integration
- [ ] 2.1 Create API utility function to fetch blogs list from `https://mindsetapi.azibom.com/api/v1/blogs/`
- [ ] 2.2 Create API utility function to fetch single blog by slug
- [ ] 2.3 Add error handling for API failures
- [ ] 2.4 Handle edge cases (empty responses, null fields)

## 3. Blogs List Page
- [ ] 3.1 Implement blogs list page at `src/app/[lang]/articles/page.tsx`
- [ ] 3.2 Fetch blogs from API in server component
- [ ] 3.3 Display blog cards with title, summary (if available), author, and date
- [ ] 3.4 Add link to individual blog post using slug
- [ ] 3.5 Add loading state handling
- [ ] 3.6 Add error state UI
- [ ] 3.7 Style consistently with existing pages

## 4. Blog Detail Page
- [ ] 4.1 Create dynamic route at `src/app/[lang]/articles/[slug]/page.tsx`
- [ ] 4.2 Fetch blog post by slug in server component
- [ ] 4.3 Display full blog content with title, author, dates, and content
- [ ] 4.4 Handle blog not found (404) case
- [ ] 4.5 Add loading state handling
- [ ] 4.6 Add error state UI
- [ ] 4.7 Style consistently with existing pages
- [ ] 4.8 Add back navigation or breadcrumb

## 5. Dictionary Entries
- [ ] 5.1 Add blog-related dictionary entries to `src/dictionaries/fa.json`
- [ ] 5.2 Include entries for: "read more", "published on", "author", "back to articles", error messages

## 6. Path Constants (if needed)
- [ ] 6.1 Add blog detail path helper to `src/constants/paths.ts` if needed for navigation

## 7. Validation
- [ ] 7.1 Test blogs list page displays correctly
- [ ] 7.2 Test blog detail page displays correctly
- [ ] 7.3 Test error handling (API failure, blog not found)
- [ ] 7.4 Test with different blog statuses (draft, published)
- [ ] 7.5 Verify RTL layout works correctly
- [ ] 7.6 Verify responsive design

