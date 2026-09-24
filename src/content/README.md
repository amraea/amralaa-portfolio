# Content collections

Collection schemas live in `src/content.config.ts`. Add one JSON file per entry in the matching collection directory. The schemas validate all entries during the Astro build.

- `profile/` contains one central entry with the fixed ID `profile`, queried directly so rendering never depends on collection order. Keep unknown contact details, availability, and other unverified values `null` until confirmed.
- `experience/` contains one role per entry. Do not infer responsibilities for roles where none have been verified.
- `projects/` uses `category`, `status`, `deploymentStatus`, `developmentContext`, and optional `organization` as separate fields. Project routes use the entry ID generated from the JSON filename; do not add a second slug field. Omit unknown fields and do not imply production deployment.
- `certifications/` and `education/` are intentionally empty pending verified details.
- `skills/` records exposure labels and evidence rather than percentage proficiency scores.
- `programs/` holds programs and awards separately from education and certifications.
