import { useSearchCandidatesMutation, useSearchHHCandidatesMutation } from "@/rtk/queries/candidates";
import { LinkButton } from "../__atoms/Buttons/LinkButton";
import { useDispatch } from "react-redux";
import { setSearchResults, clearSearchResults } from '@/rtk/slices/search/searchSlice';
import { useMantineColorScheme } from "@mantine/core";
import { setSearchHHResults } from "@/rtk/slices/search/searchHHSlice";

type TProps = {
  onSearch: () => void;
  gridCols?: number;
  searchType?: 'inner' | 'ai';
}

export const PopularSearches = ({onSearch, gridCols=3, searchType='inner'}:TProps) => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const [searchCandidates, { data, error, isLoading }] = useSearchCandidatesMutation();
  const [searchAICandidates, { data:data_ai, error:error_ai, isLoading:isLoading_ai }] = useSearchHHCandidatesMutation();
  const dispatch = useDispatch();

  const handleSearch = async (specialty:string, area:string[]) => {
    try {
     // await searchCandidates({ specialty, area }).unwrap();
    //  const { data: results } = await searchCandidates({ specialty, area }).unwrap();
      //const results = await searchCandidates({ specialty, area }).unwrap();
      const results =
        searchType === 'inner'
          ? await searchCandidates({ specialty, area }).unwrap()
          : await searchAICandidates({ specialty, area }).unwrap();

      if (Array.isArray(results?.items)) {
        if(searchType === 'inner') {
          dispatch(setSearchResults(results));
        }else{
          dispatch(setSearchHHResults(results));
        }
        
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
      <ul className="space-y-2">
      <li><LinkButton disabled={isLoading} loading={isLoading} colorScheme={colorScheme} onClick={()=>handleSearch('Водитель-курьер', ['Москва'])}>Москва - Водитель-курьер</LinkButton></li>
        <li>Технологические вакансии </li>
        <li>Вакансии в сфере продаж </li>
        {/*<li>Менеджеры проектов </li>
<li>Менеджеры проектов </li>*/}
      </ul>
      <ul className="space-y-2">
        <li>Финансовые директора </li>
        <li>Технологические вакансии </li>
        <li>Вакансии в сфере продаж </li>
        {/*<li>Менеджеры проектов </li>
<li>Менеджеры проектов </li>*/}
      </ul>
      <ul className="space-y-2">
        <li>Финансовые директора </li>
        <li>Технологические вакансии </li>
        <li>Вакансии в сфере продаж </li>
        {/*<li>Менеджеры проектов </li>
<li>Менеджеры проектов </li>*/}
      </ul>
    </div>
  
)
}
