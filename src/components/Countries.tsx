import React, { useState } from 'react';
import { Dropdown } from '@catho/quantum';
import { CountriesProps } from '../types';
import { countries } from './data';

function Countries(props: CountriesProps): JSX.Element {
  const { selected } = props;
  const [country, setCountry] = useState<string>('');

  const DropdownProps = {
    placeholder: 'Choose a country',
    autocomplete: true,
    onChange: (e: any): void => {
      setCountry(e);
      selected(e.value);
    }
  };

  return (
    <>
      <Dropdown {...DropdownProps} selectedItem={country} items={countries} />
    </>
  );
}

export default Countries;
