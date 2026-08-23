export type Maturity = "proven" | "emerging";

export type Task = {
  id: string;
  name: string;
  description: string;
  defaultHoursPerWeek: number;
  aiSavingsPercent: number;
  aiMaturity: Maturity;
};

export type TaskCategory = {
  id: string;
  name: string;
  marker: string;
  tasks: Task[];
};

export type RolePreset = {
  id: string;
  name: string;
  defaultSalary: number;
  group: "individual" | "leader" | "other";
  taskOverrides: Record<string, number>;
};

export const taskCategories: TaskCategory[] = [
  {
    id: "research",
    name: "Research & analysis",
    marker: "R",
    tasks: [
      { id: "market_research", name: "Market & competitor research", description: "Gathering intelligence on competitors, market trends and industry reports", defaultHoursPerWeek: 3, aiSavingsPercent: 75, aiMaturity: "proven" },
      { id: "data_analysis", name: "Data analysis & reporting", description: "Pulling data, building reports, creating dashboards and summarising findings", defaultHoursPerWeek: 4, aiSavingsPercent: 65, aiMaturity: "proven" },
      { id: "prospect_research", name: "Prospect & account research", description: "Researching companies before meetings, finding contacts and understanding structure", defaultHoursPerWeek: 2, aiSavingsPercent: 80, aiMaturity: "proven" },
    ],
  },
  {
    id: "writing",
    name: "Writing & content",
    marker: "W",
    tasks: [
      { id: "email_drafting", name: "Email drafting & responses", description: "Writing, editing and responding to emails throughout the day", defaultHoursPerWeek: 5, aiSavingsPercent: 60, aiMaturity: "proven" },
      { id: "reports_proposals", name: "Reports, proposals & documents", description: "Creating decks, proposals, business cases and internal documents", defaultHoursPerWeek: 4, aiSavingsPercent: 55, aiMaturity: "proven" },
      { id: "content_creation", name: "Content creation", description: "Writing thought leadership, social posts, newsletters and articles", defaultHoursPerWeek: 2, aiSavingsPercent: 50, aiMaturity: "proven" },
    ],
  },
  {
    id: "admin",
    name: "Admin & operations",
    marker: "A",
    tasks: [
      { id: "meeting_prep", name: "Meeting preparation", description: "Preparing agendas, reading pre-reads and gathering context before meetings", defaultHoursPerWeek: 3, aiSavingsPercent: 70, aiMaturity: "proven" },
      { id: "meeting_notes", name: "Meeting notes & follow-ups", description: "Taking notes, writing summaries and distributing action items", defaultHoursPerWeek: 3, aiSavingsPercent: 85, aiMaturity: "proven" },
      { id: "scheduling_admin", name: "Scheduling & calendar management", description: "Coordinating meetings, managing calendars and navigating time zones", defaultHoursPerWeek: 2, aiSavingsPercent: 50, aiMaturity: "emerging" },
      { id: "crm_updates", name: "CRM & tool updates", description: "Updating systems, logging activities and maintaining records", defaultHoursPerWeek: 2, aiSavingsPercent: 60, aiMaturity: "emerging" },
    ],
  },
  {
    id: "strategy",
    name: "Strategy & decisions",
    marker: "S",
    tasks: [
      { id: "strategic_planning", name: "Strategic planning & problem solving", description: "Thinking through complex problems, scenarios and strategy", defaultHoursPerWeek: 3, aiSavingsPercent: 35, aiMaturity: "emerging" },
      { id: "process_improvement", name: "Process design & improvement", description: "Documenting workflows, identifying bottlenecks and designing better processes", defaultHoursPerWeek: 2, aiSavingsPercent: 45, aiMaturity: "emerging" },
    ],
  },
  {
    id: "learning",
    name: "Learning & development",
    marker: "L",
    tasks: [
      { id: "staying_current", name: "Staying current", description: "Reading industry news, taking courses and staying current in your field", defaultHoursPerWeek: 2, aiSavingsPercent: 60, aiMaturity: "proven" },
      { id: "training_others", name: "Training & coaching others", description: "Creating training materials, onboarding documentation and coaching teams", defaultHoursPerWeek: 2, aiSavingsPercent: 45, aiMaturity: "emerging" },
    ],
  },
];

