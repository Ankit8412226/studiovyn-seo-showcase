export const projects = [
  {
    slug: 'retail-ecommerce-platform',
    title: 'Retail E-commerce Platform: 250% Revenue Growth in 6 Months',
    result: '250% revenue growth',
    stack: 'Next.js, Stripe, PostgreSQL, Redis',
    image: '/window.svg',
    category: 'E-commerce',
    summary: 'Scalable e-commerce platform with lightning-fast checkout, SEO-optimized catalog, and conversion-focused design that tripled revenue.',
    challenge: 'A growing retail brand was struggling with slow page loads, cart abandonment rates above 70%, and poor search engine visibility. Their legacy platform couldn\'t handle traffic spikes during sales.',
    solution: 'We rebuilt the entire storefront using Next.js with server-side rendering for instant page loads and SEO benefits. Implemented edge caching for product images, optimized the checkout flow to 3 steps with Stripe integration, and added comprehensive schema markup for rich snippets in search results.',
    results: [
      '250% increase in revenue within 6 months',
      '68% reduction in page load time (from 4.2s to 1.3s)',
      'Cart abandonment dropped from 72% to 34%',
      '180% increase in organic search traffic',
      'Handled 10x traffic during Black Friday with zero downtime'
    ],
    technologies: ['Next.js 14', 'React', 'TypeScript', 'PostgreSQL', 'Stripe API', 'Redis Cache', 'Vercel Edge', 'Google Analytics 4'],
    timeline: '12 weeks',
    body: `## The Challenge

Our client, a rapidly growing retail brand with 50,000+ SKUs, was facing critical technical debt. Their WordPress-based e-commerce site was struggling:

- **Performance Issues**: Average page load time of 4.2 seconds
- **High Cart Abandonment**: 72% of users abandoned their carts
- **Poor SEO**: Only 15% of products were indexed by Google
- **Scalability Problems**: Site crashed during promotional events
- **Mobile Experience**: 80% bounce rate on mobile devices

## Our Approach

### Phase 1: Performance-First Architecture (Weeks 1-4)
We migrated to Next.js 14 with App Router, implementing:
- Server-side rendering for product pages with automatic static optimization
- Image optimization with WebP format and lazy loading
- Edge caching for static assets using Vercel's CDN
- Code splitting to reduce initial bundle size by 65%

### Phase 2: Checkout Optimization (Weeks 5-7)
Redesigned the entire checkout flow:
- Reduced from 6 steps to 3 steps
- Guest checkout option (no forced registration)
- Real-time address validation
- Multiple payment methods via Stripe
- Progress indicators and cart persistence

### Phase 3: SEO & Content Strategy (Weeks 8-10)
- Implemented comprehensive schema markup (Product, Organization, BreadcrumbList)
- Created dynamic meta tags for 50,000+ product pages
- Built category pages with optimized content
- XML sitemap generation with priority levels
- Structured data testing and validation

### Phase 4: Testing & Optimization (Weeks 11-12)
- A/B testing on product pages and checkout
- Load testing for 10,000 concurrent users
- Core Web Vitals optimization (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- Conversion rate optimization

## The Results

**Revenue & Conversions:**
- 250% increase in total revenue
- Conversion rate improved from 1.8% to 4.2%
- Average order value increased by 23%
- Cart abandonment reduced to 34%

**Performance:**
- Page load time: 4.2s → 1.3s (68% improvement)
- Time to Interactive: 6.5s → 2.1s
- Lighthouse score: 65 → 98
- Core Web Vitals: All metrics in "Good" range

**SEO & Traffic:**
- 180% increase in organic search traffic
- Google indexed 98% of product pages (up from 15%)
- 45 ranking keywords in top 3 positions
- Featured snippets for 12 product categories

**Business Impact:**
- Successfully handled Black Friday traffic (10x normal volume)
- Customer acquisition cost reduced by 40%
- Customer lifetime value increased by 35%
- Mobile conversion rate improved from 0.8% to 3.1%

## Client Testimonial

*"The new platform transformed our business. We're not just keeping up with demand—we're scaling effortlessly. The ROI was evident within the first month."* — CEO, Retail Client

## Technologies Used

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, PostgreSQL, Prisma ORM
- **Payments**: Stripe API, Stripe Elements
- **Infrastructure**: Vercel, Redis Cloud, AWS S3
- **Analytics**: Google Analytics 4, Mixpanel
- **SEO**: Next-SEO, Schema.org markup`
  },

  {
    slug: 'edtech-mobile-app',
    title: 'EdTech Mobile Learning App: 5M+ Downloads & 4.8★ Rating',
    result: '5M+ downloads, 4.8★ rating',
    stack: 'React Native, Firebase, TypeScript',
    image: '/globe.svg',
    category: 'Education Technology',
    summary: 'Cross-platform mobile learning application with offline support, adaptive learning paths, and engagement features that reached 5 million downloads.',
    challenge: 'An education startup needed to launch a mobile app that would work seamlessly offline in areas with poor connectivity, while providing personalized learning experiences at scale.',
    solution: 'Built a React Native application with offline-first architecture, Firebase backend, and machine learning-powered content recommendations. Implemented video compression, local caching, and background sync.',
    results: [
      '5 million+ downloads in 18 months',
      '4.8★ average rating with 150K+ reviews',
      '72% daily active user rate',
      '45-minute average session duration',
      'Featured by Apple and Google in education category'
    ],
    technologies: ['React Native', 'TypeScript', 'Firebase', 'FFmpeg', 'Redux', 'Jest', 'Fastlane'],
    timeline: '16 weeks',
    body: `## The Challenge

Our client, an emerging EdTech company, wanted to democratize education by creating a mobile learning platform that would work in low-connectivity regions while providing world-class educational content.

**Key Challenges:**
- Must work completely offline after initial content download
- Support for video, interactive quizzes, and real-time progress tracking
- Personalized learning paths for diverse student needs
- Cross-platform (iOS & Android) with native performance
- Scale to millions of concurrent users

## Our Solution

### Architecture & Tech Stack
We chose React Native for true cross-platform development with native performance, combined with Firebase for scalable backend infrastructure.

**Offline-First Architecture:**
- Local SQLite database for course content and progress
- Smart prefetching of next lessons based on learning path
- Background sync when connectivity is available
- Compressed video format (HEVC) reducing file sizes by 60%

**Adaptive Learning Engine:**
- Machine learning model to personalize content recommendations
- Difficulty adjustment based on quiz performance
- Learning analytics dashboard for teachers and parents

### Key Features Implemented

**1. Content Delivery System**
- Chunked content downloads (resume interrupted downloads)
- Video optimization: 720p videos compressed to <50MB
- Progressive image loading with LQIP (Low Quality Image Placeholders)
- Audio-only mode for reduced data usage

**2. Engagement Features**
- Daily streak tracking with push notifications
- Gamification: points, badges, and leaderboards
- Discussion forums with moderation
- Live Q&A sessions with instructors (WebRTC)

**3. Assessment & Analytics**
- Interactive quizzes with instant feedback
- Practice mode vs. test mode
- Detailed performance analytics
- Progress reports sent to parents weekly

## Implementation Highlights

### Phase 1: Core Platform (Weeks 1-6)
- React Native setup with TypeScript
- Navigation architecture (React Navigation)
- Firebase Authentication and Cloud Firestore
- Video player with offline support
- Local data persistence with WatermelonDB

### Phase 2: Content & Learning (Weeks 7-10)
- Content management system integration
- Adaptive learning algorithm
- Quiz engine with multiple question types
- Progress tracking and analytics
- Push notification system

### Phase 3: Engagement & Social (Weeks 11-14)
- Gamification features
- Discussion forums
- Live session integration
- User profiles and achievements
- Social sharing capabilities

### Phase 4: Testing & Launch (Weeks 15-16)
- Comprehensive testing (unit, integration, E2E)
- Performance optimization
- App Store optimization
- Beta testing with 1,000 users
- Phased rollout strategy

## The Results

**User Growth:**
- 5+ million downloads in 18 months
- 3.6 million monthly active users
- 72% daily active user rate
- 89% user retention after 30 days

**Engagement Metrics:**
- Average session duration: 45 minutes
- 6.2 sessions per user per week
- 85% course completion rate (industry avg: 15%)
- 4.8★ average rating (150K+ reviews)

**Business Impact:**
- Featured by Apple in "Best Apps of the Year"
- Google Play Editor's Choice award
- Partnership with 500+ schools
- $12M Series A funding secured
- Expanded to 12 countries

**Technical Performance:**
- App size: 38MB (industry avg: 90MB)
- Crash-free rate: 99.8%
- Cold start time: <2 seconds
- Works seamlessly on devices with 2GB RAM

## App Store Recognition

- **Apple App Store**: Featured in Education category
- **Google Play**: Editor's Choice and Top Developer badge
- **Recognition**: Best Learning App 2024 (EdTech Awards)

## Client Testimonial

*"This app has changed how millions of students learn. The offline capability means kids in rural areas have the same quality education as those in cities. The impact is immeasurable."* — Founder & CEO

## Technologies Used

- **Mobile**: React Native, TypeScript, Expo modules
- **State Management**: Redux Toolkit, React Query
- **Backend**: Firebase (Auth, Firestore, Cloud Functions, Storage)
- **Video**: FFmpeg, HLS streaming, Video caching
- **Database**: WatermelonDB (local), Firestore (cloud)
- **Testing**: Jest, Detox, React Native Testing Library
- **CI/CD**: Fastlane, GitHub Actions, CodePush
- **Analytics**: Firebase Analytics, Mixpanel, Amplitude`
  },

  {
    slug: 'b2b-saas-dashboard',
    title: 'B2B SaaS Analytics Dashboard: 60% Reduction in Operations Time',
    result: '60% reduction in ops time',
    stack: 'Node.js, GraphQL, React, AWS',
    image: '/next.svg',
    category: 'SaaS Platform',
    summary: 'Enterprise-grade analytics dashboard with real-time data processing, role-based access control, and automated workflows that slashed operational overhead.',
    challenge: 'A B2B SaaS company was spending hundreds of hours monthly on manual data reconciliation, reporting, and operational tasks across multiple systems.',
    solution: 'Developed a unified dashboard with GraphQL API, real-time WebSocket updates, automated workflows, and comprehensive RBAC system. Integrated with 12+ third-party services.',
    results: [
      '60% reduction in operational time',
      '95% faster report generation',
      'Automated 80% of manual reconciliation tasks',
      '$240K annual cost savings',
      'Zero data discrepancies after implementation'
    ],
    technologies: ['Node.js', 'GraphQL', 'React', 'PostgreSQL', 'Redis', 'AWS Lambda', 'WebSockets', 'Docker'],
    timeline: '20 weeks',
    body: `## The Challenge

A fast-growing B2B SaaS company with 500+ enterprise clients was drowning in operational complexity:

**Pain Points:**
- Data scattered across 12+ systems (CRM, billing, support, analytics)
- Manual reconciliation taking 40+ hours per week
- Reports generated manually taking 3-5 days
- No real-time visibility into key metrics
- Role-based access issues causing security concerns
- Errors in financial reconciliation costing $180K annually

## Our Solution

We built a comprehensive, real-time analytics dashboard that unified all data sources into a single source of truth with powerful automation.

### System Architecture

**Backend Infrastructure:**
- Node.js microservices architecture
- GraphQL API for flexible data querying
- PostgreSQL for relational data with TimescaleDB for time-series
- Redis for caching and real-time features
- AWS Lambda for serverless data processing
- Event-driven architecture with message queues

**Frontend Platform:**
- React with TypeScript for type safety
- Real-time updates via WebSocket connections
- Modular widget system for customizable dashboards
- Advanced filtering, search, and export capabilities
- Responsive design for tablet and desktop

### Key Features

**1. Unified Data Layer**
- Connected 12 third-party APIs (Salesforce, Stripe, Zendesk, etc.)
- Real-time data synchronization
- Automated data validation and cleansing
- Historical data warehouse with 3-year retention

**2. Role-Based Access Control (RBAC)**
- Granular permissions at field and record level
- Custom role creation for different departments
- Audit logging for compliance
- SSO integration (SAML, OAuth)

**3. Automated Workflows**
- Smart reconciliation engine matching transactions across systems
- Anomaly detection with ML-based alerting
- Scheduled report generation and distribution
- Automated invoice processing
- SLA monitoring and escalation

**4. Real-Time Analytics**
- Live metrics updating every 5 seconds
- Custom dashboard creation with 50+ widget types
- Drill-down capabilities from high-level to transaction detail
- Cohort analysis and trend forecasting
- Export to Excel, PDF, and Google Sheets

**5. Advanced Reporting**
- Template-based report builder
- Scheduled reports via email
- Interactive visualizations (charts, graphs, heatmaps)
- Comparative analysis (YoY, MoM, custom periods)
- Automated executive summaries

## Implementation Timeline

### Phase 1: Foundation (Weeks 1-6)
- Requirements gathering and API research
- System architecture design
- GraphQL schema design
- Database schema with optimization
- Authentication and authorization framework

### Phase 2: Data Integration (Weeks 7-11)
- Third-party API integrations (12 services)
- ETL pipelines for data normalization
- Real-time sync implementation
- Data validation rules
- Migration of historical data (3 years)

### Phase 3: Dashboard & UI (Weeks 12-16)
- Component library development
- Dashboard builder with drag-and-drop
- Real-time WebSocket integration
- Custom widget development
- Responsive layout system

### Phase 4: Automation & Intelligence (Weeks 17-19)
- Reconciliation automation engine
- Anomaly detection algorithms
- Workflow automation builder
- Notification system
- ML-based forecasting models

### Phase 5: Testing & Launch (Week 20)
- Load testing (10K concurrent users)
- Security audit and penetration testing
- User acceptance testing with 50 team members
- Training and documentation
- Phased rollout to all departments

## The Results

**Operational Efficiency:**
- **60% reduction** in time spent on manual operations
- Reconciliation time: 40 hours/week → 8 hours/week
- Report generation: 3-5 days → 5 minutes
- Data discrepancies: 15-20 per month → 0
- Support ticket response time: 24 hours → 2 hours

**Financial Impact:**
- **$240K annual cost savings** from reduced labor
- $180K saved from eliminated reconciliation errors
- Revenue recognition accelerated by 2 weeks
- Improved cash flow visibility enabling better decisions

**Business Metrics:**
- 95% faster report generation
- 100% data accuracy achieved
- 80% of manual tasks automated
- Customer churn reduced by 12% (faster support resolution)
- Sales cycle shortened by 18% (better insights)

**Technical Performance:**
- API response time: <200ms (p95)
- Dashboard load time: <1.5s
- Real-time updates: <5-second latency
- Uptime: 99.97%
- Handles 10,000 concurrent users

## Key Features Delivered

**Dashboard Widgets:**
- Revenue metrics (MRR, ARR, churn)
- Customer health scores
- Support ticket analytics
- Product usage statistics
- Financial reconciliation status
- Custom KPI tracking

**Automation Examples:**
1. **Invoice Reconciliation**: Automatically matches payments to invoices across Stripe and QuickBooks
2. **Churn Prevention**: Alerts sales team when customer health score drops
3. **SLA Monitoring**: Auto-escalates support tickets approaching breach
4. **Revenue Recognition**: Automates complex revenue calculations per ASC 606

## Client Testimonial

*"This dashboard transformed how we operate. What used to take our team days now happens automatically in minutes. The ROI was clear within the first quarter."* — VP of Operations

## Security & Compliance

- SOC 2 Type II compliant infrastructure
- End-to-end encryption for data in transit
- Field-level encryption for sensitive data
- Regular security audits and penetration testing
- GDPR and CCPA compliance features
- Comprehensive audit logging

## Technologies Used

- **Backend**: Node.js, Express, GraphQL (Apollo Server)
- **Database**: PostgreSQL, TimescaleDB, Redis
- **Frontend**: React 18, TypeScript, Recharts, Socket.io
- **Cloud**: AWS (Lambda, ECS, RDS, S3, CloudFront)
- **Message Queue**: AWS SQS, Redis Pub/Sub
- **Authentication**: Auth0, SAML 2.0
- **Monitoring**: DataDog, Sentry, CloudWatch
- **CI/CD**: GitHub Actions, Docker, Kubernetes`
  },

  {
    slug: 'services-directory',
    title: 'Local Services Directory: 3x Organic Traffic Growth',
    result: '3x organic traffic',
    stack: 'Next.js, Algolia, PostgreSQL',
    image: '/vercel.svg',
    category: 'Local Business',
    summary: 'Hyperlocal services directory with advanced search, SEO-optimized city pages, and instant filtering that tripled organic traffic.',
    challenge: 'Local service providers were invisible in search results. The directory needed programmatic SEO for thousands of city/service combinations.',
    solution: 'Built dynamic city landing pages with LocalBusiness schema, implemented Algolia search, and created automated content generation for 10,000+ location pages.',
    results: [
      '300% increase in organic traffic',
      '10,000+ city/service pages indexed',
      '85% of keywords in top 10 positions',
      '420% increase in lead generation',
      'Page load speed under 1.2 seconds'
    ],
    technologies: ['Next.js', 'Algolia', 'PostgreSQL', 'Schema.org', 'Tailwind CSS'],
    timeline: '10 weeks',
    body: `## The Challenge

Local service businesses were struggling to be found online, and our client wanted to build a comprehensive directory that would:

- Rank for thousands of local search queries
- Provide instant, relevant search results
- Scale to 50,000+ business listings
- Generate quality leads for service providers
- Compete with established players like Yelp and Thumbtack

## Our Strategy

### Programmatic SEO at Scale
We generated 10,000+ unique, SEO-optimized pages programmatically:
- **City Pages**: "Plumbers in [City Name]"
- **Service Pages**: "[Service] in [City], [State]"
- **Category Pages**: "Home Services in [City]"

Each page included:
- Unique, helpful content (not thin or duplicate)
- LocalBusiness and Service schema markup
- Reviews and ratings for local businesses
- Maps integration showing service coverage
- Related services and nearby cities

### Lightning-Fast Search
Implemented Algolia for millisecond search responses:
- Typo-tolerant search
- Geo-based result ranking
- Faceted filtering (category, rating, price, distance)
- Real-time results as you type
- Mobile-optimized search interface

## Implementation

### Phase 1: Data & Content (Weeks 1-4)
**Data Collection:**
- Aggregated 50,000+ business listings
- Geocoded all addresses for accurate mapping
- Collected and verified reviews
- Categorized services into 200+ types

**Content Generation:**
- Created templates for dynamic page content
- Generated unique introductions for each city
- Added helpful FAQs and service guides
- Integrated user-generated content (reviews)

### Phase 2: Technical SEO (Weeks 5-7)
**On-Page Optimization:**
- Dynamic meta tags for all pages
- Comprehensive schema markup (LocalBusiness, Organization, BreadcrumbList)
- XML sitemap with 10,000+ URLs
- Optimized internal linking structure
- Mobile-first responsive design

**Performance Optimization:**
- Next.js Static Site Generation for instant loads
- Image optimization and lazy loading
- Edge caching for static assets
- Code splitting for faster initial load
- Core Web Vitals optimization

### Phase 3: Search & UX (Weeks 8-9)
**Algolia Integration:**
- Indexed 50,000+ businesses
- Configured search relevance ranking
- Implemented filters and facets
- Geographic search with radius
- Search analytics tracking

**User Experience:**
- Intuitive search interface
- Click-to-call functionality
- Direct booking options
- Save favorite services
- Review submission system

### Phase 4: Launch & Growth (Week 10)
- Submitted sitemap to Google
- Built backlinks from local sources
- Set up Google Business Profile integrations
- Launched email marketing for providers
- Created content marketing strategy

## The Results

**SEO & Traffic:**
- **300% increase** in organic traffic (0 to 180K monthly visits)
- 10,000+ pages indexed by Google
- 2,400+ keywords ranking in top 10
- 85% of target keywords in top 10 positions
- Featured snippets for 120+ queries

**Search Performance:**
- Average search response time: 8ms
- 95% search success rate
- 72% of searches refined with filters
- Mobile search usage: 68%

**Business Impact:**
- **420% increase** in lead generation
- 15,000+ monthly quote requests
- $280K monthly transaction value
- 850+ service providers onboarded
- 4.6★ average business rating

**Technical Metrics:**
- Page load speed: 1.1 seconds average
- Lighthouse score: 95+
- Core Web Vitals: All "Good"
- Mobile usability: 100%
- Zero crawl errors

## Key Features

**For Users:**
- Instant search with autocomplete
- Filter by rating, price, distance, availability
- Read verified reviews and ratings
- View business photos and portfolios
- Get quotes from multiple providers
- Book appointments directly

**For Service Providers:**
- Free basic listing with premium upgrades
- Lead management dashboard
- Review response system
- Performance analytics
- Booking calendar integration
- Mobile app for managing leads

**Programmatic Pages:**
Each city page includes:
- Top-rated services in that location
- Service category breakdowns
- Average pricing for the area
- Reviews from local customers
- FAQ specific to local regulations
- Neighboring cities and services

## SEO Strategy That Worked

**Content Differentiation:**
- Unique content for every city page
- Local statistics and demographics
- City-specific service guides
- Local review highlights
- Regional pricing information

**Schema Markup (example):**
{"@type":"LocalBusiness","name":"Business Name","geo":{"latitude":"X","longitude":"Y"},"aggregateRating":{"ratingValue":"4.8"},"address":{"streetAddress":"..."}}

**Internal Linking:**
- Hub and spoke structure
- Related services linking
- City cluster pages
- Category hierarchy
- Breadcrumb navigation

## Client Testimonial

*"We went from invisible to dominating local search results. The platform brought us thousands of qualified leads every month."* — Founder

## Technologies Used

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Search**: Algolia Search, Geolocation API
- **Backend**: Node.js, PostgreSQL, Prisma
- **Maps**: Google Maps API, Mapbox
- **SEO**: Next-SEO, Schema.org, Dynamic Sitemaps
- **Analytics**: Google Analytics 4, Search Console
- **Hosting**: Vercel Edge Network`
  },

  // Continuing with more optimized case studies...
  {
    slug: 'clinic-website',
    title: 'Healthcare Clinic Website: Top 3 Local Rankings',
    result: 'Top 3 local rankings',
    stack: 'Next.js, Headless CMS, Schema.org',
    image: '/file.svg',
    category: 'Healthcare',
    summary: 'HIPAA-compliant medical practice website with local SEO, online booking, and patient portal achieving top local search rankings.',
    challenge: 'Medical clinic was invisible in local searches and losing patients to competitors with better online presence.',
    solution: 'Comprehensive local SEO strategy with schema markup, patient reviews integration, HIPAA-compliant booking system, and mobile-first design.',
    results: [
      'Achieved top 3 rankings for all target keywords',
      '540% increase in website leads',
      '180+ new patient appointments per month',
      '4.9★ Google rating with 200+ reviews',
      '65% of bookings now online'
    ],
    technologies: ['Next.js', 'Sanity CMS', 'Calendly API', 'Schema.org'],
    timeline: '8 weeks',
    body: `## The Challenge

A multi-specialty medical clinic was struggling with:
- Zero visibility in "near me" searches
- Outdated website with poor mobile experience
- Phone-only booking creating bottlenecks
- No online reputation management
- Losing patients to competitors

## Our Solution

Built a modern, HIPAA-compliant website focused on local SEO and patient experience.

## The Results

**Local SEO:**
- Top 3 rankings for all 12 target keywords
- 540% increase in organic website traffic
- Featured in Google Local Pack for all services
- 200+ verified Google reviews (4.9★)

**Patient Acquisition:**
- 180+ new patient appointments monthly via website
- 65% of bookings moved to online system
- 89% reduction in phone wait times
- 450% ROI in first 6 months

## Technologies Used

- **Frontend**: Next.js, Tailwind CSS
- **CMS**: Sanity.io (HIPAA-compliant)
- **Booking**: Custom integration with EHR system
- **SEO**: Schema.org Medical markup, Google Business Profile`
  },

  // Adding remaining projects with enhanced details
  ...generateRemainingProjects()
];

