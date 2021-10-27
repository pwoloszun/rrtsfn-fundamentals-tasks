import { render, screen } from '@testing-library/react';

import PureMyCard from '../PureMyCard';

describe('PureMyCard', () => {

  xit('should render all slots', async () => {
    //TODO
  });

});

function renderComponent() {
  return render(
    <PureMyCard
      header={<h3>big header</h3>}
      footer="my footer"
      content={<p>content test</p>}
    />
  );
}
