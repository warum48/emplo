'use client';
import React, { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, PasswordInput, Button, Text } from '@mantine/core';
import './styles.css'; // Ensure your custom CSS for the animation is imported
import { RegisterRequest, useRegisterMutation } from '@/rtk/queries/authApi'; //useMeQuery
import Link from 'next/link';
import { Routes } from '@/global/ROUTES';
import { HTMLError } from '../Errors/HTMLError';
import { BasicError } from '../Errors/BasicError';
import { isFetchBaseQueryError } from '@/types/_typeguards/isFetchBaseQueryError';
import { isExtendedFetchBaseQueryError } from '@/types/_typeguards/isExtendedFetchBaseQueryError';
import { useAuthTokenHandler } from './useAuthTokenHandler ';

export const RegistrationForm = () => {
  const [showError, setShowError] = React.useState(false);
  const { handleToken } = useAuthTokenHandler();
  const form = useForm<RegisterRequest & { password_confirm: string }>({
    initialValues: {
      username: '',
      password: '',
      email: '',
      first_name: '',
      last_name: '',
      password_confirm: '',
    },
    validate: {},
    onValuesChange: (values) => {
      console.log(values);
      setShowError(false);
    },
  });

  useEffect(() => {
    const formElement = document.getElementById('auth-form');
    formElement?.classList.add('animate-form');
  }, []);

  const [register, { isLoading: isRegisterLoading, error: registerError, data: registerData }] =
    useRegisterMutation();

  const handleLogin = async () => {
    try {
      const { password_confirm, ...actualFormValues } = form.values;
      const result = await register(actualFormValues).unwrap();
      //setShowError(false);
      console.log('result', result);
      if (result?.jwt_token) {
        handleToken(result?.jwt_token);
      }
      if (result?.data?.error) {
        setShowError(true);
      } else {
        setShowError(false);
      }
    } catch (err) {
      console.error('Failed to register:', err);
      setShowError(true);
    }
  };

  const onSubmit = (values: any) => {
    handleLogin();
  };

  React.useEffect(() => {
    setShowError(false);
  }, [form.values]);

  return (
    <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
      <TextInput
        label="Псевдоним"
        placeholder="Ваш псевдоним"
        {...form.getInputProps('username')}
        className="mb-4 "
      />
      <TextInput
        label="Имя"
        placeholder="Ваше имя"
        {...form.getInputProps('first_name')}
        className="mb-4 "
      />
      <TextInput
        label="Фамилия"
        placeholder="Ваша фамилия"
        {...form.getInputProps('last_name')}
        className="mb-4 "
      />
      <TextInput
        label="E-mail"
        placeholder="Ваш e-mail"
        {...form.getInputProps('email')}
        className="mb-4 "
      />
      <PasswordInput
        label="Пароль (не менее 8 символов)"
        placeholder="Введите пароль"
        {...form.getInputProps('password')}
        className="mb-4"
      />
      <PasswordInput
        label="Повторите пароль"
        placeholder="Повторите пароль"
        {...form.getInputProps('password_confirm')}
        className="mb-4"
      />
      <Button type="submit" fullWidth className="mb-4">
        Зарегистрироваться
      </Button>
      {showError && registerData && registerData?.error && (
        <HTMLError error={registerData?.error} />
      )}
      {showError &&
        registerError &&
        isFetchBaseQueryError(registerError) &&
        isExtendedFetchBaseQueryError(registerError) && (
          <BasicError
            error={registerError?.data?.error || registerError?.data || registerError}
            className="mb-4"
          />
        )}
      <div className="flex justify-start">
        <Link href={Routes.AUTH} className="link-default">
          <Text size="sm">Войти в аккаунт</Text>
        </Link>
      </div>
    </form>
  );
};

/* SUCC RESPONSE 
{
    "msg": "\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c wa_rum \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d",
    "jwt_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2LCJ1c2VybmFtZSI6IndhX3J1bSIsImV4cCI6MTcyNjc2MTgyNX0.Pm4_wmWNzsTnAQhFhNXpLzIe8Nh6lEGnv7dEdlpR_s8"
}
    */
