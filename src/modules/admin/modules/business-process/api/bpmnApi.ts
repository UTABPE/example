import { PaginatedResponse, PaginationPayload } from '@/types/Pagination';
import { api } from 'api';
import {
  BPDefinition,
  BPDraft,
  CreateBPDraftPayload,
} from '../types/business-process/businessProcess';

type ModuleFilter = {
  moduleId?: string;
  moduleSectionId?: string;
};

export const getBpDefinitionList = (
  params?: PaginationPayload | ModuleFilter
) =>
  api.get<PaginatedResponse<BPDefinition>>(
    `https://dev-camunda.kazatomprom.kz/definition/list/bp`,
    { params }
  );

export const getBpDraftList = (params?: PaginationPayload) =>
  api.get<PaginatedResponse<BPDraft>>(
    `https://dev-camunda.kazatomprom.kz/definition/list/draft`,
    { params }
  );

export const getBpDefinition = (id: string) =>
  api.get<BPDefinition>(`https://dev-camunda.kazatomprom.kz/definition/${id}`);

export const getBpDefinitionById__temp = async (id: string) => {
  const defList = await getBpDefinitionList();

  return defList.data.content.find((d) => d.id === id);
};

export const startBpById = (id: string) => {
  return api.post<string>(
    `https://dev-camunda.kazatomprom.kz/process/start/${id}`,
    {}
  );
};

export const postBpmn = (draftId: string, xml: string) => {
  return api.post<void>(
    `https://dev-camunda.kazatomprom.kz/definition/upload`,
    xml,
    {
      params: { draftId },
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  );
};

export const postDraftBp = async (draftPayload: CreateBPDraftPayload) =>
  api.post(
    `https://dev-camunda.kazatomprom.kz/definition/pre-upload`,
    draftPayload
  );

export const postDraftBp__mock = async (
  draftPayload: CreateBPDraftPayload
): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('3fa85f64-5717-4562-b3fc-2c963f66afa6');
    }, 1000);
  });
};

export const getFormsList = (params?: PaginationPayload) =>
  api.get(`https://dev-camunda.kazatomprom.kz/form/list/`, { params });
