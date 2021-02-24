import styled from 'styled-components';

export const Container = styled.div``;

export const NewTodo = styled.div`
  align-items: center;
  background: rgb(41, 41, 41);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6.4rem 0;
`;

export const Form = styled.form`
  width: 30rem;

  @media (max-width: 350px) {
    width: 25rem;
  }
`;

export const Heading2 = styled.h2`
  margin-block-start: 0;
  color: #fff;
`;

export const Body = styled.div`
  display: grid;
  justify-items: center;
  padding-top: 1rem;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 1.6rem;
  margin: 1rem;
  list-style-type: none;
  font-size: 1.7rem;
  color: rgb(28, 30, 33);
  line-height: 2.6rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