// Helper function to generate remaining projects with enhanced structure
function generateRemainingProjects() {
  return [
    {
      slug: 'restaurant-ordering',
      title: 'Restaurant Online Ordering: 35% Higher Average Order Value',
      result: '35% AOV increase',
      stack: 'Next.js, Stripe, Twilio',
      image: '/window.svg',
      category: 'Food & Beverage',
      summary: 'Commission-free online ordering system with menu optimization and smart upsells boosting revenue.',
      technologies: ['Next.js', 'Stripe', 'Twilio', 'PostgreSQL'],
      timeline: '6 weeks',
      body: '## Challenge\nRestaurant losing 30% revenue to third-party apps.\n\n## Solution\nBuilt branded ordering system with strategic upsells and optimized menu layout.\n\n## Results\n- 35% increase in average order value\n- Zero commission fees\n- 2.8x ROI in 3 months'
    },
    {
      slug: 'real-estate-listings',
      title: 'Real Estate Platform: Faster Lead Conversion',
      result: 'Faster lead turnaround',
      stack: 'Next.js, Google Maps API, CRM',
      image: '/globe.svg',
      category: 'Real Estate',
      summary: 'Property search platform with map-based discovery and automated lead routing.',
      technologies: ['Next.js', 'Google Maps API', 'Twilio'],
      timeline: '10 weeks',
      body: '## Challenge\nLeads taking 24+ hours to contact, losing opportunities.\n\n## Solution\nMap search, saved searches, instant lead notifications to agents.\n\n## Results\n- Lead response time: <5 minutes\n- 52% increase in conversions'
    }
  ];
}

export function projectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category) {
  return projects.filter((p) => p.category === category);
}

export function getAllCategories() {
  return [...new Set(projects.map(p => p.category))];
}
