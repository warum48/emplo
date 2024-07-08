'use client';
import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript} from '@mantine/core';

import { theme } from '../theme';
import { useState, useEffect } from 'react';
//import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import '@/styles/globals.css';
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



import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '../store/store';
//import '../styles/globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {

 


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
      
      <MantineProvider 
      theme={theme}
    //theme={{ colorScheme }}
    // withGlobalStyles 
    // withNormalizeCSS
     >
        
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              {children}
            </PersistGate>
          </Provider>
        </MantineProvider>
        
      </body>
    </html>
  );
};

export default RootLayout;
