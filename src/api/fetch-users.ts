import fetchEntities from './fetch-entities';

export interface User {
  id: number;
  email: string;
}

export default function fetchUsers(): Promise<User[]> {
  return fetchEntities<User>('/users');
}
