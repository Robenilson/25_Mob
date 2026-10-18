// src/types/cadastro.ts
// ============================================================================
// FONTE ÚNICA DO DOMÍNIO
// Declaramos os arrays com `as const` e DERIVAMOS os tipos deles.
// Assim nunca duplicamos strings: a tela importa o array, o resto usa o tipo.
// ============================================================================

// -------- GÊNERO --------
export const GENERO_OPTIONS = [
  'Feminino',
  'Masculino',
  'Outro',
  'Prefiro não responder',
] as const;

export type Genero = (typeof GENERO_OPTIONS)[number];
// equivale a: 'Feminino' | 'Masculino' | 'Outro' | 'Prefiro não responder'

// -------- PAPEL --------
export const ROLE_OPTIONS = [
  {
    value: 'passenger',
    label: 'Passageiro',
    emoji: '🙋',
    sub: 'Quero pedir corridas',
  },
  {
    value: 'driver',
    label: 'Motorista',
    emoji: '🚗',
    sub: 'Quero fazer corridas',
  },
] as const;

export type RoleValue = (typeof ROLE_OPTIONS)[number]['value'];
// equivale a: 'passenger' | 'driver'

export type UserRole = RoleValue | null;

// -------- CADASTRO --------
export interface Cadastro {
  name: string;
  surname: string;
  email: string;
  phone: string;
  cpf: string;
  birthDate: string;
  gender: Genero | null;
  role: UserRole;
}

export const INITIAL_CADASTRO: Cadastro = {
  name: '',
  surname: '',
  email: '',
  phone: '',
  cpf: '',
  birthDate: '',
  gender: null,
  role: null,
};