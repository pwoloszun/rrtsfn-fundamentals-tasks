import createEntityApi from './createEntityApi';

export enum MailStatus {
  draft = 'DRAFT',
  sent = 'SENT',
}

export interface MailEntity {
  id: number;
  title: string;
  to: string[];
  from: string;
  content: string;
  createdAt: number;
  status: MailStatus;
};

export type MailEntityParams = Omit<MailEntity, 'id'>;

const mymailApi = createEntityApi<MailEntity>('/api/mail-entities');

export default mymailApi;
