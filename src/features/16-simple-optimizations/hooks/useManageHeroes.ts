import { useState, useCallback } from 'react';

import { HeroEntity } from 'src/api/heroes-api';
import generateHeroes, { updateHero } from '../api/generate-heroes';

type UseManageHeroesResult = {
  heroes: HeroEntity[];
  loadHeroes: (count: number) => void;
  updateHeroBy: (index: number) => void;
  resetHeroes: () => void;
}

export default function useManageHeroes(): UseManageHeroesResult {
  const [heroes, setHeroes] = useState<HeroEntity[]>([]);

  const loadHeroes = useCallback((count: number) => {
    setHeroes((heroes) => {
      return [
        ...heroes,
        ...generateHeroes(count)
      ];
    });
  }, []);

  const updateHeroBy = useCallback((index: number) => {
    setHeroes((heroes) => {
      const updated = updateHero(heroes[index]);
      return [
        ...heroes.slice(0, index),
        updated,
        ...heroes.slice(index + 1)
      ];
    });
  }, []);

  const resetHeroes = useCallback(() => {
    setHeroes([]);
  }, []);

  return {
    heroes,
    loadHeroes,
    updateHeroBy,
    resetHeroes,
  };
}
