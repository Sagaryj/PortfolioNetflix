

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Sagar Y J',
  displayName: 'Sagar Y J',
  firstName: 'Sagar',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A SAGAR ORIGINAL',
  role: 'Full-Stack Developer/AIML Engineer',
  tagline: ['Full-Stack Developer', 'AI / ML', 'Python'],
  intro:
    'A B.E Computer Science and Engineering(AI&ML) Engineer(CGPA 8.9) and full-stack developer & AIML engineer building AI-powered platforms, payment systems and multi-tenant SaaS with C/C++, Python, React, Node.js, TypeScript/JavaScript, ML, NLP, Agentic AI, LLM, RAG and Docker.',
  location: 'Bengaluru, India',
  email: 'yjsagar@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/sagar-y-j-a70411321/',
    github: 'https://github.com/Sagaryj',
  },
  resumePdf: '/assets/Sagar_Y_J_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Sagar Y J',
  },
  interests: ['Software Engineering', 'Emerging Technologies', 'Machine Learning'],
};

export const education = [
  {
    school: 'BMS Institute of Technology & Management',
    place: 'Bengaluru',
    degree: 'Bachelor of Engineering — Computer Science and Engineering (AI & ML)',
    period: 'Nov 2022 – May 2026',
    score: 'CGPA 8.9',
  },
  {
    school: 'Sri Kumarans Children’s School PUC',
    place: 'Bengaluru',
    degree: '12th Grade — Science (PCMB)',
    period: 'June 2020 – May 2022',
    score: 'Score 92.96%',
  },
];

