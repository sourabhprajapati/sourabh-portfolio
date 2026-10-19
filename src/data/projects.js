// All portfolio content lives here. Edit text in this file; the components only lay it out.
//
// role: 'lead' | 'core' | 'contributor'  (shown as the filled bubble on each card)
//
// media: screenshots or screen recordings, shown in device frames.
//   Put files in /public/screens and reference them as '/screens/<file>'.
//   { kind: 'browser', src: '/screens/portal-dashboard.png', alt: '...' }
//   { kind: 'phone',   src: '/screens/reels.mp4',            alt: '...' }  // .mp4 or .webm plays as a looping muted video
//   Always use demo data. Never upload real student or school records.
//
// diagram: lanes of columns, read left to right. Each column is a list of boxes.
//   A box with db: true is drawn as a data store.

export const profile = {
  name: 'Sourabh Prajapati',
  photo: '/profile.png',
  tagline: 'Full-stack and mobile developer · India (IST)',
  facts: [
    '5+ yrs in software',
    'iOS + Android store releases',
    'React · Next.js · FastAPI',
    'AWS · Docker · Terraform · Kubernetes · CI/CD',
  ],
  github: 'https://github.com/sourabhprajapati',
};

export const projects = [
  {
    id: 'olympiad-portal',
    roll: 'WEB-2026-01',
    role: 'lead',
    kicker: 'Web platform · FastAPI + React',
    title: 'Olympiad Registration Portal',
    summary:
      'An inter-school olympiad ran registrations on spreadsheets. This portal replaced them: schools register candidates and download admit cards, and the organisers allocate seats, review requests and release results from one console.',
    built: [
      'Most of the codebase as lead developer, frontend and backend',
      'Admit card designer with signature capture and Word export',
      'Admin datesheet module and subject-filtered admit cards',
      'Notification centre, command palette and searchable selects',
      'Bilingual English and Hindi interface',
      'Docker setup and AWS deployment plan',
    ],
    product: [
      'Separate admin and school workspaces with strict role checks',
      'Bulk Excel import with structure validation and duplicate detection',
      'Three-step register, review and lock flow with generated roll numbers',
      'Signed magic login links for schools',
      'Excel export protected against formula injection',
      'Light and dark themes, responsive down to phone width',
    ],
    stack: ['Python', 'FastAPI', 'Pydantic', 'React', 'Vite', 'PostgreSQL', 'SQLite', 'OpenPyXL', 'SMTP', 'Docker', 'AWS'],
    links: [{ label: 'Live portal (sign-in page)', href: 'https://portal.mittsureolympiad.com' }],
    media: [
      {
        kind: 'browser',
        src: '/screens/portal-demo.mp4',
        alt: 'Admin console, then a school registering candidates and preparing admit cards. Personal data removed.',
      },
    ],
    diagram: [
      [
        [{ t: 'School coordinators', s: 'and admin team' }],
        [{ t: 'React + Vite app', s: 'English / Hindi' }],
        [{ t: 'FastAPI', s: 'role-scoped tokens' }],
        [
          { t: 'PostgreSQL', s: 'SQLite in development', db: true },
          { t: 'Excel import / export' },
          { t: 'Admit cards', s: 'PDF and Word' },
          { t: 'Email centre', s: 'SMTP' },
          { t: 'Notifications' },
        ],
      ],
    ],
  },
  {
    id: 'school-erp',
    roll: 'ERP-2026-02',
    role: 'core',
    kicker: 'Multi-tenant SaaS · mobile app + web platform',
    title: 'School ERP',
    summary:
      'A school management platform that schools run their day on: admissions, fees, attendance, exams and results, timetables, transport, ID cards and messaging. Each school is a separate tenant, with dashboards for the platform team, school owners, staff and students, plus mobile apps for students and teachers.',
    parts: [
      {
        title: 'Mobile app · React Native, iOS and Android',
        role: 'My role: core developer, owner of the release pipeline',
        built: [
          'A decryption layer for the encrypted API: React Native has no Web Crypto, so I patched fetch and axios globally, and every screen received plain data without changing hundreds of call sites',
          'Codemagic workflow that builds and signs the iOS app for App Store Connect',
          'EAS build profiles for App Store distribution and Android App Bundles',
          'Android release signing with the keystore decoded from a CI secret, never committed to the repo',
          'App Store Connect API integration and version management across iOS and Android',
          'Student ID card module, matched to the web app with template filtering and card download',
        ],
        team: [
          'Built by the team: student and teacher apps with charts, PDF marksheets, Excel export, file uploads and video lessons',
        ],
      },
      {
        title: 'Web platform · React + Express',
        role: 'My role: contributor on permissions, fees and integrations',
        built: [
          'Role-based permission guard and the user permission settings screen',
          'Paid-fee processing on the server',
          'Activity calendar for schools',
          'Integration that connects the ERP to the AI question paper generator',
        ],
        team: [
          'Built by the team: around 95 API modules on Express and MongoDB, AES-256 encrypted responses, rate limiting and security headers, and scheduled jobs for fee reminders and session promotion',
        ],
      },
    ],
    stack: ['React Native', 'Codemagic', 'EAS', 'TestFlight', 'React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'crypto-js', 'node-cron', 'PM2'],
    links: [],
    media: [
      {
        kind: 'browser',
        src: '/screens/erp-web-demo.mp4',
        alt: 'Web dashboard: fee setup, admit cards, lesson plans, staff and homework. Personal data removed.',
      },
      {
        kind: 'phone',
        src: '/screens/erp-mobile-demo.mp4',
        alt: 'Mobile app on a demo school: dashboard, admissions, fees, digital lessons and admit cards.',
      },
    ],
    diagram: [
      [
        [{ t: 'Student + teacher apps', s: 'React Native' }, { t: 'Web dashboards', s: 'React + Vite' }],
        [{ t: 'Express API', s: 'AES-256 encrypted responses' }],
        [
          { t: 'MongoDB', s: 'one tenant per school', db: true },
          { t: 'Scheduled jobs', s: 'fees, sessions' },
          { t: 'SMS + email' },
        ],
      ],
      [[{ t: 'Codemagic + EAS', s: 'signed builds' }], [{ t: 'App Store + Google Play' }]],
    ],
  },
  {
    id: 'talent-platform',
    roll: 'APP-2026-03',
    role: 'core',
    kicker: 'Mobile app + web panel + grading service',
    title: 'Olympiad Talent Platform',
    summary:
      'Students upload short talent videos from a mobile app. A web panel moves each video through evaluator, reviewer and moderator stages, and a separate service grades scanned answer sheets for the written olympiad.',
    parts: [
      {
        title: 'React Native app · iOS and Android',
        role: 'My role: core developer on the video feed and sign-in',
        built: [
          'Reels-style vertical video feed with correct seek and playback handling, covered by unit tests',
          'Share and report sheets, search, profile and public profile screens',
          'Complete sign-in flow: sign-up, password reset and a terms acceptance gate',
          'GitHub Actions and fastlane pipeline that ships iOS builds to TestFlight',
        ],
      },
      {
        title: 'Review panel · Next.js 15',
        role: 'My role: contributor on data model, APIs and media',
        built: [
          'Prisma schema and migrations for notifications, OTP registration, banners and video quality',
          'Follow, follow-request and password-reset APIs',
          "Fixed video thumbnails failing on non-standard H.264 colour ranges, where the fallback never ran because ffmpeg's error output was cut short",
        ],
      },
      {
        title: 'Answer-sheet grading service',
        role: 'My role: contributor on the production move to AWS',
        built: [
          'Server deploy and cutover scripts for the app and grading servers',
          'Fixed S3 storage failing on real AWS, and stored files being wiped on each redeploy',
        ],
        team: [
          'Built by the team: FastAPI with Celery workers, around 20 question-type graders using Google Vision and Gemini, and a scheduled job that re-runs stuck sheets',
        ],
      },
    ],
    stack: ['React Native', 'fastlane', 'TestFlight', 'Next.js 15', 'TypeScript', 'Prisma', 'PostgreSQL', 'Supabase', 'AWS S3', 'ffmpeg', 'FastAPI', 'Celery', 'Redis'],
    links: [],
    media: [
      {
        kind: 'phone',
        src: '/screens/talent-mobile-demo.mp4',
        alt: 'A student fills in an olympiad upload: category, rhyme picker and visibility.',
      },
      {
        kind: 'browser',
        src: '/screens/talent-web-demo.mp4',
        alt: 'Admin panel settings: school support, master admins, permission control and app version.',
      },
    ],
    diagram: [
      [
        [{ t: 'React Native app', s: 'iOS + Android' }, { t: 'Review panel', s: 'Next.js' }],
        [{ t: 'Next.js API', s: 'Prisma' }],
        [
          { t: 'PostgreSQL', s: 'Supabase', db: true },
          { t: 'AWS S3', s: 'videos', db: true },
          { t: 'ffmpeg', s: 'thumbnails' },
        ],
      ],
      [[{ t: 'GitHub Actions', s: '+ fastlane' }], [{ t: 'TestFlight' }]],
      [
        [{ t: 'Scanned answer sheets' }],
        [{ t: 'Grading API', s: 'FastAPI' }],
        [{ t: 'Redis queue', db: true }],
        [{ t: 'Celery graders', s: 'Vision + Gemini' }],
      ],
    ],
  },
  {
    id: 'question-papers',
    roll: 'AI-2026-04',
    role: 'contributor',
    kicker: 'AI service · retrieval + Gemini',
    title: 'TPG: AI Question Paper Generator',
    summary:
      'Teachers pick a class, subject and textbook series, and the service writes a printable exam paper using only the books that school has bought. It plugs into the school ERP, so papers are one click away for teachers.',
    built: [
      'Updates to the paper-generation API',
      'Font and rendering fixes in the PDF pipeline',
      'The ERP-side mapping that connects school records to the generator',
    ],
    product: [
      'Indexes textbook PDFs, with a fallback for scanned pages',
      'Retrieves passages per series so a paper never mixes in other books',
      'Gemini writes questions from the retrieved passages',
      'Exports to PDF and editable Word, with correctly shaped Hindi and Sanskrit',
    ],
    stack: ['Python', 'FastAPI', 'LlamaIndex', 'Pinecone', 'Gemini', 'ReportLab', 'HarfBuzz', 'python-docx', 'React'],
    links: [],
    media: [
      {
        kind: 'browser',
        src: '/screens/tpg-demo.mp4',
        alt: 'A teacher picks a textbook series, class and subject, sets the question mix, then reviews the paper before download.',
      },
    ],
    diagram: [
      [
        [{ t: 'Textbook PDFs', s: 'per series' }],
        [{ t: 'Ingest', s: 'text + scanned pages' }],
        [{ t: 'Pinecone', s: 'filtered by series', db: true }],
      ],
      [
        [{ t: 'Teacher', s: 'in the ERP or web app' }],
        [{ t: 'FastAPI', s: 'class, subject, series' }],
        [{ t: 'Gemini', s: 'uses retrieved passages' }],
        [{ t: 'PDF + editable Word', s: 'Hindi + Sanskrit shaping' }],
      ],
    ],
  },
  {
    id: 'devops-eks',
    roll: 'OPS-2026-05',
    role: 'lead',
    kicker: 'DevOps · AWS EKS + Terraform + Jenkins',
    title: 'E-commerce App on AWS EKS',
    summary:
      'An end-to-end cloud deployment I ran myself, using an open-source Next.js shop as the application. Infrastructure is defined in Terraform, every push goes through a Jenkins pipeline with tests and a security scan, and the app runs on Kubernetes with autoscaling and automatic HTTPS.',
    built: [
      'Provisioned the VPC, EKS cluster and a Jenkins server on EC2 with Terraform',
      'Ran the Jenkins pipeline: Docker builds, unit tests, Trivy image scan, push to registry, manifest update',
      'Deployed to Kubernetes: MongoDB StatefulSet with persistent volumes, horizontal pod autoscaling, ingress with cert-manager TLS, and a migration job',
      'Fixed the pipeline when it broke: runner disk exhaustion, oversized Docker images and stale workspaces',
    ],
    product: [
      'Infrastructure rebuilt from code, with no manual console steps',
      'Every image scanned for vulnerabilities before it ships',
      'App scales with load and serves over HTTPS automatically',
      'Database changes applied by a Kubernetes job on each release',
    ],
    devopsAlso: [
      'In my day job: Docker and AWS deployment for the olympiad portal, server cutover scripts for the grading service, and iOS and Android release pipelines with GitHub Actions, fastlane, Codemagic and EAS',
    ],
    stack: ['AWS', 'EKS', 'EC2', 'VPC', 'Terraform', 'Kubernetes', 'Docker', 'Jenkins', 'Trivy', 'cert-manager', 'MongoDB', 'Next.js'],
    links: [{ label: 'Code on GitHub', href: 'https://github.com/sourabhprajapati/EasyShop' }],
    media: [],
    diagram: [
      [
        [{ t: 'git push' }],
        [{ t: 'Jenkins on EC2', s: 'build + test' }],
        [{ t: 'Trivy scan' }],
        [{ t: 'Container registry', db: true }],
        [{ t: 'Updated manifests' }],
      ],
      [
        [{ t: 'Terraform', s: 'VPC + EKS + EC2' }],
        [{ t: 'EKS cluster' }],
        [
          { t: 'App pods', s: 'autoscaling' },
          { t: 'MongoDB', s: 'StatefulSet', db: true },
          { t: 'Ingress', s: 'cert-manager TLS' },
        ],
      ],
    ],
  },
];
