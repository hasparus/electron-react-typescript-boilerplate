import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'react-emotion';

const Container = styled.div`
  .container {
    position: absolute;
    top: 30%;
    left: 10px;
    text-align: center;
  }

  .container h2 {
    font-size: 5rem;
  }

  .container a {
    font-size: 1.4rem;
  }
`;

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
        </Container>
      </div>
    );
  }
}
