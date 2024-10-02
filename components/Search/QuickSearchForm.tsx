import { Button, Input } from "@mantine/core";
import { useState } from "react";

import {
  useSearchCandidatesMutation,
  useSearchHHCandidatesMutation,
} from "@/rtk/queries/candidates";
import { useDispatch } from "react-redux";
import {
  setSearchResults,
  clearSearchResults,
} from "@/rtk/slices/search/searchSlice";
import { setSearchHHResults } from "@/rtk/slices/search/searchHHSlice";
import { useForm } from "@mantine/form";
import { RegionsSelect } from "../DynamicFormFields/Regions";
import { SpecialitiesSelect } from "../DynamicFormFields/Specialities";
import { JSONViewer } from "../__atoms/JSONViewer/JSONViewr";
import { BasicError } from "../Errors/BasicError";
import { useMutationNotifications } from "@/hooks/useNotifications";
import quickSearch, { setQuickSearchValues } from "@/rtk/slices/quickSearch";
//import { setSearchHHResults } from "@/rtk/slices/searchHHSlice";

type TProps = {
  onSearch: () => void;
};

type TFormValues = {
  specialty: string;
  area: string[]; //[];
};

export const QuickSearch = ({ onSearch }: TProps) => {

  const [searchCandidates, { data, error, isLoading }] =
    useSearchCandidatesMutation();
  const [
    searchHHCandidates,
    { data: data_hh, error: error_hh, isLoading: isLoading_hh },
  ] = useSearchHHCandidatesMutation();
  const dispatch = useDispatch();
  const [showError, setShowError] = useState(false);

  useMutationNotifications({
    text: '',
   showOnlyError : true,
    data: data,
    data_details: data && data?.msg ? data?.msg : 'Вы можете найти его в списке профилей',
   // data_code: data_req?.requestAvailableDocument?.statusCode,
   // data_details:
   //   data_req?.requestAvailableDocument?.detailsRu || data_req?.requestAvailableDocument?.details,
    error: error,
  //  traceId: data_req?.requestAvailableDocument?.traceId,
   // onSuccess: onSuccess,
  });

  const form = useForm({
    initialValues: {
      specialty: "", //'',
      area: [], //[], //'',
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
      const quickSearchValues = {
        specialty: values.specialty,
        area: values.area,
      }
      const results = await searchCandidates(quickSearchValues).unwrap();
      console.log("===results", results);
      if (Array.isArray(results?.items)) {
        dispatch(setSearchResults(results));
        dispatch(setQuickSearchValues(quickSearchValues));
        console.log('dispatched');
        onSearch();
        setShowError(false);
      } else {
        console.error("Failed to search candidates: results is not an array");
        setShowError(true);
      }
    } catch (err) {
      console.error("Failed to search candidates:", err);
      setShowError(true);
    }
  };

  return (
    <div className="relative flex w-full flex-col items-center">
      <form
        className="flex w-full flex-col items-center justify-between gap-4 md:flex-row"
        onSubmit={form.onSubmit((values) => {
          console.log("Form submitted with values:", values);
          //  dispatch(updateJobSearchForm(values));
          handleSubmit(values);
        })}
      >
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
        <RegionsSelect
          form={form}
          size="lg"
          showLabel={false}
          className="flex-shrink-0 flex-grow"
        />
        <SpecialitiesSelect
          form={form}
          formFieldName="specialty"
          size="lg"
          showLabel={false}
          className="flex-shrink-0 flex-grow"
        />

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
          type="submit"
        >
          {isLoading ? "Загрузка..." : "Поиск"}
        </Button>
       
        {/*data && (
        <div>
          <h2>Results</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )*/}
      </form>

      {showError && data?.msg && (
        <div className="form-bg-and-text absolute top-20 rounded-xl p-2 px-4 text-xs">
          {data?.msg}
        </div>
      )}
      { showError && error && <div className="form-bg-and-text absolute top-20 rounded-lg  text-xs "><BasicError error={error} /></div>}
    </div>
  );
};
