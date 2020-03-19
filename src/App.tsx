import React, { useState } from 'react';
import { Container, Row, Col } from '@catho/quantum';
import styled from 'styled-components';
import Countries from './components/Countries';
import Details from './components/Details';

const Title = styled.h1`
  font-size: 2em;
`;

function App() {
  const [country, setCountry] = useState('');

  const handlerSelected = (countryCode: string): void => {
    setCountry(countryCode);
  };
  return (
    <Container>
      <Row>
        <Col>
          <Title>Covid-19 Stats</Title>
        </Col>
      </Row>
      <Countries selected={handlerSelected} />
      {country && <Details countryCode={country} />}
    </Container>
  );
}

export default App;
