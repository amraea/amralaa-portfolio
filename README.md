# Amr Alaa portfolio

An Astro static site with Tailwind CSS 4 and typed Astro Content Collections. Content is maintained as validated JSON entries under `src/content/`; page components render that content at build time.

## Development

```sh
pnpm install
pnpm dev
```

## Static build

```sh
pnpm build
pnpm preview
```

The generated site is written to `dist/`. Profile details that have not been verified are left empty in the profile collection. Project delivery type is explicit, and program or team recognition is stored separately from education and certifications.

## Content editing with Pages CMS

The repository-root `.pages.yml` configures Pages CMS to edit the existing JSON files under `src/content/`. GitHub remains the source of truth: CMS changes are Git changes, and `src/content.config.ts` remains the Astro validation schema. After content edits, run `pnpm build` before merging or deploying.

Project filenames are application IDs. They determine project URLs, Astro entry IDs, cross-content references, and the narrative lookup in `src/content/caseStudies.ts`. The CMS therefore allows editing existing projects but disables project creation, renaming, and deletion. Adding a project requires a coordinated source change and matching case-study narrative.

The profile is one fixed file. Its resume path is not exposed in the CMS; the stable CV route is `/assets/cv.pdf`, which is intentionally outside CMS-managed media. Do not upload or manage the CV through Pages CMS.

The current homepage sorts the three programs using a hardcoded ID-to-order map in `src/pages/index.astro`. New or renamed program IDs will not automatically receive a deliberate position; update that map in a reviewed source change if the ordering needs to change.

Astro and Pages CMS do not share a runtime schema. Pages CMS validates configured string fields as strings, so a stored JSON `null` causes an error such as `Expected string, received null`. Fields that are null in current entries are deliberately omitted from the corresponding CMS forms; `settings.content.merge: true` preserves them during edits. This means those nullable fields require a reviewed JSON edit when they need to change. Collections whose required Astro fields include omitted nullable values have creation disabled so the CMS cannot create incomplete entries. Cross-content selectors store the current exact Astro entry IDs; update their fixed choices if IDs change.

For normal editing, use a content branch and review/build before merging. Do not treat the CMS form as a substitute for Astro build validation.
