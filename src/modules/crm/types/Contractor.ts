import type { Contact } from '@modules/crm/types/Contact';

export type Contractor = {
  id: string;
  companyName: string;
  companyLogoUrl: string;
  websiteUrl: string;
  phoneNumber: string;
  faxNumber: string;
  regionId: string;
  countryId: string;
  stateId: string;
  cityId: string;
  district?: string;
  streetName: string;
  building: string;
  office: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  email?: string;
  language?: string;
  contacts: Contact[];
};

export type ContractorPayload = Omit<
  Contractor,
  'id' | 'createdAt' | 'updatedAt' | 'createdBy' | 'updatedBy'
>;
