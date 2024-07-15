'use client';

import { createTheme } from '@mantine/core';

export const theme = createTheme({
  /* Put your mantine theme override here */
  colors: {
    purple: [
      '#f3e8ff', // lightest
      '#e4c6ff',
      '#d1a3ff',
      '#bc80ff',
      '#a45cff', // default
      '#8435e0',
      '#6a0db3',
      '#4e0084',
      '#330054',
      '#190026', // darkest
    ],
    myCustomRed: [
      '#F9E5E8',
      '#F0B8C1',
      '#E68A9A',
      '#DC5C73',
      '#D22E4C',
      '#C90024',
      '#A2001E',
      '#7D0018',
      '#580012',
      '#33000B',
    ],
    myCustomPink: [
      '#FDE7EA', // lightest pink
      '#F9C2C8',
      '#F59CA7',
      '#F17785',
      '#ED5263',
      '#E82D41', // base pink
      '#9e3472', //'#824089',// '#ba2557',
      // this color is good for main button: '#863866',
      '#67286b', //'#8c1d42',
      '#5e1531',
      '#300C0D', // darkest pink
    ],
    dark: [
      '#dfe4ea',
      '#a4b0be',
      '#747d8c',
      '#57606f',
      '#2f3542',
      '#1e272e',
      '#202831', // '#131a21',
      '#0e1114',//'#0e1114',
      '#080a0c',//'#080a0c',
      '#040506',//'#040506',
    ],
    customGray:  [
      '#f5f5f4',
      '#e7e7e5',
      '#d6d6d4',
      '#b7b7b5',
      '#9a9a97',
      '#7c7c79',
      '#666664',
      '#4d4d4b',
      '#333349',
      '#212024', //'#24222a',
      '#14161d',
    ]
  },
  primaryColor: 'myCustomPink',
});
