import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { api } from '../services/api';
import { authApi } from '../services/authApi';
import someSlice from '../features/someFeature/someSlice';
import tempSlice from '../features/tempFeature/tempSlice';
import candidateSearchSlice from '../features/searchCandidateForm/searchCandidate';
import resumeFormSlice from '../features/resumeForm';
import createVacancySlice from '../features/vacancy/vacancySlice';
import createVacancyHHSlice from '../features/vacancy/vacancySliceHH';
//import createVacancyHHSlice from '../features/vacancy/vacancySliceHH';
import UISettingsSlice from '../features/UISettings';
import searchReducer from '../features/search/searchSlice';
import authReducer from '../features/authSlice';
import { predictorApi } from '@/rtk/services/predictorApi';
import thunk from 'redux-thunk';

//import { configureStore, createAsyncThunk, createSlice, MiddlewareArray } from '@reduxjs/toolkit';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { loginAndFetchUser } from '../thunks/LoginAndFetchUser';
import UISettings from '../features/UISettings';
import { listenerMiddleware } from './listenerMidleware';
//import { vacancyApi } from '../features/vacancy/vacancyZayavkaSlice';
import { vacancyApi } from '../features/vacancy/vacancySliceHHReal';
//import thunk from 'redux-thunk';
//import { tempSlice } from './features/tempFeature/tempSlice'; // Adjust the path as necessary


const rootReducer = combineReducers({
  [predictorApi.reducerPath]: predictorApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [api.reducerPath]: api.reducer,
  [vacancyApi.reducerPath]: vacancyApi.reducer,
  //vacancyForm: vacancyFormReducer,

  createVacancy: persistReducer({ key: 'createVacancyHH', storage }, createVacancySlice),
  createVacancyHH: persistReducer({ key: 'createVacancyHH', storage }, createVacancyHHSlice),
  auth: authReducer,
  search: searchReducer,
  someFeature: persistReducer({ key: 'someFeature', storage }, someSlice),
  jobSearch: persistReducer({ key: 'candidateSearch', storage }, candidateSearchSlice),
  resumeForm: persistReducer({ key: 'resumeForm', storage }, resumeFormSlice),
  UISettings: persistReducer({ key: 'UISettings', storage }, UISettingsSlice),
  tempFeature: tempSlice, // Non-persistent slice
  // Add other slices here
  //temp: tempSlice.reducer, // Add the temp slice reducer here
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for persist to work with non-serializable data like promises
      thunk: {
        extraArgument: loginAndFetchUser//authApi
      }
    }).concat(api.middleware, authApi.middleware, predictorApi.middleware, vacancyApi.middleware).prepend(listenerMiddleware.middleware)//.concat(thunk),
  //middleware: (getDefaultMiddleware) =>
  //  getDefaultMiddleware().concat(authApi.middleware).concat(thunk),
    
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
//export type AppDispatch = typeof store.dispatch;


export default store;

/*
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { api } from '../services/api';
import someSlice from '../features/someFeature/someSlice';
import tempSlice from '../features/tempFeature/tempSlice';
import { authApi } from '../services/authApi';
import { userApi } from '../services/userApi';
import { postApi } from '../services/postApi';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [postApi.reducerPath]: postApi.reducer,
  someFeature: persistReducer({ key: 'someFeature', storage }, someSlice),
  tempFeature: tempSlice, // Non-persistent slice
  // Add other slices here
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for persist to work with non-serializable data like promises
    }).concat(
      api.middleware,
      authApi.middleware,
      userApi.middleware,
      postApi.middleware
    ),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
*/

/*import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { api } from '../services/api';
import someSlice from '../features/someFeature/someSlice';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  someFeature: persistReducer({ key: 'someFeature', storage }, someSlice),
  // Add other slices here
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for persist to work with non-serializable data like promises
    }).concat(api.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;*/
