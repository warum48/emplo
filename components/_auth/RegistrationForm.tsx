'use client';
import React, { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, PasswordInput, Button, Text } from '@mantine/core';
import './styles.css'; // Ensure your custom CSS for the animation is imported
import { ParticlesComponent } from '../Particles/Particles';
import { useRouter } from 'next/navigation';
import { useLazyMeQuery, useLoginMutation } from '@/rtk/queries/authApi'; //useMeQuery
import { useDispatch, useSelector } from 'react-redux';
import { setAuthState, setAuthToken } from '@/rtk/slices/authSlice';
import { useCookies } from 'react-cookie';
import { RootState } from '@/rtk/store/store';
import { Debugger } from '../__atoms/Debugger/Debugger';
import Link from 'next/link';
import { Routes } from '@/global/ROUTES';

export const RegistrationForm = () => {
  //const formState = useSelector((state: RootState) => state.authForm);
  const dispatch = useDispatch();
  const router = useRouter();
  const form = useForm({
    initialValues: {
      email: '',
      password: '', 
      first_name: '',
      last_name: '',
      password_confirm: '',
    },
    validate: {}
  });

  useEffect(() => {
    const formElement = document.getElementById('auth-form');
    formElement?.classList.add('animate-form');
  }, []);

  const [token, setToken] = React.useState('');
  const [login, { isLoading: isLoginLoading, error: loginError, data: loginData }] =
    useLoginMutation();
  const [fetchMe, { isLoading: isMeLoading, error: meError, data: meData }] = useLazyMeQuery();
  const [cookiesToken, setCookieToken] = useCookies(['jwt_token']);

  const tokenInStore = useSelector((state: RootState) => state.auth.token);

  const handleLogin = async () => {
    try {
      //const result = await login(form.values).unwrap(); 
      //console.log('result.jwt_token:', result.jwt_token);
      //setCookieToken('jwt_token', result.jwt_token, { path: '/' });
      //setToken(result.jwt_token);
      //dispatch(setAuthToken({ token: result.jwt_token }));
      //router.push('/dashboard');

    } catch (err) {
      console.error('Failed to login:', err);
    }
  };
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

  const onSubmit = (values: any) => {
    handleLogin();
  };

  return (
    
        <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
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
          <Button
            type="submit"
            fullWidth
            className="mb-4"
            // bg-purple-600 hover:bg-purple-700
            //!!onClick={() => router.push('/dashboard')}
          >
            Зарегистрироваться
          </Button>
          <div className="flex justify-start">
            
            <Link href={Routes.AUTH} className='link-default'><Text  size="sm">
              Войти в аккаунт
            </Text></Link>
          </div>
          
        </form>

  );
};

//export default AuthorizationForm;
