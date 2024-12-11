import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  justify-content: flex-start;
  width: 100%;
  gap: 10px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.violet[800]};
    font-family: ${theme.fonts.regular};
    font-size: 14px;
  `}
`;

export const Input = styled.TextInput`
  ${({ theme }) => css`
    border-width: 1px;
    border-color: ${theme.colors.violet[800]};
    width: 100%;
    border-radius: 10px;
    height: 50px;
    padding: 0px 14px;
  `}
`;
