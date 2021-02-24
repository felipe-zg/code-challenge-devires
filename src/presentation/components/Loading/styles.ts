import styled, { keyframes } from 'styled-components';

const HourGlass = keyframes`
   0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
`;

export const Load = styled.div`
  display: inline-block;
  position: relative;
  width: 8rem;
  height: 8rem;

  &:after {
    content: ' ';
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 0.8rem;
    box-sizing: border-box;
    border: 3.2rem solid #000;
    border-color: #000 transparent #000 transparent;
    animation: ${HourGlass} 1.2s infinite;
  }
`;
