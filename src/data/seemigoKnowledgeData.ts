import {
  University,
  Programme,
  ProgrammeRequirement,
  OfficialSource,
  UpdateMonitorItem,
  VersionHistoryRecord
} from '../types/applicationDesk';

export const INITIAL_UNIVERSITIES: University[] = [
  {
    id: 'uni-lut-finland',
    name: 'LUT University (Lappeenranta-Lahti University of Technology)',
    code: 'LUT',
    country: 'Finland',
    city: 'Lappeenranta & Lahti',
    logoUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=150&auto=format&fit=crop&q=80',
    headerImageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&auto=format&fit=crop&q=80',
    officialAdmissionsUrl: 'https://www.lut.fi/en/admissions',
    officialPortalUrl: 'https://opintopolku.fi/konfo/en/',
    lastVerifiedDate: '2025-02-15',
    knowledgeVersion: 'v2.4',
    status: 'source_changed',
    programmeCount: 2
  },
  {
    id: 'uni-aalto-finland',
    name: 'Aalto University',
    code: 'AALTO',
    country: 'Finland',
    city: 'Espoo',
    logoUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=150&auto=format&fit=crop&q=80',
    headerImageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&auto=format&fit=crop&q=80',
    officialAdmissionsUrl: 'https://www.aalto.fi/en/admissions',
    officialPortalUrl: 'https://opintopolku.fi/konfo/en/',
    lastVerifiedDate: '2025-02-10',
    knowledgeVersion: 'v3.1',
    status: 'verified',
    programmeCount: 2
  },
  {
    id: 'uni-tuw-austria',
    name: 'TU Wien (Vienna University of Technology)',
    code: 'TUW',
    country: 'Austria',
    city: 'Vienna',
    logoUrl: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=150&auto=format&fit=crop&q=80',
    headerImageUrl: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=1200&auto=format&fit=crop&q=80',
    officialAdmissionsUrl: 'https://www.tuwien.at/en/studies/admission',
    officialPortalUrl: 'https://tiss.tuwien.ac.at/',
    lastVerifiedDate: '2025-02-01',
    knowledgeVersion: 'v2.0',
    status: 'verified',
    programmeCount: 2
  },
  {
    id: 'uni-univie-austria',
    name: 'University of Vienna (Universität Wien)',
    code: 'UNIVIE',
    country: 'Austria',
    city: 'Vienna',
    logoUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=150&auto=format&fit=crop&q=80',
    headerImageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&auto=format&fit=crop&q=80',
    officialAdmissionsUrl: 'https://slw.univie.ac.at/en/studying/admission/',
    officialPortalUrl: 'https://uspace.univie.ac.at/',
    lastVerifiedDate: '2025-01-28',
    knowledgeVersion: 'v1.8',
    status: 'verified',
    programmeCount: 1
  }
];

