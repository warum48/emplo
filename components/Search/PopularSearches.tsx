import {
  useSearchCandidatesMutation,
  useSearchHHCandidatesMutation,
} from '@/rtk/queries/candidates';
import { LinkButton } from '../__atoms/Buttons/LinkButton';
import { useDispatch } from 'react-redux';
import { setSearchResults, clearSearchResults } from '@/rtk/slices/search/searchSlice';
import { useMantineColorScheme } from '@mantine/core';
import { setSearchHHResults } from '@/rtk/slices/search/searchHHSlice';

type TProps = {
  onSearch: () => void;
  gridCols?: number;
  searchType?: 'inner' | 'ai';
};

export const PopularSearches = ({ onSearch, gridCols = 3, searchType = 'inner' }: TProps) => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const [searchCandidates, { data, error, isLoading }] = useSearchCandidatesMutation();
  const [searchAICandidates, { data: data_ai, error: error_ai, isLoading: isLoading_ai }] =
    useSearchHHCandidatesMutation();
  const dispatch = useDispatch();

  const handleSearch = async (specialty: string, area: string[]) => {
    try {
      // await searchCandidates({ specialty, area }).unwrap();
      //  const { data: results } = await searchCandidates({ specialty, area }).unwrap();
      //const results = await searchCandidates({ specialty, area }).unwrap();
      const results =
        searchType === 'inner'
          ? await searchCandidates({ specialty, area }).unwrap()
          : await searchAICandidates({ specialty, area }).unwrap();

      if (Array.isArray(results?.items)) {
        if (searchType === 'inner') {
          dispatch(setSearchResults(results));
        } else {
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
    <div
      className={`}=flex =justify-between =gap-4 grid grid-cols-1 gap-12 ${gridCols === 3 ? 'lg:grid-cols-3' : 'md:grid-cols-1'} `}
    >
      <ul className="space-y-2">
        <li>
          <LinkButton
            disabled={isLoading}
            loading={isLoading}
           // colorScheme={colorScheme}
            colorScheme='dark'
            onClick={() => handleSearch('Водитель-курьер', ['Москва'])}
          >
            Москва - Водитель-курьер
          </LinkButton>
        </li>
        
          <LinkButton
            disabled={isLoading}
            loading={isLoading}
           // colorScheme={colorScheme}
            colorScheme='dark'
            onClick={() => handleSearch('Продавец', ['Москва'])}
          >
            Москва - Продавец
          </LinkButton>
          <LinkButton
            disabled={isLoading}
            loading={isLoading}
           // colorScheme={colorScheme}
            colorScheme='dark'
            onClick={() => handleSearch('Мерчандайзер', ['Москва'])}
          >
            Москва - Мерчандайзер
          </LinkButton>
      </ul>
      <ul className="space-y-2">
      <LinkButton
            disabled={isLoading}
            loading={isLoading}
           // colorScheme={colorScheme}
            colorScheme='dark'
            onClick={() => handleSearch('Водитель-курьер', ['Санкт-Петербург'])}
          >
            Санкт-Петербург - Водитель-курьер
          </LinkButton>
          <LinkButton
            disabled={isLoading}
            loading={isLoading}
           // colorScheme={colorScheme}
            colorScheme='dark'
            onClick={() => handleSearch('Продавец', ['Санкт-Петербург'])}
          >
            Санкт-Петербург - Продавец
          </LinkButton>
          <LinkButton
            disabled={isLoading}
            loading={isLoading}
           // colorScheme={colorScheme}
            colorScheme='dark'
            onClick={() => handleSearch('Мерчандайзер', ['Санкт-Петербург'])}
          >
            Санкт-Петербург - Мерчандайзер
          </LinkButton>

      </ul>
      <ul className="space-y-2">
      <LinkButton
            disabled={isLoading}
            loading={isLoading}
           // colorScheme={colorScheme}
            colorScheme='dark'
            onClick={() => handleSearch('Водитель-курьер', ['Санкт-Петербург'])}
          >
            Санкт-Петербург - Водитель-курьер
          </LinkButton>
          <LinkButton
            disabled={isLoading}
            loading={isLoading}
           // colorScheme={colorScheme}
            colorScheme='dark'
            onClick={() => handleSearch('Продавец', ['Санкт-Петербург'])}
          >
            Санкт-Петербург - Продавец
          </LinkButton>
          <LinkButton
            disabled={isLoading}
            loading={isLoading}
           // colorScheme={colorScheme}
            colorScheme='dark'
            onClick={() => handleSearch('Мерчандайзер', ['Ленинградская область'])}
          >
            Ленинградская область - Мерчандайзер
          </LinkButton>

      </ul>
    </div>
  );
};
