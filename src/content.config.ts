import { defineCollection, reference } from 'astro:content';
import { z } from 'astro/zod';
import { readdir, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const contentRoot = fileURLToPath(new URL('./content/', import.meta.url));

// Astro's built-in glob/file loaders currently fail in this project's Vite
// module runner (`require is not defined`), so keep a minimal JSON loader.
const jsonDirectory = (directory) => async () => {
  const collectionDirectory = resolve(contentRoot, directory);
  const files = (await readdir(collectionDirectory, { withFileTypes: true }))
    .filter((entry) => entry.isFile() && entry.name.endsWith('.json'))
    .map((entry) => entry.name)
    .sort();

  return Promise.all(files.map(async (filename) => ({
    id: filename.slice(0, -'.json'.length),
    ...JSON.parse(await readFile(resolve(collectionDirectory, filename), 'utf8')),
  })));
};

const profile = defineCollection({
  loader: jsonDirectory('profile'),
  schema: z.object({
    name: z.string(),
    professionalHeadline: z.string(),
    shortBio: z.string(),
    location: z.string().nullable(),
    email: z.string().email().nullable(),
    phone: z.string().nullable().optional(),
    linkedin: z.string().url().nullable(),
    github: z.string().url().nullable(),
    resume: z.string().nullable(),
    availability: z.string().nullable(),
    impactMetrics: z.array(z.object({
      label: z.string(),
      value: z.string(),
      context: z.string().optional(),
    })),
  }),
});

const experience = defineCollection({
  loader: jsonDirectory('experience'),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    location: z.string().nullable().optional(),
    startDate: z.string(),
    endDate: z.string().nullable(),
    currentRole: z.boolean(),
    summary: z.string().optional(),
    responsibilities: z.array(z.string()),
    achievements: z.array(z.string()),
    technologies: z.array(z.string()),
    relatedProjects: z.array(reference('projects')),
  }),
});

const projects = defineCollection({
  loader: jsonDirectory('projects'),
  schema: z.object({
    title: z.string(),
    category: z.enum(['production', 'analytics', 'initiative', 'poc', 'hackathon', 'experimental']),
    status: z.enum(['completed', 'in-progress', 'planned']).nullable().optional(),
    deploymentStatus: z.enum(['production', 'non-production']).nullable().optional(),
    developmentContext: z.string().nullable().optional(),
    featured: z.boolean(),
    order: z.number(),
    shortDescription: z.string(),
    businessContext: z.string().nullable(),
    challenge: z.string().nullable(),
    solution: z.string().nullable(),
    myRole: z.string().nullable(),
    teamContext: z.string().nullable(),
    technologies: z.array(z.string()),
    impact: z.string().nullable().optional(),
    metrics: z.array(z.object({
      label: z.string(),
      value: z.string(),
      unit: z.string().optional(),
      context: z.string().optional(),
    })),
    coverImage: z.string().nullable(),
    gallery: z.array(z.string()),
    date: z.string().nullable(),
    organization: z.string().nullable().optional(),
    linkedinUrl: z.string().url().nullable(),
    githubUrl: z.string().url().nullable(),
    demoUrl: z.string().url().nullable(),
    lessonsLearned: z.array(z.string()),
  }),
});

const certifications = defineCollection({
  loader: jsonDirectory('certifications'),
  schema: z.object({
    name: z.string(),
    issuer: z.string(),
    issueDate: z.string().nullable(),
    expiryDate: z.string().nullable(),
    credentialId: z.string().nullable(),
    credentialUrl: z.string().url().nullable(),
    featured: z.boolean(),
    logo: z.string().nullable(),
    relatedSkills: z.array(reference('skills')),
  }),
});

const education = defineCollection({
  loader: jsonDirectory('education'),
  schema: z.object({
    institution: z.string(),
    qualification: z.string(),
    fieldOfStudy: z.string().nullable(),
    location: z.string().nullable(),
    startDate: z.string().nullable(),
    endDate: z.string().nullable(),
    summary: z.string().nullable(),
    relatedSkills: z.array(reference('skills')),
  }),
});

const skills = defineCollection({
  loader: jsonDirectory('skills'),
  schema: z.object({
    name: z.string(),
    category: z.enum([
      'SAP Finance',
      'Business Process & Implementation',
      'Data & Analytics',
      'BTP & Applied AI',
    ]),
    exposure: z.enum(['professional-experience', 'project-experience', 'hands-on-exposure', 'positioning']),
    evidence: z.string().optional(),
    order: z.number(),
  }),
});

const programs = defineCollection({
  loader: jsonDirectory('programs'),
  schema: z.object({
    title: z.string(),
    type: z.enum(['program', 'award', 'achievement', 'participation']),
    organization: z.string().nullable(),
    location: z.string().nullable().optional(),
    date: z.string().nullable(),
    summary: z.string(),
    teamContext: z.string().nullable(),
    relatedProjects: z.array(reference('projects')),
    url: z.string().url().nullable(),
  }),
});

export const collections = {
  profile,
  experience,
  projects,
  certifications,
  education,
  skills,
  programs,
};
