import React, { useEffect } from 'react';

import { randomBetween } from 'src/utils/randoms';

import useManageHeroes from '../hooks/useManageHeroes';
import MemoHeroesSummary from '../components/MemoHeroesSummary';
import MemoHeroesList from '../components/MemoHeroesList';

interface IMemoAfterFollowersListPops {
  entitiesCount: number;
}

export default function MemoAfterFollowersList({ entitiesCount }: IMemoAfterFollowersListPops): React.ReactElement {
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
      <MemoHeroesSummary total={heroes.length} />
      <MemoHeroesList heroes={heroes} />
    </div>
  );
}
