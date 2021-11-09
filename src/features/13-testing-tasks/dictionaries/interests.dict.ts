import { delayedValue } from 'src/utils/randoms';

export interface InterestType {
  id: string;
  name: string;
}

export const interestTypesDict: InterestType[] = [
  { id: 'hobby', name: 'Hobbies & Other' },
  { id: 'sport', name: 'Sport' },
  { id: 'culture', name: 'Culture' }
];

const interestsMap: any = {
  hobby: ['patchwork', 'programming', 'video gaming'],
  sport: ['soccer', 'basketball', 'hockey', 'ski-jumping'],
  culture: ['books', 'films', 'poetry'],
};

export function getInterestsByType$(interestTypeId: string): Promise<string[]> {
  const resultVal = interestsMap[interestTypeId] || [];
  return delayedValue(resultVal, 800);
}
