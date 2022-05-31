export type BPDraft = {
  id: string;
  name: string;
  moduleId: string;
  description: string;
  formId: string;
  isActive: boolean;
};

export type BPDefinition = {
  id: string;
  name: string;
  moduleId: string;
  moduleSectionId: string;
  description: string;
  formId: string;
  isActive: boolean;
  bpmnContent: string | null;
};

export type CreateBPDraftPayload = {
  name: string;
  moduleId: string;
  description?: string;
  formId: string;
  // isActive: boolean;
};
