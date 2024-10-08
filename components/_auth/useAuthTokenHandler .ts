// hooks/useAuthTokenHandler.ts

// hooks/useAuthTokenHandler.ts
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setAuthToken } from '@/rtk/slices/authSlice';
import { useCookies } from 'react-cookie';
import { useCallback } from 'react';

export const useAuthTokenHandler = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [cookiesToken, setCookieToken] = useCookies(['jwt_token']);

  const handleToken = useCallback((jwtToken: string) => {

    console.log('Received token:', jwtToken);
    // Set cookie with token and path for accessibility
    setCookieToken('jwt_token', jwtToken, { path: '/' });
  /* !!TODO check why secure token doesn't work and is setting as jwttoken but not jwt_token
   setCookieToken('jwt_token', jwtToken, { 
      path: '/', 
      secure: process.env.NODE_ENV === 'production', // Ensure secure only in production
      httpOnly: true, // Prevent JavaScript access
      sameSite: 'strict', // Mitigate CSRF
    }); */
    
    // Dispatch token to Redux
    dispatch(setAuthToken({ token: jwtToken }));
    
    // Redirect after successful login
    router.push('/dashboard');
  }, [dispatch, setCookieToken, router]);

  return { handleToken };
};



/*import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setAuthToken } from '@/rtk/slices/authSlice';
import { useCookies } from 'react-cookie';
import { useCallback } from 'react';

export const useAuthTokenHandler = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [cookiesToken, setCookieToken] = useCookies(['jwt_token']);

  const handleToken = useCallback((jwtToken: string) => {
    console.log('Received token:', jwtToken);
    
    // Set cookie with the token
    setCookieToken('jwt_token', jwtToken, { path: '/' });
    
    // Dispatch token to Redux store
    dispatch(setAuthToken({ token: jwtToken }));
    
    // Navigate to the dashboard
    router.push('/dashboard');
  }, [dispatch, setCookieToken, router]);

  return { handleToken };
};

*/
