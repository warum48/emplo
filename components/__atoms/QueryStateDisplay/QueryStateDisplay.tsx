import React from 'react';
import { Button, Text } from '@mantine/core';
import { isNetworkError, isSerializedError } from '@/components/Errors/isNetworkError';
import { Preloader } from '../Preloader/Preloader';
import { JSONViewer } from '../JSONViewer/JSONViewr';

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
    return <Preloader />; // Replace with your Preloader component if needed
  }

  return (
    <div>
   
     {error && <>
      <Text c="red" size='xs' 
     // pb='xs'
      >
        {//isSerializedError(error) &&  
        (error?.message  || error?.data?.msg  || 'Ошибка загрузки данных.')
        }
      </Text>
      {isNetworkError(error) && (
        <Button onClick={onRetry} size='xs'>Попробовать снова</Button>
      )}
      </>
    }
    </div>
  );
};

//export default ErrorDisplay;