export const INITIAL_PROGRAMMES: Programme[] = [
  {
    id: 'prog-lut-msc-se',
    universityId: 'uni-lut-finland',
    name: 'MSc in Software Engineering and Digital Transformation',
    degreeLevel: 'Master',
    faculty: 'School of Engineering Science',
    duration: '2 Years (120 ECTS)',
    languageOfInstruction: 'English',
    officialProgrammeUrl: 'https://www.lut.fi/en/studies/technology/master-software-engineering',
    lastVerifiedDate: '2025-02-15',
    knowledgeVersion: 'v2.4'
  },
  {
    id: 'prog-lut-msc-data',
    universityId: 'uni-lut-finland',
    name: 'MSc in Data-Centric Engineering',
    degreeLevel: 'Master',
    faculty: 'School of Engineering Science',
    duration: '2 Years (120 ECTS)',
    languageOfInstruction: 'English',
    officialProgrammeUrl: 'https://www.lut.fi/en/studies/technology/master-data-centric-engineering',
    lastVerifiedDate: '2025-02-15',
    knowledgeVersion: 'v2.4'
  },
  {
    id: 'prog-aalto-msc-cs',
    universityId: 'uni-aalto-finland',
    name: 'MSc in Computer, Communication and Information Sciences (Computer Science)',
    degreeLevel: 'Master',
    faculty: 'School of Science',
    duration: '2 Years (120 ECTS)',
    languageOfInstruction: 'English',
    officialProgrammeUrl: 'https://www.aalto.fi/en/study-options/masters-programme-in-computer-science',
    lastVerifiedDate: '2025-02-10',
    knowledgeVersion: 'v3.1'
  },
  {
    id: 'prog-aalto-bsc-ai',
    universityId: 'uni-aalto-finland',
    name: 'BSc in Computational Engineering (AI & Robotics focus)',
    degreeLevel: 'Bachelor',
    faculty: 'School of Engineering',
    duration: '3 Years (180 ECTS)',
    languageOfInstruction: 'English',
    officialProgrammeUrl: 'https://www.aalto.fi/en/study-options/computational-engineering-bachelor-of-science-tech',
    lastVerifiedDate: '2025-02-10',
    knowledgeVersion: 'v3.1'
  },
  {
    id: 'prog-tuw-msc-logic',
    universityId: 'uni-tuw-austria',
    name: 'MSc in Logic and Computation',
    degreeLevel: 'Master',
    faculty: 'Faculty of Informatics',
    duration: '2 Years (120 ECTS)',
    languageOfInstruction: 'English',
    officialProgrammeUrl: 'https://www.tuwien.at/en/inf/master/logic-and-computation',
    lastVerifiedDate: '2025-02-01',
    knowledgeVersion: 'v2.0'
  },
  {
    id: 'prog-tuw-msc-se',
    universityId: 'uni-tuw-austria',
    name: 'MSc in Software Engineering & Internet Computing',
    degreeLevel: 'Master',
    faculty: 'Faculty of Informatics',
    duration: '2 Years (120 ECTS)',
    languageOfInstruction: 'English',
    officialProgrammeUrl: 'https://www.tuwien.at/en/inf/master/software-engineering-internet-computing',
    lastVerifiedDate: '2025-02-01',
    knowledgeVersion: 'v2.0'
  },
  {
    id: 'prog-univie-msc-ds',
    universityId: 'uni-univie-austria',
    name: 'MSc Data Science',
    degreeLevel: 'Master',
    faculty: 'Faculty of Computer Science',
    duration: '2 Years (120 ECTS)',
    languageOfInstruction: 'English',
    officialProgrammeUrl: 'https://datascience.univie.ac.at/',
    lastVerifiedDate: '2025-01-28',
    knowledgeVersion: 'v1.8'
  }
];

export const INITIAL_OFFICIAL_SOURCES: OfficialSource[] = [
  {
    id: 'src-lut-1',
    universityId: 'uni-lut-finland',
    programmeId: 'prog-lut-msc-se',
    title: 'LUT Master Admissions Page',
    url: 'https://www.lut.fi/en/admissions/apply-master-programmes',
    sourceType: 'Admissions Portal',
    checkIntervalDays: 3,
    lastCheckedDate: '2025-02-18',
    status: 'changed',
    httpStatusCode: 200
  },
  {
    id: 'src-lut-2',
    universityId: 'uni-lut-finland',
    title: 'LUT Tuition Fees & Scholarship Policy',
    url: 'https://www.lut.fi/en/admissions/tuition-fees-and-scholarships',
    sourceType: 'Tuition & Fee Policy',
    checkIntervalDays: 7,
    lastCheckedDate: '2025-02-18',
    status: 'active',
    httpStatusCode: 200
  },
  {
    id: 'src-aalto-1',
    universityId: 'uni-aalto-finland',
    programmeId: 'prog-aalto-msc-cs',
    title: 'Aalto Master Admissions Guide',
    url: 'https://www.aalto.fi/en/admission-services/master-admissions-criteria',
    sourceType: 'Admissions Portal',
    checkIntervalDays: 3,
    lastCheckedDate: '2025-02-17',
    status: 'active',
    httpStatusCode: 200
  },
  {
    id: 'src-tuw-1',
    universityId: 'uni-tuw-austria',
    programmeId: 'prog-tuw-msc-logic',
    title: 'TU Wien Informatics International Master Requirements',
    url: 'https://www.tuwien.at/en/inf/studies/admission/master-degree-programmes',
    sourceType: 'Programme Page',
    checkIntervalDays: 5,
    lastCheckedDate: '2025-02-16',
    status: 'active',
    httpStatusCode: 200
  },
  {
    id: 'src-univie-1',
    universityId: 'uni-univie-austria',
    programmeId: 'prog-univie-msc-ds',
    title: 'Univie Master Data Science Admission Portal',
    url: 'https://slw.univie.ac.at/en/studying/master-programmes/data-science/',
    sourceType: 'Admissions Portal',
    checkIntervalDays: 5,
    lastCheckedDate: '2025-02-15',
    status: 'active',
    httpStatusCode: 200
  }
];

