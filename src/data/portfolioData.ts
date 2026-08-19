import {
  Project,
  CreativeItem,
  MotionProject,
  CareerMilestone,
  ProcessStep,
  Article,
  Testimonial,
  SkillCategory
} from '../types';

export const PERSONAL_INFO = {
  name: 'JOSEPH OLUWASEGUN LEVI',
  shortName: 'Joseph Levi',
  primaryTitle: 'Creative Technologist',
  supportingTitles: ['AI Product Builder', 'Product Designer', 'Full Stack Developer'],
  coreStatement: 'I design, build, and grow AI powered digital products that solve real world problems.',
  heroHeadline: 'From Ideas to Intelligent Digital Products.',
  heroSupporting:
    'I combine AI, product thinking, user experience design, and modern web development to build products people enjoy using and businesses can scale.',
  aboutNarrative: [
    'I am a Creative Technologist who enjoys solving business problems through design and technology.',
    'My work combines product strategy, AI, UI and UX, full stack development, and digital growth to create experiences that are intuitive, scalable, and impactful.',
    'Whether I am building a product from scratch or strengthening an existing brand, I focus on solutions that balance user needs with business goals.'
  ],
  pillars: [
    {
      title: 'Product Strategy',
      desc: 'Framing high-friction business and user bottlenecks into validated product roadmaps with clear value propositions.'
    },
    {
      title: 'AI & Workflow Engineering',
      desc: 'Integrating real LLMs, prompt pipelines, and structured outputs into useful consumer and enterprise interfaces.'
    },
    {
      title: 'UI & UX Architecture',
      desc: 'Crafting design systems, user journeys, and tactile interfaces with low cognitive friction and high clarity.'
    },
    {
      title: 'Full Stack Development',
      desc: 'Engineering resilient web applications from responsive component architectures to secure database layers.'
    },
    {
      title: 'Digital Growth & Analytics',
      desc: 'Translating product telemetry, user engagement patterns, and marketing narratives into repeatable growth.'
    }
  ],
  contact: {
    email: 'levijosephofficial@gmail.com',
    alternateEmail: 'kjw25media@gmail.com',
    whatsapp: 'https://wa.me/qr/3PQN35HLTQLJL1',
    linkedin: 'https://www.linkedin.com/in/joseph-oluwasegun-levi-937813248',
    instagram: 'https://www.instagram.com/josefoluwasegun?igsh=a2VhNTZmcW5vZjI0',
    github: 'https://github.com/josephlevi',
    location: 'Open to Global Remote & Relocation Opportunities',
    statusText: 'Available for Product, Creative Tech & AI Engineering Roles'
  }
};

