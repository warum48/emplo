import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
export type ExtendedFetchBaseQueryError = FetchBaseQueryError & {
    data: { error: string }; // Adjust this structure based on the actual error response you receive
  }