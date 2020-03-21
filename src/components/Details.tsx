import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CircularProgress,
  createStyles,
  Typography,
  makeStyles,
  Theme
} from '@material-ui/core';
import axios from 'axios';
import { DetailsProps } from '../types';
import { COUNTRY_TOTAL } from '../endpoints';

type DetailProps = {
  title: string;
  data: string;
};

function Loading(): JSX.Element {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '40vh'
      }
    })
  );

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>
  );
}

function Details(props: DetailsProps): JSX.Element {
  const { countryCode } = props;

  const [detail, setDetail] = useState<string[]>([]);

  useEffect((): (() => void) => {
    const data = axios.get(`${COUNTRY_TOTAL}=${countryCode}`);
    data.then(info => setDetail(info.data.countrydata));

    return (): void => {
      setDetail([]);
    };
  }, [countryCode]);

  if (!detail.length) {
    return <Loading />;
  }

  return (
    <>
      {detail.map(
        (d: any): JSX.Element => (
          <div key={d.info.ourid}>
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

function Detail(props: DetailProps): JSX.Element {
  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      textAlign: 'center',
      marginBottom: '.5em',
      fontSize: theme.spacing(3)
    }
  }));

  const { title, data } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        {data}
      </CardContent>
    </Card>
  );
}

export default Details;
