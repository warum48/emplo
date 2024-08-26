//http://192.168.0.230:8005/api/candidates/

'use client';
import React from 'react';
import { useGetCandidatesQuery } from '@/rtk/queries/candidates';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/rtk/store/store';


const CandidatesPage: React.FC = () => {
  const { data: posts, error, isLoading } = useGetCandidatesQuery();
  const value = useSelector((state: RootState) => state.someFeature.value);
  const dispatch = useDispatch();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;

  return (
    <div>
      <h1>Candidates</h1>
      <ul>
        {posts?.map((post) => (
            <>
          <li key={post.id}>{post.title}</li>
          {JSON.stringify(post)}
          </>
        ))}
      </ul>
      
    </div>
  );
};

export default CandidatesPage; 
