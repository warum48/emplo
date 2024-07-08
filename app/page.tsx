import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import TailwindExample from '@/components/TailwindExample.tsx/TailwindExample';
import { Center } from '@mantine/core';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <TailwindExample/>
    </>
  );
}
