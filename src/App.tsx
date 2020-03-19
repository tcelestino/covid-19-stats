import React, { useState } from 'react';
import { Container, Row, Col } from '@catho/quantum';
import styled from 'styled-components';
import Countries from './components/Countries';
import Details from './components/Details';

const Title = styled.h1`
  font-size: 2em;
`;

const Footer = styled.footer`
  --white: #fff;
  --black: #000;

  background-color: var(--black);
  box-sizing: border-box;
  bottom: 0;
  color: var(--white);
  left: 0;
  padding: 1em;
  position: absolute;
  width: 100%;

  a {
    color: var(--white);
    font-weight: 700;

    &:visited {
      color: var(--white);
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
