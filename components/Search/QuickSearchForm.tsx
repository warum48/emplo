import { Button, Input } from "@mantine/core";
import { useState } from "react";

import { useSearchCandidatesMutation, useSearchHHCandidatesMutation } from '@/rtk/queries/candidates';
import { useDispatch } from "react-redux";
import { setSearchResults, clearSearchResults } from '@/rtk/slices/search/searchSlice';
import { setSearchHHResults } from "@/rtk/slices/search/searchHHSlice";
import { useForm } from "@mantine/form";
import { RegionsSelect } from "../DynamicFormFields/Regions";
import { SpecialitiesSelect } from "../DynamicFormFields/Specialities";
import { JSONViewer } from "../__atoms/JSONViewer/JSONViewr";
//import { setSearchHHResults } from "@/rtk/slices/searchHHSlice";


type TProps = {
    onSearch: () => void;
}

type TFormValues = {
  specialty: string;
  area: string[];//[];
}

export const QuickSearch = ({onSearch}:TProps) => {

  const [specialty, setSpecialty] = useState('');
  const [area, setArea] = useState('');
  const [searchCandidates, { data, error, isLoading }] = useSearchCandidatesMutation();
  const [searchHHCandidates, { data:data_hh, error:error_hh, isLoading:isLoading_hh }] = useSearchHHCandidatesMutation();
  const dispatch = useDispatch();
  const [showError, setShowError] = useState(false);




  const form = useForm({
    initialValues: {
      specialty: '', //'',
      area: [],//[], //'',
    },
    validate: {
      /*!!   name: (value) => (value ? null : 'Пожалуйста, укажите название вакансии'),
      professional_roles: (value) =>
        value ? null : 'Пожалуйста, укажите должность',
      area: (value) => (value ? null : 'Пожалуйста, укажите регион поиска'),
      description: (value) =>
        value && value.length >= 200
          ? null
          : 'Описание вакансии должно быть не менее 200 символов',
      type: (value) => (value ? null : 'Пожалуйста, укажите тип вакансии'),
      billing_type: (value) =>
        value ? null : 'Пожалуйста, укажите систему биллинга',
      employment: (value) =>
        value ? null : 'Пожалуйста, укажите тип занятости',
      */
    },
    onValuesChange: (values) => {
      console.log(values);
      setShowError(false);
     // setErrors(undefined);
    },
  });

  const handleSubmit = async (values: TFormValues) => {
    try {
     // await searchCandidates({ specialty, area }).unwrap();
    //  const { data: results } = await searchCandidates({ specialty, area }).unwrap();
      //const results = await searchCandidates({ specialty, area }).unwrap();
      const results = await searchCandidates({ specialty: values.specialty, area: values.area }).unwrap();
      console.log('===results', results);
      if (Array.isArray(results?.items)) {
        dispatch(setSearchResults(results));
        onSearch();
        setShowError(false);
      } else {
        console.error('Failed to search candidates: results is not an array');
        setShowError(true);
      }
    } catch (err) {
      console.error('Failed to search candidates:', err);
      setShowError(true);
    }
  };



     return(
      <div className='w-full relative flex items-center flex-col'>
       
        <form className="flex gap-4 w-full flex-col md:flex-row  justify-between items-center "
        onSubmit={form.onSubmit((values) => {
          console.log('Form submitted with values:', values);
        //  dispatch(updateJobSearchForm(values));
          handleSubmit(values);
        })}>
       {/*} <Input
          placeholder="Регион"
          size="lg"
          className="flex-grow flex-shrink-0"
          onChange={(e) => setArea(e.target.value)}
        />
        <Input
          placeholder="Профессия"
          size="lg"
          className="flex-grow flex-shrink-0"
          onChange={(e) => setSpecialty(e.target.value)}
        />*/}
        <RegionsSelect form={form} size='lg' showLabel={false} className="flex-grow flex-shrink-0"/>
        <SpecialitiesSelect form={form} size='lg' showLabel={false} className="flex-grow flex-shrink-0" />

        {/*} <Link href={'/results'}>
        <Button size="lg" className="bg-opacity-80 hover:bg-opacity-100">
          Поиск
        </Button>
      </Link>*/}
        <Button
          size="lg"
          className="bg-opacity-80 hover:bg-opacity-100"
          //onClick={onSearch}
          //onClick={handleSearchHH} disabled={isLoading}
         // onClick={handleSearch} disabled={isLoading}
         type='submit'
        >
          {isLoading ? 'Загрузка...' : 'Поиск'}
        </Button>
        {error && <div>Error: {JSON.stringify(error)}</div>}
      {/*data && (
        <div>
          <h2>Results</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )*/}
     
      </form>
      {showError && data?.msg &&
      <div className="form-bg-and-text  text-xs  p-2 px-4 absolute top-20 rounded-xl ">{data?.msg}</div>
}
      </div>
     )
}