export const INITIAL_PROGRAMME_REQUIREMENTS: ProgrammeRequirement[] = [
  {
    id: 'req-lut-msc-se',
    programmeId: 'prog-lut-msc-se',
    universityId: 'uni-lut-finland',
    universityName: 'LUT University',
    programmeName: 'MSc in Software Engineering and Digital Transformation',
    degreeLevel: 'Master',
    officialAdmissionsUrl: 'https://www.lut.fi/en/admissions/apply-master-programmes',
    officialPortalUrl: 'https://opintopolku.fi/konfo/en/',
    eligibilityCriteria: [
      'BSc or Bachelor of Engineering in Computer Science, Software Engineering, or closely related field (minimum 180 ECTS).',
      'Minimum of 24 ECTS in core Software Engineering, Programming, and Data Structures.',
      'Higher Education Institution must be recognized by UNESCO or relevant national ministry.'
    ],
    requiredDocuments: [
      {
        id: 'doc-1',
        name: 'Higher Education Degree Certificate',
        required: true,
        description: 'Official degree diploma or graduation certificate translated to English by an official translator.',
        format: 'PDF (Color scan of original document)'
      },
      {
        id: 'doc-2',
        name: 'Official Academic Transcript of Records',
        required: true,
        description: 'Detailing all completed courses, credit points (ECTS or local scale), and official grading keys.',
        format: 'PDF with institutional seal/stamp'
      },
      {
        id: 'doc-3',
        name: 'Official Proof of English Proficiency',
        required: true,
        description: 'IELTS Academic, TOEFL iBT, PTE Academic, or Cambridge English C1/C2.',
        format: 'Digital verification link or official test report form'
      },
      {
        id: 'doc-4',
        name: 'Curriculum Vitae (Europass or Professional format)',
        required: true,
        description: 'Including academic history, technical projects, publications, and professional employment.',
        format: 'PDF (Max 2 pages)'
      },
      {
        id: 'doc-5',
        name: 'Motivation Letter / Statement of Purpose',
        required: true,
        description: 'Detailing career goals, research interest in LUT, and alignment with software engineering.',
        format: 'PDF (Max 1 page)'
      }
    ],
    languageRequirements: [
      {
        testName: 'IELTS Academic / IELTS Online',
        minimumScore: '6.5 overall (Minimum 6.0 in Writing section)',
        subscoreDetails: 'Writing section minimum 6.0 required.',
        exemptionConditions: [
          'Bachelor degree taught entirely in English in an EU/EEA country, UK, USA, Canada, Australia, or New Zealand.'
        ]
      },
      {
        testName: 'TOEFL iBT / TOEFL iBT Home Edition',
        minimumScore: '92 overall (Minimum 22 in Writing section)',
        subscoreDetails: 'Writing section minimum 22 required.',
        exemptionConditions: [
          'Bachelor degree taught entirely in English in an EU/EEA country, UK, USA, Canada, Australia, or New Zealand.'
        ]
      },
      {
        testName: 'PTE Academic',
        minimumScore: '62 overall',
        exemptionConditions: ['Degree completed in English in EU/EEA/Anglophone countries.']
      }
    ],
    applicationFee: {
      amount: 100,
      currency: 'EUR',
      waivedForEU: true,
      paymentInstructions: 'Paid directly via the national Studyinfo.fi portal during application submission.'
    },
    applicationDeadline: {
      date: '2025-01-22 15:00 UTC+2',
      intakeSession: 'Autumn 2025 Intake',
      timezone: 'EET (Finland Time)'
    },
    applicationProcedure: [
      {
        stepNumber: 1,
        title: 'Create Account on Studyinfo.fi',
        instruction: 'Register on the Finnish national portal Opintopolku / Studyinfo.fi.',
        portalUrl: 'https://opintopolku.fi/konfo/en/'
      },
      {
        stepNumber: 2,
        title: 'Fill Application Form & Upload Documents',
        instruction: 'Complete the online application form and upload high-resolution PDF scans of transcripts, degree, CV, and language proof before the deadline.',
        portalUrl: 'https://opintopolku.fi/konfo/en/'
      },
      {
        stepNumber: 3,
        title: 'Pay Application Fee (Non-EU Applicants)',
        instruction: 'Pay €100 application processing fee if applicable via the secure payment link provided on Studyinfo.',
        portalUrl: 'https://opintopolku.fi/konfo/en/'
      },
      {
        stepNumber: 4,
        title: 'Verification & Results Notification',
        instruction: 'Wait for academic evaluation. Results are published in March 2025.',
        portalUrl: 'https://www.lut.fi/en/admissions'
      }
    ],
    postAdmissionRequirements: [
      {
        id: 'post-1',
        category: 'Visa & Residence Permit',
        requirement: 'Apply for Finnish First Residence Permit for Studies via EnterFinland.fi.',
        deadline: 'Within 14 days of receiving admission offer.',
        estimatedCost: '€350 (Electronic application fee)',
        officialGuidanceUrl: 'https://migri.fi/en/residence-permit-for-studies'
      },
      {
        id: 'post-2',
        category: 'Proof of Financial Means',
        requirement: 'Provide proof of funds (€6,720 per year / €560 per month in applicant bank account).',
        deadline: 'Submit with Residence Permit application to Migri.',
        estimatedCost: '€6,720 / year living funds requirement'
      },
      {
        id: 'post-3',
        category: 'Tuition Deposit',
        requirement: 'Accept admission offer and pay tuition fee (if non-EU) or accept LUT Early Bird scholarship.',
        deadline: 'May 30, 2025 15:00 UTC+2'
      }
    ],
    officialSources: [
      {
        id: 'src-lut-1',
        universityId: 'uni-lut-finland',
        programmeId: 'prog-lut-msc-se',
        title: 'LUT Master Admissions Page',
        url: 'https://www.lut.fi/en/admissions/apply-master-programmes',
        sourceType: 'Admissions Portal',
        checkIntervalDays: 3,
        lastCheckedDate: '2025-02-18',
        status: 'changed'
      }
    ],
    specialistNotes: [
      'LUT University evaluates transcripts based on ECTS credit equivalence and GPA in mathematics and programming.',
      'Applicants with degrees from outside EU must ensure official degree certificates are apostilled or legalized.',
      'LUT offers 50% to 100% tuition scholarships for top-ranked applicants based on previous GPA.'
    ],
    lastVerifiedDate: '2025-02-15',
    knowledgeVersion: 'v2.4'
  },
  {
    id: 'req-aalto-msc-cs',
    programmeId: 'prog-aalto-msc-cs',
    universityId: 'uni-aalto-finland',
    universityName: 'Aalto University',
    programmeName: 'MSc in Computer, Communication and Information Sciences (Computer Science)',
    degreeLevel: 'Master',
    officialAdmissionsUrl: 'https://www.aalto.fi/en/admission-services/master-admissions-criteria',
    officialPortalUrl: 'https://opintopolku.fi/konfo/en/',
    eligibilityCriteria: [
      'High-quality Bachelor degree in Computer Science or closely related field (180 ECTS).',
      'Strong background in discrete mathematics, algorithms, programming, and software engineering.',
      'Academic GPA equivalent to minimum 3.5/5.0 or 70%+.'
    ],
    requiredDocuments: [
      {
        id: 'doc-aalto-1',
        name: 'Degree Certificate & Transcript of Records',
        required: true,
        description: 'Certified copies of diploma and complete grade breakdown.'
      },
      {
        id: 'doc-aalto-2',
        name: 'Language Test Score Report',
        required: true,
        description: 'IELTS Academic, TOEFL iBT, or PTE Academic report.'
      },
      {
        id: 'doc-aalto-3',
        name: 'Motivation Letter and CV',
        required: true,
        description: 'Detailed statement explaining technical background and why Aalto CS.'
      }
    ],
    languageRequirements: [
      {
        testName: 'IELTS Academic',
        minimumScore: '6.5 overall (Writing >= 5.5)',
        exemptionConditions: ['Degrees completed in English in EU/EEA/Anglophone countries.']
      },
      {
        testName: 'TOEFL iBT',
        minimumScore: '92 overall (Writing >= 20)',
        exemptionConditions: ['Degrees completed in English in EU/EEA/Anglophone countries.']
      }
    ],
    applicationFee: {
      amount: 100,
      currency: 'EUR',
      waivedForEU: true
    },
    applicationDeadline: {
      date: '2025-01-02 15:00 UTC+2',
      intakeSession: 'Autumn 2025 Intake',
      timezone: 'EET (Finland Time)'
    },
    applicationProcedure: [
      {
        stepNumber: 1,
        title: 'Submit via Studyinfo.fi',
        instruction: 'Submit online application and credentials via the Studyinfo.fi application system.'
      }
    ],
    postAdmissionRequirements: [
      {
        id: 'post-aalto-1',
        category: 'Visa & Residence Permit',
        requirement: 'Submit Migri residence permit application immediately after acceptance.',
        deadline: 'June 15, 2025',
        officialGuidanceUrl: 'https://migri.fi/en/residence-permit-for-studies'
      }
    ],
    officialSources: [
      {
        id: 'src-aalto-1',
        universityId: 'uni-aalto-finland',
        programmeId: 'prog-aalto-msc-cs',
        title: 'Aalto Master Admissions Guide',
        url: 'https://www.aalto.fi/en/admission-services/master-admissions-criteria',
        sourceType: 'Admissions Portal',
        checkIntervalDays: 3,
        lastCheckedDate: '2025-02-17',
        status: 'active'
      }
    ],
    specialistNotes: [
      'Aalto CS is highly competitive; strong emphasis on algorithms, data structures, and math grades.',
      'Aalto offers Finland Fellowship scholarships covering 100% tuition + €5,000 relocation stipend.'
    ],
    lastVerifiedDate: '2025-02-10',
    knowledgeVersion: 'v3.1'
  },
  {
    id: 'req-tuw-msc-logic',
    programmeId: 'prog-tuw-msc-logic',
    universityId: 'uni-tuw-austria',
    universityName: 'TU Wien',
    programmeName: 'MSc in Logic and Computation',
    degreeLevel: 'Master',
    officialAdmissionsUrl: 'https://www.tuwien.at/en/studies/admission',
    officialPortalUrl: 'https://tiss.tuwien.ac.at/',
    eligibilityCriteria: [
      'Bachelor degree in Informatics, Computer Science, or Mathematics (180 ECTS).',
      'Demonstrated competence in formal logic, theoretical computer science, and discrete mathematics.',
      'Austrian legal equivalency or legalization (Apostille/Full Legalization depending on country of origin).'
    ],
    requiredDocuments: [
      {
        id: 'doc-tuw-1',
        name: 'Legalized Degree Certificate & Transcript',
        required: true,
        description: 'Degree diploma and transcript with appropriate apostille or consular seal.'
      },
      {
        id: 'doc-tuw-2',
        name: 'Syllabus / Course Description Booklet',
        required: true,
        description: 'Detailed description of all undergraduate courses taken in computer science and logic.'
      },
      {
        id: 'doc-tuw-3',
        name: 'Proof of English Proficiency',
        required: true,
        description: 'IELTS 6.5, TOEFL 87, or B2/C1 equivalent certificate.'
      }
    ],
    languageRequirements: [
      {
        testName: 'IELTS Academic',
        minimumScore: '6.5 overall',
        exemptionConditions: ['Undergraduate degree completed in English.']
      },
      {
        testName: 'TOEFL iBT',
        minimumScore: '87 overall',
        exemptionConditions: ['Undergraduate degree completed in English.']
      }
    ],
    applicationFee: {
      amount: 0,
      currency: 'EUR',
      waivedForEU: true,
      paymentInstructions: 'No initial application submission fee; student union fee (€22.70/semester) due upon enrollment.'
    },
    applicationDeadline: {
      date: '2025-07-15 23:59 UTC+1',
      intakeSession: 'Winter Semester 2025/26 Intake',
      timezone: 'CET (Austria Time)',
      isRolling: true
    },
    applicationProcedure: [
      {
        stepNumber: 1,
        title: 'Register on TISS Portal',
        instruction: 'Create an account on the TU Wien TISS Portal and upload required documents.',
        portalUrl: 'https://tiss.tuwien.ac.at/'
      },
      {
        stepNumber: 2,
        title: 'Submit Physical Paper Documents',
        instruction: 'Post legalized physical copies of degree documents to TU Wien Admissions Office in Vienna.',
        portalUrl: 'https://www.tuwien.at/en/studies/admission'
      }
    ],
    postAdmissionRequirements: [
      {
        id: 'post-tuw-1',
        category: 'Visa & Residence Permit',
        requirement: 'Apply for Austrian Residence Permit - Student (Aufenthaltsbewilligung Student) at Austrian Embassy.',
        deadline: 'Minimum 3 months prior to semester start.',
        estimatedCost: '€160 application fee + health insurance',
        officialGuidanceUrl: 'https://oead.at/en/to-austria/entry-and-residence/residence-permit-student/'
      },
      {
        id: 'post-tuw-2',
        category: 'Proof of Financial Means',
        requirement: 'Provide bank statement showing funds (€11,000 to €12,500 in student bank account depending on age).',
        deadline: 'Submit to Austrian immigration authority (MA35 or Embassy).'
      }
    ],
    officialSources: [
      {
        id: 'src-tuw-1',
        universityId: 'uni-tuw-austria',
        programmeId: 'prog-tuw-msc-logic',
        title: 'TU Wien Informatics International Master Requirements',
        url: 'https://www.tuwien.at/en/inf/studies/admission/master-degree-programmes',
        sourceType: 'Programme Page',
        checkIntervalDays: 5,
        lastCheckedDate: '2025-02-16',
        status: 'active'
      }
    ],
    specialistNotes: [
      'Austrian university admission requires document legalization (Apostille or Diplomatic Legalization) BEFORE posting documents to Vienna.',
      'Non-EU students pay €726.72 tuition fee per semester plus €22.70 student union fee.'
    ],
    lastVerifiedDate: '2025-02-01',
    knowledgeVersion: 'v2.0'
  }
];

