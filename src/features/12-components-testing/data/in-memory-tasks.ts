import { commerce, hacker } from 'faker';
import { times } from 'lodash';

export interface TaskDto {
  id: number;
  title: string;
}

export const IN_MEMORY_TASKS: TaskDto[] = times(10, (index) => {
  const id = 100 + index * 10;
  const title = `${hacker.verb()} ${commerce.productAdjective()} ${commerce.product()}`;
  return {
    id,
    title
  };
});
