import React from 'react';
import { useForm } from '@mantine/form';
import { TextInput, PasswordInput, Button, Text } from '@mantine/core';
import Head from 'next/head';
import AuthorizationForm from '@/components/_auth/AuthorizationForm';
import { ParticlesComponent } from '@/components/Particles/Particles';
import Header from '@/components/Header/Header';
const AuthPage = () => {
    return (
      <>
        <Head>
          <title>Authorization</title>
        </Head>
        <Header/>
        <AuthorizationForm />
      </>
    );
  };
  
  export default AuthPage;