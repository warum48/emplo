import {  createListenerMiddleware } from '@reduxjs/toolkit'
import {setAuthState, setUser}  from '../slices/authSlice';

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: setAuthState,
  effect: async (action, listenerApi) => {
    // Run whatever additional side-effect-y logic you want here
    console.log('-listener middleware--Token: ', action.payload.token)
  },
})

listenerMiddleware.startListening({
  actionCreator: setUser,
  effect: async (action, listenerApi) => {
    console.log('Another action triggered:', action.payload);
    // Add additional logic for anotherAction
  },
});

