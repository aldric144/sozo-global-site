/**
 * SOZO Global — Centralized Content Database
 * ============================================
 * All content is structured to mirror future Sanity CMS schemas.
 * Update content here and it propagates across all pages automatically.
 * When migrating to Sanity, each type maps 1:1 to a Sanity document type.
 */

// ═══════════════════════════════════════════════════════════════════
// TYPES — These match future Sanity schema definitions
// ═══════════════════════════════════════════════════════════════════

export interface Faculty {
  id: string
  name: string
  title: string
  department: string
  photo: string // URL or path
  bio: string
  degrees: string[]
  email: string
}

export interface Course {
  id: string
  courseNumber: string
  courseName: string
  credits: number
  description: string
  program: string
  semester: string
}

export interface Program {
  id: string
  slug: string
  programName: string
  shortTitle: string
  degreeType: string
  duration: string
  tuition: string
  delivery: string
  description: string
  admissionRequirements: string[]
  highlights: string[]
}

export interface Event {
  id: string
  eventName: string
  date: string
  time: string
  location: string
  description: string
  category: string
  registrationLink: string
}

export interface Testimonial {
  id: string
  studentName: string
  program: string
  testimonial: string
  photo: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  category: 'Prophetic' | 'Leadership' | 'Theology' | 'Revival' | 'Testimonies' | 'Chaplaincy' | 'Marketplace Ministry'
  author: string
  date: string
  content: string
}

export interface Department {
  id: string
  name: string
  focus: string
}

// ═══════════════════════════════════════════════════════════════════
// FACULTY DATABASE
// ═══════════════════════════════════════════════════════════════════

export const faculty: Faculty[] = [
  {
    id: 'fac-001',
    name: 'Dr. Aldric Marshall, Ph.D., Ed.D. (c)',
    title: 'Founder & President',
    department: 'Office of the President',
    photo: '/faculty/placeholder.jpg',
    bio: 'Apostolic leader, bestselling author, and visionary educator. With advanced degrees in counseling and organizational leadership, and having spoken at the United Nations and trained law enforcement professionals, he leads SOZO with boldness, compassion, and Kingdom clarity.',
    degrees: ['Ph.D.', 'Ed.D. (c)', 'M.A. Counseling'],
    email: 'president@sozoglobal.school',
  },
  {
    id: 'fac-002',
    name: 'Charete Marshall',
    title: 'Co-Founder & Director of Women\'s Empowerment',
    department: 'Women\'s Empowerment',
    photo: '/faculty/placeholder.jpg',
    bio: 'A powerful teacher and prophetic voice with a unique anointing for healing, wholeness, and inner restoration. A cancer survivor and champion of women\'s ministries, she helps mentor students in identity, endurance, and faith.',
    degrees: [],
    email: 'women@sozoglobal.school',
  },
  {
    id: 'fac-003',
    name: 'Pastor James R., M.Div.',
    title: 'Dean of Supernatural Ministry',
    department: 'School of Supernatural Ministry',
    photo: '/faculty/placeholder.jpg',
    bio: 'Renowned for activating students in prophecy and healing. 20+ years of revival leadership experience mentoring hundreds globally.',
    degrees: ['M.Div.'],
    email: 'ministry@sozoglobal.school',
  },
  {
    id: 'fac-004',
    name: 'Dr. Renee C., Th.D.',
    title: 'Professor of Theology & Doctrine',
    department: 'School of the Supernatural & Biblical Studies',
    photo: '/faculty/placeholder.jpg',
    bio: 'Scholar-practitioner in biblical studies with a passion for spiritual formation and Kingdom worldview development.',
    degrees: ['Th.D.'],
    email: 'theology@sozoglobal.school',
  },
  {
    id: 'fac-005',
    name: 'Prophetess Latoya S.',
    title: 'Instructor of Dreams & Interpretation',
    department: 'School of Prophetic Arts & Worship',
    photo: '/faculty/placeholder.jpg',
    bio: 'Unique gift in decoding the language of God through dreams. Leads prophetic labs and courses in discernment and spiritual insight.',
    degrees: [],
    email: 'prophetic@sozoglobal.school',
  },
  {
    id: 'fac-006',
    name: 'Chaplain Marcus B.',
    title: 'Director of Chaplaincy Training',
    department: 'School of Chaplaincy',
    photo: '/faculty/placeholder.jpg',
    bio: 'Certified senior chaplain and trauma responder. Trains future chaplains to serve in hospitals, law enforcement, and disaster zones with bold compassion.',
    degrees: ['Certified Senior Chaplain'],
    email: 'chaplaincy@sozoglobal.school',
  },
]

