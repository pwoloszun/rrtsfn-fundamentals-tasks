import faker from 'faker';

import { HeroEntity } from 'src/api/heroes-api';

function generateHeroAttrs(): Omit<HeroEntity, 'id'> {
  return {
    name: faker.company.companyName(),
    secretIdentity: faker.name.findName(),
    universe: faker.commerce.productName()
  };
}

function generateHero(): HeroEntity {
  const attrs = generateHeroAttrs();
  return {
    id: Math.random(),
    ...attrs
  };
}

export function updateHero(hero: HeroEntity): HeroEntity {
  const attrs = generateHeroAttrs();
  return {
    id: hero.id,
    ...attrs
  };
}

export default function generateHeroes(count: number): HeroEntity[] {
  const heroes: HeroEntity[] = [];
  for (let index = 0; index < count; index++) {
    const hero = generateHero();
    heroes.push(hero);
  }
  return heroes;
}
