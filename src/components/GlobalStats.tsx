import React, { useState, useEffect } from 'react';
import { Typography, makeStyles, Theme } from '@material-ui/core';
import Loading from './Loading';
import Detail from './Detail';
import { DetailsProps, Results, GlobalStatsResult, GlobalData } from '../types';
import { GLOBAL_TOTAL } from '../endpoints';
import { getGlobalStats } from '../utils';

const useStyles = makeStyles((theme: Theme) => ({
  h1: {
    margin: theme.spacing(1, 0)
  }
}));

function GlobalStats(props: DetailsProps): JSX.Element {
  const classes = useStyles();
  const { countryCode } = props;
  const [detail, setDetail] = useState<Results[]>([]);

  useEffect((): (() => void) => {
    getGlobalStats(GLOBAL_TOTAL).then((info: GlobalStatsResult) => {
      if (info.stat) {
        setDetail(info.results);
      }
    });

    return (): void => {
      setDetail([]);
    };
  }, [countryCode]);

  if (!detail.length) {
    return <Loading />;
  }

  return (
    <>
      <Typography variant="h4" component="h2" className={classes.h1}>
        Global Stats
      </Typography>
      {detail.map(
        (d: GlobalData): JSX.Element => (
          // TODO: create id
          <div key={detail.length.toString()}>
            <Detail title="Total Active Cases" data={d.total_active_cases} />
            <Detail title="Total Cases" data={d.total_cases} />
            <Detail title="Total Deaths" data={d.total_deaths} />
            <Detail
              title="Total new cases by today"
              data={d.total_new_cases_today}
            />
            <Detail
              title="Total new deaths by today"
              data={d.total_new_deaths_today}
            />
            <Detail title="Total Recovered" data={d.total_recovered} />
            <Detail title="Total Serious Cases" data={d.total_serious_cases} />
            <Detail title="Total Unresolved" data={d.total_unresolved} />
          </div>
        )
      )}
    </>
  );
}

export default GlobalStats;