// ═══════════════════════════════════════════════════════════════════
// COURSE DATABASE
// ═══════════════════════════════════════════════════════════════════

export const courses: Course[] = [
  // Diploma Courses
  { id: 'crs-001', courseNumber: 'SBM 101', courseName: 'Foundations of Supernatural Ministry', credits: 3, description: 'Introduction to the supernatural life, spiritual gifts, and Kingdom identity.', program: 'Diploma', semester: 'Semester 1' },
  { id: 'crs-002', courseNumber: 'SBM 102', courseName: 'Old Testament Survey', credits: 3, description: 'A comprehensive study of the Old Testament with prophetic and spiritual insights.', program: 'Diploma', semester: 'Semester 1' },
  { id: 'crs-003', courseNumber: 'SBM 103', courseName: 'New Testament Survey', credits: 3, description: 'A comprehensive study of the New Testament with theological and practical application.', program: 'Diploma', semester: 'Semester 1' },
  { id: 'crs-004', courseNumber: 'SBM 104', courseName: 'Spiritual Gifts & Activation', credits: 3, description: 'Identification and activation of spiritual gifts for personal and corporate ministry.', program: 'Diploma', semester: 'Semester 1' },
  { id: 'crs-005', courseNumber: 'SBM 201', courseName: 'Prophetic Ministry Foundations', credits: 3, description: 'Introduction to the prophetic office, hearing God\'s voice, and prophetic protocol.', program: 'Diploma', semester: 'Semester 2' },
  { id: 'crs-006', courseNumber: 'SBM 202', courseName: 'Healing & the Atonement', credits: 3, description: 'Biblical foundations of divine healing and practical application in ministry.', program: 'Diploma', semester: 'Semester 2' },
  { id: 'crs-007', courseNumber: 'SBM 203', courseName: 'Deliverance Ministry', credits: 3, description: 'Understanding spiritual warfare, deliverance protocols, and setting captives free.', program: 'Diploma', semester: 'Semester 2' },
  { id: 'crs-008', courseNumber: 'SBM 204', courseName: 'Ministry Practicum I', credits: 3, description: 'Supervised practical ministry experience with mentorship and evaluation.', program: 'Diploma', semester: 'Semester 2' },

  // Master's Courses
  { id: 'crs-009', courseNumber: 'MSL 501', courseName: 'Advanced Biblical Exegesis', credits: 3, description: 'Graduate-level exegetical methods for interpreting Scripture with scholarly rigor and spiritual insight.', program: "Master's", semester: 'Semester 1' },
  { id: 'crs-010', courseNumber: 'MSL 502', courseName: 'Apostolic Leadership & Governance', credits: 3, description: 'Principles of apostolic leadership, organizational structure, and Kingdom governance.', program: "Master's", semester: 'Semester 1' },
  { id: 'crs-011', courseNumber: 'MSL 503', courseName: 'Five-Fold Ministry Applications', credits: 3, description: 'Understanding and operating in the five-fold ministry gifts described in Ephesians 4:11.', program: "Master's", semester: 'Semester 1' },
  { id: 'crs-012', courseNumber: 'MSL 601', courseName: 'Global Revival Movements', credits: 3, description: 'Study of historic and contemporary revival movements and their impact on nations.', program: "Master's", semester: 'Semester 2' },
  { id: 'crs-013', courseNumber: 'MSL 602', courseName: 'Kingdom Economics & Finance', credits: 3, description: 'Biblical principles of stewardship, generational wealth, and supernatural provision.', program: "Master's", semester: 'Semester 2' },
  { id: 'crs-014', courseNumber: 'MSL 603', courseName: 'Capstone Research Project', credits: 6, description: 'Major research project demonstrating mastery of leadership and ministry application.', program: "Master's", semester: 'Semester 2' },

  // Doctoral Courses
  { id: 'crs-015', courseNumber: 'DSL 701', courseName: 'Advanced Research Methodology', credits: 3, description: 'Doctoral-level research design, academic writing, and Spirit-led scholarly inquiry.', program: 'Doctoral', semester: 'Semester 1' },
  { id: 'crs-016', courseNumber: 'DSL 702', courseName: 'Supernatural Theology & Praxis', credits: 3, description: 'Advanced study of supernatural theology integrating theory and ministry practice.', program: 'Doctoral', semester: 'Semester 1' },
  { id: 'crs-017', courseNumber: 'DSL 801', courseName: 'Dissertation I: Proposal & Framework', credits: 6, description: 'Develop and defend the dissertation proposal with faculty advisement.', program: 'Doctoral', semester: 'Semester 2' },
  { id: 'crs-018', courseNumber: 'DSL 802', courseName: 'Dissertation II: Research & Writing', credits: 6, description: 'Conduct original research and produce a scholarly contribution to Kingdom knowledge.', program: 'Doctoral', semester: 'Semester 3' },

  // Chaplaincy Courses
  { id: 'crs-019', courseNumber: 'CHP 101', courseName: 'Biblical Chaplaincy Foundations', credits: 3, description: 'Introduction to chaplaincy ministry, ethics, and the legal framework of spiritual care.', program: 'Chaplaincy', semester: 'Semester 1' },
  { id: 'crs-020', courseNumber: 'CHP 102', courseName: 'Crisis Intervention & Trauma Care', credits: 3, description: 'Techniques for crisis response, trauma ministry, and spiritual first aid.', program: 'Chaplaincy', semester: 'Semester 1' },
  { id: 'crs-021', courseNumber: 'CHP 201', courseName: 'Specialized Chaplaincy Endorsements', credits: 3, description: 'Advanced training in DV, trafficking, law enforcement, and disaster chaplaincy.', program: 'Chaplaincy', semester: 'Semester 2' },
  { id: 'crs-022', courseNumber: 'CHP 202', courseName: 'Chaplaincy Field Practicum', credits: 3, description: 'Supervised field experience in a chaplaincy setting with mentorship and evaluation.', program: 'Chaplaincy', semester: 'Semester 2' },

  // Deliverance Certificate
  { id: 'crs-023', courseNumber: 'SBM 1201', courseName: 'Deliverance & Inner Healing', credits: 3, description: 'Comprehensive study of deliverance ministry principles, protocols, and inner healing prayer models.', program: "Master's", semester: 'Semester 1' },
]

