import { PaginatedResponse, PaginationPayload } from '@/types/Pagination';
import { api } from 'api';
import { Task } from '../types/tasks';

export const getAllActiveTasks = (params?: PaginationPayload) =>
  api.get<PaginatedResponse<Task>>(
    `https://dev-camunda.kazatomprom.kz/process/list/active`,
    { params }
  );

export const getActiveTask = (bKey: string) =>
  api.get<Task>(`https://dev-camunda.kazatomprom.kz/process/active/${bKey}`);

export const submitTask = ({
  bKey,
  sectionId,
  data,
}: {
  bKey: string;
  sectionId: string;
  data: Record<string, any>;
}) => {
  return api.post(`https://dev-camunda.kazatomprom.kz/input/submit`, data, {
    params: {
      bKey,
      sectionId,
    },
  });
};
