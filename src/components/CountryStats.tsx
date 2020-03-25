import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Detail from './Detail';
import { getData } from '../utils/fetch';
import { DetailsProps, CountryStatsResult, CountryData } from '../types';
import { COUNTRY_TOTAL } from '../endpoints';

function Details(props: DetailsProps): JSX.Element {
  const { countryCode } = props;

  const [detail, setDetail] = useState<CountryStatsResult>({ countrydata: [] });

  useEffect((): (() => void) => {
    getData(`${COUNTRY_TOTAL}=${countryCode}`).then((info) => {
      const data = info.data as CountryStatsResult;
      setDetail(data);
    });

    return (): void => {
      setDetail({ countrydata: [] });
    };
  }, [countryCode]);

  if (!detail.countrydata.length) {
    return <Loading />;
  }

  return (
    <>
      {detail.countrydata.map(
        (d: CountryData): JSX.Element => (
          <div key={d.info.ourid}>
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
    </>
  );
}

export default Details;
