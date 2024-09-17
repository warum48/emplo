import { Debugger } from '@/components/__atoms/Debugger/Debugger';

//import classes from './autogrid.module.css';
import { JSONViewer } from '@/components/__atoms/JSONViewer/JSONViewr';
import { CardContainer } from '@/components/__atoms/Card/CardContainer';
import { useGetVacanciesQuery } from '@/rtk/queries/vacancy';
import CandidateCard from '../CandidateCard';
import {VacancyCardPreview} from './VacancyCardPreview';
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
      <div className="container grid gap-4 grid-cols-[repeat(auto-fit,minmax(480px,1fr))] transition-all duration-400 ease-out overflow-hidden">
      {data_vacancies?.items?.map((vacancy:any, index:number) => (
          <CardContainer>
            <VacancyCardPreview data={vacancy} />
            
          </CardContainer>
        ))}
        {data_vacancies?.items?.map((vacancy:any, index:number) => (
          <CardContainer>
           <VacancyCardPreview data={vacancy} />
          
          </CardContainer>
        ))}
        {data_vacancies?.items?.map((vacancy:any, index:number) => (
          <CardContainer>
            <VacancyCardPreview data={vacancy} />
            
          </CardContainer>
        ))}
      </div>
    </>
  );
};
