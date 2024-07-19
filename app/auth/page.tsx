import React from 'react';
import { useForm } from '@mantine/form';
import { TextInput, PasswordInput, Button, Text } from '@mantine/core';
import Head from 'next/head';
import AuthorizationForm from '@/components/_auth/AuthorizationForm';
import { ParticlesComponent } from '@/components/Particles/Particles';
const AuthPage = () => {
    return (
      <>
        <Head>
          <title>Authorization</title>
        </Head>
        
        <AuthorizationForm />
      </>
    );
  };
  
  export default AuthPage;