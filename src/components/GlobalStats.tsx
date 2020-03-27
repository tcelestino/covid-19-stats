import React from 'react';
import { Typography, makeStyles, Theme } from '@material-ui/core';
import { GlobalStatsProps, GlobalData } from '../types';
import Loading from './Loading';
import Detail from './Detail';

const useStyles = makeStyles((theme: Theme) => ({
  h1: {
    margin: theme.spacing(1, 0),
  },
}));

function GlobalStatsDetail(props: GlobalStatsProps): JSX.Element {
  const classes = useStyles();
  const { data } = props;

  if (!data.length) {
    return <Loading />;
  }

  return (
    <section id='global-stats'>
      <Typography variant='h4' component='h2' className={classes.h1}>
        Global Stats
      </Typography>
      {data.map(
        (d: GlobalData): JSX.Element => (
          // TODO: create id
          <div key={data.length.toString()}>
            <Detail title='Total Active Cases' data={d.total_active_cases} />
            <Detail title='Total Cases' data={d.total_cases} />
            <Detail title='Total Deaths' data={d.total_deaths} />
            <Detail title='Total new cases by today' data={d.total_new_cases_today} />
            <Detail title='Total new deaths by today' data={d.total_new_deaths_today} />
            <Detail title='Total Recovered' data={d.total_recovered} />
            <Detail title='Total Serious Cases' data={d.total_serious_cases} />
            <Detail title='Total Unresolved' data={d.total_unresolved} />
          </div>
        )
      )}
    </section>
  );
}

export default GlobalStatsDetail;
