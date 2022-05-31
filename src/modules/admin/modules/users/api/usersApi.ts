import { api } from '@api/index';
import { User } from '../types/User';

export const getAllUsers = (
  page: number,
  size: number,
  sortColumn: string,
  sort: 'asc' | 'desc'
) => {
  return api.get(`/users/`, {
    params: {
      page: page,
      size: size,
      sort: `${sortColumn},${sort}`,
    },
  });
};

export const getUser = (id: string) => {
  return api.get(`/users/${id}`);
};

export const createUser = (user: User) => {
  return api.post('/users', user);
};

export const updateUser = (user: User) => {
  return api.put(`/users/${user.id}`, user);
};

export const updateStatus = (user: User) => {
  const action = user.isEnabled ? 'BLOCK' : 'UNBLOCK';
  return api.put(`/users/${user.id}/statuses`, {
    params: {
      action: action,
    },
  });
};
