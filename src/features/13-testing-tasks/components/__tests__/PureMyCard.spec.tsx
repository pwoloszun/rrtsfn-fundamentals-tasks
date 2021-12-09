import { render, screen, within } from '@testing-library/react';
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

  it('should render received: header, footer & content within proper regions', async () => {
    const header = 'some header or footer';
    const footer = 'some header or footer';
    const content = 'content my my test';
    const props = generateProps({ header, footer, content });

    renderComponent(props);

    const headerCont = await screen.findByRole('region', { name: /Card Header/i, hidden: true });
    await within(headerCont).findByText(/some header or footer/i);
    const footerCont = await screen.findByRole('region', { name: /Card Footer/i, hidden: true });
    await within(footerCont).findByText(/some header or footer/i);
    const contentCont = await screen.findByRole('region', { name: /Card Content/i, hidden: true });
    await within(contentCont).findByText(/content my my test/i);
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
