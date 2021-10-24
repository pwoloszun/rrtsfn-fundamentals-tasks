import React, { useEffect } from 'react';

import { randomBetween } from 'src/utils/randoms';

import useManageHeroes from '../hooks/useManageHeroes';

interface IBeforeFollowersListPops {
  entitiesCount: number;
}

export default function BeforeFollowersList({ entitiesCount }: IBeforeFollowersListPops): React.ReactElement {
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
      <h5>Total heroes {heroes.length}</h5>
      <ol>
        {
          heroes.map((hero) => {
            const { id, name } = hero;
            return (
              <li key={id}>{name}</li>
            );
          })
        }
      </ol>
    </div>
  );
}
