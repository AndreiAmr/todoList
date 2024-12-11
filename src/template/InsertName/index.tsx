import React from 'react';
import * as S from './styles';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { ArrowRight } from '@/src/assets/icons/arrow-right';
import { useInsertName } from './useInsertName';

export const InsertName = () => {
  const { inputValue, setInputValue, onPressButton } = useInsertName();

  console.log({ inputValue });

  return (
    <S.SafeArea>
      <S.Container>
        <S.ImageToDo />

        <S.TitleWrapper>
          <S.Title>Seja bem vindo ao </S.Title>
          <S.AppName>DailyTasks</S.AppName>
        </S.TitleWrapper>

        <Input
          label="Como gostaria de ser chamado(a):"
          placeholder="Insira aqui"
          value={inputValue}
          onChangeText={setInputValue}
        />

        <S.Divider />

        <Button
          title="Entrar no app"
          iconRight={<ArrowRight />}
          onPress={onPressButton}
        />
      </S.Container>
    </S.SafeArea>
  );
};
