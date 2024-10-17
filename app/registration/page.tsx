import React from 'react';
import Head from 'next/head';
import AuthorizationForm from '@/components/_auth/AuthorizationForm';
import Header from '@/components/Header/Header';
import { AuthRegFormContainer } from '@/components/_auth/AuthRegFormContainer';
import { RegistrationForm } from '@/components/_auth/RegistrationForm';
const AuthPage = () => {
    return (
      <>
        <Head>
          <title>Регистрация</title>
        </Head>
        <Header/>
        <AuthRegFormContainer>
        <RegistrationForm />
        </AuthRegFormContainer> 
      </>
    );
  };
  
  export default AuthPage;