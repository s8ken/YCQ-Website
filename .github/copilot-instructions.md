# GitHub Copilot Instructions for YCQ-Website

## Project Overview

YCQ-Website is an enterprise marketing and documentation website built with Next.js 15, showcasing the YCQ-Sonate AI trust platform. This is a professional-grade website targeting enterprise clients, investors, and developers.

**Primary Purpose**: Enterprise landing page, documentation hub, and business solutions showcase for YCQ-Sonate's AI trust and compliance platform.

## Technology Stack

### Core Technologies
- **Framework**: Next.js 15.5.2 with App Router and Turbopack
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS 4 (utility-first approach)
- **React**: Version 19.1.0
- **Runtime**: Node.js 20.x

### Development Tools
- **Linting**: ESLint with Next.js configuration
- **Package Manager**: npm (use `npm ci` for consistent installs)
- **Build Tool**: Next.js with Turbopack enabled

## Project Structure

```
/src/app/              # Next.js App Router pages
  ├── page.tsx         # Homepage (enterprise landing)
  ├── layout.tsx       # Root layout with metadata
  ├── globals.css      # Global Tailwind styles
  ├── contact/         # Contact form page
  ├── technology/      # Technical documentation
  ├── solutions/       # Business solutions page
  ├── case-studies/    # Customer success stories
  ├── investors/       # Investor information
  ├── risk-assessment/ # Risk assessment tool
  └── metrics-methodology/ # Metrics documentation
/public/               # Static assets
  ├── YCQ_Sonate_UAT_Report.md
  └── YCQ_Sonate_API_Collection.json
```

## Coding Standards

### TypeScript
- Always use TypeScript for all `.tsx` and `.ts` files
- Use strict mode (enabled in `tsconfig.json`)
- Define interfaces for component props and data structures
- Avoid using `any` type; prefer specific types or `unknown`
- Use path aliases: `@/*` maps to `./src/*`

### React & Next.js
- Use React Server Components by default (Next.js 15 App Router)
- Add `'use client'` directive only when necessary (forms, interactivity, hooks)
- Export components as default exports for pages
- Use `export default function ComponentName()` pattern
- Prefer function components over class components

### Component Structure
```tsx
// Example component pattern
export default function PageName() {
  return (
    <div className="container">
      <section className="section-class">
        {/* Content */}
      </section>
    </div>
  );
}
```

### Styling with Tailwind CSS
- Use Tailwind utility classes directly in JSX
- Follow mobile-first responsive design approach
- Common breakpoints: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Use semantic class names: `text-stone-900`, `bg-amber-600`, `hover:bg-amber-700`
- Maintain consistent spacing: `p-4`, `py-8`, `px-6`, `gap-8`, `mb-6`
- Professional color palette (already defined in existing pages):
  - Primary: `amber-600`, `stone-900`
  - Neutral: `stone-50` through `stone-900`
  - Accent: `blue-600`, `green-600`, `cyan-600`

### Text Content in JSX
- **IMPORTANT**: Use `&apos;` for apostrophes in JSX text (not raw `'`)
- **IMPORTANT**: Use `&quot;` for quotation marks in JSX text (not raw `"`)
- This prevents ESLint `react/no-unescaped-entities` errors
- Example: `"Don't"` → `"Don&apos;t"`, `"Company's"` → `"Company&apos;s"`

### Code Quality
- Run `npm run lint` before committing
- Fix all ESLint errors (build will fail otherwise)
- Ensure type safety - no TypeScript errors
- Test builds locally with `npm run build`

## Common Patterns

### Creating New Pages
1. Create `page.tsx` in appropriate `/src/app/` subdirectory
2. Export default function component
3. Add metadata using Next.js conventions
4. Use consistent layout structure with existing pages

### Adding Contact Forms or Interactive Elements
1. Add `'use client'` directive at top of file
2. Use React `useState` for form state management
3. Handle form submission with proper validation
4. Follow existing contact page pattern

### Linking Between Pages
```tsx
import Link from 'next/link';

<Link href="/solutions" className="...">
  Solutions
</Link>
```

### External Links
```tsx
<Link href="https://external.com" target="_blank" rel="noopener noreferrer">
  External Link
</Link>
```

