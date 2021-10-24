import React from 'react';

interface IHeroesSummaryProps {
  total: number;
}

export default function HeroesSummary(props: IHeroesSummaryProps): React.ReactElement {
  const { total } = props;
  return (
    <h5>Total heroes {total}</h5>
  );
};
