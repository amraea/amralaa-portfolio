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

The generated site is written to `dist/`. Unknown optional profile and content values are represented by absent JSON keys. Project delivery type is explicit, and program or team recognition is stored separately from education and certifications.

## Content editing with Pages CMS

The repository-root `.pages.yml` configures Pages CMS for safe routine editing of the existing JSON files under `src/content/`. GitHub remains the source of truth: CMS changes are Git changes, and `src/content.config.ts` remains the validation authority. After content edits, run `pnpm build` before merging or deploying.

Project filenames are application IDs. They determine project URLs, Astro entry IDs, cross-content references, and the narrative lookup in `src/content/caseStudies.ts`. The CMS therefore allows editing existing projects but disables project creation, renaming, and deletion. Adding a project requires a coordinated source change and matching case-study narrative.

The profile is one fixed file. Its resume path is not exposed in the CMS; the stable CV route is `/assets/cv.pdf`, which is intentionally outside CMS-managed media. Do not upload or manage the CV through Pages CMS.

The current homepage sorts the three programs using a hardcoded ID-to-order map in `src/pages/index.astro`. Program creation is disabled because new IDs do not automatically receive a deliberate homepage position. Update that map in a reviewed source change if program ordering changes.

Unknown optional values must be absent from JSON, not explicit `null`. A successful CMS save can remove omitted `null` fields; `settings.content.merge: true` is retained for content merging but is not relied on to preserve hidden null values. Optional plain-text fields are exposed where their absence is safe. Optional email and URL fields are protected from routine editing because a cleared CMS control may serialize as an empty string, which Astro's email/URL validators reject. Use a reviewed JSON change for those fields, and keep non-empty email/URL values valid. Profile content is editable in one fixed file, not a multi-entry collection. Its resume path, project IDs/filenames, and optional URL fields are not routine CMS controls. Project creation, renaming, and deletion remain disabled because a project ID also determines its route and narrative mapping. Experience creation is disabled because generated filenames depend on free-text roles; program creation is disabled because homepage ordering is keyed to the existing program IDs. Certifications, education, and skills can be created using their configured required fields; deletion and renaming remain disabled. Cross-content selectors store exact Astro entry IDs; update their fixed choices if IDs change.

For normal editing, use a content branch and review/build before merging. Do not treat the CMS form as a substitute for Astro build validation.
