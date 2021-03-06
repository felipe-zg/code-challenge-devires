import React from 'react';
import * as S from './styles';

type ButtonProps = {
  type: string;
  bgColor?: string;
  color?: string;
} & React.ComponentPropsWithoutRef<'button'>;

const Button: React.FC<ButtonProps> = ({
  type,
  bgColor,
  color,
  children,
  ...props
}) => {
  return (
    <S.Container backgroundColor={bgColor} type={type} {...props} color={color}>
      {children}
    </S.Container>
  );
};
export default Button;
