import { delayedValue } from '../../../utils/randoms';

export interface InterestType {
  id: string;
  name: string;
}

export const interestTypesDict: InterestType[] = [
  { id: 'hobby', name: 'Hobbies & Other' },
  { id: 'sport', name: 'Sport' },
  { id: 'culture', name: 'Culture' }
];

const interestsMap = {
  hobby: ['patchwork', 'programming', 'video gaming'],
  sport: ['soccer', 'basketball', 'hockey', 'ski-jumping'],
  culture: ['books', 'films', 'poetry'],
};

type InterestMapKey = keyof typeof interestsMap;

export function getInterestsByType(interestTypeId: InterestMapKey): Promise<string[]> {
  const resultVal = interestsMap[interestTypeId];
  return delayedValue(resultVal, 1200);
}
