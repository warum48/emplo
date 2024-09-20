import { ExtendedFetchBaseQueryError } from "../_extended/ExtendedFetchBaseQueryError";

export const isExtendedFetchBaseQueryError = (
    error: any
  ): error is ExtendedFetchBaseQueryError => {
    return (
      error &&
      typeof error === 'object' &&
      'data' in error &&
      typeof error.data === 'object' &&
      'error' in error.data &&
      typeof error.data.error === 'string'
    );
  };