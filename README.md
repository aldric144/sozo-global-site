# SOZO Global School Website

A world-class university website for SOZO Global School of the Supernatural and Biblical Studies, built with Next.js 14 and Sanity CMS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm
- Sanity account (free)

### Local Development

1. **Clone and install dependencies:**
```bash
git clone <repository-url>
cd sozo-nextjs/web
npm install
```

2. **Set up environment variables:**
Create a `.env.local` file with your Sanity credentials:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_VERSION=2025-08-01
```

3. **Run the development server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🏗️ Architecture

- **Frontend:** Next.js 14 (App Router), TypeScript, Tailwind CSS
- **CMS:** Sanity.io for content management
- **Deployment:** Vercel (one-click deployment)
- **Styling:** Custom SOZO branding with Royal Blue (#0A174E) and Gold (#C6A700)

## 📁 Project Structure

```
web/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── academics/          # Academic programs
│   │   │   └── [programSlug]/  # Dynamic program pages
│   │   ├── certificates/       # Certificate programs
│   │   │   └── [categorySlug]/ # Dynamic category pages
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx           # Homepage
│   ├── components/             # Reusable components
│   │   ├── Header.tsx         # Navigation header
│   │   └── Footer.tsx         # Site footer
│   ├── lib/                   # Utilities and mock data
│   │   └── sanity.ts          # Sanity client and mock data
│   └── sanity/                # Sanity schemas
│       └── schemas/           # Content type definitions
├── .env.local                 # Environment variables
├── package.json              # Dependencies
└── README.md                 # This file
```

## 🎨 Sanity Content Models

### Core Schemas

#### `category`
- `title` (string, required) - Category name
- `slug` (slug, required) - URL-friendly identifier
- `description` (text) - Category description
- `order` (number) - Display order

#### `certificate`
- `title` (string, required) - Certificate name
- `slug` (slug, required) - URL-friendly identifier
- `category` (reference to category, required)
- `overview` (text) - Program overview
- `objectives` (array of strings) - Learning objectives
- `modules` (array of objects) - Course modules
- `durationWeeks` (number) - Program duration
- `delivery` (string) - "Online", "In-Person", or "Hybrid"
- `tuitionNote` (string) - Tuition information
- `heroImage` (image) - Featured image
- SEO fields: `seoTitle`, `seoDescription`

#### `program`
- `title` (string, required) - Program name
- `slug` (slug, required) - URL-friendly identifier
- `level` (string, required) - "Diploma", "Master's", "Doctoral", "Chaplaincy"
- `overview` (portable text) - Rich program description
- `outcomes` (array of strings) - Learning outcomes
- `admissionRequirements` (portable text) - Admission criteria
- `curriculumNote` (string) - Curriculum information
- `programLength` (string) - Duration (e.g., "2 years")
- `totalCredits` (number) - Credit hours
- `delivery` (string) - Delivery method
- `tuitionNote` (string) - Tuition information
- `heroImage` (image) - Featured image
- `courses` (array of course references) - Associated courses
- SEO fields: `seoTitle`, `seoDescription`

#### `course`
- `code` (string, required) - Course code (e.g., "SBM101")
- `title` (string, required) - Course title
- `description` (portable text) - Course description
- `credits` (number) - Credit hours
- `quarter` (number) - Quarter/semester (1-8)
- `required` (boolean) - Required or elective

#### Additional Schemas
- `page` - Static pages (About, Admissions, etc.)
- `testimonial` - Student testimonials
- `event` - Events and announcements

## 🗂️ Seed Data

### Certificate Categories (10 total)
1. Prophetic Studies
2. Healing & Deliverance
3. Biblical Leadership & Ministry
4. Theology & Doctrine
5. Marketplace & Global Influence
6. Prayer & Intercession
7. Evangelism & Missions
8. Spiritual Gifts & Discernment
9. Pastoral Care & Counseling
10. Christian Education & Discipleship

### Academic Programs (4 total)
1. **Diploma** (slug: `diploma`) - Foundation-level program
2. **Master's** (slug: `masters`) - Advanced theological education
3. **Doctoral** (slug: `doctoral`) - Highest level of academic achievement
4. **Chaplaincy** (slug: `chaplaincy`) - Specialized chaplaincy training

## 🔗 Navigation Structure

- **Home** - Hero section with 3 CTAs
- **About Us** - Mission, Vision, Leadership
- **Academics** - Hub page with dropdown:
  - All Programs
  - Diploma Track (`/academics/diploma`)
  - Master's Track (`/academics/masters`)
  - Doctoral Track (`/academics/doctoral`)
  - Chaplaincy Certification (`/academics/chaplaincy`)
  - Certificates (150+ Programs) (`/certificates`)
- **Admissions** - Apply, Requirements, Tuition
- **Student Life** - Chapel, Missions, Community
- **Resources** - Online Learning, Library, Events
- **Contact Us** - Contact information
- **Student Portal** - External link to Canvas LMS (`https://canvas.sozoglobal.org`)

## 🔍 Search & Filtering

The certificates page includes:
- **Search input** - Full-text search on titles and descriptions
- **Category filter** - Multi-select by certificate category
- **Duration filter** - ≤6, 7-9, 10-12, 12+ weeks
- **Delivery filter** - Online, In-Person, Hybrid

## 🎯 Key Features

- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Meta tags, sitemaps, structured data
- **Performance** - Lighthouse score ≥ 90 target
- **Accessibility** - WCAG compliant
- **CMS Integration** - Real-time content updates via Sanity
- **Dynamic Routing** - Program and certificate pages
- **Professional Branding** - University-grade aesthetic

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel:**
   - Import this repository to Vercel
   - Set environment variables in Vercel dashboard
   - Deploy automatically on push to main branch

2. **Environment Variables for Vercel:**
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_VERSION=2025-08-01
```

### Manual Build

```bash
npm run build
npm start
```

## 📝 Content Management

### Adding New Programs

1. Create a new `program` document in Sanity Studio
2. Set the required fields: `title`, `slug`, `level`
3. Add optional content: `overview`, `outcomes`, `courses`
4. The program will automatically appear on `/academics` and be accessible at `/academics/[slug]`

### Adding New Certificates

1. Create a new `certificate` document in Sanity Studio
2. Link to an existing `category`
3. Set program details: `title`, `overview`, `duration`, etc.
4. The certificate will appear in the appropriate category page

### Adding New Courses

1. Create `course` documents with code, title, and description
2. Reference courses in `program` documents via the `courses` field
3. Courses will display in the curriculum section grouped by quarter

## 🎨 Branding Guidelines

- **Primary Colors:**
  - Royal Blue: `#0A174E`
  - Gold: `#C6A700`
  - White: `#FFFFFF`

- **Typography:**
  - Headings: Playfair Display (serif)
  - Body: Inter (sans-serif)

- **Design Language:**
  - Professional university aesthetic
  - Kingdom authority theme
  - Academic credibility focus
  - Global reach emphasis

## 🔧 Development Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## 📞 Support

For technical support or questions about the SOZO Global School website:

- **Email:** info@sozoglobal.edu
- **Phone:** +1 (555) 123-SOZO
- **Hours:** Mon-Fri 9AM-5PM EST

## 📄 License

© 2025 SOZO Global School of the Supernatural and Biblical Studies. All rights reserved.
