// src/types/context.ts
// ============================================================================
// Contratos globais (auth + login).
// ============================================================================
import type { Cadastro } from './cadastro';

// -------- USER --------
export type UserRole = 'driver' | 'passenger' | null;

export interface User extends Cadastro {
  id: string;
}

// -------- AUTH CONTEXT --------
export interface AuthContextData {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  signIn: (emailOrPhone: string) => Promise<void>;
  signUp: (data: Cadastro) => Promise<User>;
  signOut: () => void;
  updateRole: (role: UserRole) => Promise<void>;
}

// -------- LOGIN DATA (formulário) --------
export interface LoginData {
  phone: string;
  email: string;
  accepted: boolean;
}

// -------- NAVEGAÇÃO (tipo mínimo que o hook precisa) --------
export interface NavigationLike {
  navigate: (screen: string) => void;
  replace: (screen: string) => void;
  canGoBack: () => boolean;
  goBack: () => void;
}

// -------- PARÂMETROS DO HOOK DE LOGIN --------
export interface UseLoginScreenParams {
  navigation: NavigationLike;
}

// -------- CONTRATO DE RETORNO DO HOOK --------
export interface LoginScreenReturn {
  // estados
  phone: string;
  email: string;
  accepted: boolean;
  isLoading: boolean;

  // setters
  setPhone: (value: string) => void;
  setEmail: (value: string) => void;
  toggleAccepted: () => void;

  // ações
  goToRegister: () => void;
  handleContinue: () => Promise<void>;
}