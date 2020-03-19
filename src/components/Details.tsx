import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CircularLoader } from '@catho/quantum';

type DetailsProps = {
  countryCode: string;
};

function Loading(): JSX.Element {
  return <CircularLoader size="large" />;
}

const API_URL = 'https://thevirustracker.com/free-api?countryTotal';

function Details(props: DetailsProps): JSX.Element {
  const { countryCode } = props;

  const [detail, setDetail] = useState<string[]>([]);

  useEffect((): (() => void) => {
    const data = axios.get(`${API_URL}=${countryCode}`);
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
          <Card key={d.info.ourid}>
            <Card.Header>
              <Card.HeaderText>
                <Card.Title small>{d.info.title}</Card.Title>
              </Card.HeaderText>
            </Card.Header>
            <Card.Content>
              <ul>
                <li>Total Active Cases: {d.total_active_cases}</li>
                <li>Total Cases: {d.total_cases}</li>
                <li>Total Deaths: {d.total_deaths}</li>
                <li>Total new cases by today: {d.total_new_cases_today}</li>
                <li>Total new deaths by today: {d.total_new_deaths_today}</li>
                <li>Total Recovered: {d.total_recovered}</li>
                <li>Total Serious Cases: {d.total_serious_cases}</li>
                <li>Total Unresolved: {d.total_unresolved}</li>
              </ul>
            </Card.Content>
          </Card>
        )
      )}
    </>
  );
}

export default Details;
