import React, { useState } from 'react';
import { Container, Row, Col } from '@catho/quantum';
import styled from 'styled-components';
import Countries from './components/Countries';
import Details from './components/Details';

const Title = styled.h1`
  font-size: 2em;
`;

const Footer = styled.footer`
  --default-color: #fff;

  background-color: #000;
  box-sizing: border-box;
  bottom: 0;
  color: var(--default-color);
  left: 0;
  padding: 1em;
  position: absolute;
  width: 100%;

  a {
    color: var(--default-color);
    font-weight: 700;

    &:visited {
      color: var(--default-color);
    }
  }
`;

function App() {
  const [country, setCountry] = useState('');
  const handlerSelected = (countryCode: string): void => {
    setCountry(countryCode);
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Title>Covid-19 Stats</Title>
          </Col>
        </Row>
        <Countries selected={handlerSelected} />
        {country && <Details countryCode={country} />}
      </Container>
      <Footer>
        Information data is supplied by{' '}
        <a href="https://thevirustracker.com/api">Coronavirus Tracker</a>
      </Footer>
    </>
  );
}

export default App;
