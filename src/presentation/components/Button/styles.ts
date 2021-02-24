import styled from 'styled-components';

interface ContainerProps {
  backgroundColor: string | undefined;
}

export const Container = styled.button<ContainerProps>`
  background: ${(props) => props.backgroundColor || '#f9fafb'};
  border-radius: 0.6rem;
  color: ${(props) => props.color || '#000'};
  cursor: pointer;
  font-size: 1.7rem;
  font-weight: 700;
  line-height: 2.5rem;
  margin-top: 3rem;
  width: 100%;
  transition: all 0.1s ease-in;
  outline: none;
  padding: 0.4rem 0;

  &:focus {
    outline: none;
  }

  &:hover {
    background: white;
    color: rgb(92, 61, 143);
    transition: all 0.5s;
  }

  &:active {
    background: rgb(200, 201, 204);
    color: rgb(28, 30, 33);
  }
`;
