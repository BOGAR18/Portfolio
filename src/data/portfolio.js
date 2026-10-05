export const profile = {
  name: 'Satrio Tegar Nurwicaksono',
  role: 'SAP Consultant & IT Professional',
  focus: 'SAP S/4HANA · ERP Rollout · Software Development',
  location: 'Jakarta, Indonesia',
  photo: 'profile.png',
  summary:
    'Information Systems graduate with experience in SAP S/4HANA (SD, MM, PM), covering data preparation, testing, cutover, migration support, and go-live support. I also have experience developing applications using React Native, Laravel, and Firebase, allowing me to bridge business requirements and technical implementation.',
  highlights: [
    'SAP S/4HANA rollout for Auto2000',
    'PIC for 6 branch rollouts and Team Leader for 3 branch rollouts',
    'Software development: web & mobile',
  ],
}

export const experience = [
  {
    id: 'sap',
    company: 'PT Astragraphia Information Technology (AGIT)',
    position: 'SAP Consultant',
    period: 'December 2025 – September 2026',
    location: 'Jakarta, Indonesia',
    description:
      'Involved in an SAP S/4HANA rollout and migration project for Auto2000, with a focus on SD and MM processes.',
    responsibilities: [
      'Data preparation, data cleansing, and data validation',
      'Testing, cutover, and migration support',
      'Go-live and post-go-live support, including user support',
      'PIC for 6 branch rollouts and stakeholder coordination',
      'System and business process analysis',
    ],
    technologies: ['SAP S/4HANA', 'SAP SD', 'SAP MM', 'SAP PM'],
    achievements: ['PIC for 6 branch rollouts and Team Leader for 3 branch rollouts'],
  },
  {
    id: 'pln',
    company: 'PT PLN (Persero) UID Jawa Timur',
    position: 'Frontend Developer (Internship)',
    period: 'June 2024 – August 2024',
    location: 'Surabaya, East Java',
    description: 'Interned in the IT field and contributed to the development of an inventory system.',
    responsibilities: [
      'Developed an inventory system',
      'Assisted with system analysis, design, testing, documentation, and deployment',
    ],
    technologies: ['Laravel', 'PHP', 'Firebase', 'MySQL'],
    achievements: ['Contributed to the development of an inventory system used by the STI (Sistem Teknologi dan Informasi) team'],
  },
]

export const skills = [
  { group: 'SAP & ERP', items: ['SAP S/4HANA', 'SAP SD', 'SAP MM', 'SAP PM', 'Data Migration', 'Cutover & Go-Live'] },
  { group: 'Development', items: ['JavaScript', 'React Native', 'Laravel / PHP', 'REST API', 'Firebase'] },
  { group: 'Data & Tools', items: ['MySQL / SQL', 'Git', 'GitHub', 'GitLab', 'Figma'] },
  { group: 'Professional', items: ['System Analysis', 'Stakeholder Coordination', 'User Support', 'Leadership'] },
]

export const projects = [
  {
    title: 'Inventory System PT.PLN (Persero) UID Jawa Timur',
    description: 'An inventory management system for handling incoming and outgoing goods and supporting inventory-related activities.',
    role: 'IT Staff Intern / Developer',
    technologies: ['Laravel', 'PHP', 'Firebase', 'MySQL'],
    year: '2024',
    link: '',
  },
  {
    title: 'SAP S/4HANA Rollout Auto2000',
    description: 'SAP S/4HANA rollout and migration project across multiple Auto2000 branches.',
    role: 'PIC Branch Rollout',
    technologies: ['SAP S/4HANA', 'SAP SD', 'SAP MM'],
    year: '2025–2026',
    link: '',
  },
  {
    title: 'Warehouse Inventory Mobile Application',
    description: 'A mobile inventory application for managing incoming and outgoing goods, as well as branch requests, returns, and approvals.',
    role: 'Developer',
    technologies: ['React Native', 'Firebase'],
    year: '2025',
    link: '',
  },
]

export const education = [
  { school: 'Telkom University Surabaya', degree: 'Bachelor of Information Systems', period: '2021–2025', note: 'GPA: 3.4/4.0' },
]

export const organization = [
  { name: 'Information Systems Student Association, Telkom University Surabaya', role: 'Vice Chairman', period: '2024–2025', note: 'Coordinated organizational programs and supported student activities and team collaboration' },
]

export const contact = {
  email: 'tegarn78@gmail.com',
  phone: '+6281385000960',
  linkedin: 'https://www.linkedin.com/in/satrio-tegar-nurwicaksono/',
  github: 'https://github.com/BOGAR18',
}

export const stats = [
  { value: '6', label: 'Branch rollouts as PIC' },
  { value: '3', label: 'Branch rollouts as Team Leader' },
  { value: 'SD · MM · PM', label: 'SAP modules' },
]