// ═══════════════════════════════════════════════════════════════════
// PROGRAM DATABASE
// ═══════════════════════════════════════════════════════════════════

export const programs: Program[] = [
  {
    id: 'prog-001',
    slug: 'diploma',
    programName: 'Diploma in Supernatural Biblical Ministry',
    shortTitle: 'Diploma Program',
    degreeType: 'Diploma',
    duration: '1 Year (4 Quarters)',
    tuition: 'Contact for pricing',
    delivery: 'Online / Hybrid',
    description: 'Foundation-level program equipping believers in theology, spiritual gifts, healing, deliverance, and ministry foundations. Designed for those beginning their formal ministry training journey.',
    admissionRequirements: [
      'High school diploma or equivalent',
      'Personal salvation testimony',
      'Pastoral or ministry reference',
      'Demonstrated desire for ministry training',
      'Openness to deliverance, healing, and Spirit-led instruction',
      'Completed online application + $50 fee',
    ],
    highlights: [
      'Biblical foundations and supernatural theology',
      'Spiritual gifts activation and prophetic development',
      'Healing, deliverance, and inner healing ministry',
      'Ministry practicum and supervised field work',
      'Personal mentorship and spiritual formation',
      'Canvas LMS-powered learning experience',
    ],
  },
  {
    id: 'prog-002',
    slug: 'masters',
    programName: 'Master of Supernatural Leadership & Global Awakening (MSLGA)',
    shortTitle: "Master's Program",
    degreeType: "Master's",
    duration: '2 Years',
    tuition: 'Contact for pricing',
    delivery: 'Online / Hybrid',
    description: 'Advanced leadership, theology, and five-fold ministry equipping for those called to higher-level Kingdom impact. Includes deep biblical exegesis, leadership development, and capstone research.',
    admissionRequirements: [
      "Bachelor's degree or ministry equivalency (2+ years)",
      'Personal written statement: Why are you called to advanced ministry leadership?',
      'Transcript or proof of ministry training (certificate or portfolio accepted)',
      'Pastoral or ministry reference',
      'Sample sermon, paper, or teaching video (optional but encouraged)',
      'Completed online application + $50 fee',
    ],
    highlights: [
      'Deep biblical exegesis and theological research',
      'Leadership development and organizational governance',
      'Five-fold ministry application and apostolic strategy',
      'Global missions and revival movement principles',
      'Capstone project demonstrating ministry impact',
      'Personal mentorship with apostolic faculty',
    ],
  },
  {
    id: 'prog-003',
    slug: 'doctoral',
    programName: 'Doctor of Supernatural Leadership & Global Awakening (DSLGA)',
    shortTitle: 'Doctoral Program',
    degreeType: 'Doctoral',
    duration: '3 Years',
    tuition: 'Contact for pricing',
    delivery: 'Online / Hybrid with Intensives',
    description: 'The highest level of academic achievement — elite-level global leadership and apostolic commissioning. Requires original dissertation research contributing to Kingdom knowledge.',
    admissionRequirements: [
      "Master's degree or equivalent ministry leadership experience (5+ years)",
      'Graduate writing sample or video demonstration of ministry impact',
      'Resume, transcripts (if available), and 2 ministry references',
      'Virtual Interview with Dean of Doctoral Studies',
      'Must complete dissertation or major capstone for graduation',
      'Completed online application + $50 fee',
    ],
    highlights: [
      'High-level apostolic training and Spirit-led research',
      'Advanced supernatural ministry methodology',
      'Doctoral dissertation on Kingdom impact topic',
      'Global leadership mentorship and commissioning',
      'Faculty advisement and peer scholarly community',
      'Publication and ministry platform development',
    ],
  },
  {
    id: 'prog-004',
    slug: 'chaplaincy',
    programName: 'Chaplaincy Certification Program',
    shortTitle: 'Chaplaincy Certification',
    degreeType: 'Certificate',
    duration: '6–12 Months',
    tuition: 'Contact for pricing',
    delivery: 'Online + Field Training',
    description: 'Comprehensive training for chaplains serving in hospitals, law enforcement, military, prisons, disaster zones, and specialized advocacy.',
    admissionRequirements: [
      'Personal salvation testimony',
      'Pastoral or ministry reference',
      'Background check clearance',
      'Commitment to supervised practicum hours',
      'Completed online application + $50 fee',
    ],
    highlights: [
      'Biblical chaplaincy foundations and ethics',
      'Advanced chaplain leadership and crisis response',
      'Endorsements in DV, trafficking, and law enforcement',
      'Supernatural crisis response and trauma ministry',
      'Supervised field practicum hours',
      'Professional chaplaincy certification upon completion',
    ],
  },
  {
    id: 'prog-005',
    slug: 'licensing',
    programName: 'Ministry Licensing & Ordination',
    shortTitle: 'Ministry Licensing',
    degreeType: 'License',
    duration: 'Application-Based',
    tuition: 'Contact for pricing',
    delivery: 'Online + Interview',
    description: 'Formal recognition and legal licensing for Kingdom leaders. Three progressive levels based on training, calling, and scope of ministry.',
    admissionRequirements: [
      'Evidence of theological training (diploma or transcripts)',
      'Personal statement of call and doctrinal alignment',
      'Interview and character assessment',
      'Two letters of spiritual reference',
      'Completion of Ministerial Ethics & Accountability Module',
      "Agreement to SOZO's Code of Conduct & Lifestyle Covenant",
    ],
    highlights: [
      'Ministry License (Level I) — emerging leaders under supervision',
      'Ordination License (Level II) — proven ministers with doctrinal soundness',
      'Five-Fold Commissioning (Level III) — apostolic/prophetic global leaders',
      'Official certificate and ministerial registry inclusion',
      'Legal authority to perform ministerial duties',
      'Apostolic covering, mentorship, and accountability',
    ],
  },
  {
    id: 'prog-006',
    slug: 'continuing-education',
    programName: 'Continuing Education & Masterclasses',
    shortTitle: 'Continuing Education',
    degreeType: 'Various Certificates',
    duration: '6–8 Weeks per Course',
    tuition: 'Varies by course',
    delivery: 'Online',
    description: 'Short-term courses, masterclasses, and workshops for ongoing spiritual and professional development across all 12 academic schools.',
    admissionRequirements: [
      'Open enrollment for most certificate programs',
      'Personal salvation testimony',
      'Desire for continued spiritual and professional growth',
      'Completed online registration',
    ],
    highlights: [
      '150+ certificate programs across 12 schools',
      'Prophetic studies, healing, deliverance, dreams, worship',
      'Kingdom entrepreneurship and marketplace ministry',
      'Apostolic leadership and governance',
      'Flexible enrollment — start anytime',
      'Stackable certificates toward diploma credit',
    ],
  },
]

