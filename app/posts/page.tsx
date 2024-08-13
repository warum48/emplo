'use client';
import React from 'react';
import { useGetPostsQuery } from '../../rtk/services/api';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../rtk/store/store';
import { increment } from '../../rtk/features/someFeature/someSlice';

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
          <li key={post.id}>{post.title}</li>
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

/*
// Using React Server Components for data fetching in Next.js App Router
import React from 'react';
import { api } from '../../services/api';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

async function fetchPosts() {
  const response = await fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' })('posts');
  if (response.error) throw new Error('Failed to fetch posts');
  return response.data;
}

const PostsPage = async () => {
  const posts = await fetchPosts();

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;
*/
