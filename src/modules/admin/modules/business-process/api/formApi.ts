import { PaginatedResponse, PaginationPayload } from '@/types/Pagination';
import { api } from 'api';
import { BPForm, NewBPFormPayload } from '../types/BusinessProcessForm';

const API_PREFIX = 'https://dev-camunda.kazatomprom.kz';

export const createBpForm = (payload: NewBPFormPayload) => {
  return api.post(API_PREFIX + '/form', payload);
};

export const getFormList = (params?: PaginationPayload) =>
  api.get(API_PREFIX + '/form/list', { params });

export const getForm = (id: string) =>
  api.get<BPForm>(API_PREFIX + `/form/${id}`);
