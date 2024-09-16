import { Debugger } from '@/components/__atoms/Debugger/Debugger';

//import classes from './autogrid.module.css';
import { JSONViewer } from '@/components/__atoms/JSONViewer/JSONViewr';
import { CardContainer } from '@/components/__atoms/Card/CardContainer';
import { useGetVacanciesQuery } from '@/rtk/queries/vacancy';
import CandidateCard from '../CandidateCard';
import VacancyCard from '../VacancyCard';
import Link from 'next/link';



type TProps = {
  results?: any;
};

export const VacanciesGrid = ({ results }: TProps) => {
    const { data: data_vacancies, error, isLoading } = useGetVacanciesQuery();
  return (
    <>
      <Debugger>
        <JSONViewer data={results} />
      </Debugger>
      <div className="container grid gap-4 grid-cols-[repeat(auto-fit,minmax(480px,1fr))] transition-all duration-400 ease-out">
      {data_vacancies?.items?.map((vacancy:any, index:number) => (
          <CardContainer>
            <VacancyCard data={vacancy} />
            <JSONViewer data={vacancy} />
            <Link href={'/dashboard/vacancies/' + vacancy.id} >Перейти</Link>
          </CardContainer>
        ))}
        {data_vacancies?.items?.map((vacancy:any, index:number) => (
          <CardContainer>
           <VacancyCard data={vacancy} />
           <Link href={'/dashboard/vacancies/' + vacancy.id} >Перейти</Link>
          </CardContainer>
        ))}
        {data_vacancies?.items?.map((vacancy:any, index:number) => (
          <CardContainer>
            <VacancyCard data={vacancy} />
            <Link href={'/dashboard/vacancies/' + vacancy.id} >Перейти</Link>
          </CardContainer>
        ))}
      </div>
    </>
  );
};
