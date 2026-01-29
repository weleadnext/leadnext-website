export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
  description?: string;
}

export const NAVIGATION_DATA: NavItem[] = [
  {
    label: "About",
    children: [
      { label: "Vision, Mission & Values", href: "/about/mission-vision-values" },
      { label: "Our Story", href: "/about/our-story" },
      { label: "Who We Are", href: "/about/who-we-are" },
      { label: "Organizational Structure", href: "/about/organizational-structure" },
    ],
  },
  {
    label: "LeadNext Academy",
    description: "Training and Fellowship Programs",
    children: [
      {
        label: "Short Courses & Trainings",
        href: "/work-in-progress",
        children: [
          { label: "Environmental Stewardship", href: "/work-in-progress" },
          { label: "Skills & Entrepreneurship", href: "/work-in-progress" },
          { label: "Civics & Governance", href: "/work-in-progress" },
          { label: "Politics & Community", href: "/work-in-progress" },
          { label: "Ethics & Social Responsibilities", href: "/work-in-progress" },
        ],
      },
      {
        label: "Fellowships",
        children: [
          { label: "LeadNext Future Leaders Fellowship", href: "/initiatives/future-leaders-fellowship" },
          { label: "LeadNext Civic Stewards Fellowship", href: "/initiatives/civic-stewards-fellowship" },
          { label: "LeadNext Women Leaders Fellowship", href: "/initiatives/women-leaders-fellowship" },
        ],
      },
      {
        label: "Scholarships",
        href: "/work-in-progress",
        children: [{ label: "Apply", href: "/work-in-progress" }],
      },
    ],
  },
  {
    label: "Politics & Governance Hub",
    description: "Data, Monitoring & Civic Tools",
    children: [
      {
        label: "Political Heart",
        children: [
          {
            label: "Geopolitical Zone Maps",
            children: [
              {
                label: "Demographics (Population, Income, Diversity)",
                href: "/work-in-progress",
              },
              { label: "Resources and IGRs", href: "/work-in-progress" },
            ],
          },
          {
            label: "Elections",
            href: "/initiatives/politics-and-governance/elections",
            children: [
              { label: "Political Parties", href: "/initiatives/politics-and-governance/political-heart/political-parties" },
              { label: "Voter Registration & INEC Data", href: "/initiatives/politics-and-governance/elections/voter-registration" },
              { label: "INEC Calendar", href: "/initiatives/politics-and-governance/elections/inec-calendar" },
              { label: "Results Tracker", href: "/initiatives/politics-and-governance/elections/results-tracker" },
            ],
          },
        ],
      },
      {
        label: "Executive Head",
        children: [
          { label: "Federal Government", href: "/initiatives/politics-and-governance/executive-eye/federal" },
          { label: "State Government", href: "/initiatives/politics-and-governance/executive-eye/state" },
          { label: "Local Government", href: "/initiatives/politics-and-governance/executive-eye/local-government" },
        ],
      },
      {
        label: "Legislative Arm",
        children: [
          { label: "Senate", href: "/initiatives/politics-and-governance/legislative/senate" },
          { label: "House of Reps", href: "/initiatives/politics-and-governance/legislative/house-of-reps" },
          { label: "State Assemblies", href: "/initiatives/politics-and-governance/legislative/state-assemblies" },
        ],
      },
    ],
  },
  {
    label: "Civics Centre",
    href: "/work-in-progress",
    children: [
      { label: "The Citizen", href: "/work-in-progress" },
      { label: "The Nation", href: "/work-in-progress" },
      { label: "Social Contract", href: "/work-in-progress" },
    ],
  },
  {
    label: "Citizen Library",
    href: "/work-in-progress",
    children: [
      { label: "The Nigerian Story", href: "/work-in-progress" },
      { label: "Publications", href: "/work-in-progress" },
      { label: "Policy Briefs", href: "/work-in-progress" },
      { label: "Civic Education", href: "/work-in-progress" },
      { label: "Blog", href: "/work-in-progress" },
      {
        label: "Media",
        children: [
          { label: "Podcast", href: "/work-in-progress" },
          { label: "Videos & Documentaries", href: "/work-in-progress" },
          { label: "Photo Gallery", href: "/work-in-progress" },
        ],
      },
    ],
  },
  {
    label: "Impact",
    children: [
      { label: "Youth Impact Statistics Dashboard", href: "/work-in-progress" },
      { label: "Testimonials", href: "/work-in-progress" },
      { label: "National Reach Map", href: "/work-in-progress" },
      { label: "Annual Reports", href: "/work-in-progress" },
      {
        label: "LeadNext Network",
        children: [
          { label: "Partners", href: "/impact/leadnext-network/partners" },
          { label: "Cohorts", href: "/work-in-progress" },
        ],
      },
    ],
  },
  {
    label: "Get Involved",
    children: [
      {
        label: "Support Us",
        children: [
          { label: "Donate", href: "/donate" },
          { label: "Sponsor a Program", href: "/work-in-progress" },
          { label: "Fund Community Projects", href: "/work-in-progress" },
          { label: "Sponsor a Fellow", href: "/work-in-progress" },
        ],
      },
      {
        label: "Work with Us",
        children: [
          { label: "Volunteer", href: "/get-involved/work-with-us?type=volunteer" },
          { label: "Become a Mentor", href: "/get-involved/work-with-us?type=mentor" },
          { label: "Become a Partner", href: "/get-involved/work-with-us?type=partner" },
          { label: "Careers & Internships", href: "/get-involved/work-with-us?type=career" },
        ],
      },
      {
        label: "Contact",
        children: [
          { label: "Email Us", href: "mailto:weleadnext@gmail.com" },
          // { label: "Contact Form", href: "/work-in-progress" },
        ],
      },
    ],
  },
];