export const CAREER_MILESTONES: CareerMilestone[] = [
  {
    stage: '01',
    title: 'Graphic & Visual Design',
    period: '2018 — 2020',
    description:
      'Mastered visual hierarchy, typography, brand systems, and editorial layout across print, digital marketing, and promotional campaigns at Flyibat, Steadfast, and XSight.',
    keySkills: ['Adobe Photoshop', 'Canva', 'Editorial Layout', 'Visual Identity', 'Typography'],
    iconName: 'Palette'
  },
  {
    stage: '02',
    title: 'Motion Design & Video',
    period: '2020 — 2021',
    description:
      'Expanded into dynamic visual storytelling, motion ads, logo animations, video editing, and social video reels for high-impact brand campaigns.',
    keySkills: ['Motion Graphics', 'Video Editing', 'Kinetic Typography', 'Social Video Ads', 'Visual Effects'],
    iconName: 'Film'
  },
  {
    stage: '03',
    title: 'Product Design & UI/UX',
    period: '2021 — 2023',
    description:
      'Transitioned from static marketing graphics to systematic digital product design in Figma—building user journey maps, wireframes, component design systems, and clickable prototypes.',
    keySkills: ['Figma Design Systems', 'User Research', 'Wireframing', 'UX Architecture', 'Interactive Prototyping'],
    iconName: 'Layout'
  },
  {
    stage: '04',
    title: 'AI & Workflow Engineering',
    period: '2023 — 2024',
    description:
      'Pioneered AI integration for real-world products—designing deterministic prompt engineering pipelines, Zod JSON schema validation, and intelligent context grounding.',
    keySkills: ['Prompt Chaining', 'JSON Schema Enforcement', 'Context Grounding', 'Intelligent UX', 'Zod Guards'],
    iconName: 'Sparkles'
  },
  {
    stage: '05',
    title: 'Full Stack Development',
    period: '2024',
    description:
      'Engineered modern full-stack web applications using Next.js, React, TypeScript, Tailwind CSS, Supabase (PostgreSQL), and serverless cloud architectures.',
    keySkills: ['Next.js / React', 'TypeScript', 'Tailwind CSS', 'Supabase / PostgreSQL', 'REST & Edge APIs'],
    iconName: 'Code2'
  },
  {
    stage: '06',
    title: 'Product Building (SEEMIGO Flagship)',
    period: '2024 — Present',
    description:
      'Unified design, engineering, and AI into end-to-end 0-to-1 product ownership—building SEEMIGO into an intelligent travel and application platform.',
    keySkills: ['0-to-1 Product Strategy', 'Full Stack Architecture', 'AI Product Building', 'Market Validation'],
    iconName: 'Rocket'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'seemigo',
    title: 'SEEMIGO',
    subtitle: 'AI Powered Travel & Application Platform',
    tagline: 'Transforming high-anxiety travel planning and complex visa applications into connected, intelligent workflows.',
    role: ['Founder', 'Product Designer', 'Full Stack Developer', 'AI Product Builder'],
    status: 'Active Private Development',
    category: 'AI Product',
    period: '2024 — Present',
    featured: true,
    highlightMetric: 'Flagship AI Product',
    summary:
      'SEEMIGO is an AI-powered digital product designed to make complex international travel planning and application experiences more intelligent, connected, and significantly easier to manage. Rather than acting as a surface-level chatbot, SEEMIGO unifies context-aware destination intelligence, dynamic requirements verification, itinerary orchestration, and automated document assistance into a unified product system.',
    tags: ['AI Product', 'Next.js', 'React', 'Supabase', 'LLM Workflows', 'Design System', 'Product Strategy'],
    problem:
      'International travelers and visa applicants face high cognitive overload, fragmented government portals, inconsistent travel advisories, and disjointed itinerary tools. Existing tools are either purely static document checklists or superficial generic chatbots that lack deterministic accuracy, structured state persistence, and empathetic UX.',
    approach:
      'Engineered a deterministic AI orchestration pipeline that bridges intuitive UX design with structured LLM prompt workflows. Instead of an open-ended conversational wall, SEEMIGO utilizes progressive disclosure: contextual questionnaires, verified knowledge nodes, live itinerary timelines, and intelligent application tracking.',
    responsibilities: [
      'Led 0-to-1 product strategy, user persona research, and competitive teardowns.',
      'Designed end-to-end Figma UI/UX prototypes, design system tokens, and accessibility standards.',
      'Architected full-stack application using Next.js, React, TypeScript, and Supabase.',
      'Constructed modular AI prompt engineering pipelines for structured JSON extraction and document generation.',
      'Implemented secure authentication, relational database schemas, and external API integrations.',
      'Conducted iterative user testing cycles and continuous performance benchmarking.'
    ],
    technology: [
      {
        category: 'Frontend & UI',
        items: ['Next.js / React', 'TypeScript', 'Tailwind CSS', 'Motion / Canvas UI', 'Radix Primitives']
      },
      {
        category: 'Backend & Data',
        items: ['Supabase (PostgreSQL)', 'Row Level Security', 'Auth & Session Tokens', 'Edge Functions', 'REST APIs']
      },
      {
        category: 'AI & Intelligence',
        items: ['Prompt Pipeline Orchestration', 'Structured JSON Schema Output', 'Grounding Datasets', 'Context Memory Management']
      },
      {
        category: 'Infrastructure & DevOps',
        items: ['Vercel Cloud Deployment', 'Git CI/CD', 'Telemetry & Event Logging', 'Security Hardening']
      }
    ],
    architecture: {
      title: 'SEEMIGO Multi-Tier Architecture',
      description: 'A decoupled, event-driven architecture combining client-side reactive state with secure edge AI inference and authenticated cloud persistence.',
      flowSteps: [
        {
          step: 'Client Interaction Layer',
          detail: 'Reactive React interfaces collect structured user inputs, itinerary constraints, and document parameters with immediate client-side validation.',
          icon: 'Layout'
        },
        {
          step: 'Orchestration & Gateway',
          detail: 'API routes validate authentication tokens, enforce rate limits, and assemble strict prompt templates with dynamic context variables.',
          icon: 'ShieldCheck'
        },
        {
          step: 'AI Inference Engine',
          detail: 'LLM pipelines process grounded destination rules and application logic, returning strictly validated JSON objects rather than freeform text.',
          icon: 'Cpu'
        },
        {
          step: 'Persistence & Sync',
          detail: 'Supabase stores encrypted user profiles, application milestones, generated itineraries, and audit logs with instant synchronization.',
          icon: 'Database'
        }
      ]
    },
    productThinking: {
      title: 'Core Product Principles for SEEMIGO',
      points: [
        'Deterministic Accuracy over Chatbot Hallucination: Critical travel requirements must never rely on probabilistic guesses. Structured guards enforce verified data.',
        'Progressive Information Disclosure: Minimizing user cognitive load by presenting travel milestones step-by-step rather than overwhelming with full regulatory lists.',
        'High-Empathy State Management: Providing clear progress indicators, auto-save states, and clear explanations for why each piece of information is requested.',
        'Extensible Partner API Architecture: Built from day one to connect with flight aggregators, visa processing services, and insurance providers.'
      ]
    },
    caseStudyDetails: {
      research: [
        'Conducted in-depth interviews with 24 frequent international travelers, solo backpackers, and visa applicants.',
        'Identified top 3 pain points: fear of missing hidden visa deadlines, fragmented itinerary management across 5+ apps, and generic AI recommendations with outdated advice.',
        'Mapped comparative matrix against traditional travel agencies, OTAs, and conversational AI tools.'
      ],
      ideation: [
        'Explored 3 distinct interaction models: Conversational-first, Dashboard-first, and Hybrid Milestone-driven.',
        'Selected Hybrid Milestone model for optimal balance between guided AI intelligence and quick visual scanning.',
        'Created rapid paper wireframes and interactive Figma prototypes tested with early cohort.'
      ],
      userJourneys: [
        {
          user: 'Solo First-Time Applicant',
          need: 'Clear step-by-step guidance on country entry permits and document checklists without bureaucratic jargon.',
          outcome: 'Completed validated application readiness assessment in under 6 minutes with 0 missing prerequisites.'
        },
        {
          user: 'Multi-City Remote Professional',
          need: 'Dynamic itinerary balancing travel times, local connectivity ratings, and budget allocation.',
          outcome: 'Generated optimized 14-day hybrid itinerary with synced calendar exports and offline access.'
        }
      ],
      uiDecisions: [
        {
          title: 'Split-Screen Workspace',
          decision: 'Placed live AI recommendation feed adjacent to persistent interactive itinerary canvas.',
          impact: 'Reduced context switching by 64% during user usability tests.'
        },
        {
          title: 'Visual Risk Radar',
          decision: 'Replaced long legal advisory disclaimers with color-coded status badges and action cards.',
          impact: 'Users spotted critical requirement updates 3x faster in controlled trials.'
        }
      ],
      developmentHighlights: [
        'Built typed schema validators using Zod to enforce 100% deterministic JSON output from LLM endpoints.',
        'Implemented optimistic UI updates for real-time item dragging and itinerary reordering.',
        'Engineered fine-grained Supabase Row Level Security (RLS) policies protecting sensitive user travel documents.'
      ],
      testingAndValidation: [
        'Executed end-to-end user testing across 18 beta testers navigating real country visa simulations.',
        'Achieved 94% task completion rate without requiring external help or instruction manuals.',
        'Maintained sub-800ms average client interaction response time via edge caching and dynamic code splitting.'
      ],
      reflectionAndLessons: [
        'AI is only as good as the interface surrounding it: users do not want to chat endlessly; they want deterministic outcomes with direct control.',
        'Building 0-to-1 requires relentless ruthlessness in pruning non-essential features to sharpen the core value proposition.',
        'Private development allows rigorous architecture stress-testing before wider market launch.'
      ]
    }
  },
  {
    id: 'routepal-ng',
    title: 'RoutePal NG',
    subtitle: 'Digital Growth & Product Experience',
    tagline: 'Driving user acquisition, brand authority, and digital engagement through integrated creative technology and campaigns.',
    role: ['Creative Technologist', 'Digital Growth Lead'],
    status: 'Delivered & Scaled',
    category: 'Digital Growth',
    period: '2023 — 2024',
    featured: true,
    highlightMetric: 'Digital Growth Leadership',
    summary:
      'As Creative Technologist and Digital Growth Lead for RoutePal NG, Joseph led the end-to-end digital presence, visual identity revamp, creative direction, engagement analytics, and multi-channel marketing campaigns. The initiative transformed RoutePal from a standard regional brand into an authoritative digital service with measurable user acquisition.',
    tags: ['Creative Direction', 'Digital Growth', 'Content Strategy', 'Brand Identity', 'Analytics & CRO'],
    problem:
      'RoutePal NG needed to establish strong digital credibility, stand out in a competitive mobility and logistics space, and convert passive social impressions into active registered platform users with consistent brand messaging.',
    approach:
      'Combined data-driven digital growth strategies with bespoke visual assets, high-engagement content series, campaign funnels, and landing page optimization designed to build consumer trust.',
    responsibilities: [
      'Directed multi-channel content strategy and digital presence across web and social channels.',
      'Designed cohesive visual identity system, social campaign kits, and conversion-focused digital assets.',
      'Set up analytics tracking to measure user acquisition funnels, CTRs, and conversion drop-offs.',
      'Crafted creative campaigns that highlighted real customer journeys and service reliability.',
      'Collaborated closely with marketing and operations teams to align product messaging with operational realities.'
    ],
    technology: [
      {
        category: 'Growth & Analytics',
        items: ['Google Analytics 4', 'Meta Business Suite', 'Conversion Rate Optimization (CRO)', 'A/B Testing']
      },
      {
        category: 'Creative Suite',
        items: ['Figma', 'Adobe Photoshop', 'Canva', 'Video & Motion Graphics', 'Vector Illustration']
      },
      {
        category: 'Web & Tools',
        items: ['Responsive Web Landing Pages', 'Email Automation', 'Content Management Pipelines']
      }
    ],
    architecture: {
      title: 'Growth & Brand Acquisition Engine',
      description: 'Integrated content-to-conversion funnel driving awareness, trust building, and retention.',
      flowSteps: [
        {
          step: 'Brand Storytelling & Outreach',
          detail: 'High-value educational infographics and targeted video reels capturing prospective travelers and commuters.',
          icon: 'Compass'
        },
        {
          step: 'Optimized Landing Flow',
          detail: 'High-converting mobile-first web pages addressing safety, pricing transparency, and instant booking.',
          icon: 'Smartphone'
        },
        {
          step: 'Engagement Analytics Loop',
          detail: 'Continuous review of heatmaps, drop-off rates, and audience sentiment to refine weekly creative assets.',
          icon: 'BarChart3'
        }
      ]
    },
    productThinking: {
      title: 'Strategic Insights from RoutePal NG',
      points: [
        'Consistency Breeds Trust: In mobility and travel, visual consistency across every customer touchpoint is directly correlated with transaction completion.',
        'Speed of Creative Iteration: Testing 3-4 creative variations weekly allowed rapid discovery of winning message hooks.',
        'Data-Informed Aesthetics: Blending analytical metric tracking with high-taste visual craft ensures beauty serves commercial intent.'
      ]
    },
    caseStudyDetails: {
      research: [
        'Audited competitor brand touchpoints in the travel and logistics ecosystem.',
        'Mapped customer sentiment around online travel safety and payment trust barriers.',
        'Identified high-performing visual themes and micro-content formats that drive engagement.'
      ],
      ideation: [
        'Developed 3 creative campaign angles: Speed & Reliability, Seamless Mobile Booking, and Community Stories.',
        'Tested message traction using rapid prototype micro-ads to evaluate customer resonance before full rollout.'
      ],
      userJourneys: [
        {
          user: 'Commuter looking for safe inter-city routes',
          need: 'Immediate visual assurance of verified vehicles, upfront pricing, and simple booking steps.',
          outcome: 'Marked increase in direct mobile inquiries from campaign landing pages.'
        }
      ],
      uiDecisions: [
        {
          title: 'High-Contrast Feature Cards',
          decision: 'Structured marketing landing page with modular benefits cards instead of walls of marketing copy.',
          impact: 'Bounce rate decreased significantly after implementation.'
        }
      ],
      developmentHighlights: [
        'Standardized reusable brand design system assets used across multiple published campaigns.',
        'Automated social asset resizing and multi-format export workflows.'
      ],
      testingAndValidation: [
        'Monitored campaign metrics, registering substantial surge in verified organic engagements.',
        'Achieved notable uplift in repeat platform interactions through consistent social storytelling.'
      ],
      reflectionAndLessons: [
        'Creative technology is the bridge between product engineering and real human adoption.',
        'A great product will fail without clear, empathetic, and continuous market communication.'
      ]
    }
  },
  {
    id: 'steadfast-international',
    title: 'Steadfast International',
    subtitle: 'Brand System & Digital Asset Architecture',
    tagline: 'Establishing corporate brand coherence, international marketing assets, and executive creative leadership.',
    role: ['Creative Leadership', 'Brand Strategist', 'Campaign Designer'],
    status: 'Completed & Active',
    category: 'Brand & Creative',
    period: '2023 — 2024',
    featured: true,
    highlightMetric: 'Corporate Brand System',
    summary:
      'For Steadfast International, Joseph spearheaded creative leadership and corporate brand consistency across global marketing assets, high-impact campaign collateral, presentation decks for executive stakeholders, and digital engagement touchpoints.',
    tags: ['Creative Leadership', 'Brand Consistency', 'Corporate Visuals', 'Campaign Assets', 'Stakeholder Comms'],
    problem:
      'Steadfast International was communicating across diverse international sectors with fragmented collateral, inconsistent typography and colors, and lack of unified brand guidelines, weakening high-stakes corporate proposals.',
    approach:
      'Devised a centralized brand asset repository, established strict typographic and color hierarchy rules, and produced premium digital and print deliverables tailored for executive audiences.',
    responsibilities: [
      'Authored corporate brand identity handbook with defined color systems, typography, and layout rules.',
      'Designed high-stakes corporate presentation decks, annual reports, and investor pitch materials.',
      'Created scalable marketing asset templates for rapid deployment by cross-functional teams.',
      'Supervised creative quality control across digital publications, web banners, and event collateral.'
    ],
    technology: [
      {
        category: 'Design & Publishing',
        items: ['Figma Design System', 'Adobe Creative Cloud', 'Canva Enterprise', 'Vector Typography']
      },
      {
        category: 'Asset Management',
        items: ['Centralized Cloud Asset Library', 'Design Tokens', 'Presentation Systems']
      }
    ],
    architecture: {
      title: 'Corporate Brand Governance Architecture',
      description: 'Streamlined design ecosystem ensuring every external communication reflects institutional prestige.',
      flowSteps: [
        {
          step: 'Core Token Definition',
          detail: 'Locked color palettes, primary display typefaces, and geometric grid structures.',
          icon: 'Palette'
        },
        {
          step: 'Modular Template Library',
          detail: 'Pre-built slide decks, report layouts, and digital announcement graphics.',
          icon: 'Grid'
        },
        {
          step: 'Quality Assurance & Delivery',
          detail: 'Strict pre-flight review for all high-visibility client proposals and partner presentations.',
          icon: 'CheckCircle2'
        }
      ]
    },
    productThinking: {
      title: 'Key Learnings from Steadfast International',
      points: [
        'Design Systems apply equally to Brand: Modular design tokens eliminate visual drift across large organizations.',
        'Executive Communication Demands Clarity: Removing decorative noise from pitch materials sharpens business decision-making.',
        'Empowering Non-Designers: Well-structured Canva and Figma templates empower operations teams to produce on-brand assets safely.'
      ]
    },
    caseStudyDetails: {
      research: [
        'Audited historic documents, presentations, and digital posts across business divisions.',
        'Found multiple disparate font pairings and inconsistent logo variations in active circulation.',
        'Interviewed key executive stakeholders on organizational positioning and target market expectations.'
      ],
      ideation: [
        'Developed unified identity guidelines with a timeless serif/sans-serif pairing and commanding navy-and-gold neutral palette.',
        'Designed modular slide master systems with multiple layout configurations for data reports and case studies.'
      ],
      userJourneys: [
        {
          user: 'Executive pitching to international institutional partners',
          need: 'Flawless, cohesive deck that highlights data clearly without typographic clutter.',
          outcome: 'Successfully delivered pitch decks credited with strengthening stakeholder confidence.'
        }
      ],
      uiDecisions: [
        {
          title: 'Data-First Chart Formatting',
          decision: 'Standardized data visualization rules with high-contrast accent callouts.',
          impact: 'Executive readability improved; report preparation time reduced significantly.'
        }
      ],
      developmentHighlights: [
        'Built plug-and-play template kits enabling non-design staff to output consistent graphics in minutes.',
        'Established cloud asset synchronization with version-controlled graphic files.'
      ],
      testingAndValidation: [
        'Full elimination of unauthorized brand collateral across company publications.',
        'Commended by senior leadership for transforming internal and external visual stature.'
      ],
      reflectionAndLessons: [
        'Visual discipline translates directly into business valuation and credibility.',
        'Creative technologist skills allow seamless translation between high-level brand strategy and technical execution.'
      ]
    }
  },
  {
    id: 'flyibat-travel',
    title: 'Flyibat Travel',
    subtitle: 'Travel Marketing & Visual Storytelling',
    tagline: 'Crafting compelling destination marketing, campaign visual identity, and customer discovery journeys.',
    role: ['Travel Marketing Lead', 'Visual Storyteller', 'Digital Branding Specialist'],
    status: 'Delivered',
    category: 'Travel Marketing',
    period: '2023',
    featured: true,
    highlightMetric: 'Visual Engagement Storytelling',
    summary:
      'For Flyibat Travel, Joseph designed immersive travel marketing campaigns, destination visual storytelling, digital branding collateral, and promotional social content that inspired wanderlust and streamlined customer booking inquiries.',
    tags: ['Travel Marketing', 'Visual Storytelling', 'Campaign Design', 'Social Media Branding', 'Customer Inquiries'],
    problem:
      'Flyibat needed to differentiate its travel packages in an intensely crowded agency market where competitors relied on generic stock imagery without emotional connection or clear destination packages.',
    approach:
      'Crafted narrative-driven visual campaigns that spotlighted specific destination itineraries, cultural highlights, visa advisory tips, and all-inclusive package clarity.',
    responsibilities: [
      'Developed creative concept for seasonal destination campaigns and promotional flight offers.',
      'Created custom social media graphics, carousels, video reels, and promotional banners.',
      'Wrote engaging micro-copy and call-to-action hooks to guide inquiries straight to booking advisors.',
      'Maintained brand identity guidelines across all promotional customer touchpoints.'
    ],
    technology: [
      {
        category: 'Creative & Motion',
        items: ['Adobe Photoshop', 'Figma', 'Canva Pro', 'Motion Typography', 'Photo Retouching']
      },
      {
        category: 'Marketing Strategy',
        items: ['Social Storytelling', 'Direct Inquiry Funnels', 'Customer Persona Targeting']
      }
    ],
    architecture: {
      title: 'Destination Storytelling Funnel',
      description: 'Inspiring prospective travelers through evocative imagery paired with practical booking details.',
      flowSteps: [
        {
          step: 'Destination Discovery',
          detail: 'Vibrant photo carousels highlighting cultural landmarks, local cuisine, and travel hacks.',
          icon: 'Image'
        },
        {
          step: 'Package Clarity',
          detail: 'Transparent breakdown of flights, accommodation, visa support, and inclusions.',
          icon: 'FileText'
        },
        {
          step: 'Direct Ingestion',
          detail: 'Frictionless transition from social post to 1-on-1 travel consultant messaging.',
          icon: 'MessageSquare'
        }
      ]
    },
    productThinking: {
      title: 'Key Learnings from Flyibat Travel',
      points: [
        'Emotion Drives Travel Decisions: Highlighting the human feeling of arrival outperforms standard price-tag advertising.',
        'Clarity Reduces Friction: Highlighting visa support upfront converted hesitation into immediate inquiries.',
        'Foundational Insights for SEEMIGO: Observing real traveler anxieties at Flyibat directly inspired the intelligence features built into SEEMIGO.'
      ]
    },
    caseStudyDetails: {
      research: [
        'Analyzed customer inquiry logs to pinpoint top destination questions and safety concerns.',
        'Discovered that travelers prioritized visa assistance clarity over minor flight discount variations.'
      ],
      ideation: [
        'Created "Wanderlust with Peace of Mind" campaign framework highlighting end-to-end guidance from visa to return flight.'
      ],
      userJourneys: [
        {
          user: 'Holiday seeker planning international getaway',
          need: 'Inspiration accompanied by transparent package costs and visa processing support.',
          outcome: 'Immediate WhatsApp and web inquiry conversions for featured seasonal packages.'
        }
      ],
      uiDecisions: [
        {
          title: 'Structured Carousel Highlights',
          decision: 'Organized multi-slide carousels into: Hook -> Experience -> Inclusions -> Clear Action.',
          impact: 'Average post save and share rates increased substantially.'
        }
      ],
      developmentHighlights: [
        'Produced comprehensive visual asset library covering multiple international destination hubs.'
      ],
      testingAndValidation: [
        'Recorded highest-ever monthly inquiry volume during active seasonal campaign months.'
      ],
      reflectionAndLessons: [
        'Deep domain immersion in travel marketing provided firsthand knowledge of real customer friction, directly shaping SEEMIGO product design.'
      ]
    }
  }
];

