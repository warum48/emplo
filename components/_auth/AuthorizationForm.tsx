'use client';
import React, { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, PasswordInput, Button, Text } from '@mantine/core';
import './styles.css'; // Ensure your custom CSS for the animation is imported
import { ParticlesComponent } from '../Particles/Particles';
import { useRouter } from 'next/navigation';
import { useLoginMutation, useMeQuery } from '@/rtk/services/authApi';
import { useDispatch } from 'react-redux';
import { setAuthState } from '@/rtk/features/authSlice';

const AuthorizationForm = () => {
  const router = useRouter();
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
  });

  useEffect(() => {
    const formElement = document.getElementById('auth-form');
    formElement?.classList.add('animate-form');
  }, []);

 
  const [loginUser, { data, error, isLoading, isSuccess: isLoginSuccess  }] = useLoginMutation();
  //const [login, { data: loginData, isSuccess: isLoginSuccess }] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = (values: any) => {
    handleSearch(values);
  };

  const handleSearch = async (values:any) => {
    try {
     // await searchCandidates({ specialty, area }).unwrap();
    //  const { data: results } = await searchCandidates({ specialty, area }).unwrap();
      //const results = await searchCandidates({ specialty, area }).unwrap();
      const results = await loginUser(values).unwrap();
      console.log('values-login:', values)  
        //dispatch(setSearchResults(results));
       
      
    } catch (err) {
      console.error('Failed to search candidates:', err);
    }
  };

  //--------
  //const dispatch = useDispatch<AppDispatch>();
 // const [login, { data: loginData, isSuccess: isLoginSuccess }] = useLoginMutation();
  const { data: userData, refetch: refetchUser } = useMeQuery(undefined, {
    skip: !isLoginSuccess,
  });

  useEffect(() => {
    console.log('isLoginSuccess', isLoginSuccess);
    if (isLoginSuccess) {
      refetchUser();
    }
  }, [isLoginSuccess, refetchUser]);

  useEffect(() => {
    if (userData) {
      dispatch(setAuthState({ isAuthenticated: true, user: userData }));
      router.push('/dashboard')
    }
  }, [userData, dispatch]);

  /*const handleLogin = async () => {
    await login({ username: 'test', password: 'password' });
  };*/

  return (
    <div
      className="flex items-center justify-center bg-gray-100 flex-grow relative
    bg-gradient-to-b
    from-fuchsia-950/85 via-rose-500/75 to-rose-900/95
    "
    >
      <div
        id="particles-js"
        className={`absolute top-0 left-0 h-full w-full overflow-hidden transition-all duration-500
                                
                                `}
      >
        <ParticlesComponent />
      </div>

      <div
        id="auth-form"
        className="w-full max-w-md p-8 
       
        form-paper
        shadow-md rounded-lg transform transition-transform duration-500"
        // bg-white bg-opacity-95 text-gray-900  dark:text-white dark:bg-customGray-950/85
      >
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
            // bg-purple-600 hover:bg-purple-700
            //!!onClick={() => router.push('/dashboard')}
          >
            Войти
          </Button>
          <div className="flex justify-between">
            <Text component="a" href="#" size="sm">
              Забыил пароль?
            </Text>
            <Text component="a" href="#" size="sm">
              Зарегистрироваться
            </Text>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthorizationForm;
