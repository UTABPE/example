export type PaginatedResponse<T> = {
  totalPages: number;
  content: T[];
  totalItems: number;
  pageSize: number;
  currentPage: number;
};

export type PaginationPayload = {
  page?: number;
  size?: number;
};
