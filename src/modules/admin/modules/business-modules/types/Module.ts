export type ModuleSection = {
  sectionId: string;
  name: string;
  sectionUrl: string;
  moduleId: string;
};
export type Module = {
  moduleId: string;
  name: string;
  description: string;
  moduleUrl: string;
  status: 'ACTIVE';
};

export type ModuleWithSections = {
  moduleId: string;
  name: string;
  description: string;
  moduleUrl: string;
  status: 'ACTIVE';
  sections: ModuleSection[];
};
