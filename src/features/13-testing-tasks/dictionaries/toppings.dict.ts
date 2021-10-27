export enum ToppingType {
  mild = 'MILD',
  medium = 'MEDIUM',
  spicy = 'SPICY',
}

export interface Topping {
  id: number;
  name: string;
  type: ToppingType;
}

export const toppingsDict: Topping[] = [
  { id: 100, name: 'Carolina Reaper Peppers', type: ToppingType.spicy },
  { id: 101, name: 'Trinidad Scorpion Peppers', type: ToppingType.spicy },
  { id: 102, name: 'Bhut Jolokia Ghost Peppers', type: ToppingType.spicy },
  { id: 103, name: 'Jalapenos', type: ToppingType.spicy },

  { id: 104, name: 'Pepperoni', type: ToppingType.medium },
  { id: 105, name: 'Herbs', type: ToppingType.medium },
  { id: 106, name: 'Red Pepper', type: ToppingType.medium },
  { id: 107, name: 'Sausage', type: ToppingType.medium },

  { id: 108, name: 'Ham', type: ToppingType.mild },
  { id: 109, name: 'Chicken', type: ToppingType.mild },
  { id: 110, name: 'Olives', type: ToppingType.mild },
  { id: 111, name: 'Corn', type: ToppingType.mild },
  { id: 112, name: 'Pineapple', type: ToppingType.mild },
];
