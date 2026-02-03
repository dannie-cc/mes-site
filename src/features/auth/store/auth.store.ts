import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { authService } from '../services/auth.service';
import type { User, LoginDto, SignupDto } from '../types/auth.types';
import type { ApiError } from '@/shared/lib/api-client';

interface AuthState {
    // State
    user: User | null;
    token: string | null;
    isLoading: boolean;
    error: string | null;

    // Computed
    isAuthenticated: boolean;

    // Actions
    login: (credentials: LoginDto) => Promise<void>;
    signup: (data: SignupDto) => Promise<void>;
    logout: () => Promise<void>;
    clearError: () => void;
    setUser: (user: User) => void;
    setToken: (token: string) => void;
}

const AUTH_TOKEN_KEY = 'auth_token';

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            // Initial state
            user: null,
            token: null,
            isLoading: false,
            error: null,
            isAuthenticated: false,

            // Login action
            login: async (credentials: LoginDto) => {
                set({ isLoading: true, error: null });
                try {
                    const response = await authService.login(credentials);
                    localStorage.setItem(AUTH_TOKEN_KEY, response.accessToken);
                    set({
                        user: response.user,
                        token: response.accessToken,
                        isAuthenticated: true,
                        isLoading: false,
                    });
                } catch (err) {
                    const apiError = err as ApiError;
                    set({
                        error: apiError.message || 'Login failed',
                        isLoading: false,
                    });
                    throw err;
                }
            },

            // Signup action
            signup: async (data: SignupDto) => {
                set({ isLoading: true, error: null });
                try {
                    const response = await authService.signup(data);
                    localStorage.setItem(AUTH_TOKEN_KEY, response.accessToken);
                    set({
                        user: response.user,
                        token: response.accessToken,
                        isAuthenticated: true,
                        isLoading: false,
                    });
                } catch (err) {
                    const apiError = err as ApiError;
                    set({
                        error: apiError.message || 'Signup failed',
                        isLoading: false,
                    });
                    throw err;
                }
            },

            // Logout action
            logout: async () => {
                set({ isLoading: true });
                try {
                    await authService.logout();
                } catch {
                    // Ignore logout errors, proceed with local cleanup
                } finally {
                    localStorage.removeItem(AUTH_TOKEN_KEY);
                    set({
                        user: null,
                        token: null,
                        isAuthenticated: false,
                        isLoading: false,
                        error: null,
                    });
                }
            },

            // Clear error
            clearError: () => set({ error: null }),

            // Set user (for profile updates)
            setUser: (user: User) => set({ user }),

            // Set token (for token refresh)
            setToken: (token: string) => {
                localStorage.setItem(AUTH_TOKEN_KEY, token);
                set({ token });
            },
        }),
        {
            name: 'auth-storage',
            partialize: (state) => ({
                user: state.user,
                token: state.token,
                isAuthenticated: state.isAuthenticated,
            }),
            onRehydrateStorage: () => (state) => {
                // Sync token to localStorage on rehydrate
                if (state?.token) {
                    localStorage.setItem(AUTH_TOKEN_KEY, state.token);
                }
            },
        },
    ),
);

// Hook for easy auth state access
export const useAuth = () => {
    const store = useAuthStore();
    return {
        user: store.user,
        isAuthenticated: store.isAuthenticated,
        isLoading: store.isLoading,
        error: store.error,
        login: store.login,
        signup: store.signup,
        logout: store.logout,
        clearError: store.clearError,
    };
};
