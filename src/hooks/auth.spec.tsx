import { renderHook, act } from '@testing-library/react-hooks';
import { mocked } from 'ts-jest/utils';
import { AuthProvider, useAuth } from './auth';
import { startAsync } from 'expo-auth-session';

jest.mock('expo-auth-session');


describe('Auth Hook', () => {
    it('should be able to sign in with google account existing', async () => {
//         const googleMocked = mocked(startAsync as any);
//         googleMocked.mockReturnValue({
//             type: 'success',
//             params: {
//                 access_token: 'oaksdakodakospd'
//             }
//         });

//         const fetch = jest.fn(() => Promise.resolve());
//         const response = mocked(fetch as any);
//         response.mockReturnValue("{id:123,email:'abner@gmail.com',name:'abner',photo:'any.png'}");

//         const { result } = renderHook(() => useAuth(), {
//             wrapper: AuthProvider
//         });

//         await act(() => result.current.signInWithGoogle());

//         expect(result.current.user).toBeTruthy();
    });

    it('should be error with incorrectly Google parameters', async () => {
        const { result } = renderHook(() => useAuth(), {
            wrapper: AuthProvider
        });

        try {
            await act(() => result.current.signInWithGoogle());
        } catch {
            expect(result.current.user).toEqual({});
        }
    });
});