// ═══════════════════════════════════════════════════════════════════
// EVENTS DATABASE
// ═══════════════════════════════════════════════════════════════════

export const events: Event[] = [
  {
    id: 'evt-001',
    eventName: 'SOZO Fire & Glory Conference',
    date: 'TBA 2026',
    time: 'All Day',
    location: 'Palm Beach, FL & Livestream',
    description: 'A 3-day apostolic and prophetic encounter featuring global revivalists, worship leaders, and hands-on supernatural equipping.',
    category: 'Conference',
    registrationLink: '/contact',
  },
  {
    id: 'evt-002',
    eventName: 'Winter Quarter Enrollment Deadline',
    date: 'September 1, 2026',
    time: '11:59 PM EST',
    location: 'Online',
    description: 'All students enrolling in Q1 of 2026 must complete registration and Canvas onboarding.',
    category: 'Enrollment',
    registrationLink: '/admissions/apply',
  },
  {
    id: 'evt-003',
    eventName: 'Global Awakening Virtual Summit',
    date: 'TBA 2026',
    time: 'TBA',
    location: 'Zoom & Facebook Live',
    description: 'Topic: "Spiritual Intelligence & Apostolic Governance in Chaotic Times". Open to all students and the public.',
    category: 'Summit',
    registrationLink: '/contact',
  },
  {
    id: 'evt-004',
    eventName: 'New Student Orientation',
    date: 'Quarterly',
    time: '10:00 AM EST',
    location: 'Zoom / Canvas',
    description: 'Welcome session for all new students with impartation, activation, and Kingdom community building.',
    category: 'Orientation',
    registrationLink: '/admissions/apply',
  },
  {
    id: 'evt-005',
    eventName: 'Prophetic Encounter Weekend',
    date: 'TBA 2026',
    time: 'Friday-Sunday',
    location: 'Online & In-Person',
    description: 'An intensive weekend of prophetic activation, personal words, and supernatural demonstrations.',
    category: 'Intensive',
    registrationLink: '/contact',
  },
]

