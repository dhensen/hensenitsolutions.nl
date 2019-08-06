import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/diensten">Diensten</Link>
      </li>
      <li>
        <Link to="/kubernetes-freelancer-inhuren">Kubernetes</Link>
      </li>
      <li>
        <Link to="/codereview-guidelines">Code Reviews</Link>
      </li>
      <li>
        <a href="mailto:info@hensenitsolutions.nl">Contact</a>
      </li>
    </ul>
  </Container>
);

export default Nav;
