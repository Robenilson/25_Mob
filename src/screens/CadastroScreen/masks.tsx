// src/screens/CadastroScreen/masks.js
// =====================================================================
// Funções PURAS de EXIBIÇÃO.
// O estado guarda CRU (só dígitos); o input mostra MASCARADO.
//   format*    : cru → mascarado   (usado em `value=`)
//   onlyDigits : qualquer → cru    (usado em `onChangeText`)
// =====================================================================

/** Remove qualquer caractere não numérico */
export const onlyDigits = (v) => String(v ?? '').replace(/\D/g, '');

// -------- FORMATADORES (cru → mascarado) --------
export const formatDate = (cru) => {
  const d = onlyDigits(cru).slice(0, 8);
  if (d.length <= 2) return d;
  if (d.length <= 4) return `${d.slice(0, 2)}/${d.slice(2)}`;
  return `${d.slice(0, 2)}/${d.slice(2, 4)}/${d.slice(4)}`;
};

export const formatCPF = (cru) => {
  const d = onlyDigits(cru).slice(0, 11);
  if (d.length <= 3) return d;
  if (d.length <= 6) return `${d.slice(0, 3)}.${d.slice(3)}`;
  if (d.length <= 9) return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6)}`;
  return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6, 9)}-${d.slice(9)}`;
};

export const formatPhone = (cru) => {
  const d = onlyDigits(cru).slice(0, 11);
  if (!d) return '';
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};

// -------- MAPA CAMPO → FORMATADOR --------
// ⚠️ As chaves DEVEM bater com os campos de `Cadastro` (types/cadastro.ts):
//    birthDate, cpf, phone
export const DISPLAY_MAP = {
  birthDate: formatDate,
  cpf: formatCPF,
  phone: formatPhone,
};