// ============================================================================
// REAL RETRIEVED CREATIVE PORTFOLIO WORK ARCHIVE
// (From Flyibat, Steadfast International, XSight Entertainment, KJW25Media)
// ============================================================================
export const CREATIVE_WORK: CreativeItem[] = [
  // --- FLYIBAT TRAVEL ---
  {
    id: 'flyibat-design-projects',
    title: 'Flyibat Destination Travel Catalog & Itinerary Guides',
    client: 'Flyibat Travel',
    group: 'Design Projects',
    description:
      'Curated destination visual guides, country entry advisory cards, and promotional travel catalogs highlighting flight deals, accommodation packages, and end-to-end visa guidance.',
    year: '2023',
    tools: ['Adobe Photoshop', 'Canva Pro', 'Figma', 'Typography'],
    mediaType: 'image',
    mediaUrl: 'https://files.cdn-files-a.com/uploads/2663294/2000_68b004d290730.jpg',
    thumbnailUrl: 'https://files.cdn-files-a.com/uploads/2663294/2000_68b004d290730.jpg',
    galleryImages: [
      'https://files.cdn-files-a.com/uploads/2663294/2000_68b004d290730.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68b004e45c0d9.png',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68b004f60ceb1.png',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68b0050680c0d.png'
    ],
    aspectRatio: 'portrait',
    gradientTheme: 'from-sky-600/40 via-indigo-900/50 to-slate-950',
    deliverables: ['Destination Guides', 'Flight Offer Cards', 'Visa Advisory Graphics', 'Multi-slide Carousels'],
    keyInsight: 'Organized complex travel prerequisites into clear visual milestone cards, improving customer inquiry turnaround.'
  },
  {
    id: 'flyibat-special-creatives',
    title: 'Special Creatives @ Flyibat ("Taking Graphic Design to the Next Level")',
    client: 'Flyibat Travel',
    group: 'Special Creatives',
    description:
      'Bespoke seasonal creative assets celebrating major global travel seasons, holiday getaways, and special cultural discovery campaigns.',
    year: '2023',
    tools: ['Adobe Photoshop', 'Figma', 'Visual Storytelling', 'Photo Manipulation'],
    mediaType: 'image',
    mediaUrl: 'https://files.cdn-files-a.com/uploads/2663294/2000_68b02f15ddcf9.jpg',
    thumbnailUrl: 'https://files.cdn-files-a.com/uploads/2663294/2000_68b02f15ddcf9.jpg',
    galleryImages: [
      'https://files.cdn-files-a.com/uploads/2663294/2000_68b02f15ddcf9.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68b02f23bf5f7.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68b02f4a16566.png',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68b02f5be1ede.png',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68b02f6c230dd.png',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68b02f9cf0426.png',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68b02fb5abc27.png',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68b02fd9d6f12.png',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68b03078752e1.png',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68b031f5ec8c9.png'
    ],
    aspectRatio: 'square',
    gradientTheme: 'from-amber-600/40 via-rose-900/50 to-slate-950',
    deliverables: ['Seasonal Campaign Kits', 'Social Media Carousel Packs', 'Promo Banners', 'Poster Art'],
    keyInsight: 'Elevated brand stature by moving away from generic stock photos to richly textured narrative art.'
  },
  {
    id: 'flyibat-doha-tours',
    title: 'Flyibat Special Offer: Doha Tour Package Series',
    client: 'Flyibat Travel',
    group: 'Special Offer Designs',
    description:
      'Discover the charm of Doha with exclusive tour package visuals—from desert safaris and dhow cruises to luxury city tours, cultural landmarks, and shopping.',
    year: '2023',
    tools: ['Adobe Photoshop', 'Canva Pro', 'Color Theory'],
    mediaType: 'image',
    mediaUrl: 'https://files.cdn-files-a.com/uploads/2663294/2000_68b0059c9daac.png',
    thumbnailUrl: 'https://files.cdn-files-a.com/uploads/2663294/2000_68b0059c9daac.png',
    aspectRatio: 'landscape',
    gradientTheme: 'from-emerald-600/40 via-teal-900/50 to-slate-950',
    deliverables: ['Doha Tour Flyers', 'Direct Booking Ingestion Graphics', 'Pricing Comparison Cards'],
    keyInsight: 'Clear price breakdown with direct WhatsApp concierge link converted browsers into confirmed bookings.'
  },
  {
    id: 'flyibat-tour-packages',
    title: 'Flyibat Global Tour Packages Showcase',
    client: 'Flyibat Travel',
    group: 'Special Offer Designs',
    description:
      'Comprehensive international tour package highlights across top vacation destinations with full accommodation and flight itinerary clarity.',
    year: '2023',
    tools: ['Adobe Photoshop', 'Canva', 'Typography'],
    mediaType: 'image',
    mediaUrl: 'https://files.cdn-files-a.com/uploads/2663294/2000_68b00629f1ec1.png',
    thumbnailUrl: 'https://files.cdn-files-a.com/uploads/2663294/2000_68b00629f1ec1.png',
    aspectRatio: 'portrait',
    gradientTheme: 'from-sky-600/40 via-blue-900/50 to-slate-950',
    deliverables: ['Tour Itinerary Banners', 'Social Announcement Flyers'],
    keyInsight: 'Balanced rich imagery with legible pricing and inclusions.'
  },
  {
    id: 'flyibat-study-offers',
    title: 'International Travel & Study Abroad Offer Series',
    client: 'Flyibat Travel',
    group: 'Travel & Study Offers',
    description:
      'Educational travel campaign targeting students and scholars with visa assistance timelines, university intake calendars, and student ticket discounts.',
    year: '2023',
    tools: ['Adobe Photoshop', 'Editorial Design', 'Vector Assets'],
    mediaType: 'image',
    mediaUrl: 'https://files.cdn-files-a.com/uploads/2663294/2000_68b0068c77f52.png',
    thumbnailUrl: 'https://files.cdn-files-a.com/uploads/2663294/2000_68b0068c77f52.png',
    galleryImages: [
      'https://files.cdn-files-a.com/uploads/2663294/2000_68b0068c77f52.png',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68b007237e2d1.png'
    ],
    aspectRatio: 'portrait',
    gradientTheme: 'from-indigo-600/40 via-purple-900/50 to-slate-950',
    deliverables: ['Study Visa Infographics', 'University Partner Social Graphics', 'Student Guide Handouts'],
    keyInsight: 'Addressed student visa concerns upfront, establishing Flyibat as an educational travel authority.'
  },
  {
    id: 'flyibat-new-routes-evisa',
    title: 'Flyibat New Route Updates & E-Visa Advisory Series',
    client: 'Flyibat Travel',
    group: 'Special Offer Designs',
    description:
      'Critical informational graphics covering new airline routes, flight schedule expansions, and electronic visa application updates.',
    year: '2023',
    tools: ['Adobe Photoshop', 'Information Architecture', 'Canva'],
    mediaType: 'image',
    mediaUrl: 'https://files.cdn-files-a.com/uploads/2663294/2000_68b0079f012f5.png',
    thumbnailUrl: 'https://files.cdn-files-a.com/uploads/2663294/2000_68b0079f012f5.png',
    galleryImages: [
      'https://files.cdn-files-a.com/uploads/2663294/2000_68b0079f012f5.png',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68b008101f433.png'
    ],
    aspectRatio: 'landscape',
    gradientTheme: 'from-teal-600/40 via-emerald-950 to-slate-950',
    deliverables: ['Route Expansion Announcements', 'E-Visa Advisory Infographics'],
    keyInsight: 'Clear, high-visibility infographics that drove high saves and shares.'
  },
  {
    id: 'flyibat-holiday-campaigns',
    title: 'Flyibat Christmas Holiday Deals & New Month Campaigns',
    client: 'Flyibat Travel',
    group: 'Special Creatives',
    description:
      'Festive holiday campaign flyers, flash ticket discounts, and monthly inspirational travel themes designed to capture seasonal travel spikes.',
    year: '2023',
    tools: ['Adobe Photoshop', 'Canva', 'Social Strategy'],
    mediaType: 'image',
    mediaUrl: 'https://files.cdn-files-a.com/uploads/2663294/2000_68b008a965a43.jpg',
    thumbnailUrl: 'https://files.cdn-files-a.com/uploads/2663294/2000_68b008a965a43.jpg',
    galleryImages: [
      'https://files.cdn-files-a.com/uploads/2663294/2000_68b008a965a43.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68b3e8da6483a.png'
    ],
    aspectRatio: 'square',
    gradientTheme: 'from-rose-600/40 via-red-950 to-slate-950',
    deliverables: ['Christmas Promo Artwork', 'Monthly Inspirational Social Banners'],
    keyInsight: 'High-energy festive palette that generated direct holiday bookings.'
  },

  // --- STEADFAST INTERNATIONAL ---
  {
    id: 'steadfast-brand-system',
    title: 'Steadfast International Brand & Corporate Project Suite',
    client: 'Steadfast International',
    group: 'Brand & Campaign Designs',
    description:
      'Successfully crafted high-quality TGIF, TGIM, product designs, and celebratory fliers for Steadfast International. Delivering visually striking and meaningful creative solutions that enhance brand presence.',
    year: '2023 — 2024',
    tools: ['Figma', 'Adobe Creative Cloud', 'Canva Enterprise', 'Typography'],
    mediaType: 'image',
    mediaUrl: 'https://files.cdn-files-a.com/uploads/2663294/2000_687269fe0b0ef.jpg',
    thumbnailUrl: 'https://files.cdn-files-a.com/uploads/2663294/2000_687269fe0b0ef.jpg',
    galleryImages: [
      'https://files.cdn-files-a.com/uploads/2663294/2000_687269fe0b0ef.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68726a1da9fc3.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68726a417ea38.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68726a7ee451f.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68726aab6cb3b.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68726ad5ada11.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68726afb8fe12.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68726b28cb78c.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68726b4d1cbd2.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68726b704d951.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68726b8eaf452.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68726bb159532.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68726bd497f22.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68726c04952fd.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68726c22e0c93.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68726c464fdcc.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68726c685b55e.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68726c8b09f05.jpg'
    ],
    aspectRatio: 'landscape',
    gradientTheme: 'from-blue-700/40 via-slate-900 to-slate-950',
    deliverables: ['Corporate Brand Guidelines', 'TGIF / TGIM Social Series', 'Slide Master Pitch Kits', 'Corporate Stationery'],
    keyInsight: 'Centralized typography and color tokens to ensure institutional consistency across international business divisions.'
  },
  {
    id: 'steadfast-csw-project',
    title: 'Customer Service Week @ Steadfast International',
    client: 'Steadfast International',
    group: 'Customer Service Week',
    description:
      'Customer Service Week celebrated with diverse amazing traditional outfit series. Special commemorative project honoring clients, partners, and internal team service champions.',
    year: '2023',
    tools: ['Adobe Photoshop', 'Figma', 'Visual Storytelling', 'Typography'],
    mediaType: 'image',
    mediaUrl: 'https://files.cdn-files-a.com/uploads/2663294/normal_67d6220b69d99-thumbnail.jpg',
    thumbnailUrl: 'https://files.cdn-files-a.com/uploads/2663294/normal_67d6220b69d99-thumbnail.jpg',
    aspectRatio: 'square',
    gradientTheme: 'from-yellow-600/40 via-amber-950 to-slate-950',
    deliverables: ['Client Appreciation Badges', 'Staff Spotlight Cards', 'Digital Celebration Collateral'],
    keyInsight: 'Warm, appreciative visual tone that resonated strongly across executive partners and staff.'
  },

  // --- XSIGHT ENTERTAINMENT ---
  {
    id: 'xsight-entertainment-designs',
    title: 'XSight Entertainment Product Designs, Inspirational E-Cards & Wallpapers',
    client: 'XSight Entertainment',
    group: 'Product Designs',
    description:
      'Successfully crafted high-quality product designs, inspirational E-cards, wallpapers, and exceptional celebratory fliers for XSight Entertainment. Delivering visually striking and meaningful creative solutions.',
    year: '2021 — 2022',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Visual Mockups', 'Typography'],
    mediaType: 'image',
    mediaUrl: 'https://files.cdn-files-a.com/uploads/2663294/2000_68727022c18f3.jpg',
    thumbnailUrl: 'https://files.cdn-files-a.com/uploads/2663294/2000_68727022c18f3.jpg',
    galleryImages: [
      'https://files.cdn-files-a.com/uploads/2663294/2000_68727022c18f3.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_687270555505c.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_687270784a777.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_6872709705f03.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_687270c488889.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_687270ede01ad.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68727111a6bcb.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_687271377bc2f.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_6872716478f34.png',
      'https://files.cdn-files-a.com/uploads/2663294/2000_6872718f0ca04.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_687271d216867.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_6872720468b3c.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68727229f39f3.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68727249ae5d9.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_6872727603fcd.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68727295b2c8a.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_687272bb03071.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_687272e68fdc8.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_6872730c7ded3.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_6872736155be5.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_67d61e8840504.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_68727383bfdea.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_687273b34ea0c.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_687273be824c1.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_687273eb3ffee.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_6872741c37d04.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_67d61e964b493.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_67d61e985276e.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_6872744dd18d8.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_6872748ed6202.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_67d61e9757391.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_687274b4eb801.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_687274dc02cb2.jpg',
      'https://files.cdn-files-a.com/uploads/2663294/2000_6872751077af0.jpg'
    ],
    aspectRatio: 'square',
    gradientTheme: 'from-fuchsia-600/40 via-purple-950 to-slate-950',
    deliverables: ['Product Mockups', 'Inspirational Typographic E-cards', '4K Digital Wallpapers', 'Celebratory Posters'],
    keyInsight: 'Bold, high-energy aesthetic tailored for media, music, publishing, and youth culture audiences.'
  },

  // --- KJW25MEDIA GALLERIES ---
  {
    id: 'kjw25-akoko',
    title: 'ÀKÓKÓ ("First")',
    client: 'KJW25MEDIA',
    group: 'Selected Creative Projects',
    description:
      '"AKOKO," signifying "First," reflects our commitment to delivering unparalleled creative experiences. Prioritizing innovation, quality, and visual distinction.',
    year: '2022',
    tools: ['Adobe Photoshop', 'Figma', 'Digital Art'],
    mediaType: 'image',
    mediaUrl: 'https://files.cdn-files-a.com/uploads/2663294/800_68b3e97c4b054.png',
    thumbnailUrl: 'https://files.cdn-files-a.com/uploads/2663294/800_68b3e97c4b054.png',
    aspectRatio: 'portrait',
    gradientTheme: 'from-amber-600/40 via-stone-900 to-slate-950',
    deliverables: ['Digital Art Piece', 'Fine Art Concept', 'Brand Identity Asset'],
    keyInsight: 'Rich cultural typography and symbolic gold tones representing leadership and pioneering initiative.'
  },
  {
    id: 'kjw25-maami',
    title: 'MÀÁMI ("My Mother")',
    client: 'KJW25MEDIA',
    group: 'Selected Creative Projects',
    description:
      'Heartfelt tribute artwork exploring maternal warmth, nurture, cultural appreciation, and timeless emotional storytelling.',
    year: '2022',
    tools: ['Adobe Photoshop', 'Photo Manipulation', 'Digital Painting'],
    mediaType: 'image',
    mediaUrl: 'https://files.cdn-files-a.com/uploads/2663294/800_68b3ebfa9d3f5.png',
    thumbnailUrl: 'https://files.cdn-files-a.com/uploads/2663294/800_68b3ebfa9d3f5.png',
    aspectRatio: 'portrait',
    gradientTheme: 'from-rose-600/40 via-purple-950 to-slate-950',
    deliverables: ['Conceptual Tribute Artwork', 'Visual Narrative Poster'],
    keyInsight: 'Deep color grading and soft portrait lighting capturing maternal emotion.'
  },
  {
    id: 'kjw25-one-africa',
    title: 'ONE AFRICA',
    client: 'KJW25MEDIA',
    group: 'Selected Creative Projects',
    description:
      'Pan-African unity artwork celebrating continental diversity, shared heritage, and progressive forward-looking vision.',
    year: '2022',
    tools: ['Adobe Photoshop', 'Vector Design', 'Color Harmony'],
    mediaType: 'image',
    mediaUrl: 'https://files.cdn-files-a.com/uploads/2663294/800_68b3eca6cd5ec.png',
    thumbnailUrl: 'https://files.cdn-files-a.com/uploads/2663294/800_68b3eca6cd5ec.png',
    aspectRatio: 'portrait',
    gradientTheme: 'from-emerald-600/40 via-yellow-950 to-slate-950',
    deliverables: ['Pan-African Digital Artwork', 'Heritage Poster'],
    keyInsight: 'Vibrant geometric patterns paying homage to continental heritage.'
  },
  {
    id: 'kjw25-reaching-together',
    title: 'REACHING TOGETHER',
    client: 'KJW25MEDIA',
    group: 'Selected Creative Projects',
    description:
      '"REACHING TOGETHER" is a community service visual initiative designed to foster collaboration and support within local communities.',
    year: '2022',
    tools: ['Adobe Photoshop', 'Canva', 'Social Campaign'],
    mediaType: 'image',
    mediaUrl: 'https://files.cdn-files-a.com/uploads/2663294/800_68b3ed8694ffe.png',
    thumbnailUrl: 'https://files.cdn-files-a.com/uploads/2663294/800_68b3ed8694ffe.png',
    aspectRatio: 'portrait',
    gradientTheme: 'from-cyan-600/40 via-blue-950 to-slate-950',
    deliverables: ['Community Initiative Poster', 'Social Impact Graphic'],
    keyInsight: 'Human connection centered composition inspiring grassroots collaboration.'
  },
  {
    id: 'kjw25-connection-beyond-colors',
    title: 'Connection Beyond Colors',
    client: 'KJW25MEDIA',
    group: 'Selected Creative Projects',
    description:
      'Artistic exploration of empathy, unity, and shared human bonds that transcend cultural and superficial boundaries.',
    year: '2022',
    tools: ['Adobe Photoshop', 'Digital Art', 'Color Grading'],
    mediaType: 'image',
    mediaUrl: 'https://files.cdn-files-a.com/uploads/2663294/800_68b3ede27b19d.png',
    thumbnailUrl: 'https://files.cdn-files-a.com/uploads/2663294/800_68b3ede27b19d.png',
    aspectRatio: 'portrait',
    gradientTheme: 'from-indigo-600/40 via-sky-950 to-slate-950',
    deliverables: ['Abstract Visual Composition', 'Exhibition Print'],
    keyInsight: 'Expressive gradient blending communicating human interconnectivity.'
  },
  {
    id: 'kjw25-cultural-heritage',
    title: 'CULTURAL HERITAGE',
    client: 'KJW25MEDIA',
    group: 'Selected Creative Projects',
    description:
      'Visual celebration of cultural history, traditional motifs, and indigenous storytelling translated into contemporary digital artwork.',
    year: '2022',
    tools: ['Adobe Photoshop', 'Digital Illustration', 'Texture Mapping'],
    mediaType: 'image',
    mediaUrl: 'https://files.cdn-files-a.com/uploads/2663294/800_68b3ee49235b3.png',
    thumbnailUrl: 'https://files.cdn-files-a.com/uploads/2663294/800_68b3ee49235b3.png',
    aspectRatio: 'portrait',
    gradientTheme: 'from-amber-600/40 via-orange-950 to-slate-950',
    deliverables: ['Cultural Heritage Print', 'Digital Commemorative Artwork'],
    keyInsight: 'Preserving historical symbolism within modern digital canvas aesthetics.'
  }
];