// ═══════════════════════════════════════════════════════════════════
// TESTIMONIAL DATABASE
// ═══════════════════════════════════════════════════════════════════

export const testimonials: Testimonial[] = [
  {
    id: 'test-001',
    studentName: 'Minister Sarah T.',
    program: 'Diploma Program',
    testimonial: 'SOZO has completely transformed my understanding of supernatural ministry. The faculty pours into you personally and prophetically. I went from being unsure of my calling to walking confidently in my gifts.',
    photo: '/testimonials/placeholder.jpg',
  },
  {
    id: 'test-002',
    studentName: 'Dr. James K.',
    program: 'Doctoral Program',
    testimonial: 'The doctoral program challenged me academically while deepening my walk with the Holy Spirit. I am a more effective leader because of SOZO. The dissertation process was rigorous yet Spirit-led.',
    photo: '/testimonials/placeholder.jpg',
  },
  {
    id: 'test-003',
    studentName: 'Chaplain Maria L.',
    program: 'Chaplaincy Certification',
    testimonial: 'As a chaplain, the training I received at SOZO equipped me for real-world crisis ministry in ways no other school could. The field practicum was invaluable.',
    photo: '/testimonials/placeholder.jpg',
  },
  {
    id: 'test-004',
    studentName: 'Pastor David M.',
    program: "Master's Program",
    testimonial: 'The MSLGA program gave me tools for apostolic leadership that I use every day. The faculty mentorship alone was worth the investment. My ministry has grown exponentially.',
    photo: '/testimonials/placeholder.jpg',
  },
  {
    id: 'test-005',
    studentName: 'Evangelist Rachel W.',
    program: 'Continuing Education',
    testimonial: 'The certificate courses in supernatural evangelism and healing activated me in ways I never expected. Every believer should experience what SOZO offers.',
    photo: '/testimonials/placeholder.jpg',
  },
]

