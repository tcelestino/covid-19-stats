import React, { useState } from 'react';
import { Dropdown } from '@catho/quantum';
import { countries } from './data';

type Countries = {
  selected: Function;
};

function Countries(props: Countries): JSX.Element {
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