export const INITIAL_UPDATE_MONITOR_ITEMS: UpdateMonitorItem[] = [
  {
    id: 'upd-lut-1',
    officialSourceId: 'src-lut-1',
    universityId: 'uni-lut-finland',
    programmeId: 'prog-lut-msc-se',
    universityName: 'LUT University',
    programmeName: 'MSc in Software Engineering and Digital Transformation',
    sourceTitle: 'LUT Master Admissions Page',
    sourceUrl: 'https://www.lut.fi/en/admissions/apply-master-programmes',
    dateDetected: '2025-02-18 08:30',
    fieldName: 'Application Fee Policy (Non-EU Applicants)',
    previousValue: '€100 processing fee paid via Studyinfo.fi',
    newValue: '€150 processing fee updated for 2025/2026 application round (Source update detected)',
    status: 'UPDATE_DETECTED',
    severity: 'high'
  },
  {
    id: 'upd-lut-2',
    officialSourceId: 'src-lut-1',
    universityId: 'uni-lut-finland',
    programmeId: 'prog-lut-msc-se',
    universityName: 'LUT University',
    programmeName: 'MSc in Software Engineering and Digital Transformation',
    sourceTitle: 'LUT Master Admissions Page',
    sourceUrl: 'https://www.lut.fi/en/admissions/apply-master-programmes',
    dateDetected: '2025-02-18 08:30',
    fieldName: 'Language Requirement - TOEFL iBT Writing Subscore',
    previousValue: 'TOEFL iBT 92 overall (Minimum 22 in Writing section)',
    newValue: 'TOEFL iBT 92 overall (Minimum 24 in Writing section)',
    status: 'UPDATE_DETECTED',
    severity: 'medium'
  }
];

