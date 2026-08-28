export interface RequiredDocument {
  id: string;
  name: string;
  required: boolean;
  description: string;
  format?: string;
  officialTemplateUrl?: string;
}

export interface LanguageRequirement {
  testName: string; // e.g., 'IELTS Academic', 'TOEFL iBT', 'PTE Academic', 'Duolingo English Test'
  minimumScore: string;
  subscoreDetails?: string;
  exemptionConditions: string[];
}

export interface ApplicationProcedureStep {
  stepNumber: number;
  title: string;
  instruction: string;
  portalUrl?: string;
  estimatedTimeMinutes?: number;
}

export interface PostAdmissionRequirement {
  id: string;
  category: 'Visa & Residence Permit' | 'Proof of Financial Means' | 'Health Insurance' | 'Tuition Deposit' | 'Document Legalization / Apostille';
  requirement: string;
  deadline: string;
  estimatedCost?: string;
  officialGuidanceUrl?: string;
}

export interface OfficialSource {
  id: string;
  universityId: string;
  programmeId?: string;
  title: string;
  url: string;
  sourceType: 'Admissions Portal' | 'Programme Page' | 'Language Policy' | 'Tuition & Fee Policy' | 'Visa & Immigration Portal';
  checkIntervalDays: number;
  lastCheckedDate: string;
  status: 'active' | 'changed' | 'warning' | 'error';
  httpStatusCode?: number;
}

export interface ProgrammeRequirement {
  id: string;
  programmeId: string;
  universityId: string;
  universityName: string;
  programmeName: string;
  degreeLevel: 'Bachelor' | 'Master' | 'Doctoral' | 'Diploma';
  officialAdmissionsUrl: string;
  officialPortalUrl: string;
  eligibilityCriteria: string[];
  requiredDocuments: RequiredDocument[];
  languageRequirements: LanguageRequirement[];
  applicationFee: {
    amount: number;
    currency: string;
    waivedForEU?: boolean;
    paymentInstructions?: string;
  };
  applicationDeadline: {
    date: string;
    intakeSession: string;
    timezone: string;
    isRolling?: boolean;
  };
  applicationProcedure: ApplicationProcedureStep[];
  postAdmissionRequirements: PostAdmissionRequirement[];
  officialSources: OfficialSource[];
  specialistNotes: string[];
  lastVerifiedDate: string;
  knowledgeVersion: string;
}

export interface Programme {
  id: string;
  universityId: string;
  name: string;
  degreeLevel: 'Bachelor' | 'Master' | 'Doctoral' | 'Diploma';
  faculty: string;
  duration: string;
  languageOfInstruction: string;
  officialProgrammeUrl: string;
  lastVerifiedDate: string;
  knowledgeVersion: string;
}

export interface University {
  id: string;
  name: string;
  code: string;
  country: 'Finland' | 'Austria' | 'Germany' | 'Estonia' | 'Sweden' | 'Netherlands';
  city: string;
  logoUrl?: string;
  headerImageUrl?: string;
  officialAdmissionsUrl: string;
  officialPortalUrl: string;
  lastVerifiedDate: string;
  knowledgeVersion: string;
  status: 'verified' | 'pending_review' | 'source_changed';
  programmeCount: number;
}

export interface UpdateMonitorItem {
  id: string;
  officialSourceId: string;
  universityId: string;
  programmeId?: string;
  universityName: string;
  programmeName?: string;
  sourceTitle: string;
  sourceUrl: string;
  dateDetected: string;
  fieldName: string; // e.g., 'Application Fee', 'IELTS Minimum Score', 'Deadline Date', 'New Required Document'
  previousValue: string;
  newValue: string;
  status: 'UPDATE_DETECTED' | 'APPROVED' | 'REJECTED';
  reviewedBy?: string;
  reviewedAt?: string;
  adminComment?: string;
  severity: 'high' | 'medium' | 'low';
}

export interface VersionHistoryRecord {
  id: string;
  universityId: string;
  universityName: string;
  programmeId?: string;
  programmeName?: string;
  version: string;
  timestamp: string;
  changedBy: string;
  changeType: 'Source Update Approval' | 'Manual Knowledge Edit' | 'Programme Created' | 'Requirement Update';
  summary: string;
  previousValue?: string;
  newValue?: string;
}

export type ApplicationDeskTab =
  | 'universities'
  | 'application_guides'
  | 'requirements'
  | 'official_sources'
  | 'update_monitor'
  | 'verification_queue'
  | 'document_generator'
  | 'version_history';

export interface DocumentGeneratorConfig {
  docType:
    | 'university_guide'
    | 'programme_guide'
    | 'documents_checklist'
    | 'specialist_guidance'
    | 'full_handbook';
  selectedUniversityId?: string;
  selectedProgrammeId?: string;
  selectedCountry?: string;
  includeSpecialistChecklist: boolean;
  includeClickableSources: boolean;
  customNotes?: string;
}
