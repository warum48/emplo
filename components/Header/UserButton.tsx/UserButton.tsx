import { Avatar, Button } from '@mantine/core';
import { RootState } from '@/rtk/store/store';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation, User } from '@/rtk/services/authApi';
import { ButtonWithPreloader } from '@/components/__atoms/Buttons/ButtonWithPreloader';
import { useCookies } from 'react-cookie';
import { setAuthState, setAuthToken } from '@/rtk/features/authSlice';

export const UserButton = () => {
  const photo = null;
  const user = useSelector((state: RootState) => state.auth.user);
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const [cookiesToken, setCookieToken, removeCookie] = useCookies(['jwt_token']);
  const [logout, { isLoading: isLogoutLoading, error: logoutError, data: logoutData }] = useLogoutMutation();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const result = await logout( ).unwrap(); // username, password
      console.log('RESULTTTT', result);
      console.log('RESULTTTT', result.jwt_token);
      removeCookie('jwt_token', { path: '/' });
     // dispatch(setAuthToken({ token: cookiesToken.jwt_token }));  
      dispatch(setAuthState({ isAuthenticated: false, token: '' })); 

    } catch (err) {
      console.error('Failed to logiout:', err);
    }
  };

  return (
    <div
      className="flex gap-4 items-center"
      // border p-0 px-4 border-default rounded-sm shadow-sm
    >
      <Link href="/dashboard">
        <Avatar src={photo} size={50} radius="xl" />
      </Link>
      <div>
        <div className="text-xs">{isAuthenticated && user ? user?.username : 'Гость'}</div>
       
        {!isAuthenticated ? (
          <Link href="/auth">
            <Button variant="filled" size="compact-xs">
              Войти
            </Button>
          </Link>
        ) : (
            <>
          {/*<ButtonWithPreloader variant="filled" size="compact-xs" disabled={isLogoutLoading} loading={true} onClick ={() => { console.log('logout'); handleLogout()}}>
            Выйти
          </ButtonWithPreloader>*/}
          <Button variant="filled" size="compact-xs" disabled={isLogoutLoading} onClick ={() => { console.log('logout'); handleLogout()}}>
              Выйти
            </Button>
            </>
        )}
      </div>
    </div>
  );
};
