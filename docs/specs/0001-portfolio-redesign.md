# 0001. Redesign portfolio to a dark technical single page showcase

**Date**: 2026-08-03
**Status**: Proposed

## Summary

Redesign the personal portfolio as a dark themed single page site that projects full stack technical depth. The existing Next.js 14 site gets a visual overhaul with a refined orange accent on dark backgrounds, a dedicated Skills section, verified project data, and a working mobile menu. All content stays hardcoded in components; no CMS or API changes.

## Context

The current portfolio at codeplan.vercel.app is a light themed single page built with Next.js 14, Tailwind CSS, and shadcn/ui. It has several issues: three of eight listed projects are down or have expired SSL certificates, the mobile menu is commented out and nonfunctional, the "Services" nav link points to a nonexistent anchor, dead social links sit in the hero, and the footer credits a template brand name instead of the developer. The visual design reads as a starter template rather than a senior developer's portfolio.

The site needs to convey full stack capability to potential clients and employers. It must look polished and modern, reflect current frontend design standards, and present accurate project information. The existing Formspree contact form, Vercel Analytics, and anchor based navigation all work and should stay.

## Requirements

**User stories**:
- As a visitor, I want to understand the developer's full stack capability within seconds of landing so that I can decide whether to hire them.
- As a potential client, I want to see real, verified projects with live links so that I can assess the quality of the developer's work.
- As a technical recruiter, I want to see categorized skills with proficiency levels so that I can match the developer to a role.
- As a mobile visitor, I want a working navigation menu so that I can browse the portfolio on my phone.

