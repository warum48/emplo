import { Box, Center, Loader } from '@mantine/core';
import * as React from 'react';
import classes from './Preloader.module.css';   

export const Preloader = () => {
  return (
    <Center>
      {/*<Loader
      // color="blue"
  />*/}
      <Box h={40} w={40}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 21"
          style={{ width: '100%', height: '100%' }}
          width="24"
          height="21"
          id="heart"
        >
          <path
          //className={classes.line1}
            fill="none"
            stroke="#99999933"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.84 2.61a5.5 5.5 0 0 0-7.78 0L12 3.67l-1.06-1.06a5.501 5.501 0 0 0-7.78 7.78l1.06 1.06L12 19.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          ></path>
          <path
          className={classes.line2}
            fill="none"
            stroke="#15ab9f"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.84 2.61a5.5 5.5 0 0 0-7.78 0L12 3.67l-1.06-1.06a5.501 5.501 0 0 0-7.78 7.78l1.06 1.06L12 19.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          ></path>
        </svg>
      </Box>
    </Center>
  );
};