// ═══════════════════════════════════════════════════════════════════
// BLOG DATABASE
// ═══════════════════════════════════════════════════════════════════

export const blogCategories = [
  'Prophetic',
  'Leadership',
  'Theology',
  'Revival',
  'Testimonies',
  'Chaplaincy',
  'Marketplace Ministry',
] as const

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-001',
    slug: 'walking-in-supernatural-identity',
    title: 'Walking in Your Supernatural Identity',
    excerpt: 'Every believer carries a mantle. Discover how SOZO students are awakening to their prophetic identity and stepping into their divine calling.',
    category: 'Prophetic',
    author: 'Dr. Aldric Marshall',
    date: '2026-01-15',
    content: 'Every believer carries a mantle. At SOZO Global, we believe that true education doesn\'t just inform—it activates. Our students are awakening to their prophetic identity and stepping boldly into their divine calling. The supernatural life isn\'t reserved for the few—it\'s the birthright of every Spirit-filled believer.',
  },
  {
    id: 'blog-002',
    slug: 'apostolic-leadership-modern-age',
    title: 'Apostolic Leadership in the Modern Age',
    excerpt: 'What does apostolic governance look like in today\'s complex world? Exploring Kingdom leadership principles for marketplace and ministry.',
    category: 'Leadership',
    author: 'Pastor James R.',
    date: '2026-02-01',
    content: 'Apostolic leadership in the modern age requires both ancient wisdom and innovative thinking. At SOZO, we train leaders who can navigate complexity with prophetic clarity while building structures that last. Kingdom governance is not about positional authority—it\'s about serving with supernatural wisdom.',
  },
  {
    id: 'blog-003',
    slug: 'theology-of-healing',
    title: 'The Theology of Healing: Biblical Foundations',
    excerpt: 'A scholarly examination of healing in the atonement and its practical application in modern ministry contexts.',
    category: 'Theology',
    author: 'Dr. Renee C.',
    date: '2026-03-10',
    content: 'The theology of healing is rooted in the atonement of Christ. Isaiah 53:5 declares that by His stripes we are healed. This is not mere metaphor—it is covenant promise. At SOZO, we study the biblical foundations of healing with scholarly rigor and supernatural expectation.',
  },
  {
    id: 'blog-004',
    slug: 'signs-of-global-revival',
    title: 'Signs of Global Revival: What the Spirit is Saying',
    excerpt: 'Prophetic insights into the current move of God across nations and how to position yourself in this season.',
    category: 'Revival',
    author: 'Dr. Aldric Marshall',
    date: '2026-04-05',
    content: 'We are living in unprecedented times. The Spirit of God is moving across nations with power, signs, and wonders. From college campuses to marketplace gatherings, the fire of revival is spreading. At SOZO, we train students not just to observe revival—but to carry it.',
  },
  {
    id: 'blog-005',
    slug: 'chaplaincy-frontlines',
    title: 'Chaplaincy on the Frontlines: Stories from the Field',
    excerpt: 'SOZO chaplaincy graduates share their experiences serving in hospitals, disaster zones, and law enforcement.',
    category: 'Chaplaincy',
    author: 'Chaplain Marcus B.',
    date: '2026-05-20',
    content: 'Chaplaincy ministry places you at the intersection of faith and crisis. Our graduates serve in hospitals, prisons, disaster zones, and alongside law enforcement. These are stories of supernatural intervention, compassion in action, and the power of presence ministry.',
  },
  {
    id: 'blog-006',
    slug: 'kingdom-entrepreneurship',
    title: 'Kingdom Entrepreneurship: Business as Ministry',
    excerpt: 'How Spirit-filled entrepreneurs are transforming industries while advancing the Kingdom through marketplace influence.',
    category: 'Marketplace Ministry',
    author: 'Dr. Aldric Marshall',
    date: '2026-06-01',
    content: 'The marketplace is a mission field. Kingdom entrepreneurs don\'t just build businesses—they build platforms for ministry, generational wealth, and cultural influence. At SOZO\'s School of Apostolic Innovation, we train leaders who carry revival into boardrooms and beyond.',
  },
]

