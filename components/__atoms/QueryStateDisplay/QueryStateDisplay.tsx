import React from 'react';
import { Button, Text } from '@mantine/core';
import { isNetworkError, isSerializedError } from '@/components/Errors/isNetworkError';

interface ErrorDisplayProps {
  isLoading: boolean;
  error: any; // Adjust type according to your error handling logic
  onRetry: () => void;
  //isNetworkError: (error: any) => boolean; // Pass the type guard function as a prop
}

export const QueryStateDisplay: React.FC<ErrorDisplayProps> = ({ isLoading, error, onRetry, 
   // isNetworkError
 }) => {
  if (isLoading) {
    return <div>Loading...</div>; // Replace with your Preloader component if needed
  }

  return (
    <>
      <Text c="red">
        {(isSerializedError(error) && error?.message ) || 'Произошла ошибка при загрузке данных.'}
      </Text>
      {isNetworkError(error) && (
        <Button onClick={onRetry}>Попробовать снова</Button>
      )}
    </>
  );
};

//export default ErrorDisplay;
