import { PermissionsGroups } from '../types/PermissionsGroups';

export const PERMISSIONS_GROUPS_LIST = [
  {
    title: 'Все группы прав доступа',
    key: PermissionsGroups.all,
    children: [
      {
        title: 'Руководители модуля HSE ',
        key: PermissionsGroups.managers,
      },
      {
        title: 'Ответственные модуля HSE',
        key: PermissionsGroups.responsible,
      },
      {
        title: 'Исполнители модуля HSE',
        key: PermissionsGroups.performers,
      },
    ],
  },
];
