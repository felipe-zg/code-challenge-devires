import styled from 'styled-components';

interface ContainerProps {
  backgroundColor: string | undefined;
}

interface TextProps {
  color: string | undefined;
}

export const Container = styled.button<ContainerProps>`
  background: ${(props) => props.backgroundColor || '#f9fafb'};
  border-radius: 0.6rem;
  color: rgb(28, 30, 33);
  cursor: pointer;
  font-size: 1.7rem;
  font-weight: 700;
  line-height: 2.5rem;
  margin-top: 3rem;
  width: 100%;
  transition: all 0.1s ease-in;
  outline: none;

  &::focus {
    outline: none;
  }

  &::hover {
    background: white;
    color: rgb(92, 61, 143);
  }

  &:active {
    background: rgb(200, 201, 204);
    color: rgb(28, 30, 33);
  }
`;

export const text = styled.text<TextProps>`
  color: ${(props) => props.color || '#000'};
`;
