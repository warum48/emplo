import { useMantineColorScheme } from '@mantine/core';
import { LinkButton } from '../__atoms/Buttons/LinkButton';

type TProps = {
  extendedSearch: boolean;
  setExtendedSearch: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ExpandSearchButton = ({ extendedSearch, setExtendedSearch }: TProps) => {
    const { colorScheme } = useMantineColorScheme();
  return (
    <div className="flex justify-end items-center z-20">
      <div
        className={`flex justify-end items-center bg-white 
                             dark:bg-gray-950 
                               ${extendedSearch ? 'bg-opacity-70 dark:bg-opacity-70' : 'bg-opacity-30 dark:bg-opacity-30'} 
                              bg-opacity-30 w-fit px-4 py-2`}
        //dark:bg-black dark:bg-opacity-30
        // dark:bg-black dark:bg-opacity-30
      >
        {/*<a href="" className="underline">
          Расширенный поиск
        </a>*/}

        <LinkButton onClick={() => setExtendedSearch(!extendedSearch)} colorScheme={colorScheme == 'dark'  || colorScheme == 'light' && !extendedSearch ? 'dark' : 'light'}>
          {!extendedSearch ? 'Расширенный поиск' : 'Быстрый поиск'}
        </LinkButton>
      </div>
    </div>
  );
};
