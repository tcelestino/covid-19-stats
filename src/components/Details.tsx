import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CircularLoader } from '@catho/quantum';
import { DetailsProps, DataListProps } from '../types';
import { API_TOTAL } from '../endpoints';

function DataList(props: DataListProps): JSX.Element {
  const { items } = props;
  return (
    <ul>
      <li>Total Active Cases: {items.total_active_cases}</li>
      <li>Total Cases: {items.total_cases}</li>
      <li>Total Deaths: {items.total_deaths}</li>
      <li>Total new cases by today: {items.total_new_cases_today}</li>
      <li>Total new deaths by today: {items.total_new_deaths_today}</li>
      <li>Total Recovered: {items.total_recovered}</li>
      <li>Total Serious Cases: {items.total_serious_cases}</li>
      <li>Total Unresolved: {items.total_unresolved}</li>
    </ul>
  );
}

function Loading(): JSX.Element {
  return <CircularLoader size="large" />;
}

function Details(props: DetailsProps): JSX.Element {
  const { countryCode } = props;

  const [detail, setDetail] = useState<string[]>([]);

  useEffect((): (() => void) => {
    const data = axios.get(`${API_TOTAL}=${countryCode}`);
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
              <DataList items={d} />
            </Card.Content>
          </Card>
        )
      )}
    </>
  );
}

export default Details;
