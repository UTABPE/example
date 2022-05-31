export enum TASK_STATUS {
  UNDEFINED = 0,
  NEW = 1,
  PENDING = 2,
  IN_PROGRESS = 3,
  COMPLETED = 4,
  REJECTED = 4,
}

export type StatusProps = {
  readonly title?: string;
  readonly status?: TASK_STATUS;
};
