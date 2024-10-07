import React, { useEffect, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { setAuthState, setAuthToken, setUser } from "@/rtk/slices/authSlice";
import { useLazyMeQuery } from "@/rtk/queries/authApi";
import { RootState } from "@/rtk/store/store";
import { useRouter } from "next/navigation";
import { Routes } from "../ROUTES";
import { jwtDecode } from "jwt-decode";
//import jwtDecode from 'jwt-decode'; 

const AuthContext = createContext(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [cookiesToken] = useCookies(["jwt_token"]);
  const dispatch = useDispatch();
  const [fetchMe, { isSuccess: isMeSuccess, data: meData, error: meError, isLoading: isMeLoading }] = useLazyMeQuery();
  const router = useRouter();

  const tokenInStore = useSelector((state: RootState) => state.auth.token);

  // Check for token in cookies and store it in Redux
 /* useEffect(() => {
    const token = cookiesToken.jwt_token;
    if (token) {
      dispatch(setAuthToken({ token }));
    } else {
      dispatch(setAuthState({ token: "", isAuthenticated: false }));
    }
  }, [dispatch, cookiesToken]);*/
  useEffect(() => {
    const token = cookiesToken.jwt_token;
    if (token) {
      const decodedToken = jwtDecode(token);
      const isTokenExpired =
        decodedToken?.exp !== undefined && decodedToken.exp * 1000 < Date.now();
  
      if (isTokenExpired) {
        // Handle token expiration
        dispatch(setAuthState({ token: '', isAuthenticated: false }));
        router.push('/login');
      } else {
        // If token is valid, set it in the Redux state
        dispatch(setAuthToken({ token }));
        fetchMe();
      }
    } else {
      router.push('/login');
    }
  }, [cookiesToken, dispatch, fetchMe, router]);

  // Fetch user details when token is available in Redux store
  useEffect(() => {
    if (tokenInStore) {
      fetchMe();
    }
  }, [tokenInStore, fetchMe]);

  // Store the user details in Redux after a successful fetch
  /*useEffect(() => {
    if (isMeSuccess && meData) {
      dispatch(setUser({ username: meData.username, id: meData.id }));
    }
  }, [meData, isMeSuccess, dispatch]);*/

  useEffect(() => {
    const isOnDashboardPage = typeof window !== 'undefined' && window.location.pathname.includes('dashboard');

    if (meError && 'status' in meError && meError.status === 401) {
      dispatch(setAuthState({ token: '', isAuthenticated: false }));
      router.push(Routes.AUTH);
    }

  
    if (isMeSuccess && meData) {
      // If fetchMe is successful and returns user data, set the user
      dispatch(setUser({ username: meData.username, id: meData.id }));
    } else if (!isMeLoading && !meData && meError && isOnDashboardPage) {
      // If fetchMe fails, redirect to login
      console.log("Failed to fetch user, redirecting to login...");
      router.push(Routes.AUTH);
    }
  }, [meData, isMeSuccess, isMeLoading, meError, dispatch, router]);

  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
};

//TODO optimize token check like
/*const checkToken = useCallback(() => {
  const token = cookiesToken.jwt_token;
  if (token) {
    dispatch(setAuthToken({ token }));
    fetchMe();
  } else {
    dispatch(setAuthState({ token: '', isAuthenticated: false }));
  }
}, [cookiesToken, dispatch, fetchMe]);

useEffect(() => {
  checkToken();
}, [checkToken]);
*/

/*
import React, { useEffect, createContext, useContext } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store, { persistor, RootState } from "@/rtk/store/store";
import { useCookies } from "react-cookie";
import { setAuthState, setAuthToken, setUser } from "@/rtk/slices/authSlice";
import { useLazyMeQuery } from "@/rtk/queries/authApi";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [cookiesToken, setCookieToken] = useCookies(["jwt_token"]);
  const dispatch = useDispatch();
  const [fetchMe, { isLoading: isMeLoading, error: meError, data: meData }] =
    useLazyMeQuery();
  // const [cookiesToken, setCookieToken] = useCookies(['jwt_token']);

  const tokenInStore = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    // Check for token in cookies/localStorage
    const token = cookiesToken.jwt_token; // Implement getCookie to read cookies
    console.log("COOKIE TOKEN", token);
    //  console.log('JWT TOKEN', cookiesToken.jwt_token)
    if (token) {
      // Dispatch an action to store the token in the Redux state
      // dispatch(setAuthToken(token));
      dispatch(setAuthToken({ token: cookiesToken.jwt_token }));
      // Fetch user details if token exists
      //dispatch(fetchUserDetails());
    } else {
      dispatch(setAuthState({ token: "", isAuthenticated: false }));
    }
  }, [dispatch]);

  useEffect(() => {
    console.log("USE EF TOKEN_in_Store", tokenInStore);
    if (tokenInStore) {
      //fetchMe({ 'Authorization': 'Bearer ' + token });
      //dispatch(setAuthState({ isAuthenticated: true, user: '', token: token }));
      fetchMe();
    }
  }, [tokenInStore]);

  useEffect(() => {
    console.log("meData", meData);
    if (meData) {
      dispatch(setUser({ username: meData.username, id: meData.id })); //user: meData,
      //router.push('/dashboard')
    }
  }, [meData, dispatch]);

  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
};
*/
