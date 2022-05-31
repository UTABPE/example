export type User = {
  id: string;
  key?: number;
  iin: string;
  firstName: string;
  lastName: string;
  patronymicName: string;
  photoUrl: string;
  authenticationPhone: string;
  email: string;
  username: string;
  password?: string;
  contactPhones: string[];
  extraInfo: string;
  isEnabled: string | boolean;
};
