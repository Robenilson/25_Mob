// src/hooks/useAuth/index.ts
import { useContext } from 'react';
import { AuthContext } from '../../AuthContext';
import type { AuthContextData } from '../../types/context';

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      'useAuth deve ser usado dentro de um <AuthProvider>. ' +
        'Verifique se o App está envolvido por <AuthProvider> em App.tsx.'
    );
  }
  return context;
}