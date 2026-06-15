/**
 * SOZO Global — Future Database Types
 * =====================================
 * These interfaces are reserved for future expansion phases.
 * They are designed to mirror future Sanity CMS schemas.
 * When ready to implement, create the data arrays in data.ts
 * and build the corresponding page components.
 */

/** Phase 2: Student Portal */
export interface Student {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  photo: string
  program: string // reference to Program.id
  enrollmentDate: string
  expectedGraduation: string
  status: 'Active' | 'Graduated' | 'On Leave' | 'Withdrawn'
  gpa: number
  creditsCompleted: number
  creditsRequired: number
  advisor: string // reference to Faculty.id
  canvasId: string
}

/** Phase 2: Alumni Network */
export interface Alumni {
  id: string
  firstName: string
  lastName: string
  email: string
  photo: string
  programCompleted: string
  graduationYear: number
  degreeEarned: string
  currentMinistry: string
  location: string
  testimonial: string
  linkedIn: string
  isPublic: boolean
}

/** Phase 2: Scholarships */
export interface Scholarship {
  id: string
  name: string
  amount: string
  eligibility: string[]
  deadline: string
  description: string
  applicationLink: string
  status: 'Open' | 'Closed' | 'Upcoming'
  sponsor: string
}

/** Phase 2: Ministry Licensing Records */
export interface MinistryLicense {
  id: string
  applicantName: string
  licenseType: 'Ministry License (Level I)' | 'Ordination License (Level II)' | 'Five-Fold Commissioning (Level III)'
  dateIssued: string
  expirationDate: string
  status: 'Active' | 'Expired' | 'Revoked' | 'Pending Renewal'
  registryNumber: string
  ministryArea: string
  references: string[]
  renewalDueDate: string
}

/** Phase 2: Chaplaincy Certification Records */
export interface ChaplaincyCertification {
  id: string
  applicantName: string
  certificationLevel: string
  endorsements: string[] // DV, trafficking, law enforcement, etc.
  dateIssued: string
  fieldHoursCompleted: number
  fieldHoursRequired: number
  status: 'Active' | 'In Progress' | 'Completed' | 'Expired'
  supervisorName: string
  placementSite: string
}

/** Phase 3: Dissertation Repository */
export interface Dissertation {
  id: string
  title: string
  author: string // reference to Student or Alumni
  advisor: string // reference to Faculty.id
  abstract: string
  keywords: string[]
  dateSubmitted: string
  dateApproved: string
  pdfUrl: string
  program: string
  year: number
  citations: number
}

/** Phase 3: Faculty Publications */
export interface FacultyPublication {
  id: string
  title: string
  author: string // reference to Faculty.id
  coAuthors: string[]
  publicationType: 'Book' | 'Journal Article' | 'Conference Paper' | 'Chapter' | 'Blog Post'
  publisher: string
  datePublished: string
  doi: string
  abstract: string
  url: string
  isbn: string
}

/** Phase 3: Digital Library / Resources */
export interface DigitalResource {
  id: string
  title: string
  type: 'Book' | 'Article' | 'Video' | 'Audio' | 'PDF' | 'Course Material'
  author: string
  description: string
  category: string
  url: string
  thumbnailUrl: string
  dateAdded: string
  accessLevel: 'Public' | 'Students Only' | 'Faculty Only'
  downloadable: boolean
  tags: string[]
}

/** Phase 3: Partner Network */
export interface PartnerChurch {
  id: string
  name: string
  pastorName: string
  location: string
  city: string
  state: string
  country: string
  website: string
  email: string
  phone: string
  partnershipLevel: 'Hub' | 'Regional Partner' | 'Ministry Partner' | 'Church Sponsor'
  dateJoined: string
  studentsSponsored: number
  isActive: boolean
}

/** Phase 4: Donations & Sponsorships */
export interface Donation {
  id: string
  donorName: string
  donorEmail: string
  amount: number
  currency: string
  date: string
  type: 'One-Time' | 'Monthly' | 'Annual' | 'Sponsorship'
  designation: 'General Fund' | 'Student Scholarships' | 'Global Missions' | 'Building Fund' | 'Ministry Partners'
  isRecurring: boolean
  receiptSent: boolean
  notes: string
}

/** Phase 4: Bookstore */
export interface BookstoreItem {
  id: string
  title: string
  type: 'Book' | 'Merchandise' | 'Digital Resource' | 'Course Material'
  author: string
  price: number
  description: string
  imageUrl: string
  category: string
  inStock: boolean
  digitalDownload: boolean
  downloadUrl: string
  isbn: string
}
