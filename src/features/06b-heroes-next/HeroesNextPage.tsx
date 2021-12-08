import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import fetchHeroes, { Hero } from 'src/api/fetch-heroes';
import RenderDataTable from 'src/components/RenderDataTable';

export default function HeroesNextPage(): React.ReactElement {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);

  useEffect(() => {
    fetchHeroes()
      .then((heroesData) => {
        console.log('heroes from server:', heroesData);
        setHeroes(heroesData);
      });
  }, []);

  const rowClickHandler = (hero: Hero) => {
    console.log('rowClickHandler - selected hero:', hero);
    setSelectedHero(hero);
  };

  const renderItemFirst = (hero: Hero) => {
    const { name, secretIdentity } = hero;
    return (
      <Row>
        <Col sm="6">{name}</Col>
        <Col sm="6">{secretIdentity}</Col>
      </Row>
    );
  };

  const renderItemSecond = (hero: Hero) => {
    const { id, universe, name } = hero;
    return (
      <div>
        <span>ID: {id}</span> | &nbsp;
        <b>{universe}</b> | &nbsp;
        <a href="#todo">{name}</a> | &nbsp;
      </div>
    );
  };

  return (
    <div>
      <h3>Heroes Next</h3>
      <h5>Selected hero: {selectedHero?.name}</h5>
      <Row>
        <Col sm="6">
          <RenderDataTable
            items={heroes}
            renderItem={renderItemFirst}
          />
        </Col>

        <Col sm="6">
          <RenderDataTable
            items={heroes}
            renderItem={renderItemSecond}
          />
        </Col>
      </Row>
    </div>
  );
}

