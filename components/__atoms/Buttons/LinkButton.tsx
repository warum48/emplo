import { Anchor } from '@mantine/core';
import * as React from 'react';

type TChildren = React.ReactNode;

type TProps = {
  children: TChildren;
  onClick: () => void;
  colorScheme?: string;
  [key: string]: any;
};

export const LinkButton = ({ children, onClick, colorScheme = 'light', ...props }: TProps) => {
  return (
    <Anchor
      // mt='lg'
      className={`${colorScheme == 'light' ? 'text-black hover:text-pink-800' : 'text-white hover:text-pink-200'}   text-md`}
      component="button"
      size="sm"
      onClick={onClick}
      {...props}
    >
      {children}
    </Anchor>
  );
};
