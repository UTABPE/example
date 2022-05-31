export enum PermissionsGroups {
  all = 0,
  managers = 1,
  responsible = 2,
  performers = 3,
}

export function definePermission(permission: number | undefined) {
  switch (permission) {
    case PermissionsGroups.all:
      return 'Все группы прав доступа';
    case PermissionsGroups.managers:
      return 'Руководители модуля HSE ';
    case PermissionsGroups.responsible:
      return 'Ответственные модуля HSE';
    case PermissionsGroups.performers:
      return 'Исполнители модуля HSE';
    default:
      return 'Неизвестная группа';
  }
}
