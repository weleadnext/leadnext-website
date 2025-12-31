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
    label: "Initiatives",
    children: [
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
              { label: "LeadNext Future Leaders Fellowship", href: "/initiatives/leadnext-future-leaders-fellowship" },
              { label: "LeadNext Civic Stewards Fellowship", href: "/initiatives/leadnext-civic-stewards-fellowship" },
              { label: "LeadNext Women Leaders Fellowship", href: "/initiatives/leadnext-women-leaders-fellowship" },
            ],
          },
          {
            label: "Scholarships",
            href: "/coming-soon#scholarships",
            children: [{ label: "Apply", href: "/coming-soon#scholarships" }],
          },
          {
            label: "Alumni",
            children: [
              { label: "Cohorts", href: "#" },
              { label: "Testimonials", href: "#" },
            ],
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
                    href: "#",
                  },
                  { label: "Federal Character Appointments", href: "#" },
                  { label: "Resources and IGRs", href: "#" },
                ],
              },
              { label: "Political Parties", href: "#" },
              {
                label: "Elections Tracker",
                children: [
                  { label: "Voter Registration & INEC Data", href: "#" },
                  { label: "INEC Calendar", href: "#" },
                  { label: "Results Tracker", href: "#" },
                ],
              },
            ],
          },
          {
            label: "Executive Head",
            children: [
              { label: "Federal Government", href: "#" },
              { label: "State Government", href: "#" },
              { label: "Local Government", href: "#" },
            ],
          },
          {
            label: "Legislative Arm",
            children: [
              { label: "Senate", href: "#" },
              { label: "House of Reps", href: "#" },
              { label: "State Assemblies", href: "#" },
              { label: "LG Councils", href: "#" },
            ],
          },
          // {
          //   label: "Civics Centre",
          //   children: [
          //     { label: "The Citizen", href: "#" },
          //     { label: "The Nation", href: "#" },
          //     { label: "Social Contract", href: "#" },
          //   ],
          // },
        ],
      },
      {
        label: "LeadNext Network",
        children: [
          {
            label: "Partners",
            children: [
              { label: "Private Organizations", href: "#" },
              { label: "Nonprofit Organizations", href: "#" },
            ],
          },
          {
            label: "Cohorts",
            children: [
              { label: "Training Alumni", href: "#" },
              { label: "Fellows", href: "#" },
            ],
          }
        ],
      },
      {
        label: "Impact",
        children: [
          { label: "Youth Impact Statistics Dashboard", href: "#" },
          { label: "Testimonials", href: "#" },
          { label: "National Reach Map", href: "#" },
          { label: "Annual Reports", href: "#" },
        ],
      },
      {
        label: "Citizen Library",
        href: "/coming-soon#citizen-library",
        children: [
          { label: "The Nigerian Story", href: "/coming-soon#citizen-library" },
          { label: "Publications", href: "/coming-soon#citizen-library" },
          { label: "Policy Briefs", href: "/coming-soon#citizen-library" },
          { label: "Civic Education", href: "/coming-soon#citizen-library" },
          { label: "Blog", href: "/coming-soon#citizen-library" },
        ],
      },
      {
        label: "Civics Centre",
        href: "/coming-soon#civics-center",
        children: [
          { label: "The Citizen", href: "/coming-soon#civics-center" },
          { label: "The Nation", href: "/coming-soon#civics-center" },
          { label: "Social Contract", href: "/coming-soon#civics-center" },
        ],
      },
    ],
  },
  {
    label: "Media",
    children: [
      { label: "Podcast", href: "#" },
      { label: "Videos & Documentaries", href: "#" },
      { label: "Photo Gallery", href: "#" },
    ],
  },
  {
    label: "Get Involved",
    children: [
      {
        label: "Support Us",
        children: [
          { label: "Donate", href: "#" },
          { label: "Sponsor a Program", href: "#" },
          { label: "Fund Community Projects", href: "#" },
          { label: "Sponsor a Fellow", href: "#" },
        ],
      },
      {
        label: "Work with Us",
        children: [
          { label: "Volunteer", href: "#" },
          { label: "Become a Mentor", href: "#" },
          { label: "Become a Partner", href: "#" },
          { label: "Careers & Internships", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Contact",
    children: [
      { label: "Email Us", href: "mailto:weleadnext@gmail.com" },
      { label: "Contact Form", href: "#" },
    ],
  },
];
