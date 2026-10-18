// src/context/AuthContext/index.tsx
// ============================================================================
// AuthProvider — ORQUESTRADOR.
// Responsabilidades:
//   • manter estado (user, isLoading)
//   • chamar serviceUser (CRUD)
//   • expor a assinatura das funções para as telas
// Regras de negócio, SQL etc. NÃO ficam aqui.
// ============================================================================
import {
  createContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from 'react';
import type { ReactNode } from 'react';
import type { User, AuthContextData, UserRole } from '../types/context';
import type { Cadastro } from '../types/cadastro';

import { initializeDatabase } from '../database/migrations';
import {
  createUser,
  findUserByIdentifier,
  updateUserRole,
} from '../services/serviceUser';

export const AuthContext = createContext<AuthContextData | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Inicializa o banco na montagem do provider
  useEffect(() => {
    initializeDatabase().catch(console.error);
  }, []);

  // ---------- CADASTRO (com auto-login) ----------
  const signUp = useCallback(async (data: Cadastro): Promise<User> => {
    setIsLoading(true);
    try {
      const newUser = await createUser(data); // 🔗 service
      setUser(newUser);                       // auto-login
      return newUser;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // ---------- LOGIN ----------
  const signIn = useCallback(async (emailOrPhone: string): Promise<void> => {
    setIsLoading(true);
    try {
      const found = await findUserByIdentifier(emailOrPhone); // 🔗 service
      if (!found) {
        throw new Error('Usuário não encontrado. Faça o cadastro primeiro.');
      }
      setUser(found);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // ---------- LOGOUT ----------
  const signOut = useCallback(() => {
    setUser(null);
  }, []);

  // ---------- ATUALIZAR TIPO DE CONTA ----------
  const updateRole = useCallback(async (role: UserRole) => {
    if (!user) return;

    setIsLoading(true);
    try {
      const updated = await updateUserRole(user.id, role); // 🔗 service
      setUser(updated);
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  // ---------- VALOR DO CONTEXTO ----------
  const value = useMemo<AuthContextData>(
    () => ({
      user,
      isAuthenticated: !!user,
      isLoading,
      signIn,
      signUp,
      signOut,
      updateRole,
    }),
    [user, isLoading, signIn, signUp, signOut, updateRole]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}