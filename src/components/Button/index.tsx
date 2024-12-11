import React from 'react';
import * as S from './styles';
import { TouchableOpacityProps } from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  iconRight?: JSX.Element;
};

export const Button = ({ title, iconRight, ...rest }: ButtonProps) => {
  return (
    <S.Container {...rest}>
      <S.Title>{title}</S.Title>
      {iconRight && <S.IconRightWrapper>{iconRight}</S.IconRightWrapper>}
    </S.Container>
  );
};