// ============================================================================
// DEDICATED MOTION DESIGN & VIDEO SHOWCASE
// ============================================================================
export const MOTION_PROJECTS: MotionProject[] = [
  {
    id: 'motion-fun-thursday',
    title: 'Fun Thursday Game Project',
    client: 'Steadfast International',
    category: 'Interactive Game',
    description:
      'Special interactive motion and video project created for Steadfast International to energize team community and social engagement.',
    tools: ['Adobe Premiere Pro', 'After Effects', 'Motion Design', 'Sound Editing'],
    duration: 'Full Video Reel',
    year: '2023',
    youtubeId: 'ygCITIqHXuE',
    posterUrl: 'https://img.youtube.com/vi/ygCITIqHXuE/maxresdefault.jpg',
    posterGradient: 'from-indigo-600/50 via-purple-900/60 to-slate-950',
    highlight: 'Engaging, fast-paced video editing that boosted team morale and digital interactions.'
  },
  {
    id: 'motion-steadfast-effect-3',
    title: 'Steadfast Motion Effect 3',
    client: 'Steadfast International',
    category: 'Steadfast Motion Effects',
    description:
      'Special motion graphics project for Steadfast International featuring sleek logo reveals, corporate video stingers, and kinetic animation.',
    tools: ['Adobe After Effects', 'Motion Design', 'Vector Rigging'],
    duration: 'Motion Stinger',
    year: '2023',
    youtubeId: 'k9sodErdqu4',
    posterUrl: 'https://img.youtube.com/vi/k9sodErdqu4/maxresdefault.jpg',
    posterGradient: 'from-blue-600/50 via-slate-900 to-slate-950',
    highlight: 'Cinematic corporate motion design with polished light sweeps and crisp timing.'
  },
  {
    id: 'motion-steadfast-effect-1',
    title: 'Steadfast Motion Effect 1',
    client: 'Steadfast International',
    category: 'Steadfast Motion Effects',
    description:
      'Special motion effect and dynamic visual sting for Steadfast International corporate identity and video broadcasts.',
    tools: ['Adobe After Effects', 'Video Editing'],
    duration: 'Broadcast Stinger',
    year: '2023',
    videoUrl: 'https://cdn-media.f-static.net/uploads/2663294/normal_67d6144fcba9e.mp4',
    posterUrl: 'https://files.cdn-files-a.com/uploads/2663294/normal_67d6144fcba9e-thumbnail.jpg',
    posterGradient: 'from-sky-600/50 via-blue-900 to-slate-950',
    highlight: 'Clean corporate motion branding designed for official video presentations.'
  },
  {
    id: 'motion-steadfast-effect-2',
    title: 'Steadfast Motion Effect 2',
    client: 'Steadfast International',
    category: 'Steadfast Motion Effects',
    description:
      'Special dynamic lower-thirds, title animation, and brand motion package developed for Steadfast International video projects.',
    tools: ['Adobe After Effects', 'Motion Graphics'],
    duration: 'Motion Asset',
    year: '2023',
    videoUrl: 'https://cdn-media.f-static.net/uploads/2663294/normal_67146a0fd88cd.mp4',
    posterUrl: 'https://files.cdn-files-a.com/uploads/2663294/normal_67146a0fd88cd-thumbnail.jpg',
    posterGradient: 'from-blue-500/50 via-indigo-950 to-slate-950',
    highlight: 'High-impact lower thirds and transitions for multi-channel video content.'
  },
  {
    id: 'motion-ads-2',
    title: 'Motion Ads Series 02',
    client: 'Commercial Campaigns',
    category: 'Motion Ad',
    description:
      'High-velocity commercial motion advertisement combining kinetic typography, product feature callouts, and rapid transitions.',
    tools: ['Adobe After Effects', 'Premiere Pro', 'Kinetic Typography'],
    duration: '0:30',
    year: '2023',
    videoUrl: 'https://cdn-media.f-static.net/uploads/2663294/normal_68b02cd4254de.mp4',
    posterUrl: 'https://files.cdn-files-a.com/uploads/2663294/normal_68b02cd4254de-thumbnail.jpg',
    posterGradient: 'from-indigo-600/50 via-blue-950 to-slate-950',
    highlight: 'Engineered high-retention visual hooks that maximized ad conversion on mobile feeds.'
  },
  {
    id: 'motion-ads-3',
    title: 'Motion Ads Series 03',
    client: 'Commercial Campaigns',
    category: 'Motion Ad',
    description:
      'Dynamic social video advertisement with synchronized typography, visual effects, and prominent call-to-action cards.',
    tools: ['Adobe After Effects', 'Premiere Pro'],
    duration: '0:45',
    year: '2023',
    videoUrl: 'https://cdn-media.f-static.net/uploads/2663294/normal_68b02d1d2b513.mp4',
    posterUrl: 'https://files.cdn-files-a.com/uploads/2663294/normal_68b02d1d2b513-thumbnail.jpg',
    posterGradient: 'from-blue-600/50 via-slate-900 to-slate-950',
    highlight: 'Punchy visual rhythm timed to upbeat audio track.'
  },
  {
    id: 'motion-ads-4',
    title: 'Motion Ads Series 04',
    client: 'Commercial Campaigns',
    category: 'Motion Ad',
    description:
      'Promotional motion reel spotlighting exclusive package deals, destination highlights, and mobile booking transitions.',
    tools: ['Adobe After Effects', 'Premiere Pro', 'Motion Typography'],
    duration: '0:30',
    year: '2023',
    videoUrl: 'https://cdn-media.f-static.net/uploads/2663294/normal_68b02d47d7896.mp4',
    posterUrl: 'https://files.cdn-files-a.com/uploads/2663294/normal_68b02d47d7896-thumbnail.jpg',
    posterGradient: 'from-sky-500/50 via-indigo-950 to-slate-950',
    highlight: 'High-contrast typography callouts designed for instant mobile legibility.'
  },
  {
    id: 'motion-ads-5',
    title: 'Motion Ads Series 05',
    client: 'Commercial Campaigns',
    category: 'Motion Ad',
    description:
      'Fast-paced social promotional motion reel with fluid zoom transitions and vibrant brand accents.',
    tools: ['Adobe After Effects', 'Premiere Pro'],
    duration: '0:30',
    year: '2023',
    videoUrl: 'https://cdn-media.f-static.net/uploads/2663294/normal_68b02d79d904e.mp4',
    posterUrl: 'https://files.cdn-files-a.com/uploads/2663294/normal_68b02d79d904e-thumbnail.jpg',
    posterGradient: 'from-blue-600/50 via-blue-950 to-slate-950',
    highlight: 'Clean visual pacing and motion graphics tailored for digital ad placement.'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    tagline: 'Understand users, business context, and core friction.',
    description:
      'Every impactful product begins with ruthless curiosity. I start by uncovering the real problem behind the surface request: interviewing stakeholders and users, mapping edge cases, examining competitive ecosystems, and defining clear success metrics before writing a single line of code or drawing a pixel.',
    actions: [
      'Conduct qualitative stakeholder and user interviews',
      'Analyze data, drop-offs, and behavioral friction points',
      'Map competitive landscapes and unique value propositions',
      'Define quantifiable product KPIs and core user stories'
    ],
    deliverables: ['Problem Statement & Opportunity Canvas', 'User Personas & Journey Maps', 'Product Requirements Document (PRD)', 'Competitive Benchmark Matrix'],
    tools: ['Figma FigJam', 'Notion', 'Google Analytics', 'Direct User Interviews']
  },
  {
    number: '02',
    title: 'Design',
    tagline: 'Create user journeys, wireframes, and design systems.',
    description:
      'Transforming abstract strategic insights into clear, intuitive product architecture. I craft low-fidelity wireframes to rapidly validate interaction mechanics, followed by high-fidelity interfaces built upon scalable design tokens, accessible contrast, and purposeful typography that guides user focus effortlessly.',
    actions: [
      'Architect information hierarchy and navigation paths',
      'Construct rapid interactive wireframes for user validation',
      'Develop cohesive design systems with reusable tokens and components',
      'Design delightful micro-interactions and progressive disclosure patterns'
    ],
    deliverables: ['Information Architecture (IA) Trees', 'Interactive Figma Prototypes', 'Production Design System & Tokens', 'Accessibility & Responsive Specs'],
    tools: ['Figma', 'Adobe Creative Cloud', 'Pen & Paper', 'Radix UI / Tailwind Tokens']
  },
  {
    number: '03',
    title: 'Build',
    tagline: 'Develop scalable, type-safe, and resilient applications.',
    description:
      'Engineering the vision into reality with modern full-stack technologies. I write clean, modular, and typed code across responsive frontends, robust backend databases, and AI model orchestration pipelines—ensuring the application is fast, secure, and ready to withstand real-world loads.',
    actions: [
      'Implement responsive React/Next.js frontend architectures',
      'Configure relational databases, authentication, and RLS policies',
      'Orchestrate LLM prompt pipelines, schema enforcement, and APIs',
      'Write reusable, maintainable, and type-safe TypeScript code'
    ],
    deliverables: ['Full Stack Web Application Codebase', 'Database Schemas & Migration Scripts', 'AI Prompt Pipelines & API Gateways', 'Component Storybooks & Documentation'],
    tools: ['Next.js / React', 'TypeScript', 'Tailwind CSS', 'Supabase / PostgreSQL', 'LLMs & APIs']
  },
  {
    number: '04',
    title: 'Deploy',
    tagline: 'Launch using modern cloud infrastructure and CI/CD.',
    description:
      'A product only creates value when it is reliably in users hands. I configure automated deployment pipelines, edge CDN caching, SSL certificates, environment security, and real-time error logging to guarantee smooth, zero-downtime releases.',
    actions: [
      'Set up automated Git-driven CI/CD deployment pipelines',
      'Configure production domains, DNS routing, and edge caching',
      'Audit security headers, environment variables, and token safety',
      'Implement application performance monitoring and telemetry'
    ],
    deliverables: ['Live Cloud Deployment (Vercel/Netlify)', 'Production DNS & SSL Setup', 'Automated CI/CD Workflows', 'Error Tracking & Health Monitoring'],
    tools: ['Vercel', 'Netlify', 'GitHub Actions', 'Cloudflare', 'Sentry']
  },
  {
    number: '05',
    title: 'Improve',
    tagline: 'Iterate relentlessly through testing, feedback, and telemetry.',
    description:
      'Launch is just Day One. I analyze user behavior, conversion funnels, error telemetry, and qualitative feedback to identify bottlenecks and iteratively optimize the product experience, ensuring continuous business growth and user satisfaction.',
    actions: [
      'Monitor usability sessions and conversion funnel telemetry',
      'Conduct post-launch A/B tests on critical interaction points',
      'Refine AI prompt pipelines based on output quality and edge cases',
      'Prioritize iterative feature updates in cyclical sprint roadmaps'
    ],
    deliverables: ['Telemetry & Conversion Insights Reports', 'Refined AI Prompt Versions', 'Iterative UI/UX Enhancement Releases', 'Continuous Growth Backlog'],
    tools: ['Analytics Dashboards', 'User Feedback Loops', 'Zod Schema Refinements', 'Sprint Roadmaps']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Engineering',
    description: 'Building responsive, accessible, and high-performance component systems for modern web browsers.',
    iconName: 'Code2',
    skills: [
      { name: 'Next.js & React', highlight: 'Server-side rendering, App Router, hooks, state machines, and performant client components.' },
      { name: 'TypeScript', highlight: 'Strict type safety, typed API contracts, and robust schema validation.' },
      { name: 'Responsive Interfaces', highlight: 'Mobile-first fluid layouts, micro-interactions, and accessible keyboard navigation.' },
      { name: 'Component Architecture', highlight: 'Modular design tokens, headless primitives, and reusable UI libraries with Tailwind CSS.' }
    ]
  },
  {
    title: 'Backend & Cloud Infrastructure',
    description: 'Architecting secure data layers, serverless functions, and authenticated persistence.',
    iconName: 'Server',
    skills: [
      { name: 'Supabase & PostgreSQL', highlight: 'Relational data modeling, foreign keys, indexing, and complex queries.' },
      { name: 'Authentication & Security', highlight: 'Row Level Security (RLS), JWT session management, and role-based access control.' },
      { name: 'Database Design', highlight: 'Normalized schemas, data integrity constraints, and scalable entity-relationship modeling.' },
      { name: 'API Design & Integration', highlight: 'REST endpoints, edge runtime routes, webhook handlers, and third-party services.' }
    ]
  },
  {
    title: 'AI & LLM Integration',
    description: 'Bridging generative models into structured, deterministic, and dependable user workflows.',
    iconName: 'Sparkles',
    skills: [
      { name: 'Prompt Engineering', highlight: 'Multi-stage prompt chaining, system instruction crafting, few-shot prompting, and tone calibration.' },
      { name: 'AI Workflow Design', highlight: 'Enforcing deterministic JSON schema outputs with Zod guards to eliminate hallucination risk.' },
      { name: 'Intelligent User Experiences', highlight: 'Progressive disclosure, streaming text interfaces, and contextual suggestion engines.' },
      { name: 'Context & Grounding', highlight: 'Domain data injection, memory management, and structured search retrieval synthesis.' }
    ]
  },
  {
    title: 'Product Design & UI/UX',
    description: 'Crafting intuitive user journeys, wireframes, and design systems that reduce cognitive friction.',
    iconName: 'Palette',
    skills: [
      { name: 'Figma & Design Systems', highlight: 'Component variants, auto-layout, design tokens, interactive prototyping, and handoff.' },
      { name: 'User Journey Mapping', highlight: 'Information architecture, friction auditing, task flow diagrams, and user mental models.' },
      { name: 'Wireframing & Prototyping', highlight: 'Rapid low-fi paper sketching through interactive high-fi clickable prototypes.' },
      { name: 'Creative Software', highlight: 'Adobe Photoshop, Canva, vector asset creation, and visual brand assets.' }
    ]
  },
  {
    title: 'Motion & Visual Storytelling',
    description: 'Bringing brands and digital products to life with kinetic typography, video editing, and dynamic motion ads.',
    iconName: 'Film',
    skills: [
      { name: 'Adobe After Effects', highlight: 'Kinetic typography, motion stings, visual effects, and logo animation.' },
      { name: 'Video Editing & Reels', highlight: 'Fast-paced social ads, promo trailers, b-roll color grading, and audio syncing.' },
      { name: 'Motion Graphic Ads', highlight: 'High-converting multi-format video assets for social and campaign marketing.' },
      { name: 'UI Micro-Interactions', highlight: 'Figma smart animate, Motion transition curves, and tactile feedback.' }
    ]
  },
  {
    title: 'Deployment & Tooling',
    description: 'Ensuring seamless delivery pipelines, version control, and production reliability.',
    iconName: 'Rocket',
    skills: [
      { name: 'Vercel & Netlify', highlight: 'Zero-config continuous deployments, preview branches, and edge serverless execution.' },
      { name: 'Git & Version Control', highlight: 'Clean commit hygiene, feature branching, merge strategies, and code review.' },
      { name: 'Build Tools & Linters', highlight: 'Vite, ESLint, TypeScript compiler, and asset optimization pipelines.' },
      { name: 'Performance & SEO', highlight: 'Core Web Vitals optimization, semantic HTML, OpenGraph tags, and meta management.' }
    ]
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'building-ai-product-before-launch',
    title: 'Building an AI Product Before Launch: Lessons from SEEMIGO',
    readTime: '6 min read',
    date: 'Product & AI Engineering',
    category: 'AI Product Architecture',
    excerpt:
      'Why chat interfaces are often the wrong default for AI applications, and how building SEEMIGO taught me the critical value of deterministic workflows, structured outputs, and human-in-the-loop control.',
    content: [
      'When most teams set out to build an AI-powered product today, their initial instinct is almost universally to build a chat interface. It seems intuitive: language models communicate via text, so why not give users a text box and let them converse? During the early architecture of SEEMIGO, I quickly realized why this assumption breaks down in high-stakes domains like international travel and visa applications.',
      'When a user is planning a cross-border trip or preparing legal documents for an embassy, their primary emotional state is not curiosity or desire for banter—it is anxiety. They do not want to spend 20 minutes prompting a conversational bot to extract information; they want clear, deterministic checklists, validated deadlines, and visual assurance that nothing has been missed.',
      'The breakthrough for SEEMIGO came when we abandoned the "blank chat canvas" model and replaced it with structured AI orchestration. Instead of letting the model output raw conversational prose, we forced it to output strictly typed JSON schemas that render directly into UI components: interactive timeline nodes, color-coded requirement badges, and verified action cards.',
      'Furthermore, private development taught us that AI reliability is not solely about model capability—it is about the surrounding guardrails. By introducing pre-validation checks, context grounding, and explicit fallback states, we turned what could have been a probabilistic gamble into a reliable product experience that users can actually trust.'
    ],
    keyTakeaways: [
      'Chat interfaces introduce unnecessary cognitive load for high-stakes, multi-step user tasks.',
      'Strict JSON schema validation converts fuzzy AI outputs into dependable, component-driven UI.',
      'Product trust is won through deterministic guardrails, transparent sourcing, and instant visual scanning.',
      'Private testing cohorts are essential for discovering domain edge cases before public launch.'
    ]
  },
  {
    id: 'designing-digital-experiences-people-enjoy',
    title: 'Designing Digital Experiences That People Actually Enjoy',
    readTime: '5 min read',
    date: 'Design & User Psychology',
    category: 'Product Design & UI/UX',
    excerpt:
      'True user enjoyment in digital products is rarely about flashy visual gimmicks. It is about the quiet elimination of friction, respect for attention, and providing effortless clarity.',
    content: [
      'In contemporary product design discussions, "delight" is often misunderstood as decorative visual flair: playful micro-animations, confetti bursts, or clever copy. While these touches have their place, genuine user enjoyment in functional software stems from something much deeper: the feeling of unhindered competence and zero wasted effort.',
      'When someone uses an application to manage a business workflow, book transit, or navigate complex regulations, their greatest joy is finishing their task faster than they anticipated without having to guess what any button does. Every unnecessary modal, low-contrast text element, or vague error state degrades that experience.',
      'Throughout my work across RoutePal NG, Steadfast International, and SEEMIGO, my approach has centered on "High-Contrast Simplicity". This means designing with generous whitespace, mathematical typography scales, unmistakable visual hierarchies, and immediate feedback states for every single interaction.',
      'When you respect the user’s mental bandwidth by organizing complex data into digestible, progressive disclosure patterns, you create a product that feels light, responsive, and genuinely pleasurable to use day after day.'
    ],
    keyTakeaways: [
      'Delight is the byproduct of effortless task completion, not decorative visual noise.',
      'Progressive disclosure keeps interfaces calm while maintaining comprehensive functional power.',
      'Mathematical spacing and strict typography scales create subconscious visual harmony and trust.',
      'Every click, hover, and error state must provide instant, unambiguous feedback.'
    ]
  },
  {
    id: 'how-design-ai-and-engineering-create-better-products',
    title: 'How Design, AI, and Engineering Create Better Products',
    readTime: '7 min read',
    date: 'Multidisciplinary Product Craft',
    category: 'Creative Technology',
    excerpt:
      'The modern product landscape no longer benefits from siloed roles. When product thinking, AI workflows, UI design, and full-stack code are unified, extraordinary speed and quality emerge.',
    content: [
      'Historically, software creation has operated in rigid silos: product managers write documents, designers create visual mockups in isolation, engineers struggle to implement designs against technical limitations, and marketers figure out how to sell the result after the fact. In the era of AI and rapid web iteration, this fragmented model is painfully slow and prone to disconnects.',
      'Operating as a Creative Technologist means breaking down these artificial boundaries. When you understand the underlying database schema and API constraints while simultaneously designing the Figma interface, you never design something that is technically unfeasible or computationally wasteful.',
      'Similarly, when you understand the mechanics of LLM prompt engineering, you design UI components that inherently complement the strengths and limitations of the models. You know when to use streaming text, when to enforce strict JSON schemas, and how to structure input forms to maximize model accuracy.',
      'This holistic intersection is where true innovation happens. It enables rapid 0-to-1 prototyping, sharper product-market decisions, and cohesive digital products that solve real business problems from the first interaction to the last database query.'
    ],
    keyTakeaways: [
      'Silos between design and engineering create friction, delays, and compromised user experiences.',
      'Designing with full-stack awareness ensures every UI decision is feasible, performant, and scalable.',
      'AI product builders must understand both model mechanics and human mental models.',
      'Multidisciplinary execution drastically shortens the feedback loop from concept to validated product.'
    ]
  }
];