**Acceptance criteria** (the contract, each criterion is IDed and independently checkable):
- **AC-1**: The page renders a dark theme (always dark, no toggle) with the brand orange (#FD6F00) as the primary accent against dark slate/navy backgrounds.
- **AC-2**: The navigation shows Home, About, Skills, Projects, Testimonials, Contact as anchor links, all pointing to existing sections. The "Services" link and the /#servcies typo are removed.
- **AC-3**: A working mobile hamburger menu opens a slide in drawer with all nav items, and closes on link click or backdrop tap.
- **AC-4**: The Hero section shows the developer's name, title (Full-Stack Developer), a short professional paragraph, working social links (GitHub, X/Twitter, LinkedIn only — Facebook and Instagram removed), a functional "Get in Touch" button scrolling to #contact, and a "Download CV" button linking to /cv/Emmanuel-Omonzebaguan-Frontend-CV.pdf.
- **AC-5**: The About section tells a personal story with technical range, followed by the existing orbiting skills circle and new categorized skill cards (Frontend, Backend, Mobile, DevOps & Tools) each with Expert/Proficient/Familiar tags.
- **AC-6**: The Projects section shows exactly the verified projects (Frima Technology, Cilias Health Foundation, The-Walrus Tech, Linos-Touch, Parcel Tracking) with accurate names, descriptions, tech stacks, and working live URLs. Filter tabs (All, Full-Stack, Frontend, Backend) filter the visible project cards.
- **AC-7**: Every listed project's live URL returns a successful response when clicked. No project links to a down or expired site.
- **AC-8**: The Testimonials section shows 4 to 6 curated testimonials, all visible (not hidden by the marquee slice bug). Each testimonial card shows name, quote, and role or company if available.
- **AC-9**: The Contact form submits to the Formspree endpoint (mpwaaqda) and shows a success modal on completion. The duplicate id bug on form fields is fixed. Form inputs have accessible labels.
- **AC-10**: The Footer shows "(c) {currentYear} Emmanuel Omonzebaguan" with links to CV download, GitHub, LinkedIn, and email.
- **AC-11**: The OpenGraph URL typo (hhttps://) in layout.tsx is fixed.
- **AC-12**: Every section animates into view on scroll (framer-motion whileInView, once:true). No animation replays on repeat scrolls.
- **AC-13**: The page scores 90+ on Lighthouse performance, accessibility, and SEO on desktop.

## Options considered

### Option 1: Fix in place (targeted fixes to the current light theme)

Fix the broken links, dead projects, mobile menu, and bugs. Keep the light theme and existing layout. Polish what exists rather than redesign.

**Pros**:
- Fastest to ship, lowest risk of introducing new bugs
- Keeps all existing visual assets and CSS

**Cons**:
- Does not address the "reads as a starter template" problem
- Light theme does not match the dark technical aesthetic the engineer wants
- Misses the opportunity to add a Skills section, filters, and proficiency indicators

### Option 2: Full redesign with dark technical aesthetic (chosen)

Redesign every section for a dark background with orange accent. Add a Skills section, project filter tabs, and proficiency indicators. Curate projects to verified ones only. Rewrite the About copy for personal story and technical range.

**Pros**:
- Matches the desired dark technical aesthetic exactly
- Projects are verified and accurate
- Skills section with proficiency tags shows full stack range
- Modern, polished feel distinct from starter templates

**Cons**:
- More work than targeted fixes (every component touched)
- Must migrate all existing styles from light to dark
- Risk of accessibility issues with dark theme if contrast is not carefully managed

### Option 3: Incremental (fix bugs first, redesign section by section later)

Fix the critical bugs now (dead links, mobile menu, project URLs) and defer the visual redesign to a second pass.

**Pros**:
- Bugs fixed immediately
- Redesign can be done with more planning time

**Cons**:
- Ships twice instead of once, doubling review and deploy cycles
- The site stays in a "half fixed" state between passes
- No clear boundary between "bug fix" and "redesign" passes

## Decision

**Chosen option**: Option 2: Full redesign with dark technical aesthetic.

Redesign every section of the single page portfolio for a dark background with the existing orange accent (#FD6F00), add a Skills section with categorized proficiency tags, verify and curate the project listing, and fix all known bugs in one pass.

**Implementation skills**: `frontend-design` (jsmastery-pro/skills, `.agents/skills/frontend-design/`) · `vercel-react-best-practices` (vercel-labs/agent-skills, `.agents/skills/vercel-react-best-practices/`) · `web-design-guidelines` (jsmastery-pro/skills, `.agents/skills/web-design-guidelines/`)

## Rationale

The site has accumulated enough issues (dead links, broken mobile nav, template leftovers, inaccurate project data) that a piecemeal fix would leave it in an inconsistent state. A single cohesive redesign pass delivers a polished result faster than two separate deployments. The dark technical aesthetic is a deliberate choice that differentiates the portfolio from the many light themed starter templates and signals a developer who works in terminal and editor environments.

The existing stack (Next.js 14, Tailwind CSS, shadcn/ui, framer-motion) supports the dark redesign without new dependencies. Tailwind's dark class variant is not needed since the site is always dark; CSS variables handle the color system. Filter tabs use React state with no library. The mobile menu uses framer-motion AnimatePresence already in the bundle.

## Feature design

**Data model sketch**:

All data remains as hardcoded arrays in their respective components. The shapes are:

```
Project {
  id: string
  name: string
  description: string
  techStack: string[]
  category: 'Full-Stack' | 'Frontend' | 'Backend'
  liveUrl: string
  githubUrl: string
  image: string
}

SkillCategory {
  name: string
  skills: Skill[]
}
Skill {
  name: string
  proficiency: 'Expert' | 'Proficient' | 'Familiar'
}

Testimonial {
  id: number
  name: string
  role?: string
  company?: string
  body: string
}

NavRoute {
  name: string
  path: string
}
```

**Verified project data** (from live site checks, 2026-08-03):

| # | Name | Category | Tech Stack | Live URL |
|---|---|---|---|---|
| 1 | Frima Technology | Full-Stack | React, Next.js, Tailwind CSS, Shadcn, Zustand, Sanity Studio | https://frimatech.vercel.app |
| 2 | Cilias Health Foundation | Full-Stack | React, Next.js, Tailwind CSS, Zustand, Sanity Studio, Paystack | https://ciliaswomenhealthcarefoundation.com |
| 3 | The-Walrus Tech | Full-Stack | React, Next.js, Tailwind CSS, Redux Toolkit | https://thewalrustech.com |
| 4 | Linos-Touch | Full-Stack | React, Next.js, Tailwind CSS, Redux Toolkit, Supabase | https://linosbooking.vercel.app |
| 5 | Parcel Tracking | Backend | React, Node.js, Tailwind CSS, Express, MongoDB | https://parcel-tracking-two.vercel.app |

**API surface**:

| Endpoint | Method | Key inputs | Key outputs | Auth | Key errors |
|---|---|---|---|---|---|
| Formspree (mpwaaqda) | POST | name, email, message | success/error | none | network error, validation |
| CV download | GET | none | PDF file | none | 404 if file missing |

**Value sourcing**:

| Action | Value displayed | Source |
|---|---|---|
| Render project cards | Project name, description, tech stack, links | Hardcoded project array in Project.tsx |
| Render skill cards | Skill name, category, proficiency | Hardcoded skill data array |
| Filter projects | Active filter tab, filtered project list | React useState, derived from project category field |
| Submit contact form | Success/error state | Formspree response |
| Render footer year | Current year | new Date().getFullYear() |
| Render nav links | Route names and paths | Hardcoded routes array |
| Animate section on scroll | In-view state | framer-motion whileInView |

**Key invariants**:
- Every project listed must have a verified live URL that resolves (checked before merge)
- Every nav anchor href must match exactly one section id on the page
- Form inputs must have unique id attributes matching their label htmlFor

**Security model**:
- Public page, no authentication required
- Formspree handles spam protection for the contact form
- No API keys or secrets in client side code

**Configuration required**:
- No new environment variables needed
- `public/cv/Emmanuel-Omonzebaguan-Frontend-CV.pdf` must exist at build time

**Critical test scenarios** (each maps to an acceptance criterion in ## Requirements):
- Happy path: Visitor lands on the portfolio, scrolls through all sections, clicks a project filter tab, submits the contact form, and downloads the CV — all work without errors. Verifies **AC-1, AC-2, AC-4, AC-5, AC-6, AC-8, AC-9, AC-10**.
- Mobile: Visitor opens the site on a phone, taps the hamburger menu, navigates to Skills, closes the menu. All sections are readable and well laid out on a 375px viewport. Verifies **AC-3**.
- Dead link: Every project "Live Demo" link is clicked and returns a successful HTTP response. Verifies **AC-7**.
- Form error: Visitor submits the contact form without an internet connection. An error state is shown (Formspree handles this). Verifies **AC-9**.
- SEO check: Lighthouse audit scores 90+ on performance, accessibility, and SEO. Verifies **AC-13**.

## Build plan

The build approach defaults to a single Tracer Bullet slice (no recorded approach; the portfolio is a single page with no backend, so one end to end slice covers everything).

1. Fix metadata and configuration: correct the OpenGraph URL typo in app/layout.tsx, update the nav routes array, fix duplicate form field ids. Satisfies **AC-2**, **AC-11**, **AC-9** (partial).

2. Apply dark theme foundation: update tailwind.config.ts and globals.css with the dark slate/navy color palette, add the subtle grid background pattern, convert all section backgrounds from white/slate-100 to the dark equivalents, update text colors for contrast. Satisfies **AC-1**.

3. Rebuild the Navbar: update nav items to Home/About/Skills/Projects/Testimonials/Contact, add a working mobile hamburger menu with framer-motion AnimatePresence slide in drawer, style for dark theme. Satisfies **AC-2**, **AC-3**.

4. Redesign the Hero section: update copy for technical depth positioning, keep the two column layout, remove dead social links (Facebook, Instagram), wire the "Get in Touch" button to scroll to #contact, keep the Download CV button and YouTube video modal, restyle for dark theme. Satisfies **AC-4**.

5. Redesign the About section: write new About copy with personal story and technical range, keep the orbiting skills circle, add categorized skill cards (Frontend, Backend, Mobile, DevOps & Tools) with Expert/Proficient/Familiar tags below the orbit, restyle for dark theme. Satisfies **AC-5**.

6. Rebuild the Projects section: replace the project array with the 5 verified projects using accurate names, descriptions, and tech stacks from the live site checks, add filter tabs (All/Full-Stack/Frontend/Backend) using React useState, style project cards with border glow hover effect, restyle for dark theme. Satisfies **AC-6**, **AC-7**.

7. Rebuild the Testimonials section: curate to the strongest 4 to 6 testimonials, ensure all are displayed (fix the marquee slice bug that hid half), add role or company fields where available, restyle for dark theme. Satisfies **AC-8**.

8. Fix and restyle the Contact section: fix the duplicate id bug on form fields, add proper accessible label associations, restyle the form and contact info for dark theme, keep Formspree integration and SweetAlert2 success modal. Satisfies **AC-9**.

9. Build the new Footer: replace "Globe-Raven" with "Emmanuel Omonzebaguan", add links to CV download, GitHub, LinkedIn, and email, restyle for dark theme. Satisfies **AC-10**.

10. Add scroll animations: apply framer-motion whileInView with once:true and staggered children to each section, remove unused animations (shiny text, border beam if not reused). Satisfies **AC-12**.

11. Performance and accessibility pass: run Lighthouse, optimize images with next/image, ensure color contrast meets WCAG AA on dark backgrounds, add aria labels to interactive elements, verify keyboard navigation. Satisfies **AC-13**.

## Consequences

**Positive**:
- The portfolio reads as a senior developer's site, not a starter template
- Project data is verified and accurate, with no dead links
- Full stack capability is visible through categorized skills and project filters
- Mobile navigation works for the first time
- All known bugs (typod anchors, dead social links, duplicate form ids, template footer) are resolved

**Negative / tradeoffs**:
- Dark theme requires careful contrast management; orange on dark backgrounds can fail accessibility if shades are wrong
- Always dark means visitors who prefer light mode cannot switch; a minority may find this unfriendly
- Removing 3 projects reduces the visible portfolio count from 8 to 5; the tradeoff is accuracy and trust over quantity
- Every existing component is touched, so the diff is large and review must check for regressions

**Neutral**:
- The site remains a single page with no CMS or API, so content updates still require code changes
- The Formspree endpoint and Vercel deployment stay unchanged

## Follow-up

- [ ] Capture fresh screenshots for the 5 verified projects at their current live URLs and replace the existing images in public/projects/
- [ ] Consider adding 1 to 3 new projects to reach the 6 to 8 target mentioned in the design conversation
- [ ] The frontend-design skill conventions (currently in .agents/skills/) are not yet referenced in CLAUDE.md. Add a pointer there so future work picks up the design conventions automatically.

## Migration plan

**Strategy**: No migration needed (static content, no database, no API changes).

**Phases**: Single deployment. All changes ship in one Vercel deploy from the main branch. No data migration, no code freeze, no coordination window needed.

**Rollback**: Revert the deploy in Vercel (instant rollback to the previous deployment). No data to migrate back.

**Risks**: Low. The contact form endpoint stays the same. If the CV file moves or is renamed, the Download CV button returns 404 — verify the file path before deploy.