// ═══════════════════════════════════════════════════════════════════
// DEPARTMENTS DATABASE
// ═══════════════════════════════════════════════════════════════════

export const departments: Department[] = [
  { id: 'dept-01', name: 'School of the Supernatural & Biblical Studies', focus: 'Foundational theology, supernatural ministry foundations, biblical studies, and advanced academic degrees.' },
  { id: 'dept-02', name: 'School of Chaplaincy', focus: 'Equipping chaplains for hospitals, law enforcement, military, prisons, disaster zones, and specialized advocacy.' },
  { id: 'dept-03', name: 'School of Supernatural Ministry', focus: 'Short-term 6–8 week equipping in gifts, power, and prophetic ministry. 25+ certificate programs.' },
  { id: 'dept-04', name: 'School of Apostolic Leadership & Kingdom Finance', focus: 'Leadership, governance, economics, apostolic hubs, and ecclesia planting. 25+ certificates.' },
  { id: 'dept-05', name: 'School of Prophetic Arts & Worship', focus: 'Creative expression through music, dance, writing, media, and prophetic creativity.' },
  { id: 'dept-06', name: 'School of Deliverance & Inner Healing', focus: 'Breaking chains, healing hearts, setting captives free at deeper levels.' },
  { id: 'dept-07', name: 'School of Global Missions & Apostolic Sending', focus: 'Equipping missionaries and global reformers to reach nations with supernatural power.' },
  { id: 'dept-08', name: 'School of Kingdom Justice & Advocacy', focus: 'Merging advocacy with supernatural intervention — trafficking, DV, racial reconciliation.' },
  { id: 'dept-09', name: 'School of Supernatural Family & Generational Impact', focus: 'Family revival, legacy building, prophetic parenting, and generational wealth.' },
  { id: 'dept-10', name: 'School of Apostolic Innovation & Marketplace Influence', focus: 'Entrepreneurship, technology, and marketplace leadership through supernatural wisdom.' },
  { id: 'dept-11', name: 'School of Supernatural Children & Youth Ministry', focus: 'Raising, equipping, and ministering to children and youth globally with supernatural wisdom.' },
  { id: 'dept-12', name: 'School of Supernatural Wellness & Soul Care', focus: 'Training believers to walk in holistic wholeness — physically, emotionally, and spiritually.' },
]

// ═══════════════════════════════════════════════════════════════════
// ADMISSION REQUIREMENTS (centralized)
// ═══════════════════════════════════════════════════════════════════

export const admissionRequirements = {
  general: [
    'Personal salvation testimony',
    'Pastoral or ministry reference',
    'Completed online application + $50 fee',
    'Commitment to spiritual growth and academic integrity',
  ],
  diploma: [
    'High school diploma or equivalent',
    'Demonstrated desire for ministry training',
    'Openness to deliverance, healing, and Spirit-led instruction',
  ],
  masters: [
    "Bachelor's degree or ministry equivalency (2+ years)",
    'Personal written statement: Why are you called to advanced ministry leadership?',
    'Transcript or proof of ministry training (certificate or portfolio accepted)',
    'Sample sermon, paper, or teaching video (optional but encouraged)',
  ],
  doctoral: [
    "Master's degree or equivalent ministry leadership experience (5+ years)",
    'Graduate writing sample or video demonstration of ministry impact',
    'Resume, transcripts (if available), and 2 ministry references',
    'Virtual Interview with Dean of Doctoral Studies',
    'Must complete dissertation or major capstone for graduation',
  ],
}

// ═══════════════════════════════════════════════════════════════════
// TUITION INFO (centralized)
// ═══════════════════════════════════════════════════════════════════

export const tuitionInfo = {
  applicationFee: '$50 non-refundable (all programs)',
  note: 'Flexible monthly and semester-based payment plans available.',
  details: [
    'Scholarships may be awarded based on need and ministry calling',
    'Sponsorship letters available for church support',
    'Textbooks & software not included in tuition',
    'Refunds available before Week 2 (administrative fees apply)',
  ],
}
