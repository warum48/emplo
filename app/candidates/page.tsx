//http://192.168.0.230:8005/api/candidates/

'use client';
import React from 'react';
import { useGetPostsQuery } from '../../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { increment } from '../../features/someFeature/someSlice';

const PostsPage: React.FC = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery();
  const value = useSelector((state: RootState) => state.someFeature.value);
  const dispatch = useDispatch();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts?.map((post) => (
            <>
          <li key={post.id}>{post.title}</li>
          {JSON.stringify(post)}
          </>
        ))}
      </ul>
      <div>
        <button onClick={() => dispatch(increment())}>Increment Value</button>
        <p>Value: {value}</p>
      </div>
    </div>
  );
};

export default PostsPage; 
