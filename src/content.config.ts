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
    location: z.string().optional(),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    linkedin: z.string().url().optional(),
    github: z.string().url().optional(),
    resume: z.string().optional(),
    availability: z.string().optional(),
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
    location: z.string().optional(),
    startDate: z.string(),
    endDate: z.string().optional(),
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
    status: z.enum(['completed', 'in-progress', 'planned']).optional(),
    deploymentStatus: z.enum(['production', 'non-production']).optional(),
    developmentContext: z.string().optional(),
    featured: z.boolean(),
    order: z.number(),
    shortDescription: z.string(),
    businessContext: z.string().optional(),
    challenge: z.string().optional(),
    solution: z.string().optional(),
    myRole: z.string().optional(),
    teamContext: z.string().optional(),
    technologies: z.array(z.string()),
    impact: z.string().optional(),
    metrics: z.array(z.object({
      label: z.string(),
      value: z.string(),
      unit: z.string().optional(),
      context: z.string().optional(),
    })),
    coverImage: z.string().optional(),
    gallery: z.array(z.string()),
    date: z.string().optional(),
    organization: z.string().optional(),
    linkedinUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    lessonsLearned: z.array(z.string()),
  }),
});

const certifications = defineCollection({
  loader: jsonDirectory('certifications'),
  schema: z.object({
    name: z.string(),
    issuer: z.string(),
    issueDate: z.string().optional(),
    expiryDate: z.string().optional(),
    credentialId: z.string().optional(),
    credentialUrl: z.string().url().optional(),
    featured: z.boolean(),
    logo: z.string().optional(),
    relatedSkills: z.array(reference('skills')),
  }),
});

const education = defineCollection({
  loader: jsonDirectory('education'),
  schema: z.object({
    institution: z.string(),
    qualification: z.string(),
    fieldOfStudy: z.string().optional(),
    location: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    summary: z.string().optional(),
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
    organization: z.string().optional(),
    location: z.string().optional(),
    date: z.string().optional(),
    summary: z.string(),
    teamContext: z.string().optional(),
    relatedProjects: z.array(reference('projects')),
    url: z.string().url().optional(),
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
