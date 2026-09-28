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
  dimensions?: string[];
  areas?: string[];
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
    heroStatement: 'Use SAP support data to see operational patterns across 11 companies.',
    opening: 'Individual support records explain incidents; together, they can offer a wider view of workload, recurring problems, resolution patterns, and improvement opportunities. This Power BI project brings support data across 11 companies into a management-level analytical view.',
    snapshot: [
      { label: 'Coverage', value: '11 companies' },
      { label: 'Tool', value: 'Power BI' },
      { label: 'Development context', value: 'Developed through DEPI' },
    ],
    facts: [
      { value: '11', label: 'Companies covered' },
      { value: 'Power BI', label: 'Analytical view' },
      { value: 'SAP support', label: 'Operational context' },
      { value: 'Management', label: 'Visibility focus' },
    ],
    challenge: {
      heading: 'This is not just ticket counting',
      body: 'The goal was a broader operational view than ticket-by-ticket review: demand, workload, recurrence and resolution patterns that may warrant closer investigation.',
      questions: [
        'Where is support demand coming from?',
        'How is workload distributed across companies?',
        'Which problems recur, and what resolution patterns appear?',
        'Which signals suggest an area for further investigation?',
      ],
    },
    role: {
      heading: 'Connect SAP support context to analysis',
      body: 'Amr developed the Power BI solution around the SAP support process, organizing support information for management visibility—not just ticket totals.',
    },
    visual: 'analytics',
    dimensions: ['Company', 'Ticket volume', 'Workload', 'Problems', 'Recurrence', 'Resolution', 'Critical issues'],
    technologies: ['Power BI', 'SAP support data', 'Data analysis', 'Process analysis'],
    contextNote: 'DEPI · Data Analysis — Microsoft Power BI Specialist track.',
    interpretation: {
      heading: 'Patterns create opportunities to investigate',
      body: 'Visible patterns can prompt investigation into process standardization, user enablement, master-data improvement, functional correction, or potential automation. These are opportunities to investigate, not measured outcomes.',
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
      { value: '10', label: 'Companies covered' },
      { value: '7', label: 'Master-data request areas' },
      { value: 'Consolidated', label: 'Cross-company request flow' },
    ],
    challenge: {
      heading: 'Rethink the request process itself',
      body: 'The opportunity was to simplify the process itself, not simply introduce another form.',
    },
    role: {
      heading: 'Connect the business problem to the solution process',
      body: 'Amr connected the business need to the solution process across idea, requirements, design, testing and development.',
      points: ['Contributed to the business idea', 'Clarified business requirements', 'Participated in process design', 'Participated in UAT', 'Contributed to solution development'],
    },
    visual: 'process',
    areas: ['Customers', 'Vendors', 'Employees', 'G/L accounts', 'Banks', 'Profit centers', 'Cost centers'],
    before: ['Business requirement', 'Company 1 request', 'Company 2 request', 'Company 3 request', '…', 'Company 10 request'],
    after: ['Business requirement', 'Consolidated request', 'Applicable companies', 'Master-data process'],
    contribution: ['Repeated requests', 'Consolidated requirement', 'Cross-company process', 'More standardized execution'],
    demonstrates: ['Business-process analysis', 'Cross-company thinking', 'SAP business context', 'Requirements clarification + process design', 'UAT participation', 'Business/development collaboration + practical automation thinking'],
    interpretation: {
      heading: 'Improve the process before automating it',
      body: 'Automation is most useful when it follows a clear understanding and simplification of the business process.',
    },
    closing: 'A practical bridge between SAP business context and cross-company process improvement.',
  },
  'ai-maintenance-planner': {
    sequence: 'EXPLORE',
    category: 'Hackathon PoC',
    heroStatement: 'Explore whether AI-assisted planning can surface readiness, blockers, risks, and next actions.',
    opening: 'Maintenance planners may need to understand readiness, blockers, risks, and what to consider next. The BRICKS team explored that question using maintenance-order and operation data.',
    snapshot: [
      { label: 'Team', value: '7 members · 2 countries' },
      { label: 'Cohort context', value: '4 ministries · 7 specialisations' },
      { label: 'Recognition', value: 'BRICKS hackathon winner' },
    ],
    facts: [],
    challenge: {
      heading: 'Shift from order contents to planner attention',
      body: 'An order contains information; the planning question is what deserves attention next.',
    },
    question: { setup: 'Instead of asking, “What does the maintenance order contain?”', prompt: 'What should the planner pay attention to next?' },
    role: {
      heading: 'Bring business context into a team exploration',
      body: 'Amr contributed as a BRICKS team member, bringing finance, SAP functional, process, and business-analysis perspective to the multidisciplinary prototype.',
    },
    visual: 'agent',
    technologies: ['SAP CAP', 'SAP HANA Cloud', 'APIs', 'Joule Studio / AI agent concepts'],
    demonstrates: ['SAP BTP application-development concepts', 'Business context', 'AI-agent concepts', 'Decision support'],
    closing: 'A team exploration of how SAP business context, BTP concepts and AI-agent ideas could support a planner’s next decision.',
  },
};
