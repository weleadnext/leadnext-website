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
        href: "/coming-soon#short-courses",
        children: [
          { label: "Environmental Stewardship", href: "/coming-soon#short-courses" },
          { label: "Skills & Entrepreneurship", href: "/coming-soon#short-courses" },
          { label: "Civics & Governance", href: "/coming-soon#short-courses" },
          { label: "Politics & Community", href: "/coming-soon#short-courses" },
          { label: "Ethics & Social Responsibilities", href: "/coming-soon#short-courses" },
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
        children: [{ label: "Apply", href: "/coming-soon#scholarships" }],
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
      { label: "The Citizen", href: "/coming-soon#civics-center" },
      { label: "The Nation", href: "/coming-soon#civics-center" },
      { label: "Social Contract", href: "/coming-soon#civics-center" },
    ],
  },
  {
    label: "Citizen Library",
    href: "/work-in-progress",
    children: [
      { label: "The Nigerian Story", href: "/coming-soon#citizen-library" },
      { label: "Publications", href: "/coming-soon#citizen-library" },
      { label: "Policy Briefs", href: "/coming-soon#citizen-library" },
      { label: "Civic Education", href: "/coming-soon#citizen-library" },
      { label: "Blog", href: "/coming-soon#citizen-library" },
      {
        label: "Media",
        children: [
          { label: "Podcast", href: "/coming-soon#citizen-library" },
          { label: "Videos & Documentaries", href: "/coming-soon#citizen-library" },
          { label: "Photo Gallery", href: "/coming-soon#citizen-library" },
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
        href: "mailto:weleadnext@gmail.com"
      },
    ],
  },
];
