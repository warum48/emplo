import React from 'react';
import { Card, Text } from '@mantine/core';
import Link from 'next/link';

type VacanciesList = {
  name: string;
  employees: any[];
};

type VacancyProps = {
  vacancies: VacanciesList[];
};

export const VacancyListComponent: React.FC<VacancyProps> = ({ vacancies }) => {
  return (
    <div className=" h-full">
      {vacancies.map((vacancy, index) => (
        
          <Link href='' className=" hover:bg-slate-200 block px-4 py-2">
            {vacancy.name}
          </Link>
        
      ))}
    </div>
  );
};

//export default VacancyListComponent;
