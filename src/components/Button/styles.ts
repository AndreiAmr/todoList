import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.violet[800]};
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: relative;
  border-radius: 10px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.singletons.white};
  `}
`;

export const IconRightWrapper = styled.View`
  position: absolute;
  right: 20px;
`;
