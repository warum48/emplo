import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
//----------------QUERIES----------------
import { api } from '../queries/candidates';
import { debug } from '../queries/debug';
import { joborder} from '../queries/joborder';
import { authApi } from '../queries/authApi';
import { vacancyApi } from '../queries/vacancy';
import { predictorApi } from '@/rtk/queries/predictorApi';
//-----------------SLICES----------------
import candidateSearchReducer from '../slices/searchCandidateForm/searchCandidate';
import resumeFormSlice from '../slices/resumeForm';
import createVacancySlice from '../slices/vacancy/vacancySlice';
import createVacancyHHSlice from '../slices/vacancy/vacancySliceHH';
import UISettingsSlice from '../slices/UISettings';
import searchReducer from '../slices/search/searchSlice';
import quickSearchReducer from '../slices/quickSearch';
import searchAIReducer from '../slices/search/searchHHSlice';
import authReducer from '../slices/authSlice';
import authFormSlice from '../slices/authForm';

import { loginAndFetchUser } from '../thunks/LoginAndFetchUser';
import { listenerMiddleware } from './listenerMidleware';



const rootReducer = combineReducers({
  [predictorApi.reducerPath]: predictorApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [api.reducerPath]: api.reducer,
  [vacancyApi.reducerPath]: vacancyApi.reducer,
  [joborder.reducerPath]: joborder.reducer,
  [debug.reducerPath]: debug.reducer,

  //vacancyForm: vacancyFormReducer,

  createVacancy: persistReducer({ key: 'createVacancyHH', storage }, createVacancySlice),
  createVacancyHH: persistReducer({ key: 'createVacancyHH', storage }, createVacancyHHSlice),
  auth: authReducer,
  search: searchReducer,
  quickSearch: quickSearchReducer,
  searchAI: searchAIReducer,
  authForm: persistReducer({ key: 'authForm', storage }, authFormSlice),
  //!!jobSearch: persistReducer({ key: 'candidateSearch', storage }, candidateSearchSlice), //persist form - temporary disabled, form changes offten
  jobSearch: candidateSearchReducer,
  resumeForm: persistReducer({ key: 'resumeForm', storage }, resumeFormSlice),
  UISettings: persistReducer({ key: 'UISettings', storage }, UISettingsSlice),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for persist to work with non-serializable data like promises
    }).concat(api.middleware, debug.middleware, joborder.middleware, authApi.middleware, predictorApi.middleware, vacancyApi.middleware).prepend(listenerMiddleware.middleware)

    
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


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
