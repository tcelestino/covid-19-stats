import React, { useState } from 'react';
import { Dropdown } from '@catho/quantum';
import { countries } from './data';

function Countries() {
  const [country, setCountry] = useState<string>('');

  const DropdownProps = {
    placeholder: 'Select a country',
    onChange: (e: any): void => {
      setCountry(e);
    }
  };

  return (
    <>
      <Dropdown {...DropdownProps} selectedItem={country} items={countries} />
    </>
  );
}

export default Countries;
