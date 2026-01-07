## ADDED Requirements

### Requirement: Blogs List Display
The system SHALL display a list of all blogs fetched from the API on the articles page.

#### Scenario: Successful blogs list display
- **WHEN** a user navigates to the articles page
- **THEN** the system fetches blogs from `https://mindsetapi.azibom.com/api/v1/blogs/`
- **AND** displays each blog as a card or list item showing:
  - Blog title
  - Summary (if available)
  - Author name
  - Created or published date
  - Link to view full blog post

#### Scenario: Empty blogs list
- **WHEN** the API returns an empty array
- **THEN** the system displays a message indicating no blogs are available

#### Scenario: API error handling
- **WHEN** the API request fails
- **THEN** the system displays an error message to the user
- **AND** does not crash or show a blank page

### Requirement: Blog Detail View
The system SHALL display the full content of a single blog post when accessed via its slug.

#### Scenario: Successful blog detail display
- **WHEN** a user navigates to `/articles/[slug]` where slug matches an existing blog
- **THEN** the system fetches the blog post data from the API
- **AND** displays:
  - Blog title
  - Full blog content
  - Author information (name, email)
  - Created date
  - Published date (if available)
  - Updated date

#### Scenario: Blog not found
- **WHEN** a user navigates to `/articles/[slug]` where slug does not match any blog
- **THEN** the system displays a 404 error or "blog not found" message

#### Scenario: API error on detail page
- **WHEN** the API request fails while fetching a blog detail
- **THEN** the system displays an error message to the user
- **AND** does not crash or show a blank page

### Requirement: Blog Data Type Safety
The system SHALL use TypeScript types that match the API response structure.

#### Scenario: Type definitions match API
- **WHEN** the API returns blog data
- **THEN** the TypeScript interfaces correctly represent:
  - Author object (id, email, full_name)
  - Blog object (id, title, slug, content, summary, status, created_at, updated_at, published_at, author)
  - Array of blogs for list endpoint

### Requirement: Internationalization Support
The system SHALL support Persian (fa) language for all blog-related UI text.

#### Scenario: Persian text display
- **WHEN** viewing blogs pages in Persian locale
- **THEN** all UI text (labels, buttons, error messages) are displayed in Persian from the dictionary
- **AND** RTL layout is applied correctly