// ============================================================================
// REAL AUTHENTIC TESTIMONIALS (Retrieved directly from portfolio projects)
// ============================================================================
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'steadfast-smm-testimonial',
    quote:
      'I had the pleasure of working with Mr. Joseph while I was the Social Media Manager at Steadfast International. Aside from being a talented graphics designer, he is also a skilled video editor. His work always brought our ideas to life and made our content stand out. Joseph is a fantastic team player—always open to feedback and full of creative ideas. Collaborating with him was seamless, and his positive attitude made every project enjoyable. I highly recommend him to anyone looking for someone reliable, creative, and skilled in both graphic design and video editing.',
    author: 'Social Media & Brand Marketing Lead',
    role: 'Former Social Media Manager',
    company: 'Steadfast International',
    relationship: 'Direct Collaboration on Graphic Design, Video Editing & Brand Campaigns'
  },
  {
    id: 'creative-photo-edit-testimonial',
    quote:
      'I had the pleasure of working with Joseph on a recent project, and I must say, his exceptional skills and professionalism exceeded my expectations. As a graphic designer and photo editor, Joseph brought a level of creativity, attention to detail, and expertise that elevated our project to new heights.',
    author: 'Project Collaborator',
    role: 'Creative Director & Project Lead',
    company: 'Collaborative Design Project',
    relationship: 'Creative Design & Photo Retouching Partnership'
  },
  {
    id: 'kjw-creative-media-testimonial',
    quote:
      'I have been consistently impressed with the professionalism and skill of this service from KJW CREATIVE MEDIA. They have truly elevated the look and feel of my projects beyond what I thought was possible.',
    author: 'Commercial Client',
    role: 'Design & Visual Strategy Partner',
    company: 'KJW Creative Media Engagement',
    relationship: 'Visual Brand Direction & Creative Media Consultation'
  },
  {
    id: 'business-growth-testimonial',
    quote:
      'His service has exceeded my expectations and has been instrumental in our business success. He understands the nuances of design and always delivers high-quality work promptly. His attention to detail and creativity have exceeded my expectations every time.',
    author: 'Enterprise Stakeholder',
    role: 'Managing Partner',
    company: 'Commercial Business Partner',
    relationship: 'Brand Asset Development & Strategic Design Execution'
  }
];

