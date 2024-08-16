import { Button, Input } from "@mantine/core";
import { useState } from "react";

import { useSearchCandidatesMutation, useSearchHHCandidatesMutation } from '@/rtk/services/api';
import { useDispatch } from "react-redux";
import { setSearchResults, clearSearchResults } from '@/rtk/features/search/searchSlice';
import { setSearchHHResults } from "@/rtk/features/searchHHSlice";


type TProps = {
    onSearch: () => void;
}

export const QuickSearch = ({onSearch}:TProps) => {

  const [specialty, setSpecialty] = useState('');
  const [area, setArea] = useState('');
  const [searchCandidates, { data, error, isLoading }] = useSearchCandidatesMutation();
  const [searchHHCandidates, { data:data_hh, error:error_hh, isLoading:isLoading_hh }] = useSearchHHCandidatesMutation();
  const dispatch = useDispatch();

  const handleSearch = async () => {
    try {
     // await searchCandidates({ specialty, area }).unwrap();
    //  const { data: results } = await searchCandidates({ specialty, area }).unwrap();
      //const results = await searchCandidates({ specialty, area }).unwrap();
      const results = await searchCandidates({ specialty, area: [area] }).unwrap();
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

  const handleSearchHH = async () => {
    try {
     // await searchCandidates({ specialty, area }).unwrap();
    //  const { data: results } = await searchCandidates({ specialty, area }).unwrap();
      //const results = await searchCandidates({ specialty, area }).unwrap();
      const results = await searchHHCandidates({ specialty, area: [area] }).unwrap();
      if (Array.isArray(results?.candidates)) {
        dispatch(setSearchHHResults(results));
        onSearch();
      } else {
        console.error('Failed to search candidates: results is not an array');
      }
    } catch (err) {
      console.error('Failed to search candidates:', err);
    }
  };

     return(
       <>
        <Input
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
          onClick={handleSearch} disabled={isLoading}
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
      </>
     )
}




