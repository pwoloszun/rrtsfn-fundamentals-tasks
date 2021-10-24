import React from 'react';

import { HeroEntity } from 'src/api/heroes-api';
import HeroListItem from './HeroListItem';

interface IHeroesListProps {
  heroes: HeroEntity[];
}

export default function HeroesList(props: IHeroesListProps): React.ReactElement {
  const { heroes } = props;
  return (
    <ol>
      {
        heroes.map((hero) => <HeroListItem key={hero.id} hero={hero} />)
      }
    </ol>
  );
}
