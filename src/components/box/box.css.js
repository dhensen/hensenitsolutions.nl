import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 4rem;
  max-width: 1200px;

  li {
    margin-left: 30px;
  }
  ul > li {
    list-style: circle;
  }
  ol > li {
    list-style: decimal;
  }
`;
