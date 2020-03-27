import React from 'react';
import { render } from '@testing-library/react';
import Loading from '../components/Loading';

describe('<Loading />', () => {
  it('render page', () => {
    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot();
  });
});
