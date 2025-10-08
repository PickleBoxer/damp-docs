# Copilot Instructions for damp-docs

## Architecture Overview

This is a **Fumadocs-powered Next.js 15 documentation site** using:
- **Fumadocs MDX** (`fumadocs-mdx`) for content processing from `content/docs/*.mdx`
- **Fumadocs UI** (`fumadocs-ui`) for pre-built documentation components
- **Next.js 15** with App Router, React 19, and Turbopack for development
- **TypeScript** with strict mode and path aliases (`@/*` for root, `@/.source` for generated)

## Key Architecture Patterns

### Content Source System
The content pipeline follows this flow:
1. MDX files in `content/docs/*.mdx` are processed by `source.config.ts`
2. Build step (`postinstall: fumadocs-mdx`) generates `@/.source` with typed content
3. `lib/source.ts` wraps the generated source with `loader()` to provide the source API
4. Pages consume via `source.getPage(slug)`, `source.pageTree`, `source.getPages()`

**Never manually edit `.source/`** - it's generated. Modify `source.config.ts` instead.

### Styling System
- **Tailwind CSS v4** with `@tailwindcss/postcss` plugin (configured in `postcss.config.mjs`)
- **Fumadocs UI** presets imported in `app/global.css`:
  - `fumadocs-ui/css/neutral.css` - color theme (also available: `shadcn.css`, `black`, `vitepress`, `dusk`, `catppuccino`, `ocean`, `purple`, `solar`)
  - `fumadocs-ui/css/preset.css` - animations, utilities, and typography plugin
- **shadcn/ui** compatible - use `fumadocs-ui/css/shadcn.css` instead of `neutral.css` to integrate with shadcn themes
- **Theme switching**: Built-in light/dark mode via `next-themes` in `RootProvider`
- **CSS Variables**: Color tokens use `--color-fd-*` pattern (e.g., `--color-fd-background`, `--color-fd-primary`)
- **Typography**: Built-in `prose` class for MDX content (forked from Tailwind Typography)

### Route Structure
- `app/(home)/` - Landing pages (route group, no `/home` in URL)
- `app/docs/` - Documentation with shared layout, dynamic catch-all `[[...slug]]`
- `app/api/search/route.ts` - Search endpoint using Fumadocs' Orama integration
- `app/og/docs/[...slug]/route.tsx` - Open Graph image generation per page
- `app/llms-full.txt/route.ts` - LLM-optimized content export (all docs as plain text)

### Layout Pattern
Shared layout config lives in `lib/layout.shared.tsx` via `baseOptions()`. Both home and docs layouts import this to ensure consistent nav/branding. Customize nav, links, and footer there.

**Available Layouts**:
- `DocsLayout` (`fumadocs-ui/layouts/docs`) - Main documentation layout with sidebar and mobile nav
- `HomeLayout` (`fumadocs-ui/layouts/home`) - Landing pages with navbar and search
- `RootProvider` (`fumadocs-ui/provider/next`) - Required root wrapper for theme and search context
- Layouts use CSS Variables (e.g., `--fd-nav-height`, `--fd-layout-width`) for sizing

**Layout Customization**:
```typescript
// Transparent navbar modes: 'always', 'top', 'none'
nav: { transparentMode: 'top' }
// Custom navbar component
nav: { component: <CustomNavbar /> }
// Sidebar options
sidebar: { defaultOpenLevel: 1, collapsible: true, banner: <Banner /> }
```

### UI Components System
**MDX Components**: 
- Default components from `fumadocs-ui/mdx` include Cards, Callouts, Code Blocks, Headings
- Extended via `mdx-components.tsx` using `getMDXComponents()`
- Additional components: Accordion, Files, Steps, Tabs, Type Table, Image Zoom, Inline TOC, Graph View

**Docs Page Components** (`fumadocs-ui/page`):
- `<DocsPage>` - Page wrapper with TOC support
- `<DocsTitle>`, `<DocsDescription>` - SEO-friendly page headers
- `<DocsBody>` - Content wrapper with proper styling

