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
      { label: "Vision, Mission & Values", href: "#" },
      { label: "Our Story", href: "#" },
      { label: "Leadership & Advisory Council", href: "#" },
      { label: "Organizational Structure", href: "#" },
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
            label: "Apply",
            children: [
              { label: "Application Forms", href: "#" },
              { label: "Application FAQs", href: "#" },
            ],
          },
          {
            label: "Trainings & Fellowships",
            children: [
              {
                label: "Short Courses",
                children: [
                  { label: "Environmental Stewardship", href: "#" },
                  { label: "Skills & Entrepreneurship", href: "#" },
                  { label: "Civics & Governance", href: "#" },
                  { label: "People's Politics", href: "#" },
                  { label: "Ethics & Social Responsibilities", href: "#" },
                ],
              },
              {
                label: "Fellowships",
                children: [
                  { label: "NextGen Fellowship", href: "#" },
                  { label: "Stewards Fellowship", href: "#" },
                  { label: "Women-in-Leadership", href: "#" },
                ],
              },
            ],
          },
          {
            label: "Scholarships",
            children: [
              { label: "O Level", href: "#" },
              { label: "A Level", href: "#" },
              { label: "Fellowship", href: "#" },
              { label: "Training", href: "#" },
            ],
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
              { label: "Geopolitical Zone Maps", href: "#" },
              { label: "Political Parties", href: "#" },
              { label: "Elections", href: "#" },
            ],
          },
          {
            label: "Executive Eye",
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
          {
            label: "Civics Centre",
            children: [
              { label: "The Citizen", href: "#" },
              { label: "The Nation", href: "#" },
              { label: "Social Contract", href: "#" },
            ],
          },
        ],
      },
      {
        label: "LeadNext Network",
        children: [
          { label: "Private Organizations", href: "#" },
          { label: "Nonprofit Organizations", href: "#" },
          { label: "Individuals", href: "#" },
        ],
      },
      {
        label: "Impact",
        children: [
          { label: "Youth Impact Dashboard", href: "#" },
          { label: "Alumni Stories", href: "#" },
          { label: "National Reach Map", href: "#" },
          { label: "Annual Reports", href: "#" },
        ],
      },
      {
        label: "Citizen Library",
        children: [
          { label: "The Nigerian Story", href: "#" },
          { label: "Publications", href: "#" },
          { label: "Policy Briefs", href: "#" },
          { label: "Civic Education", href: "#" },
          { label: "Blog", href: "#" },
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

