import { useSearchCandidatesMutation } from "@/rtk/services/api";
import { LinkButton } from "../__atoms/Buttons/LinkButton";
import { useDispatch } from "react-redux";
import { setSearchResults, clearSearchResults } from '@/rtk/features/search/searchSlice';

type TProps = {
  onSearch: () => void;
  gridCols?: number;
}

export const PopularSearches = ({onSearch, gridCols=3}:TProps) => {

  const [searchCandidates, { data, error, isLoading }] = useSearchCandidatesMutation();
  const dispatch = useDispatch();

  const handleSearch = async (specialty:string, area:string[]) => {
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
  
    
    <div className={`}=flex =justify-between =gap-4 grid  ${gridCols === 3 ? 'grid-cols-3':'grid-cols-1'} `}>
      <ul className="mt-4 space-y-2">
      <li><LinkButton disabled={isLoading} loading={isLoading} colorScheme='dark' onClick={()=>handleSearch('Водитель-курьер', ['Москва'])}>Москва - Водитель-курьер</LinkButton></li>
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
  
)
}