export const RESUME_DATA = {
  name: 'JOSEPH OLUWASEGUN LEVI',
  title: 'Creative Technologist | AI Product Builder | Product Designer | Full Stack Developer',
  email: 'levijosephofficial@gmail.com',
  alternateEmail: 'kjw25media@gmail.com',
  linkedin: 'www.linkedin.com/in/joseph-oluwasegun-levi-937813248',
  github: 'github.com/josephlevi',
  summary:
    'Multidisciplinary Creative Technologist with a rich foundation in Graphic & Motion Design, evolving into full-stack engineering and 0-to-1 AI product building. Proven track record conceptualizing and architecting SEEMIGO (AI-powered travel platform), engineering typed frontends with Next.js/React, configuring cloud backends with Supabase/PostgreSQL, orchestrating LLM prompt workflows, and driving creative brand direction across international organizations.',
  careerProgressionSummary:
    'Graphic Design (2018-2020) → Motion Design & Video (2020-2021) → Product Design & UI/UX (2021-2023) → AI & LLM Systems (2023-2024) → Full Stack Development (2024) → Product Building & SEEMIGO (2024-Present)',
  coreCompetencies: [
    'AI Product Development & Workflow Orchestration',
    'Full Stack Web Engineering (Next.js, React, TypeScript)',
    'UI/UX Architecture, Design Systems & Figma Prototyping',
    'Relational Database Modeling & Supabase (PostgreSQL)',
    'Motion Design, Video Editing & Creative Storytelling',
    'Brand Identity Systems & Executive Presentation Architecture'
  ],
  experience: [
    {
      company: 'SEEMIGO',
      role: 'Founder, Product Designer, Full Stack Developer & AI Product Builder',
      period: '2024 — Present (Active Private Development)',
      highlights: [
        'Conceived, designed, and architected an AI-powered travel and application platform from initial concept to full functional system.',
        'Engineered responsive web client with Next.js, React, TypeScript, and Tailwind CSS, featuring interactive travel timelines and workspace splits.',
        'Constructed deterministic LLM prompt pipelines enforcing strict JSON schemas for destination intelligence and document verification.',
        'Configured Supabase backend with relational schemas, Row Level Security (RLS), and authentication token management.',
        'Conducted iterative user testing across 18+ cohort testers, achieving 94% task completion efficiency.'
      ]
    },
    {
      company: 'RoutePal NG',
      role: 'Creative Technologist & Digital Growth Lead',
      period: '2023 — 2024',
      highlights: [
        'Directed digital presence, content strategy, visual brand identity, and multi-channel marketing campaigns.',
        'Combined data-driven digital growth strategies with bespoke visual assets, high-engagement content series, and landing page optimization.',
        'Set up conversion analytics funnels to monitor customer journey friction and drop-off points.',
        'Bridged product operations with creative marketing to communicate service reliability and transparent pricing.'
      ]
    },
    {
      company: 'Steadfast International',
      role: 'Creative Leadership & Brand Strategist',
      period: '2023 — 2024',
      highlights: [
        'Standardized corporate brand identity guidelines and digital asset repository across international business divisions.',
        'Designed high-stakes corporate presentation decks and investor reports credited with strengthening institutional partner confidence.',
        'Led special culture initiatives including Customer Service Week, Fun Thursday visual campaigns, and corporate motion stings.',
        'Built reusable template systems in Figma and Canva, reducing cross-departmental asset preparation time by 50%.'
      ]
    },
    {
      company: 'Flyibat Travel',
      role: 'Travel Marketing & Visual Storytelling Specialist',
      period: '2023',
      highlights: [
        'Crafted narrative-driven visual campaigns, destination carousels, and promotional motion teasers.',
        'Designed special offer flyers, study abroad travel campaigns, and country entry advisory cards.',
        'Streamlined customer inquiry pathways connecting social campaigns directly to WhatsApp booking consultants.'
      ]
    },
    {
      company: 'XSight Entertainment & KJW25MEDIA',
      role: 'Visual Designer & Multimedia Creator',
      period: '2020 — 2022',
      highlights: [
        'Designed commercial motion ads, promotional product graphics, typography posters, and digital wallpaper collections.',
        'Produced motion graphics, video edits, and celebration visual assets for digital distribution.'
      ]
    }
  ],
  technicalToolkit: {
    frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Motion', 'Radix UI', 'HTML5/Semantic UI'],
    backend: ['Supabase', 'PostgreSQL', 'Node.js', 'REST APIs', 'Edge Functions', 'RLS Security'],
    aiAndWorkflows: ['Prompt Engineering', 'Structured JSON Output', 'LLM Integration', 'Context Grounding', 'Zod'],
    designAndMotion: ['Figma', 'Adobe Photoshop', 'Adobe After Effects', 'Adobe Premiere Pro', 'Canva Enterprise', 'Design Systems'],
    deployment: ['Vercel', 'Netlify', 'Git / GitHub', 'CI/CD', 'Cloudflare DNS']
  },
  educationAndCredentials: [
    {
      degree: 'Multidisciplinary Product & Technology Practice',
      institution: 'Continuous Professional Immersion & Product Engineering Practice',
      focus: 'Specialized in Creative Technology, AI Systems, Full Stack Web & User Experience Architecture'
    }
  ]
};
