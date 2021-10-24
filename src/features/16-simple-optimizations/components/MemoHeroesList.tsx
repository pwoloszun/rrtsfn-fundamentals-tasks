import React from 'react';

import { HeroEntity } from 'src/api/heroes-api';
import MemoHeroeListItem from './MemoHeroListItem';

interface IHeroesListProps {
  heroes: HeroEntity[];
}

export default function MemoHeroesList(props: IHeroesListProps): React.ReactElement {
  const { heroes } = props;
  return (
    <ol>
      {
        heroes.map((hero) => <MemoHeroeListItem key={hero.id} hero={hero} />)
      }
    </ol>
  );
}
