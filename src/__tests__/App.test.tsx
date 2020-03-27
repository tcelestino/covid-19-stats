import React from 'react';
import { cleanup, render, waitForElement, fireEvent } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

describe('<App />', () => {
  // TODO: fixes warning memory leak
  it.skip('render page', async () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it('should see global stats when page loaded', async () => {
    const fakeAxios = {
      // eslint-disable-next-line @typescript-eslint/camelcase
      get: jest.fn(() => jest.fn().mockResolvedValueOnce({ results: [{ total_cases: 100 }] })),
    };

    const { getByRole, container } = render(<App />);
    const loading = getByRole('progressbar');

    expect(loading).toBeInTheDocument();

    await fakeAxios.get();

    const globalStats = await waitForElement(() => container.querySelector('#global-stats'), { timeout: 6000 });
    expect(loading).not.toBeInTheDocument();
    expect(globalStats).toHaveTextContent('Global Stats');
    expect(fakeAxios.get).toHaveBeenCalledTimes(1);
  });

  it('should see country stats when select a country on select', async () => {
    const { getByRole, debug } = render(<App />);

    const listCountries = getByRole('button') as HTMLDivElement;
    fireEvent.click(listCountries);
    debug();
  });
});
