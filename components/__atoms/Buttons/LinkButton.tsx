import { Anchor, Group } from '@mantine/core';
import * as React from 'react';
import { Preloader } from '../Preloader/Preloader';

type TChildren = React.ReactNode;

type TProps = {
  children: TChildren;
  onClick: () => void;
  colorScheme?: string;
  disabled?: boolean;
  loading?: boolean;
  [key: string]: any;
};

export const LinkButton = ({ children, onClick, colorScheme = 'light', disabled,  loading=false, ...props }: TProps) => {
  return (
    <Group gap={'xs'}>
    <Anchor
      // mt='lg'
      className={`${colorScheme == 'light' ? 'text-black enabled:hover:text-pink-800' : 'text-white enabled:hover:text-pink-200'}   text-md
      ${disabled ? 'cursor-not-allowed opacity-50 no-underline hover:no-underline' : 'cursor-pointer'}
      `}
      component="button"
      size="sm"
      onClick={onClick}
      {...props}
      disabled={disabled}
    >
      {children} 
    </Anchor>
    {loading &&
    <Preloader/>
}
    </Group>
  );
};
