import styled, { css } from 'styled-components/native';
import ToDoImage from '../../assets/images/insertName-img.png';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding: 0px 44px;
`;

export const ImageToDo = styled.Image.attrs({
  source: ToDoImage,
})``;

export const TitleWrapper = styled.View`
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 70px;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.violet[800]};
  `}
`;

export const AppName = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.violet[800]};
    font-size: 18px;
  `}
`;

export const Divider = styled.View`
  height: 35px;
`;