export const INITIAL_VERSION_HISTORY: VersionHistoryRecord[] = [
  {
    id: 'vh-1',
    universityId: 'uni-lut-finland',
    universityName: 'LUT University',
    programmeId: 'prog-lut-msc-se',
    programmeName: 'MSc in Software Engineering and Digital Transformation',
    version: 'v2.4',
    timestamp: '2025-02-15 14:20',
    changedBy: 'Admin (System Sync)',
    changeType: 'Requirement Update',
    summary: 'Updated Autumn 2025 deadline to January 22, 2025 and added post-admission Finnish Migri living funds requirement (€6,720/year).'
  },
  {
    id: 'vh-2',
    universityId: 'uni-aalto-finland',
    universityName: 'Aalto University',
    programmeId: 'prog-aalto-msc-cs',
    programmeName: 'MSc Computer Science',
    version: 'v3.1',
    timestamp: '2025-02-10 11:00',
    changedBy: 'Seemi Verification Team',
    changeType: 'Source Update Approval',
    summary: 'Verified 2025 admissions criteria, updated IELTS exemption clause for Anglophone degrees.'
  },
  {
    id: 'vh-3',
    universityId: 'uni-tuw-austria',
    universityName: 'TU Wien',
    programmeId: 'prog-tuw-msc-logic',
    programmeName: 'MSc in Logic and Computation',
    version: 'v2.0',
    timestamp: '2025-02-01 09:45',
    changedBy: 'Admin (Joseph Levi)',
    changeType: 'Manual Knowledge Edit',
    summary: 'Added detailed Austrian Apostille legalization steps and Austrian Residence Permit (€11,000 living funds) guidelines.'
  }
];
