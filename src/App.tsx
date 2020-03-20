import React, { useState } from 'react';
import {
  CssBaseline,
  Container,
  AppBar,
  Toolbar,
  Typography,
  makeStyles
} from '@material-ui/core';
import Countries from './components/Countries';
import Details from './components/Details';

const useStyles = makeStyles(() => ({
  title: {
    fontWeight: 700,
    fontSize: '2rem'
  }
}));

function App() {
  const classes = useStyles();
  const [country, setCountry] = useState<string>('');
  const handlerSelected = (countryCode: string): void => {
    setCountry(countryCode);
  };
  return (
    <>
      <CssBaseline />
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h1" className={classes.title}>
            Covid-19 Stats
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Countries onSelected={handlerSelected} />
        {country && <Details countryCode={country} />}
      </Container>
    </>
  );
}

export default App;
