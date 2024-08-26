import React, { useEffect, createContext, useContext } from 'react';
//import { useDispatch } from 'react-redux';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor, RootState } from '@/rtk/store/store';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { GlobalProvider } from '@/global/context/ContextGlobal';
import { useCookies } from 'react-cookie';
import { setAuthState, setAuthToken, setUser } from '@/rtk/slices/authSlice';
import { useLazyMeQuery } from '@/rtk/queries/authApi';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [cookiesToken, setCookieToken] = useCookies(['jwt_token']);
    const dispatch = useDispatch();
    const [fetchMe, { isLoading: isMeLoading, error: meError, data: meData }] = useLazyMeQuery();
   // const [cookiesToken, setCookieToken] = useCookies(['jwt_token']);
  
    const tokenInStore = useSelector((state: RootState) => state.auth.token);
  
    useEffect(() => {
      // Check for token in cookies/localStorage
      const token = cookiesToken.jwt_token; // Implement getCookie to read cookies
      console.log('COOKIE TOKEN', token);
    //  console.log('JWT TOKEN', cookiesToken.jwt_token)
      if (token) {
        // Dispatch an action to store the token in the Redux state
       // dispatch(setAuthToken(token));
        dispatch(setAuthToken({ token: cookiesToken.jwt_token }));  
        // Fetch user details if token exists
        //dispatch(fetchUserDetails());
      }else{
        dispatch(setAuthState({ token: '', isAuthenticated: false }));
      }
    }, [dispatch]);

    useEffect(() => {
        console.log('USE EF TOKEN_in_Store', tokenInStore);
        if (tokenInStore) {
          //fetchMe({ 'Authorization': 'Bearer ' + token });
          //dispatch(setAuthState({ isAuthenticated: true, user: '', token: token }));  
          fetchMe();
        }
      }, [tokenInStore]);

      useEffect(() => {
        console.log('meData', meData);
        if (meData) {
          dispatch(setUser({ username: meData.username, id: meData.id }));  //user: meData,
         //router.push('/dashboard')
        }
      }, [meData, dispatch]);

  return (
    <AuthContext.Provider value={null}>
      {children}
    </AuthContext.Provider>
  );
};