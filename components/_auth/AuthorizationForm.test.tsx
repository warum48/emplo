import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
//import AuthorizationForm from '@/components/AuthorizationForm';
import authReducer from '@/rtk/slices/authSlice';
import { useLoginMutation } from '@/rtk/queries/authApi';
import { CookiesProvider } from 'react-cookie';
//import { RouterContext } from 'next/dist/shared/lib/router-context'; // For mocking Next.js router
import { createMockRouter } from '@/test-utils/router'; // A utility to create a mock router
import AuthorizationForm from './AuthorizationForm';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';


jest.mock('next/navigation', () => ({
  useRouter: () => createMockRouter(),
}));

const mockLogin = jest.fn();

(useLoginMutation as jest.Mock).mockReturnValue([mockLogin, { isLoading: false, error: null, data: null }]);

const renderComponent = () => {
  const store = configureStore({
    reducer: {
      auth: authReducer,
    },
  });

  //const router = createMockRouter({});
  const router = createMockRouter();

  return render(
    <Provider store={store}>
      <CookiesProvider>
      <RouterContext.Provider value={router}>
      <AuthorizationForm />
    </RouterContext.Provider>
      </CookiesProvider>
    </Provider>
  );
};

describe('AuthorizationForm', () => {
  test('renders the login form', () => {
    renderComponent();

    expect(screen.getByLabelText(/Логин/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Пароль/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Войти/i })).toBeInTheDocument();
  });

  test('calls login function with correct values on form submission', async () => {
    renderComponent();

    fireEvent.change(screen.getByLabelText(/Логин/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/Пароль/i), { target: { value: 'password123' } });

    fireEvent.click(screen.getByRole('button', { name: /Войти/i }));

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith({ username: 'testuser', password: 'password123' });
    });
  });

  test('handles successful login correctly', async () => {
    mockLogin.mockResolvedValueOnce({ jwt_token: 'test-token' });

    renderComponent();

    fireEvent.change(screen.getByLabelText(/Логин/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/Пароль/i), { target: { value: 'password123' } });

    fireEvent.click(screen.getByRole('button', { name: /Войти/i }));

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalled();
      // Further checks can include verifying that router.push was called with /dashboard
    });
  });

  test('handles failed login correctly', async () => {
    mockLogin.mockRejectedValueOnce(new Error('Login failed'));

    renderComponent();

    fireEvent.change(screen.getByLabelText(/Логин/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/Пароль/i), { target: { value: 'password123' } });

    fireEvent.click(screen.getByRole('button', { name: /Войти/i }));

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalled();
      expect(screen.getByText(/Failed to login/i)).toBeInTheDocument();
    });
  });
});
