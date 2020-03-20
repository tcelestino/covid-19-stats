import React from 'react';
import {
  FormControl,
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core';
import { CountriesProps, Country } from '../types';
import { countries } from './data';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1)
    },

    select: {
      width: '100%',
      padding: '1em'
    }
  })
);

function Countries(props: CountriesProps): JSX.Element {
  const classes = useStyles();
  const { onSelected } = props;

  const onChange = (evt: React.ChangeEvent<{ value: string }>): void => {
    onSelected(evt.currentTarget.value);
  };

  return (
    <FormControl className={classes.formControl} fullWidth>
      <select className={classes.select} onChange={onChange}>
        <option value="">Select a country</option>
        {countries.map(
          (country: Country): JSX.Element => (
            <option value={country.value} key={country.id.toString()}>
              {country.name}
            </option>
          )
        )}
      </select>
    </FormControl>
  );
}

export default Countries;
