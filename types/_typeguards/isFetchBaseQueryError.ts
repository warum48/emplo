import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
export const isFetchBaseQueryError = (error: any): error is FetchBaseQueryError =>
    error && typeof error === 'object' && 'data' in error;