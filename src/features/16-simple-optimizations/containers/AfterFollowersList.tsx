import React, { useEffect } from 'react';

import { randomBetween } from 'src/utils/randoms';

import useManageHeroes from '../hooks/useManageHeroes';
import HeroesSummary from '../components/HeroesSummary';
import HeroesList from '../components/HeroesList';

interface IAfterFollowersListPops {
  entitiesCount: number;
}

export default function AfterFollowersList({ entitiesCount }: IAfterFollowersListPops): React.ReactElement {
  const { heroes, loadHeroes, updateHeroBy, resetHeroes } = useManageHeroes();
  const index = randomBetween(0, heroes.length, true);

  const loadMoreHandler = () => loadHeroes(3);
  const updateRandomHandler = () => updateHeroBy(index);
  const resetHandler = () => resetHeroes();

  useEffect(() => {
    loadHeroes(entitiesCount);
  }, [loadHeroes, entitiesCount]);

  return (
    <div>
      <div>
        <button onClick={loadMoreHandler}>Load more</button>
        <button onClick={updateRandomHandler}>Update hero no. {index + 1}</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
      <HeroesSummary total={heroes.length} />
      <HeroesList heroes={heroes} />
    </div>
  );
}
