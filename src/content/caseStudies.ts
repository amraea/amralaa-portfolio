export type CaseStudy = {
  sequence: 'SEE' | 'IMPROVE' | 'EXPLORE';
  category: string;
  heroStatement: string;
  snapshot: { label: string; value: string }[];
  opening: string;
  facts: { value: string; label: string }[];
  challenge: { heading: string; body: string; questions?: string[] };
  role: { heading: string; body: string; points?: string[] };
  visual: 'analytics' | 'process' | 'agent';
  before?: string[];
  after?: string[];
  contribution?: string[];
  demonstrates?: string[];
  technologies?: string[];
  contextNote?: string;
  teamAchievement?: string;
  question?: { setup: string; prompt: string };
  interpretation?: { heading: string; body: string };
  closing: string;
};

export const caseStudies: Record<string, CaseStudy> = {
  'sap-support-analytics-power-bi': {
    sequence: 'SEE',
    category: 'Analytics Project',
    heroStatement: 'See support workload, recurrence, resolution, and process signals across 11 companies.',
    opening: 'SAP support activity produces operational data, but individual records do not by themselves show workload, recurring problems, resolution patterns, or improvement opportunities. Developed through DEPI, this Power BI project explored a management-level view of support data across 11 companies.',
    snapshot: [
      { label: 'Coverage', value: '11 companies' },
      { label: 'Tool', value: 'Power BI' },
      { label: 'Context', value: 'Developed through DEPI' },
    ],
    facts: [
      { value: 'Ticket volumes', label: 'Demand' },
      { value: 'Workload', label: 'Distribution' },
      { value: 'Recurrence + resolution', label: 'Patterns' },
      { value: 'Process improvement', label: 'Opportunities to investigate' },
    ],
    challenge: {
      heading: 'This is not just ticket counting',
      body: 'The project sought a broader operational view: where demand comes from, how workload is distributed, what recurs, and what may warrant closer investigation.',
      questions: [
        'Where is support demand coming from?',
        'How is workload distributed across companies?',
        'Which problems recur, and what resolution patterns appear?',
        'Which signals suggest an area for further investigation?',
      ],
    },
    role: {
      heading: 'Connect SAP support context to analysis',
      body: 'Amr developed the Power BI solution around the SAP support process, combining SAP functional context with data analysis. The aim was to make workload, recurrence, resolution, and process signals useful for operational review—not simply count tickets.',
    },
    visual: 'analytics',
    technologies: ['Power BI', 'SAP support data', 'Data analysis', 'Process analysis'],
    contextNote: 'Developed through the Digital Egypt Pioneers Initiative (DEPI).',
    interpretation: {
      heading: 'Patterns create opportunities to investigate',
      body: 'Recurring demand can prompt teams to examine process standardization, user enablement, master-data improvement, functional correction, or potential automation. These remain opportunities to investigate, not implemented outcomes.',
    },
    closing: 'SAP functional understanding gives support data context; analytics makes operational patterns more visible for decision-making.',
  },
  'master-data-automation-initiative': {
    sequence: 'IMPROVE',
    category: 'Business Process Initiative',
    heroStatement: 'Consolidate a repetitive master-data request process across 10 companies.',
    opening: 'When a master-data need must be submitted separately for each company, a shared requirement becomes repetitive. This initiative consolidated requests into a more unified cross-company flow across 10 companies.',
    snapshot: [
      { label: 'Scale', value: '10 companies' },
      { label: 'Request model', value: 'Consolidated flow' },
      { label: 'Scope', value: 'Cross-company master data' },
    ],
    facts: [
      { value: 'Customers · vendors · employees', label: 'People and counterparties' },
      { value: 'G/L accounts · banks', label: 'Finance records' },
      { value: 'Profit centers · cost centers', label: 'Organizational dimensions' },
    ],
    challenge: {
      heading: 'Rethink the request process itself',
      body: 'Separate submissions made the same business need more repetitive across entities. The opportunity was to simplify the process—not add another form.',
    },
    role: {
      heading: 'Connect the business problem to the solution process',
      body: 'Amr connected the business need with the solution process as a contributing team member.',
      points: ['Contributed to the business idea', 'Clarified business requirements', 'Participated in process design', 'Participated in UAT', 'Contributed to solution development'],
    },
    visual: 'process',
    before: ['Business requirement', 'Company 1 request', 'Company 2 request', 'Company 3 request', '…', 'Company 10 request'],
    after: ['Business requirement', 'Consolidated request', 'Applicable companies', 'Master-data process'],
    contribution: ['Repeated requests', 'Consolidated requirement', 'Cross-company process', 'More standardized execution'],
    demonstrates: ['Business-process analysis', 'Cross-company thinking', 'SAP business context', 'Requirements clarification + process design', 'UAT participation', 'Business/development collaboration + practical automation thinking'],
    interpretation: {
      heading: 'Improve the process before automating it',
      body: 'Automation is most valuable when it starts with understanding and simplifying the business process rather than merely digitizing an inefficient process.',
    },
    closing: 'A practical bridge between SAP business context and cross-company process improvement.',
  },
  'ai-maintenance-planner': {
    sequence: 'EXPLORE',
    category: 'Hackathon PoC',
    heroStatement: 'Explore whether AI-assisted planning can surface readiness, blockers, risks, and next actions.',
    opening: 'Maintenance planners need more than an order record: they may need to see readiness, blockers, risks, and a useful next action. The BRICKS team explored that need with maintenance-order and operation data.',
    snapshot: [
      { label: 'Team', value: 'BRICKS · team project' },
      { label: 'Program', value: 'SAP MDEP-CE Cohort 7' },
      { label: 'Status', value: 'Not production' },
      { label: 'Focus', value: 'Planner decision support' },
    ],
    facts: [
      { value: '7', label: 'Team members' },
      { value: '2', label: 'Countries' },
      { value: '4', label: 'Ministries' },
      { value: '7', label: 'Specialisations' },
    ],
    challenge: {
      heading: 'Shift from order contents to planner attention',
      body: 'An order contains information; planning still needs context for readiness, blockers, risks, and a useful next step.',
    },
    question: { setup: 'Instead of asking, “What does the maintenance order contain?”', prompt: 'What should the planner pay attention to next?' },
    role: {
      heading: 'Bring business context into a team exploration',
      body: 'Amr contributed as a BRICKS team member, bringing finance, SAP functional, process, and business-analysis perspective to the multidisciplinary prototype.',
    },
    visual: 'agent',
    technologies: ['SAP CAP', 'SAP HANA Cloud', 'APIs', 'Joule Studio / AI agent concepts'],
    teamAchievement: 'The BRICKS team won the MDEP-CE Cohort 7 hackathon with this concept.',
    demonstrates: ['SAP BTP application-development concepts', 'Business context', 'AI-agent concepts', 'Decision support'],
    closing: 'An exploratory PoC connecting SAP business context, BTP concepts, and AI-agent ideas with planner decision support.',
  },
};