**Built-in Features**:
- Lucide Icons plugin enabled in `lib/source.ts` for icon rendering
- Code syntax highlighting via Shiki
- Search powered by Orama (configured in `app/api/search/route.ts`)
- OG image generation per page (`app/og/docs/[...slug]/route.tsx`)

### MDX Component Extension
- `mdx-components.tsx` exports `getMDXComponents()` which merges custom components with Fumadocs defaults
- Used in `app/docs/[[...slug]]/page.tsx` when rendering `<MDX components={...} />`
- For custom MDX components, add them to the spread: `...defaultMdxComponents, MyComponent, ...components`

### Relative Links in MDX
The docs use `createRelativeLink(source, page)` as the anchor component, allowing MDX to reference other pages by relative file path instead of URL slugs.

## Development Workflow

**Dev server**: `pnpm dev` (uses Turbopack via `--turbo` flag)  
**Build**: `pnpm build` (triggers `fumadocs-mdx` postinstall first)  
**Content changes**: Auto-detected in dev mode, rebuild `.source/` on save

### Adding New Documentation Pages
1. Create `content/docs/your-page.mdx` with frontmatter:
   ```yaml
   ---
   title: Page Title
   description: Page description for SEO
   ---
   ```
2. Content is auto-indexed by Fumadocs - no manual route registration needed
3. Page appears in navigation via `source.pageTree` (file-system based)

### Customizing Frontmatter Schema
Edit `source.config.ts` and extend `frontmatterSchema` with Zod. Example:
```typescript
import { z } from 'zod';
schema: frontmatterSchema.extend({ author: z.string().optional() })
```

### Theming and Styling
**Changing Color Theme**: Replace the theme import in `app/global.css`:
```css
@import 'fumadocs-ui/css/shadcn.css'; /* or black, vitepress, dusk, ocean, purple, solar */
```

**Custom Colors**: Override CSS variables in `app/global.css`:
```css
@theme {
  --color-fd-primary: hsl(0, 0%, 9%);
  --color-fd-background: hsl(0, 0%, 96%);
}
.dark {
  --color-fd-primary: hsl(0, 0%, 98%);
  --color-fd-background: hsl(0, 0%, 7%);
}
```

**Layout Width**: Customize max-width via `--fd-layout-width` variable

**RTL Support**: Set `dir="rtl"` on both `<body>` and `<RootProvider>`

### Search Customization
Search is powered by Orama via `createFromSource()` in `app/api/search/route.ts`. The language is set to `'english'` - change for multi-language support.

## Project-Specific Conventions

- **No manual routing**: Pages are file-system based via Fumadocs source API
- **Type-safe content**: `InferPageType<typeof source>` provides full type safety for page data
- **OG image pattern**: Each doc page has auto-generated OG image at `/og/docs/{slug}/image.png`
- **LLM export route**: `/llms-full.txt` concatenates all docs with `getLLMText()` for AI context
- **Processed markdown**: `source.config.ts` enables `includeProcessedMarkdown: true` for LLM/search indexing

## Critical Files

- `source.config.ts` - Content collection schema and MDX options
- `lib/source.ts` - Source adapter, plugins (lucide icons), and helper functions
- `lib/layout.shared.tsx` - Shared nav/footer configuration
- `app/docs/[[...slug]]/page.tsx` - Template for all doc pages
- `app/api/search/route.ts` - Search endpoint configuration

## Common Patterns

**Accessing page data**:
```typescript
const page = source.getPage(params.slug);
const title = page.data.title;
const toc = page.data.toc; // table of contents
```

**Iterating all pages**:
```typescript
const pages = source.getPages();
pages.forEach(page => console.log(page.url));
```

**Custom page metadata**:
```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  const page = source.getPage(params.slug);
  return { title: page.data.title, /* ... */ };
}
```
