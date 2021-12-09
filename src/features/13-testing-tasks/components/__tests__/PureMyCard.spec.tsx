import { render, screen } from '@testing-library/react';
import { merge } from 'lodash';

import PureMyCard, { IPureMyCardProps } from '../PureMyCard';

describe('PureMyCard', () => {

  it('should render received: header, footer & content', async () => {
    const header = 'my test h';
    const footer = 'footer lorem ips';
    const content = 'content my my test';
    const props = generateProps({ header, footer, content });

    renderComponent(props);

    await screen.findByText(/my test h/i);
    await screen.findByText(/footer lorem ips/i);
    await screen.findByText(/content my my test/i);
  });

});

function renderComponent(props: IPureMyCardProps) {
  return render(<PureMyCard {...props} />);
}

function generateProps(props: Partial<IPureMyCardProps> = {}): IPureMyCardProps {
  const defaultProps: IPureMyCardProps = {
    content: 'some content',
    header: 'my heaqder',
    footer: 'test footer',
  };
  return merge({}, defaultProps, props);
}
