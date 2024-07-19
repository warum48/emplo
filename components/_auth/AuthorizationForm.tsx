'use client'
import React, { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, PasswordInput, Button, Text } from '@mantine/core';
import './styles.css'; // Ensure your custom CSS for the animation is imported
import { ParticlesComponent } from '../Particles/Particles';

const AuthorizationForm = () => {
  const form = useForm({
    initialValues: {
      name: '',
      password: '',
    },
  });

  useEffect(() => {
    const formElement = document.getElementById('auth-form');
    formElement?.classList.add('animate-form');
  }, []);

  return (
    <div className="flex items-center justify-center bg-gray-100 flex-grow relative
    bg-gradient-to-b
    from-fuchsia-950/85 via-rose-500/75 to-rose-900/95
    ">

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
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            label="Логин"
            placeholder="Введите ваш логин"
            {...form.getInputProps('name')}
            className="mb-4 "
          />
          <PasswordInput
            label="Пароль"
            placeholder="Введите пароль"
            {...form.getInputProps('password')}
            className="mb-4"
          />
          <Button type="submit" fullWidth className="mb-4" 
          // bg-purple-600 hover:bg-purple-700
          >
            Войти
          </Button>
          <div className="flex justify-between">
            <Text component="a" href="#"  size="sm">
              Забыил пароль?
            </Text>
            <Text component="a" href="#"  size="sm">
              Зарегистрироваться
            </Text>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthorizationForm;
