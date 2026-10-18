// src/screens/CadastroScreen/validators.js
// Sem conversão de tipo. Só validação em cima de Cadastro.

// src/screens/CadastroScreen/validators.js
// (mantenha o resto do arquivo igual, só troque isValidDate)

export const isValidDate = (str) => {
  // Aceita "DDMMYYYY" (cru, do estado) ou "DD/MM/AAAA" (exibição)
  const digits = String(str ?? '').replace(/\D/g, '');
  if (digits.length !== 8) return false;

  const d = Number(digits.slice(0, 2));
  const m = Number(digits.slice(2, 4));
  const y = Number(digits.slice(4, 8));

  if (!d || !m || !y || y < 1900) return false;

  const dt = new Date(y, m - 1, d);
  return (
    dt.getDate() === d &&
    dt.getMonth() === m - 1 &&
    dt.getFullYear() === y &&
    dt <= new Date()
  );
};

export const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

/**
 * @param {import('../../types/cadastro').Cadastro} dados
 * @returns {string[]}
 */
export const validarCadastro = (dados) => {
  const erros = [];
  if (dados.name.trim().length < 2) erros.push('• Informe seu nome.');
  if (dados.surname.trim().length < 2) erros.push('• Informe seu sobrenome.');
  if (!isValidDate(dados.birthDate)) erros.push('• Data de nascimento inválida.');
  if (dados.cpf.length !== 11) erros.push('• CPF incompleto.');
  if (!isValidEmail(dados.email)) erros.push('• E-mail inválido.');
  if (dados.phone.length < 10) erros.push('• Telefone inválido.');
  if (!dados.gender) erros.push('• Selecione o sexo.');
  if (!dados.role) erros.push('• Escolha Passageiro ou Motorista.');
  return erros;
};