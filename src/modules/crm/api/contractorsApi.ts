import { api } from '@api/modulesApi';
import { SortTypes } from '@modules/crm/types/SortTypes';
import { Contractor, ContractorPayload } from '@modules/crm/types/Contractor';

const getCounterpartiesList = (
  page: number,
  size: number,
  sort?: [string, SortTypes]
) =>
  api.get<{
    content: ReadonlyArray<Contractor>;
    totalPages: number;
  }>(`/counterparty`, {
    params: {
      page,
      size,
      sort,
    },
  });

const getCounterpartyById = (id: string) => api.get(`/counterparty/${id}`);

const createCounterparty = (counterparty: ContractorPayload) =>
  api.post(`/counterparty`, counterparty);

export const contractorsApi = {
  getCounterpartiesList,
  getCounterpartyById,
  createCounterparty,
};
