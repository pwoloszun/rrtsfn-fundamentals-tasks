import deriveId from '../utils/deriveId';
export enum VegetableType {
  Tomatoe = 'Tomatoe',
  Onion = 'Onion',
  Mushrooms = 'Mushrooms',
}

export const VEGETABLE_TYPES_DICT = [
  VegetableType.Tomatoe,
  VegetableType.Onion,
  VegetableType.Mushrooms,
];

export interface VegetableEntity {
  id: number;
  type: VegetableType;
  choppedPct: number;
}

export function createVegetable(type: VegetableType): VegetableEntity {
  return {
    id: deriveId(),
    type,
    choppedPct: 0,
  };
}
