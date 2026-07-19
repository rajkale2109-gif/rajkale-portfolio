# Raj Kale — Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

Push to GitHub, import the repo on [Vercel](https://vercel.com/new), and deploy — no config changes needed.

## Before you launch, fill in these gaps

The AI that built this only had a profile photo and prior conversation history to work from —
no resume file was actually uploaded. Everything in the content is real (pulled from stated
project and background details), but a few things need you to fill them in directly:

1. **`/public/resume.pdf`** — the Resume buttons link here but the file doesn't exist yet. Add your resume PDF at this exact path.
2. **Email** — `components/Contact.tsx` has a placeholder `hello@rajkale.dev`. Replace with your real email (find/replace across `Contact.tsx` and `Hero.tsx` if you add it there too).
3. **GitHub** — no GitHub link was on file, so there's no GitHub button. Add one in `Hero.tsx` / `Contact.tsx` / `lib/data.ts` if you want it.
4. **Live/case-study links** — `lib/data.ts` has real links for Zepto Resolve and the PhonePe DPDP prototype (Lovable app URLs). PayLens, PauseFlow, and the UPI case study don't have public links on file — add Notion/GitHub links in the `links` array per project if you have them, or leave as-is (buttons only render when a link exists).
5. **Domain**: `app/layout.tsx` and `app/sitemap.ts` use a placeholder `https://rajkale.dev` — swap for your real deployed domain.
6. **Experience dates**: `lib/data.ts` uses "Current" / "Ongoing" for your two roles since exact start dates weren't on file — edit `experience` in `lib/data.ts` with real dates.

## Structure

- `app/page.tsx` — landing page, composes all sections
- `app/projects/[slug]/page.tsx` — dynamic project case-study pages
- `lib/data.ts` — all content (projects, experience, skills, publication) in one place
- `components/` — Hero, About, Experience, Projects, Research, Skills, Contact, Nav, Footer
