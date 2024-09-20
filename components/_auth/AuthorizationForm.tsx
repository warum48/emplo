// components/AuthorizationForm.tsx
'use client';
import React, { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, PasswordInput, Button, Text } from '@mantine/core';
import './styles.css'; 
import { useLoginMutation } from '@/rtk/queries/authApi';
import Link from 'next/link';
import { Routes } from '@/global/ROUTES';
import { useAuthTokenHandler } from './useAuthTokenHandler ';
//import { useAuthTokenHandler } from '@/hooks/useAuthTokenHandler'; // Import the custom hook

const AuthorizationForm = () => {
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
    validate: {},
  });

  useEffect(() => {
    const formElement = document.getElementById('auth-form');
    formElement?.classList.add('animate-form');
  }, []);

  const [login, { isLoading: isLoginLoading, error: loginError, data: loginData }] =
    useLoginMutation();
  
  // Use the custom hook to handle the token
  const { handleToken } = useAuthTokenHandler();

  const handleLogin = async () => {
    try {
      const result = await login(form.values).unwrap();
      handleToken(result.jwt_token); // Use the hook to handle the token logic
    } catch (err) {
      console.error('Failed to login:', err);
    }
  };

  const onSubmit = (values: any) => {
    handleLogin();
  };

  return (
    <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
      <TextInput
        label="Логин"
        placeholder="Введите ваш логин"
        {...form.getInputProps('username')}
        className="mb-4"
      />
      <PasswordInput
        label="Пароль"
        placeholder="Введите пароль"
        {...form.getInputProps('password')}
        className="mb-4"
      />
      <Button type="submit" fullWidth className="mb-4">
        Войти
      </Button>
      <div className="flex justify-between">
        <Text component="a" href="#" size="sm">
          Забыли пароль?
        </Text>
        <Link href={Routes.REGISTRATION} className="link-default">
          <Text size="sm">Зарегистрироваться</Text>
        </Link>
      </div>
    </form>
  );
};

export default AuthorizationForm;


/*'use client';
import React, { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, PasswordInput, Button, Text } from '@mantine/core';
import './styles.css'; // Ensure your custom CSS for the animation is imported
import { useRouter } from 'next/navigation';
import { useLoginMutation } from '@/rtk/queries/authApi'; //useMeQuery
import { useDispatch, useSelector } from 'react-redux';
import { setAuthToken } from '@/rtk/slices/authSlice';
import { useCookies } from 'react-cookie';
import { RootState } from '@/rtk/store/store';
import Link from 'next/link';
import { Routes } from '@/global/ROUTES';

const AuthorizationForm = () => {
  const formState = useSelector((state: RootState) => state.authForm);
  const dispatch = useDispatch();
  const router = useRouter();
  const form = useForm({
    initialValues: formState,
    validate: {}
  });

  useEffect(() => {
    const formElement = document.getElementById('auth-form');
    formElement?.classList.add('animate-form');
  }, []);

  const [token, setToken] = React.useState('');
  const [login, { isLoading: isLoginLoading, error: loginError, data: loginData }] =
    useLoginMutation();
  const [cookiesToken, setCookieToken] = useCookies(['jwt_token']);

  const handleLogin = async () => {
    try {
      const result = await login(form.values).unwrap(); 
      console.log('result.jwt_token:', result.jwt_token);
      setCookieToken('jwt_token', result.jwt_token, { path: '/' });
      setToken(result.jwt_token);
      dispatch(setAuthToken({ token: result.jwt_token }));
      router.push('/dashboard');
    } catch (err) {
      console.error('Failed to login:', err);
    }
  };

  const onSubmit = (values: any) => {
    handleLogin();
  };

  return (
    
        <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
          <TextInput
            label="Логин"
            placeholder="Введите ваш логин"
            {...form.getInputProps('username')}
            className="mb-4 "
          />
          <PasswordInput
            label="Пароль"
            placeholder="Введите пароль"
            {...form.getInputProps('password')}
            className="mb-4"
          />
          <Button
            type="submit"
            fullWidth
            className="mb-4"
          >
            Войти
          </Button>
          <div className="flex justify-between">
            <Text component="a" href="#" size="sm">
              Забыли пароль?
            </Text>
            <Link href={Routes.REGISTRATION} className='link-default'><Text  size="sm">
              Зарегистрироваться
            </Text></Link>
          </div>
        </form>

  );
};

export default AuthorizationForm;

*/

/*
  useEffect(() => {
    console.log('USE EF TOKEN', token);
    if (token) {
      console.log('DISpatching');
      dispatch(setAuthState({ isAuthenticated: true, token: token })); 
    }
  }, [token, fetchMe]);

  useEffect(() => {
    console.log('USE EF TOKEN_in_Store', tokenInStore);
    if (tokenInStore) {
      fetchMe();
    }
  }, [tokenInStore]); 

  useEffect(() => {
    console.log('meData', meData);
    if (meData) {
      dispatch(setAuthState({ isAuthenticated: true, token: token })); //user: meData,
      router.push('/dashboard');
    }
  }, [meData, dispatch]);
  */