export const experience = [
  {
    company: 'Talview Inc.',
    role: 'Software Engineer Intern',
    place: 'Bengaluru, India',
    period: 'Jan 2026 - Sept 2026',
    points: [
      'Developed and maintained enterprise-grade full-stack applications using React, TypeScript, Redux-Saga, GraphQL, Hasura, and PostgreSQL across frontend and backend monorepos.',
      'Built Python-based automation scripts and backend services to streamline testing, deployment, and development workflows while following coding standards and version control practices.',
      'Integrated AI-powered chat support with Twilio real-time streaming technology, enabling voice and video communication between candidates, AI assistants, technical teams, and proctors in production environments.',
      'Improved application reliability through Jest and Cypress test automation, Storybook-based UI validation, and application monitoring using Sentry and OpenTelemetry.',
    ],
  },
  {
    company: 'Commonwealth Bank Australia (CBA)',
    role: 'Software Development Trainee',
    place: 'Remote',
    period: 'July 2025 – Dec 2025',
    points: [
      'Gained hands-on training in Python and full-stack development using JavaScript, React.js, Node.js, MongoDB, SQL, and database concepts.',
      'Worked on data engineering, cloud computing, and AI fundamentals while developing a capstone project that integrated web technologies and AI.',
    ],
  },
  {
    company: 'SISA Information Security',
    role: 'SISA AI Assistant Intern',
    place: 'India',
    period: 'June 2025 – Oct 2025',
    points: [
      'Built an advanced marketing-automation ecosystem using Pardot, Salesforce CRM, n8n, and WordPress.',
      'Gained full-stack implementation experience and applied automation strategy to improve customer-acquisition workflows.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'auditscope-360',
      title: 'AuditScope 360',
      year: '2025',
      genre: 'GenAI • FinTech • RAG',
      logline: 'A GenAI-powered financial audit intelligence platform that retrieves accounting benchmarks and generates explainable audit insights.',
      stack: ['Python', 'LLMs', 'RAG', 'FAISS', 'Vector Embeddings'],
      build: [
        'Built a GenAI-powered financial audit platform using Python, vector embeddings, FAISS, RAG frameworks, and LLMs to semantically retrieve accounting benchmarks and generate explainable audit insights.',
        'Implemented RAG workflows with vector data, semantic embeddings, benchmark retrieval, compliance scoring, confidence scoring, and reinforcement-learning-based knowledge adaptation.',
        'Developed secure report generation and human-in-the-loop feedback workflows, validating the system across clear, fail, borderline, and random audit scenarios.',
      ],
 features: [
        'Semantic retrieval of accounting benchmarks',
        'RAG-based audit insight generation',
        'Compliance and confidence scoring',
        'Reinforcement-learning-based knowledge adaptation',
        'Secure audit report generation',
        'Human-in-the-loop feedback workflows',
      ],
 metrics: [
        { value: '80–90%', label: 'model accuracy across evaluated audit scenarios' },
        { value: '4', label: 'validated audit scenarios' },
        { value: 'RAG', label: 'retrieval-augmented audit workflow' },
        { value: 'HITL', label: 'human-in-the-loop feedback' },
    ],
 
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
   {
    id: 'cipherxpose',
    title: 'CipherXPose',
    year: '2025',
    genre: 'Cybersecurity • AI • Machine Learning',
    logline: 'An AI-powered cybersecurity tool for detecting cryptographic algorithms and accelerating cryptographic assessments.',
    stack: ['Python', 'Machine Learning', 'Cybersecurity'],
    build: [
      'Built CipherXPose using Python and machine-learning algorithms to detect 10+ cryptographic algorithms with over 80% accuracy.',
      'Accelerated cryptographic assessments by 10×, reducing analysis time from hours to minutes for cybersecurity teams.',
    ],
    features: [
      'Cryptographic algorithm detection',
      'Machine-learning-based classification',
      'Detection across 10+ cryptographic algorithms',
      'Accelerated cybersecurity assessment workflow',
    ],
    metrics: [
      { value: '80%+', label: 'detection accuracy' },
      { value: '10+', label: 'cryptographic algorithms detected' },
      { value: '10×', label: 'faster cryptographic assessments' },
      { value: 'Hours → Minutes', label: 'analysis time' },
    ],
    github: 'https://github.com/Sagaryj/CIHPER-XPOSE',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
   {
    id: 'safevision',
    title: 'SafeVision',
    year: '2024',
    genre: 'AI • Computer Vision • Safety',
    logline: 'An AI-powered intelligent surveillance system that detects aggression and distress in smart public environments.',
    stack: ['Python', 'TensorFlow', 'PyTorch', 'Computer Vision'],
    build: [
      'Developed SafeVision using Python, TensorFlow, and PyTorch to detect aggression and distress through machine learning, deep learning, computer vision, and contextual algorithms.',
      'Designed the system with scalability considerations for smart cities, workplaces, and public spaces.',
    ],
    features: [
      'Aggression detection',
      'Distress detection',
      'Deep-learning-powered computer vision',
      'Contextual safety analysis',
      'Scalable surveillance architecture',
    ],
    metrics: [
      { value: 'AI', label: 'powered surveillance intelligence' },
      { value: 'CV', label: 'computer vision detection' },
      { value: '3', label: 'target deployment environments' },
      { value: '24/7', label: 'safety monitoring vision' },
    ],
    github: 'https://github.com/Sagaryj/safevision',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
    {
    id: 'secure-scout',
    title: 'SecureScout',
    year: '2025',
    genre: 'Cybersecurity • AI • Automation',
    logline: 'An AI-powered automated penetration-testing assistant that simulates attacks, analyzes logs, and generates vulnerability reports.',
    stack: ['Python', 'Machine Learning', 'Nmap', 'Nikto', 'SQLMap'],
    build: [
      'Developed an AI-powered automated penetration-testing assistant in Python that integrates machine-learning models with Nmap, Nikto, and SQLMap.',
      'Built automated workflows to simulate attacks, analyze security logs, and generate detailed vulnerability reports without human intervention.',
    ],
    features: [
      'Automated penetration-testing workflows',
      'Nmap, Nikto, and SQLMap integration',
      'Machine-learning-assisted security analysis',
      'Security-log analysis',
      'Detailed vulnerability-report generation',
    ],
    metrics: [
      { value: 'AI', label: 'powered penetration-testing assistant' },
      { value: '3', label: 'integrated security tools' },
      { value: 'Auto', label: 'attack simulation and analysis' },
      { value: 'E2E', label: 'vulnerability-report workflow' },
    ],
    github: 'https://github.com/Sagaryj/secure-scout',
    palette: { from: '#16060b', via: '#701529', to: '#0b0709', accent: '#ff3d5a' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'branch-topper',
    title: 'AIML Branch Topper',
    org: 'B.E AI & ML',
    detail: '9.63 SGPA for the semester.',
    laurel: 'Branch Topper',
  },
  {
    id: 'hackerrank',
    title: '5-Star Badges',
    org: 'HackerRank',
    detail: '5-star badges in C, Python, Java, and SQL.',
    laurel: 'Four Languages',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'NPTEL', name: 'Artificial Intelligence for Investments', link: 'https://drive.google.com/file/d/1OzDQG3PlaByewKXGX4AbMGKOXKG5dmf1/view?usp=sharing' },
  { issuer: 'NPTEL', name: 'Introduction to Industry 4.0 and IOT', link: 'https://drive.google.com/file/d/1fs5iS8pTPc48_L4RTe5FCMF4Kbb523H7/view?usp=sharing' },
  { issuer: 'Infosys', name: 'Introduction to Cybersecurity', link: 'https://drive.google.com/file/d/1cD9Bf7eDUj0WlxPMTPI_oDn2oiBhmHF-/view?usp=sharing' },
  { issuer: 'TeamLease', name: 'Azure AI Fundamentals', link: 'https://drive.google.com/file/d/1aynfesu5nndLVak5jsw1H9r5tmQ0kUyf/view?usp=sharing' },
  { issuer: 'TeamLease', name: 'Data Engineering', link: 'https://drive.google.com/file/d/14Mn8VYupCTOqWrV-NB7omIBAX0S4Q8DJ/view?usp=sharing' },
  { issuer: 'Matlab', name: 'Machine Learning', link: 'https://drive.google.com/file/d/1yzlHivCf0UDrmTYSXZcpfZBODD_Vtjit/view?usp=sharing' },
  { issuer: 'Matlab', name: 'Deep Learning Techniques for Image Applications', link: 'https://drive.google.com/file/d/1meQvvX9tTuUaVjV4Bodoe6zCxQ4PQ2OL/view?usp=sharing' },
  { issuer: 'Matlab', name: 'Object Detection with Deep Learning', link: 'https://drive.google.com/file/d/1XwUMPbiX3CxkWOmyGbphYT1LZC_LUOgx/view?usp=sharing' },
  { issuer: 'Matlab', name: 'Tune Deep Learning Models', link: 'https://drive.google.com/file/d/1cWansMGcG2oApzC8ItficxorfouUcIAM/view?usp=sharing' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Python and TypeScript are the primary languages',
    skills: [
     
      { name: 'Python', mono: 'Py', note: 'Primary'  },
      { name: 'TypeScript', mono: 'Ts'},
      { name: 'C', mono: 'C' },
      { name: 'C++', mono: 'C+' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server-side logic',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'AWS Services', mono: 'Aw' },
    ],
  },
  {
    id: 'infra',
    title: 'Infra & Tools',
    subtitle: 'Shipping & architecture',
    skills: [
      { name: 'Docker', mono: 'Dk' },
      { name: 'Docker Compose', mono: 'Dc' },
      { name: 'REST/GraphQL APIs', mono: 'Ap' },
      { name: 'Microservices', mono: 'Ms' },
      { name: 'JWT Auth', mono: 'Jw' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Postman', mono: 'Pm' },
      { name: 'GCP', mono: 'Gc' },
      { name: 'CI/CD', mono: 'Ci' },
      
      
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Indexing • Normalization',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'MySQL', mono: 'My' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS & AIML Fundamentals',
    subtitle: 'The foundations',
    skills: [
      { name: 'DSA', mono: 'Ds' },
      { name: 'OS', mono: 'Os' },
      { name: 'CN', mono: 'Cn' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'OOPs', mono: 'Oo' },
      { name: 'AI', mono: 'Co' },
      { name: 'Machine Learning', mono: 'Ml' },
      { name: 'Deep Learning', mono: 'Dl' },
      { name: 'Large Language Models/Small Language Models', mono: 'Lm' },
      { name: 'Retrieval-Augmented Generation', mono: 'Rg' },
      { name: 'Natural Language Processing', mono: 'NLP' },
      { name: 'GenAI', mono: 'AI' },
      { name: 'Data Science/Engineering/ETL', mono: 'Ds' },
      { name: 'TDD', mono: 'Td' },
      { name: 'Scikit-learn, TensorFlow, PyTorch, NumPy, Pandas, Matplotlib', mono: 'Sk' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Coming soon to the series',
    skills: [
      { name: 'Agentic AI', mono: 'Ag' },
      { name: 'Emerging Technologies', mono: 'Em' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  AIML: ['CipherXPose – AI-Powered Cryptographic Algorithm Detection','SafeVision – AI-Powered Intelligent Surveillance System', 'Projects'],
  Python:['CipherXPose – AI-Powered Cryptographic Algorithm Detection','SafeVision – AI-Powered Intelligent Surveillance System','AuditScope 360 – GenAI-Powered Financial Audit Intelligence Platform', 'Projects'],
  C: ['HackerRank 5-star'],
  
  React: ['Talview','CBA', 'Internship', 'SecureScout'],
  HTML: ['Talview','CBA', 'Internship', 'SecureScout'],
  CSS: ['Talview','CBA', 'Internship', 'SecureScout'],
  TypeScript: ['Talview','CBA', 'Internship', 'SecureScout'],
  JavaScript: ['Talview','CBA', 'Internship', 'SecureScout'],
  'Node.js': ['Talview','CBA', 'Internship', 'SecureScout'],
  'Express.js':['Talview','CBA', 'Internship', 'SecureScout'],
  Docker: ['Talview','CBA', 'Internship', 'SecureScout'],
  SQL: ['Talview','CBA', 'Internship',],
  'c++': ['HackerRank 5-star'],
  Git: ['Talview','CBA', 'Internship', 'SecureScout'],
  AWS: ['Talview','CBA', 'Internship', 'SecureScout'],
  GCP: ['Talview','CBA', 'Internship', 'SecureScout'],
  Microservices: ['Talview','CBA', 'Internship', 'SecureScout'],
  PostgreSQL: ['Talview','CBA', 'Internship', 'SecureScout'],
  MongoDB: ['Talview','CBA', 'Internship', 'SecureScout'],
  DBMS: ['Talview','CBA', 'Internship', 'SecureScout'],
  DSA: ['HackerRank 5-star'],
  'Cloud Computing (AWS)': ['AWS Certified AI Practitioner', 'AWS Academy Cloud Foundations'],
  'Machine Learning': ['B.E AI & ML', 'NPTEL Deep Learning'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2020 – 2022',
    synopsis: 'Intermediate years at Sri Kumarans Children’s School PUC, in PCMB stream with 92.96%.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'Intermediate years at Sri Kumarans Children’s School PUC, in PCMB stream with 92.96%.',
        tags: ['PCMB', '92.96%'],
        runtime: 'Jun 2020 – May 2022',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: AI & ML',
    period: '2022 – 2024',
    synopsis: 'B.E in Artificial Intelligence and Machine Learning at BMS Institute of Technology & Management, Bengaluru',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'Bachelor of Engineering in Artificial Intelligence and Machine Learning — CGPA 9.10.',
        tags: ['B.E', 'AI & ML', 'CGPA 9.10'],
        runtime: 'Oct 2022 – 2024',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Topper',
        description: 'AIML Branch Topper with a 9.24 SGPA for the semester.',
        tags: ['9.24 SGPA', 'Branch Topper'],
        runtime: 'One semester',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'The Problem Solver',
        description: 'HackerRank 5-star badges in C, Python, and SQL.',
        tags: ['DSA', 'LeetCode', 'GFG', 'CodeChef', 'HackerRank'],
        runtime: '300+ problems',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Learning to Build',
    period: '2024 – 2025',
    synopsis: 'One year of intensive Full-Stack Development & AI/ML training with hands-on projects and real-world applications.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Trainee',
        description: 'Intensive Full-Stack/AIML Development training covering frontend, backend, database integration, AIML Models and deployment workflows.',
        tags: ['FSD', 'Frontend', 'Backend', 'Databases'],
        runtime: 'May 2024 – Jun 2025',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Developer',
        description: 'Developed responsive web applications with user interfaces, server-side logic, and database connectivity.',
        tags: ['React', 'Node.js', 'Express.js'],
        runtime: 'Technical Hub',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'The Deployer',
        description: 'Deployed and managed web applications using version control, debugging, and end-to-end development practices.',
        tags: ['Git / GitHub', 'Deployment'],
        runtime: 'Technical Hub',
        palette: jade,
      },
      {
        code: 'S03 E04',
        title: 'The Audit Intelligence Builder',
        description: 'Built AuditScope 360, a GenAI-powered financial audit platform using vector embeddings, FAISS, RAG frameworks, and LLMs to retrieve accounting benchmarks and generate explainable audit insights.',
        tags: ['Python', 'RAG', 'FAISS', 'LLMs', 'GenAI'],
        runtime: '80–90% model accuracy',
        palette: ocean,
      },
      {
        code: 'S03 E05',
        title: 'The Crypto Analyst',
        description: 'Built CipherXPose, an AI-powered cybersecurity tool that detects 10+ cryptographic algorithms with over 80% accuracy and accelerates cryptographic assessments by 10×.',
        tags: ['Python', 'Machine Learning', 'Cybersecurity'],
        runtime: '10× faster assessments',
        palette: crimson,
      },
      {
        code: 'S03 E06',
        title: 'The Vision Engineer',
        description: 'Developed SafeVision, an AI-powered surveillance system using TensorFlow, PyTorch, and computer vision to detect aggression and distress in smart public environments.',
        tags: ['Python', 'TensorFlow', 'PyTorch', 'Computer Vision'],
        runtime: 'Smart-city ready',
        palette: violet,
      },
      {
        code: 'S03 E07',
        title: 'The Security Automator',
        description: 'Built SecureScout, an AI-powered automated penetration-testing assistant that integrates machine-learning models with Nmap, Nikto, and SQLMap to simulate attacks, analyze logs, and generate vulnerability reports.',
        tags: ['Python', 'Machine Learning', 'Nmap', 'Nikto', 'SQLMap'],
        runtime: 'AI-powered security automation',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Building Real Products',
    period: '2025 - Present',
    synopsis: 'Three Originals Internships — SISA AI Assistant, Software Engineer Intern at Talview, and Software Development Trainee at Commonwealth Bank Australia (CBA).',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The SISA AI Assistant Intern', 
        description: 'Built an advanced Marketing Automation ecosystem using Pardot, Salesforce CRM, n8n automation and WordPress to obtain Full-Stack implementation and Automation & Strategy to achieve highercustomers.',
        tags: ['Python', 'NLP', 'LLM', 'Automation', 'Marketing Automation'],
        runtime: 'June 2025 - Oct 2025',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'Software Engineer trainee at CBA',
        description: 'Gained hands-on training in Python, Full Stack Development using JavaScript, React.js, Node.js, Data Engineering, Cloud Computing, and AI fundamentals and MongoDB, and SQL and Database Concepts while developing a capstone project integrating web technologies and AI.',
        tags: ['Node.js', 'PostgreSQL', 'Full Stack Development', 'MongoDB', 'SQL', 'Data Engineering', 'Cloud Computing', 'AI Fundamentals'],
        runtime: 'June 2025 - Dec 2025',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: 'Software Engineer Intern at Talview',
        description: 'Developed and maintained enterprise applications across frontend and backend monorepos using React, TypeScript, Redux-Saga, GraphQL, Hasura, and PostgreSQL, delivering features for proctoring, recruit- ment, exams, scheduling, and platform workflows. Worked across distributed microservices and serverless systems with AWS Lambda, Temporal, RxDB, and backend- driven validation/authentication flows, while improving reliability through Jest/Cypress automation, Storybook-based UI validation, and observability with Sentry and OpenTelemetry.',
        tags: ['AlgoUniversity', 'Flipkart GRiD 7.0'],
        runtime: 'Jan 2026 - Sept 2026',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Software Engineer • Backend Developer • AI/Machine Learning Engineer  ',
    synopsis: 'Ready to contribute my skills and expertise as a Full Time Employee to innovative projects as a Software Engineer, Backend Developer, or AI/Machine Learning Engineer .',
    episodes: [
      {
        code: 'S05 E01',
        title: 'Job Hunting • Software Engineer • Backend Developer • AI/Machine Learning Engineer,',
        description: 'With 1.2 years of experience in Full-Stack Development and AI/ML, I am now seeking opportunities as a Software Engineer, Backend Developer, or AI/Machine Learning Engineer to contribute my skills and expertise to innovative projects.',
        tags: ['Software Engineer', 'Backend Developer', 'AI/Machine Learning Engineer'],
        runtime: 'Sept 2026 – Present',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  {
    label: 'Primary language',
    title: 'Python',
    detail: 'AI/ML • Backend Development • Automation',
    palette: amber,
  },
  {
    label: 'The AI Original',
    title: 'AuditScope 360',
    detail: 'GenAI • RAG • FAISS • Financial Audit Intelligence',
    palette: crimson,
  },
  {
    label: 'Enterprise experience',
    title: 'Talview',
    detail: 'Software Engineer Intern • Jan–Sept 2026',
    palette: ocean,
  },
  {
    label: 'Cybersecurity Original',
    title: 'CipherXPose',
    detail: '10+ cryptographic algorithms • 80%+ detection accuracy',
    palette: violet,
  },
  {
    label: 'Academic achievement',
    title: 'AIML Branch Topper',
    detail: 'Semester SGPA achievement',
    palette: jade,
  },
  {
    label: 'Full-Stack Development',
    title: 'MERN & TypeScript',
    detail: 'React • Node.js • Express.js • MongoDB',
    palette: amber,
  },
  {
    label: 'Problem-solving',
    title: 'HackerRank 5-Star',
    detail: 'Badges in C, Python, Java, and SQL',
    palette: crimson,
  },
  {
    label: 'The training arc',
    title: 'Full-Stack Development',
    detail: 'Technical Hub • Frontend, Backend & Deployment',
    palette: ocean,
  },
  {
    label: 'AI & Computer Vision',
    title: 'SafeVision',
    detail: 'TensorFlow • PyTorch • Intelligent Surveillance',
    palette: jade,
  },
  {
    label: 'Current focus',
    title: 'Agentic AI & System Design',
    detail: 'LLMs • RAG • Cloud Computing • Scalable Applications',
    palette: violet,
  },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.E · AI & ML',
    lines: [
      'BMS Institute of Technology & Management',
      'Computer Science & Engineering · AI & ML',
      'Graduated 2026',
    ],
    chips: ['CGPA 8.9'],
  },
  {
    kicker: 'Skills',
    title: 'Python first.',
    lines: [
      'Python, C, C++ · TypeScript, JavaScript',
      'React, Node.js, Express.js · GraphQL, REST APIs',
      'PostgreSQL, MongoDB, MySQL · Docker, AWS, GCP',
    ],
    chips: ['Python', 'TypeScript', 'React', 'Node.js', 'AI / ML', 'Docker'],
  },
  {
    kicker: 'Experience',
    title: 'Built for Production.',
    lines: [
      'Software Engineer Intern · Talview',
      'React, TypeScript, Redux-Saga, GraphQL, Hasura & PostgreSQL',
      'Test automation · Application monitoring · AI-powered communication',
    ],
  },
  {
    kicker: 'Projects',
    title: 'Four AI Originals',
    lines: [
      'AuditScope 360 — GenAI-powered financial audit intelligence',
      'CipherXPose — 10+ cryptographic algorithms · 80%+ detection accuracy',
      'SafeVision — AI-powered surveillance using computer vision',
      'SecureScout — AI-powered automated penetration testing',
    ],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: [
      'AIML Branch Topper',
      'HackerRank 5-Star Badges — C, Python, & SQL',
      'CipherXPose — 10× faster cryptographic assessments',
    ],
  },
  {
    kicker: 'Certified',
    title: 'Learning in Progress.',
    lines: [
      'NPTEL · Artificial Intelligence for Investments',
      'Infosys · Introduction to Cybersecurity',
      'TeamLease · Azure AI Fundamentals & Data Engineering',
      'MATLAB · Machine Learning & Deep Learning',
    ],
  },
  {
    kicker: 'Next Chapter',
    title: 'Engineering What’s Next.',
    lines: [
      'Software Engineer · Full-Stack Developer',
      'Backend Engineer · AI / ML Engineer',
      'Exploring Agentic AI, LLMs, RAG, System Design & Cloud Computing',
    ],
  },
];

export type ProfileId = 'sagar' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sagar',
    name: 'Sagar',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2024-2025`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
