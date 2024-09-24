import { Divider } from '@mantine/core';

export const FiltersOverTableContainer = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="filters-over-table">
      <div className="bg-gray-300/25 dark:bg-gray-700/15 flex items-center p-4 flex-grow ">
        Фильтры
      </div>
      <Divider
        orientation="vertical"
        className="text-white bg-white border-white h-full"
        p="0"
        m="0"
      />

      <div className="justify-start flex  items-center gap-4 rounded-xl  p-4 py-4 flex-wrap">
        {children}
      </div>
    </div>
  );
};
