import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 30rem;
  background-color: #d5d5d5;
  border-radius: 1rem;
  padding: 0.5rem 2rem 1rem 2rem;
  margin: 1rem;

  @media (max-width: 700px) {
    max-width: 50rem;
    margin: 0.5rem;
  }
`;
