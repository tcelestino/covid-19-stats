import React, { useState, useEffect } from 'react';
import { CssBaseline, Container, AppBar, Link, Toolbar, Typography, makeStyles, Theme } from '@material-ui/core';
import { GLOBAL_TOTAL } from './endpoints';
import { getData } from './utils/fetch';
import Countries from './components/Countries';
import CountryStats from './components/CountryStats';
import GlobalStats from './components/GlobalStats';
import { Results, GlobalStatsResults } from './types';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  title: {
    fontWeight: 700,
    fontSize: '2rem',
  },
  titleText: {
    color: theme.palette.grey[50],
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: theme.palette.grey[200],
  },
}));

function App(): JSX.Element {
  const classes = useStyles();
  const [country, setCountry] = useState<string>('');
  const [globalStats, setGlobalStats] = useState<Results[]>([]);

  const handlerSelected = (countryCode: string): void => {
    setCountry(countryCode);
  };

  useEffect((): void => {
    const fetchGlobalData = async (): Promise<void> => {
      await getData(GLOBAL_TOTAL).then((info) => {
        const data = info.data as GlobalStatsResults;
        setGlobalStats(data.results);
      });
    };
    fetchGlobalData();
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='static' color='secondary'>
        <Toolbar>
          <Typography variant='h1' className={classes.title}>
            <Link href='//tcelestino.github.io/covid-19-stats/' className={classes.titleText}>
              COVID-19 Stats
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component='main' maxWidth='sm'>
        <Countries onSelected={handlerSelected} />
        {!country && <GlobalStats data={globalStats} />}
        {country && <CountryStats countryCode={country} />}
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth='sm'>
          <Typography variant='body1'>
            Information data is supplied by{' '}
            <a href='https://thevirustracker.com/api' rel='noopener noreferrer' target='_blank'>
              Coronavirus Tracker
            </a>
          </Typography>
        </Container>
      </footer>
    </div>
  );
}

export default App;
