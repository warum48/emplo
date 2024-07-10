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
      '#ba2557',
      '#8c1d42',
      '#5e1531',
      '#300C0D', // darkest pink
    ],
  },
  primaryColor: 'myCustomPink',
});