### Adding Downloadable Assets
- Place files in `/public/` directory
- Reference with absolute paths: `/filename.pdf`
- Use `<a href="/file.pdf" download>` for downloads

## Build & Development

### Local Development
```bash
npm ci                 # Install dependencies (recommended)
npm run dev           # Start dev server at localhost:3000
npm run build         # Production build (may fail due to Google Fonts network access)
npm run lint          # Run ESLint
npm run start         # Start production server
```

### CI/CD
- GitHub Actions workflow: `.github/workflows/ci.yml`
- Runs on push to `main` and on pull requests
- Steps: checkout → install → lint → build
- All PRs must pass linting and build checks

## Content Guidelines

### Tone & Style
- **Professional & Enterprise-focused**: Target audience is CTOs, compliance officers, and investors
- **Technical but Accessible**: Balance technical depth with business value
- **Trust & Security Emphasis**: Highlight audit trails, compliance, transparency
- **Concrete Examples**: Use specific metrics, case studies, code examples

### Key Messaging
- YCQ-Sonate provides AI trust and accountability infrastructure
- Focus on: audit trails, compliance, multi-model support, enterprise features
- Target industries: healthcare, financial services, hiring, high-stakes decisions
- Competitive advantages: cryptographic verification, tamper-evident ledger, multi-provider support

## Important Notes

### Do Not
- ❌ Use raw apostrophes `'` or quotes `"` in JSX text content
- ❌ Create class components (use function components)
- ❌ Add `'use client'` unnecessarily (only for interactivity)
- ❌ Modify configuration files without clear justification
- ❌ Add external dependencies without necessity
- ❌ Change existing component patterns significantly

### Do
- ✅ Follow existing code patterns and styles
- ✅ Use Tailwind CSS utility classes consistently
- ✅ Escape special characters in JSX text (`&apos;`, `&quot;`)
- ✅ Test with `npm run lint` before submitting
- ✅ Use TypeScript types properly
- ✅ Keep components focused and single-purpose
- ✅ Make minimal, surgical changes to existing code
- ✅ Maintain responsive design for mobile and desktop

## Environment & Configuration

### Environment Variables
Reference `.env.example` for available environment variables. Common variables:
- `NEXT_PUBLIC_API_URL`: YCQ API endpoint
- `NEXT_PUBLIC_DOCS_URL`: Documentation URL
- Analytics keys (Google Analytics, Mixpanel)
- Business integrations (HubSpot, Stripe)

### Configuration Files
- `next.config.ts`: Next.js configuration
- `tsconfig.json`: TypeScript configuration
- `eslint.config.mjs`: ESLint rules
- `tailwind.config.js`: Tailwind CSS configuration (if present)
- `postcss.config.mjs`: PostCSS configuration

## Testing Approach

While there are no formal tests currently, when making changes:
1. Run `npm run lint` to check for errors
2. Test locally with `npm run dev`
3. Verify responsive design on mobile and desktop
4. Check all interactive elements work correctly
5. Ensure no console errors in browser DevTools

## Common Tasks

### Add a New Enterprise Feature Section
1. Study existing sections in `src/app/page.tsx` or other pages
2. Follow the grid layout pattern: `grid md:grid-cols-2 lg:grid-cols-3 gap-8`
3. Use consistent spacing and Tailwind classes
4. Include icons/visuals where appropriate
5. Maintain professional, enterprise tone

### Update Business Content
1. Locate the relevant page in `/src/app/`
2. Modify JSX content directly (these are static pages)
3. Remember to escape apostrophes with `&apos;`
4. Test with `npm run dev` to verify rendering

### Fix Linting Issues
1. Run `npm run lint` to see errors
2. Most common issue: unescaped entities (use `&apos;` for `'`)
3. Remove unused variables or prefix with `_` (e.g., `_index`)
4. Run `npm run lint` again to verify fixes

## Support & Resources

- **Next.js Documentation**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs
- **Repository**: https://github.com/s8ken/YCQ-Website

## Notes for Copilot Coding Agent

When working on this repository:
- Prioritize minimal, surgical changes
- Maintain consistency with existing code patterns
- Always fix linting errors before completing tasks
- Test changes locally when possible
- Focus on enterprise professionalism in content and design
- This is a marketing/documentation site - prioritize clarity and visual appeal
- Performance matters: optimize images, minimize JavaScript, maintain fast page loads
