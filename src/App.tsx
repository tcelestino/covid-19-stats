import React, { useState } from 'react';
import {
  CssBaseline,
  Container,
  AppBar,
  Link,
  Toolbar,
  Typography,
  makeStyles,
  Theme
} from '@material-ui/core';
import Countries from './components/Countries';
import CountryStats from './components/CountryStats';
import GlobalStats from './components/GlobalStats';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  title: {
    fontWeight: 700,
    fontSize: '2rem'
  },
  titleText: {
    color: theme.palette.grey[50]
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: theme.palette.grey[200]
  }
}));

function App() {
  const classes = useStyles();
  const [country, setCountry] = useState<string>('');
  const handlerSelected = (countryCode: string): void => {
    setCountry(countryCode);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h1" className={classes.title}>
            <Link href="/" className={classes.titleText}>
              COVID-19 Stats
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm">
        <Countries onSelected={handlerSelected} />
        {!country && <GlobalStats />}
        {country && <CountryStats countryCode={country} />}
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">
            Information data is supplied by{' '}
            <a
              href="https://thevirustracker.com/api"
              rel="noopener noreferrer"
              target="_blank"
            >
              Coronavirus Tracker
            </a>
          </Typography>
        </Container>
      </footer>
    </div>
  );
}

export default App;
