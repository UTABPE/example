import { PaginatedResponse } from '@/types/Pagination';
import { Module, ModuleSection, ModuleWithSections } from '../types/Module';
import { api } from './index';

const getAllModules = (page: number, pageSize: number) => {
  return api.get<PaginatedResponse<Module>>(`/admin/modules/`, {
    params: {
      page: page,
      size: pageSize,
    },
  });
};

const getSingleModuleWithSections = (moduleId: string) => {
  return api.get(`/admin/modules/${moduleId}/with-sections`);
};

const getModuleSections = (moduleId: string) => {
  return api.get(`/admin/sections/${moduleId}`);
};

const getAllModulesWithSections = (page: number, pageSize: number) => {
  return api.get<PaginatedResponse<ModuleWithSections>>(
    `/admin/modules/with-sections/`,
    {
      params: {
        page: page,
        size: pageSize,
      },
    }
  );
};

const createModule = (module: any) => {
  return api.post('/admin/modules', module);
};

export const moduleApi = {
  getSingleModuleWithSections,
  getAllModules,
  createModule,
  getAllModulesWithSections,
  getModuleSections,
};
