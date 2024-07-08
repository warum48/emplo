'use client';

import { Button, Group, useMantineColorScheme } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { useEffect } from 'react';


type TColorScheme = 'light' | 'dark' | 'auto';
export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();



 // const [colorScheme, setColorScheme] = useLocalStorage<TColorScheme>({
 //   key: 'mantine-color-scheme',
 //   defaultValue: 'light',
 //   getInitialValueInEffect: true,
 // });

  const toggleColorScheme = (value?: TColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);

    // Sync with Tailwind
    if (nextColorScheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    // Sync the initial theme
    if (colorScheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [colorScheme]);

  return (
    <Group justify="center" mt="xl">
      <Button onClick={() => setColorScheme('light')}>Light</Button>
      <Button onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button onClick={() => setColorScheme('auto')}>Auto</Button>
    </Group>
  );
}
