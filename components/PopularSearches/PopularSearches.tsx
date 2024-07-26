import { useSearchCandidatesMutation } from "@/services/api";
import { LinkButton } from "../__atoms/Buttons/LinkButton";
import { useDispatch } from "react-redux";
import { setSearchResults, clearSearchResults } from '@/features/search/searchSlice';

type TProps = {
  onSearch: () => void;
}

export const PopularSearches = ({onSearch}:TProps) => {

  const [searchCandidates, { data, error, isLoading }] = useSearchCandidatesMutation();
  const dispatch = useDispatch();

  const handleSearch = async (specialty:string, area:string) => {
    try {
     // await searchCandidates({ specialty, area }).unwrap();
    //  const { data: results } = await searchCandidates({ specialty, area }).unwrap();
      const results = await searchCandidates({ specialty, area }).unwrap();
      if (Array.isArray(results?.candidates)) {
        dispatch(setSearchResults(results));
        onSearch();
      } else {
        console.error('Failed to search candidates: results is not an array');
      }
    } catch (err) {
      console.error('Failed to search candidates:', err);
    }
  };
  return (
  <div className="mt-8 text-white text-left w-full">
    <h2 className="text-2xl font-light [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
      Популярные запросы
    </h2>
    <div className="flex justify-between gap-4">
      <ul className="mt-4 space-y-2">
      <li><LinkButton disabled={isLoading} colorScheme='dark' onClick={()=>handleSearch('Водитель-курьер', 'Москва')}>Москва - Водитель-курьер</LinkButton></li>
        <li>Технологические вакансии </li>
        <li>Вакансии в сфере продаж </li>
        {/*<li>Менеджеры проектов </li>
<li>Менеджеры проектов </li>*/}
      </ul>
      <ul className="mt-4 space-y-2">
        <li>Финансовые директора </li>
        <li>Технологические вакансии </li>
        <li>Вакансии в сфере продаж </li>
        {/*<li>Менеджеры проектов </li>
<li>Менеджеры проектов </li>*/}
      </ul>
      <ul className="mt-4 space-y-2">
        <li>Финансовые директора </li>
        <li>Технологические вакансии </li>
        <li>Вакансии в сфере продаж </li>
        {/*<li>Менеджеры проектов </li>
<li>Менеджеры проектов </li>*/}
      </ul>
    </div>
  </div>
)
}