export const rolePresets: RolePreset[] = [
  { id: "sales_engineer", name: "Sales Engineer", defaultSalary: 85000, group: "individual", taskOverrides: { prospect_research: 4, email_drafting: 3, reports_proposals: 4, meeting_prep: 4, meeting_notes: 3, crm_updates: 2, process_improvement: 2, training_others: 2 } },
  { id: "account_executive", name: "Account Executive", defaultSalary: 90000, group: "individual", taskOverrides: { prospect_research: 4, email_drafting: 6, meeting_prep: 4, meeting_notes: 3, crm_updates: 3, strategic_planning: 2, reports_proposals: 3 } },
  { id: "account_manager", name: "Account Manager", defaultSalary: 70000, group: "individual", taskOverrides: { email_drafting: 6, meeting_prep: 3, meeting_notes: 4, crm_updates: 4, scheduling_admin: 2, reports_proposals: 2, prospect_research: 2 } },
  { id: "product_manager", name: "Product Manager", defaultSalary: 90000, group: "individual", taskOverrides: { market_research: 4, data_analysis: 4, reports_proposals: 4, meeting_prep: 3, meeting_notes: 3, strategic_planning: 4, process_improvement: 3 } },
  { id: "developer", name: "Developer", defaultSalary: 80000, group: "individual", taskOverrides: { reports_proposals: 2, email_drafting: 3, meeting_prep: 2, meeting_notes: 2, process_improvement: 4, staying_current: 3, training_others: 2 } },
  { id: "product_developer", name: "Product Developer", defaultSalary: 85000, group: "individual", taskOverrides: { market_research: 2, data_analysis: 3, reports_proposals: 3, meeting_prep: 3, meeting_notes: 2, strategic_planning: 3, process_improvement: 4, staying_current: 3 } },
  { id: "marketing_professional", name: "Marketing Professional", defaultSalary: 65000, group: "individual", taskOverrides: { content_creation: 5, market_research: 3, data_analysis: 3, email_drafting: 4, reports_proposals: 2, strategic_planning: 2 } },
  { id: "technical_product_marketing", name: "Technical Product Marketing", defaultSalary: 80000, group: "individual", taskOverrides: { content_creation: 4, market_research: 3, data_analysis: 3, reports_proposals: 4, prospect_research: 2, meeting_prep: 2, strategic_planning: 3 } },
  { id: "sales_leader", name: "Sales / Revenue Leader", defaultSalary: 120000, group: "leader", taskOverrides: { email_drafting: 6, prospect_research: 3, reports_proposals: 5, meeting_prep: 4, meeting_notes: 3, crm_updates: 2, strategic_planning: 4, data_analysis: 3 } },
  { id: "se_leader", name: "Sales Engineering Leader", defaultSalary: 110000, group: "leader", taskOverrides: { email_drafting: 4, prospect_research: 3, reports_proposals: 5, meeting_prep: 4, meeting_notes: 3, data_analysis: 3, process_improvement: 3, training_others: 3 } },
  { id: "marketing_leader", name: "Marketing Leader", defaultSalary: 100000, group: "leader", taskOverrides: { content_creation: 5, market_research: 4, data_analysis: 5, email_drafting: 4, reports_proposals: 3, strategic_planning: 3 } },
  { id: "operations_leader", name: "Operations / Programme Leader", defaultSalary: 95000, group: "leader", taskOverrides: { data_analysis: 6, reports_proposals: 5, process_improvement: 4, meeting_prep: 3, meeting_notes: 4, scheduling_admin: 3 } },
  { id: "consultant", name: "Consultant / Advisor", defaultSalary: 130000, group: "leader", taskOverrides: { prospect_research: 4, reports_proposals: 6, market_research: 3, content_creation: 3, meeting_prep: 4, strategic_planning: 4 } },
  { id: "executive", name: "C-Suite / VP", defaultSalary: 160000, group: "leader", taskOverrides: { email_drafting: 7, meeting_prep: 5, meeting_notes: 4, strategic_planning: 5, data_analysis: 3, reports_proposals: 4 } },
  { id: "custom", name: "Custom — set my own", defaultSalary: 80000, group: "other", taskOverrides: {} },
];

export const allTasks = taskCategories.flatMap((category) => category.tasks);

export const getTask = (taskId: string) => allTasks.find((task) => task.id === taskId);
