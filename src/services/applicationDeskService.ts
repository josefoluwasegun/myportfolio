import {
  University,
  Programme,
  ProgrammeRequirement,
  OfficialSource,
  UpdateMonitorItem,
  VersionHistoryRecord,
  DocumentGeneratorConfig
} from '../types/applicationDesk';
import {
  INITIAL_UNIVERSITIES,
  INITIAL_PROGRAMMES,
  INITIAL_OFFICIAL_SOURCES,
  INITIAL_PROGRAMME_REQUIREMENTS,
  INITIAL_UPDATE_MONITOR_ITEMS,
  INITIAL_VERSION_HISTORY
} from '../data/seemigoKnowledgeData';

const STORAGE_KEYS = {
  UNIVERSITIES: 'seemigo_universities_v1',
  PROGRAMMES: 'seemigo_programmes_v1',
  REQUIREMENTS: 'seemigo_requirements_v1',
  OFFICIAL_SOURCES: 'seemigo_sources_v1',
  UPDATE_MONITOR: 'seemigo_updates_v1',
  VERSION_HISTORY: 'seemigo_versions_v1'
};

class ApplicationDeskService {
  private getStorageItem<T>(key: string, fallback: T): T {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch {
      return fallback;
    }
  }

  private setStorageItem<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('LocalStorage save failed:', e);
    }
  }

  // Getters
  public getUniversities(): University[] {
    return this.getStorageItem<University[]>(STORAGE_KEYS.UNIVERSITIES, INITIAL_UNIVERSITIES);
  }

  public getProgrammes(universityId?: string): Programme[] {
    const progs = this.getStorageItem<Programme[]>(STORAGE_KEYS.PROGRAMMES, INITIAL_PROGRAMMES);
    return universityId ? progs.filter((p) => p.universityId === universityId) : progs;
  }

  public getRequirements(programmeId?: string, universityId?: string): ProgrammeRequirement[] {
    const reqs = this.getStorageItem<ProgrammeRequirement[]>(
      STORAGE_KEYS.REQUIREMENTS,
      INITIAL_PROGRAMME_REQUIREMENTS
    );
    if (programmeId) return reqs.filter((r) => r.programmeId === programmeId);
    if (universityId) return reqs.filter((r) => r.universityId === universityId);
    return reqs;
  }

  public getOfficialSources(universityId?: string): OfficialSource[] {
    const sources = this.getStorageItem<OfficialSource[]>(
      STORAGE_KEYS.OFFICIAL_SOURCES,
      INITIAL_OFFICIAL_SOURCES
    );
    return universityId ? sources.filter((s) => s.universityId === universityId) : sources;
  }

  public getUpdateMonitorItems(): UpdateMonitorItem[] {
    return this.getStorageItem<UpdateMonitorItem[]>(
      STORAGE_KEYS.UPDATE_MONITOR,
      INITIAL_UPDATE_MONITOR_ITEMS
    );
  }

  public getVersionHistory(): VersionHistoryRecord[] {
    return this.getStorageItem<VersionHistoryRecord[]>(
      STORAGE_KEYS.VERSION_HISTORY,
      INITIAL_VERSION_HISTORY
    );
  }

  // Setters
  public saveUniversities(unis: University[]): void {
    this.setStorageItem(STORAGE_KEYS.UNIVERSITIES, unis);
  }

  public saveRequirements(reqs: ProgrammeRequirement[]): void {
    this.setStorageItem(STORAGE_KEYS.REQUIREMENTS, reqs);
  }

  public saveUpdateMonitorItems(items: UpdateMonitorItem[]): void {
    this.setStorageItem(STORAGE_KEYS.UPDATE_MONITOR, items);
  }

  public saveVersionHistory(versions: VersionHistoryRecord[]): void {
    this.setStorageItem(STORAGE_KEYS.VERSION_HISTORY, versions);
  }

  // Reset to initial seed
  public resetToDefaultSeed(): void {
    this.setStorageItem(STORAGE_KEYS.UNIVERSITIES, INITIAL_UNIVERSITIES);
    this.setStorageItem(STORAGE_KEYS.PROGRAMMES, INITIAL_PROGRAMMES);
    this.setStorageItem(STORAGE_KEYS.REQUIREMENTS, INITIAL_PROGRAMME_REQUIREMENTS);
    this.setStorageItem(STORAGE_KEYS.OFFICIAL_SOURCES, INITIAL_OFFICIAL_SOURCES);
    this.setStorageItem(STORAGE_KEYS.UPDATE_MONITOR, INITIAL_UPDATE_MONITOR_ITEMS);
    this.setStorageItem(STORAGE_KEYS.VERSION_HISTORY, INITIAL_VERSION_HISTORY);
  }

  // Trigger Scheduled Source Check Simulation
  public runSourceChecks(): { checkedCount: number; newUpdatesDetected: number } {
    const sources = this.getOfficialSources();
    const updateItems = this.getUpdateMonitorItems();
    const nowStr = new Date().toISOString().replace('T', ' ').substring(0, 16);

    let newUpdatesDetected = 0;

    // Simulate finding a fresh update on one of the registered sources
    const newUpdate: UpdateMonitorItem = {
      id: `upd-sim-${Date.now()}`,
      officialSourceId: sources[0]?.id || 'src-lut-1',
      universityId: 'uni-tuw-austria',
      programmeId: 'prog-tuw-msc-logic',
      universityName: 'TU Wien',
      programmeName: 'MSc in Logic and Computation',
      sourceTitle: 'TU Wien Informatics Admissions Portal',
      sourceUrl: 'https://www.tuwien.at/en/inf/studies/admission/master-degree-programmes',
      dateDetected: nowStr,
      fieldName: 'Application Deadline (Winter Semester 2025/26)',
      previousValue: '2025-07-15 23:59 UTC+1',
      newValue: '2025-08-31 23:59 UTC+1 (Extended Application Window)',
      status: 'UPDATE_DETECTED',
      severity: 'high'
    };

    updateItems.unshift(newUpdate);
    newUpdatesDetected += 1;

    this.saveUpdateMonitorItems(updateItems);

    // Update last checked timestamps on sources
    const updatedSources = sources.map((s) => ({
      ...s,
      lastCheckedDate: nowStr.split(' ')[0]
    }));
    this.setStorageItem(STORAGE_KEYS.OFFICIAL_SOURCES, updatedSources);

    return { checkedCount: sources.length, newUpdatesDetected };
  }

  // Admin Approve Change Workflow
  public approveUpdate(
    updateId: string,
    adminName: string = 'Admin (Joseph Levi)',
    comment?: string
  ): { success: boolean; updatedVersion: string } {
    const updates = this.getUpdateMonitorItems();
    const updateIndex = updates.findIndex((u) => u.id === updateId);
    if (updateIndex === -1) return { success: false, updatedVersion: '' };

    const updateItem = updates[updateIndex];
    const nowStr = new Date().toISOString().replace('T', ' ').substring(0, 16);
    const dateToday = nowStr.split(' ')[0];

    // Mark update as APPROVED
    updateItem.status = 'APPROVED';
    updateItem.reviewedBy = adminName;
    updateItem.reviewedAt = nowStr;
    if (comment) updateItem.adminComment = comment;

    // Find and update verified Requirement record
    const reqs = this.getRequirements();
    const reqIndex = reqs.findIndex(
      (r) =>
        r.universityId === updateItem.universityId &&
        (!updateItem.programmeId || r.programmeId === updateItem.programmeId)
    );

    let newVersion = 'v2.5';

    if (reqIndex !== -1) {
      const targetReq = { ...reqs[reqIndex] };

      // Calculate next version e.g. v2.4 -> v2.5
      const currentVer = targetReq.knowledgeVersion || 'v1.0';
      const parts = currentVer.replace('v', '').split('.');
      if (parts.length === 2) {
        const major = parseInt(parts[0], 10) || 1;
        const minor = parseInt(parts[1], 10) + 1 || 1;
        newVersion = `v${major}.${minor}`;
      } else {
        newVersion = `${currentVer}.1`;
      }

      targetReq.knowledgeVersion = newVersion;
      targetReq.lastVerifiedDate = dateToday;

      // Apply field update logic
      if (updateItem.fieldName.toLowerCase().includes('fee')) {
        targetReq.applicationFee = {
          ...targetReq.applicationFee,
          paymentInstructions: updateItem.newValue
        };
      } else if (updateItem.fieldName.toLowerCase().includes('deadline')) {
        targetReq.applicationDeadline = {
          ...targetReq.applicationDeadline,
          date: updateItem.newValue
        };
      } else if (updateItem.fieldName.toLowerCase().includes('toefl') || updateItem.fieldName.toLowerCase().includes('language')) {
        targetReq.languageRequirements = targetReq.languageRequirements.map((lr) =>
          lr.testName.toLowerCase().includes('toefl') || lr.testName.toLowerCase().includes('language')
            ? { ...lr, minimumScore: updateItem.newValue }
            : lr
        );
      }

      reqs[reqIndex] = targetReq;
      this.saveRequirements(reqs);
    }

    // Update University record status & version
    const unis = this.getUniversities();
    const uniIndex = unis.findIndex((u) => u.id === updateItem.universityId);
    if (uniIndex !== -1) {
      unis[uniIndex].knowledgeVersion = newVersion;
      unis[uniIndex].lastVerifiedDate = dateToday;
      unis[uniIndex].status = 'verified';
      this.saveUniversities(unis);
    }

    // Log Version History
    const versions = this.getVersionHistory();
    const versionRecord: VersionHistoryRecord = {
      id: `vh-${Date.now()}`,
      universityId: updateItem.universityId,
      universityName: updateItem.universityName,
      programmeId: updateItem.programmeId,
      programmeName: updateItem.programmeName,
      version: newVersion,
      timestamp: nowStr,
      changedBy: adminName,
      changeType: 'Source Update Approval',
      summary: `Approved update for ${updateItem.fieldName}: "${updateItem.previousValue}" → "${updateItem.newValue}".`,
      previousValue: updateItem.previousValue,
      newValue: updateItem.newValue
    };

    versions.unshift(versionRecord);
    this.saveVersionHistory(versions);
    this.saveUpdateMonitorItems(updates);

    return { success: true, updatedVersion: newVersion };
  }

  // Admin Reject Change Workflow
  public rejectUpdate(
    updateId: string,
    adminName: string = 'Admin (Joseph Levi)',
    comment?: string
  ): boolean {
    const updates = this.getUpdateMonitorItems();
    const updateIndex = updates.findIndex((u) => u.id === updateId);
    if (updateIndex === -1) return false;

    const updateItem = updates[updateIndex];
    const nowStr = new Date().toISOString().replace('T', ' ').substring(0, 16);

    updateItem.status = 'REJECTED';
    updateItem.reviewedBy = adminName;
    updateItem.reviewedAt = nowStr;
    if (comment) updateItem.adminComment = comment;

    this.saveUpdateMonitorItems(updates);
    return true;
  }
}

export const applicationDeskService = new ApplicationDeskService();
