import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { api } from '../services/api';
import { authApi } from '../services/authApi';
import someSlice from '../features/someFeature/someSlice';
import tempSlice from '../features/tempFeature/tempSlice';
import jobSearchSlice from '../features/searchJobForm/searchJob';
//import { tempSlice } from './features/tempFeature/tempSlice'; // Adjust the path as necessary


const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [api.reducerPath]: api.reducer,
  someFeature: persistReducer({ key: 'someFeature', storage }, someSlice),
  jobSearch: persistReducer({ key: 'jobSearch', storage }, jobSearchSlice),
  tempFeature: tempSlice, // Non-persistent slice
  // Add other slices here
  //temp: tempSlice.reducer, // Add the temp slice reducer here
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for persist to work with non-serializable data like promises
    }).concat(api.middleware, authApi.middleware,),
    
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
