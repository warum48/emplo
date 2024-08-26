'use client';
import React, { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, PasswordInput, Button, Text } from '@mantine/core';
import './styles.css'; // Ensure your custom CSS for the animation is imported
import { ParticlesComponent } from '../Particles/Particles';
import { useRouter } from 'next/navigation';
import { useLazyMeQuery, useLoginMutation,  } from '@/rtk/queries/authApi'; //useMeQuery
import { useDispatch, useSelector } from 'react-redux';
import { setAuthState, setAuthToken } from '@/rtk/slices/authSlice';
import { useCookies } from 'react-cookie';
import { RootState } from '@/rtk/store/store';
import { Debugger } from '../__atoms/Debugger/Debugger';

const AuthorizationForm = () => {
  const dispatch = useDispatch();
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

 /*
  const [loginUser, { data, error, isLoading, isSuccess: isLoginSuccess  }] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = (values: any) => {
    handleSearch(values);
  };

  const handleSearch = async (values:any) => {
    try {
      const results = await loginUser(values).unwrap();
      console.log('values-login:', values)  
    } catch (err) {
      console.error('Failed to search candidates:', err);
    }
  };

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
  */

  //const [username, setUsername] = React.useState('');
  //const [password, setPassword] = React.useState('');
  const [token, setToken] = React.useState('');
  const [login, { isLoading: isLoginLoading, error: loginError, data: loginData }] = useLoginMutation();
  const [fetchMe, { isLoading: isMeLoading, error: meError, data: meData }] = useLazyMeQuery();
  const [cookiesToken, setCookieToken] = useCookies(['jwt_token']);

  const tokenInStore = useSelector((state: RootState) => state.auth.token);

  const handleLogin = async () => {
    try {
      const result = await login( form.values).unwrap(); // username, password
      console.log('RESULTTTT', result);
      console.log('RESULTTTT', result.jwt_token);
      setCookieToken('jwt_token', result.jwt_token, { path: '/' });
      //const cookie = document.cookie; // Assuming the cookie is set here
      //console.log('cookie', cookiesToken);
      const bearerToken = `Bearer ${result.jwt_token}`;
      //setToken(bearerToken);
      setToken(result.jwt_token);
      dispatch(setAuthToken({ token: result.jwt_token }));  

      // Fetch user details
      //fetchMe({ 'Authorization': bearerToken });
      fetchMe();
    } catch (err) {
      console.error('Failed to login:', err);
    }
  };

  useEffect(() => {
    console.log('USE EF TOKEN', token);
    if (token) {
      //fetchMe({ 'Authorization': 'Bearer ' + token });
      console.log('DISpatching');
      dispatch(setAuthState({ isAuthenticated: true, token: token }));   // user: '', 
      //fetchMe();
    }
  }, [token, fetchMe]);

  useEffect(() => {
    console.log('USE EF TOKEN_in_Store', tokenInStore);
    if (tokenInStore) {
      //fetchMe({ 'Authorization': 'Bearer ' + token });
      //dispatch(setAuthState({ isAuthenticated: true, user: '', token: token }));  
      fetchMe();
    }
  }, [tokenInStore]); //, fetchMe

  useEffect(() => {
    console.log('meData', meData);
    if (meData) {
      dispatch(setAuthState({ isAuthenticated: true,  token: token }));  //user: meData,
      router.push('/dashboard')
    }
  }, [meData, dispatch]);

  

  const onSubmit = (values: any) => {
   // handleSearch(values);
   handleLogin();
  };



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
         <Debugger>ts{tokenInStore}</Debugger>
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
