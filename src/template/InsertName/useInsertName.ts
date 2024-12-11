import { useState } from 'react';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const useInsertName = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const onPressButton = async () => {
    try {
      await AsyncStorage.setItem('userName', inputValue);
      router.navigate('/(tabs)/calendario');
    } catch (error) {
      Alert.alert('deu erro, verifique o console');
      console.log({ error });
    }
  };

  return {
    inputValue,
    setInputValue,
    onPressButton,
  };
};
