import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    id: "project-consulting",
    icon: "🏗️",
    title: "Construction Project Consulting",
    shortDescription:
      "End-to-end consulting from planning to handover — ensuring your project stays on track, on budget, and built to last.",
    fullDescription:
      "Every successful construction project starts with expert guidance. I work alongside property owners and developers from the earliest planning stages through final handover, identifying risks before they become costly problems, aligning all stakeholders, and keeping your project moving forward with clarity and confidence.",
    features: [
      "Project feasibility and pre-design review",
      "Scope definition and milestone planning",
      "Stakeholder coordination and communication",
      "Design review and constructability analysis",
      "On-site progress monitoring",
      "Final inspection and punch-list management",
    ],
    process: [
      {
        step: 1,
        title: "Initial Assessment",
        description:
          "We review your project goals, site conditions, budget, and timeline to establish a solid foundation.",
      },
      {
        step: 2,
        title: "Strategy & Planning",
        description:
          "A detailed consulting roadmap is prepared, defining deliverables, milestones, and checkpoints.",
      },
      {
        step: 3,
        title: "Active Monitoring",
        description:
          "Regular site visits, progress reports, and proactive issue resolution keep the project on course.",
      },
      {
        step: 4,
        title: "Completion & Handover",
        description:
          "Final inspections, defect identification, and documentation ensure a smooth, confident handover.",
      },
    ],
  },
  {
    id: "cost-analysis",
    icon: "📊",
    title: "Cost Analysis & Budget Planning",
    shortDescription:
      "Accurate cost estimates and realistic budgets that protect your investment from day one.",
    fullDescription:
      "Construction costs spiral out of control when estimates are vague or optimistic. I provide detailed, data-driven cost analyses that account for material pricing, labor market conditions, contingency reserves, and hidden expenses most clients never see coming. Walk into every project knowing exactly what you're committing to.",
    features: [
      "Preliminary and detailed quantity take-offs",
      "Market-rate material and labor cost benchmarking",
      "Value engineering opportunities",
      "Cash flow scheduling and draw forecasting",
      "Change-order impact assessment",
      "Budget variance tracking throughout construction",
    ],
    process: [
      {
        step: 1,
        title: "Scope Review",
        description:
          "Thorough analysis of drawings, specifications, and project requirements.",
      },
      {
        step: 2,
        title: "Quantity Take-Off",
        description:
          "Every material and labor element is measured and itemized with precision.",
      },
      {
        step: 3,
        title: "Market Pricing",
        description:
          "Costs are benchmarked against current market rates and verified supplier quotes.",
      },
      {
        step: 4,
        title: "Budget Report",
        description:
          "A clear, actionable budget report with contingency recommendations is delivered.",
      },
    ],
  },
  {
    id: "technical-supervision",
    icon: "🔍",
    title: "Technical Supervision",
    shortDescription:
      "Independent, expert eyes on your site — verifying that work is performed correctly before it's covered up.",
    fullDescription:
      "Quality issues in construction are rarely visible after the fact — they hide behind drywall, under concrete, and above ceilings. My technical supervision service provides independent verification at every critical stage, catching defects while they can still be fixed inexpensively and holding contractors to the standards your contract requires.",
    features: [
      "Structural and foundation inspections",
      "Concrete pour and reinforcement verification",
      "MEP (mechanical, electrical, plumbing) coordination review",
      "Waterproofing and insulation quality checks",
      "Material compliance verification against specifications",
      "Photographic progress documentation",
    ],
    process: [
      {
        step: 1,
        title: "Inspection Plan",
        description:
          "Critical inspection points are mapped to your project schedule before work begins.",
      },
      {
        step: 2,
        title: "On-Site Visits",
        description:
          "Timely site visits at each critical stage — foundation, structure, envelope, fit-out.",
      },
      {
        step: 3,
        title: "Deficiency Reporting",
        description:
          "Issues are documented clearly with photographs and formal deficiency notices to the contractor.",
      },
      {
        step: 4,
        title: "Resolution Verification",
        description:
          "All identified deficiencies are tracked until properly resolved and signed off.",
      },
    ],
  },
  {
    id: "risk-assessment",
    icon: "⚠️",
    title: "Risk Assessment",
    shortDescription:
      "Identify, quantify, and mitigate risks before they become expensive surprises.",
    fullDescription:
      "Construction carries inherent risk — schedule delays, subcontractor failures, unforeseen site conditions, regulatory changes. My risk assessment service systematically identifies threats to your project and provides a clear mitigation roadmap, so you make decisions with your eyes fully open.",
    features: [
      "Site-specific geotechnical and environmental risk review",
      "Regulatory and permitting risk analysis",
      "Contractor and supply chain risk evaluation",
      "Schedule risk modeling (float analysis)",
      "Insurance coverage gap identification",
      "Risk register development and monitoring",
    ],
    process: [
      {
        step: 1,
        title: "Risk Identification",
        description:
          "Systematic review of technical, financial, regulatory, and operational risks.",
      },
      {
        step: 2,
        title: "Probability & Impact Scoring",
        description:
          "Each risk is ranked by likelihood and potential financial/schedule impact.",
      },
      {
        step: 3,
        title: "Mitigation Planning",
        description:
          "Practical, prioritized mitigation strategies are developed for every significant risk.",
      },
      {
        step: 4,
        title: "Ongoing Monitoring",
        description:
          "The risk register is updated throughout the project lifecycle as conditions evolve.",
      },
    ],
  },
  {
    id: "contractor-evaluation",
    icon: "✅",
    title: "Contractor Evaluation",
    shortDescription:
      "Choose the right contractor — not just the cheapest one — with independent, expert vetting.",
    fullDescription:
      "The wrong contractor choice is the single biggest risk on any construction project. I conduct thorough, impartial evaluations of contractors and their bids, looking beyond the bottom-line price to financial stability, past performance, team competence, and the hidden assumptions in their proposals.",
    features: [
      "Bid analysis and scope gap identification",
      "Contractor financial and reference checks",
      "Subcontractor qualification review",
      "Contract terms and conditions analysis",
      "Tender comparison and recommendation reports",
      "Post-award performance baseline setting",
    ],
    process: [
      {
        step: 1,
        title: "Tender Documentation Review",
        description:
          "Ensuring your tender package is complete and unambiguous before going to market.",
      },
      {
        step: 2,
        title: "Bid Evaluation",
        description:
          "Detailed analysis of all received bids, normalizing for scope differences and assumptions.",
      },
      {
        step: 3,
        title: "Due Diligence",
        description:
          "Financial checks, reference calls, and past-project site visits for shortlisted contractors.",
      },
      {
        step: 4,
        title: "Recommendation",
        description:
          "A clear written recommendation with scoring rationale, helping you award with confidence.",
      },
    ],
  },
];
