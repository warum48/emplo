import React from 'react';
import Head from 'next/head';
import AuthorizationForm from '@/components/_auth/AuthorizationForm';
import Header from '@/components/Header/Header';
import { AuthRegFormContainer } from '@/components/_auth/AuthRegFormContainer';
const AuthPage = () => {
    return (
      <>
        <Head>
          <title>Authorization</title>
        </Head>
        <Header/>
        <AuthRegFormContainer>
        <AuthorizationForm />
        </AuthRegFormContainer> 
      </>
    );
  };
  
  export default AuthPage;