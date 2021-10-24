import React from 'react';

import { HeroEntity } from 'src/api/heroes-api';

interface IHeroeListItemProps {
  hero: HeroEntity;
}

export default function HeroListItem(props: IHeroeListItemProps): React.ReactElement {
  const { hero } = props;
  const { name } = hero;
  return (
    <li>{name}</li>
  );
};
