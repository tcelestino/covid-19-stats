import React, { useState } from 'react';
import { Select, MenuItem, createStyles, makeStyles, Theme, FormControl, InputLabel } from '@material-ui/core';
import { CountriesProps, Country } from '../types';
import countries from './data';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      marginTop: theme.spacing(2),
    },
    select: {
      width: '100%',
      padding: theme.spacing(1),
      margin: theme.spacing(2, 0, 1),
    },
  })
);

function Countries(props: CountriesProps): JSX.Element {
  const { onSelected } = props;
  const classes = useStyles();
  const [code, setCode] = useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>): void => {
    const { value } = event.target;

    setCode(value as string);
    onSelected(value as string);
  };

  return (
    <FormControl id='list-countries' className={classes.form} fullWidth>
      <InputLabel>Choose a country</InputLabel>
      <Select value={code} onChange={handleChange} className={classes.select} fullWidth>
        <MenuItem value='' disabled>
          Select a country
        </MenuItem>
        {countries.map(
          (country: Country): JSX.Element => (
            <MenuItem value={country.value} key={country.id.toString()}>
              {country.name}
            </MenuItem>
          )
        )}
      </Select>
    </FormControl>
  );
}

export default Countries;
