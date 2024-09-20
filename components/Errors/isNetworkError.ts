import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

// Type guard to check if the error is a FetchBaseQueryError
export const isFetchBaseQueryError = (error: any): error is FetchBaseQueryError => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'status' in error &&
    typeof error.status === 'string'
  );
};

// Type guard to check if the error is a SerializedError
export const isSerializedError = (error: any): error is SerializedError => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof error.message === 'string'
  );
};

export const isNetworkError = (
  error: FetchBaseQueryError | SerializedError | undefined
): boolean => {
  if (!error) return false;

  // Check if error is of type FetchBaseQueryError and status indicates a fetch error
  if (isFetchBaseQueryError(error) && error.status === 'FETCH_ERROR') {
    return true;
  }

  // Check if error is of type SerializedError and has a specific network error message
  if (isSerializedError(error) && error.message === 'Network Error') {
    return true;
  }

  return false;
};
