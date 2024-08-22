'use client';
import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';

import { theme } from '../theme';
import { useState, useEffect } from 'react';
//import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import '@/styles/globals.css';
import '@/styles/styles.css';
import '@/styles/gradient_border.css';
//
//type ColorScheme = 'light' | 'dark';

/*export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};*/

/*
export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}*/

import { Provider, useDispatch } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '../rtk/store/store';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { GlobalProvider } from '@/global/context/ContextGlobal';
import { useCookies } from 'react-cookie';
import { setAuthToken } from '@/rtk/features/authSlice';
import { AuthProvider } from '@/global/context/AuthProvider';
import { TailwindClassesGenerator } from '@/components/__atoms/TailwindClassesGeneraor/TailwindClassesGenerator';
//import '../styles/globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  


  return (
    <html lang="en" 
    //className='h-full'
    >
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          // crossOrigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&Inter:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="font-roboto bg-white dark:bg-adjGray-900 h-full">
      <GlobalProvider>
        <MantineProvider
          theme={theme}
          //theme={{ colorScheme }}
          // withGlobalStyles
          // withNormalizeCSS
        >
          <Provider store={store}>
            <AuthProvider>
            <PersistGate loading={null} persistor={persistor}>
              <div
                className="dark:bg-adjGray-900 min-h-screen h-full
                text-black dark:text-white
    flex flex-col relative 
    "
              >
               
                {children}
                
              </div>
            </PersistGate>
            </AuthProvider>
          </Provider>
        </MantineProvider>
        </GlobalProvider>
        <TailwindClassesGenerator/>
      </body>
    </html>
  );
};

export default RootLayout;

//https://www.tailwindawesome.com/resources/landwind/demo
