import React from 'react';
import * as S from './styles';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';

type InputProps = TextInputProps & {
  label: string;
};

export const Input = ({ label, ...rest }: InputProps) => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input {...rest} placeholderTextColor={theme.colors.violet[800]} />
    </S.Container>
  );
};
