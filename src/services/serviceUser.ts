// src/services/serviceUser.ts
// ============================================================================
// Camada de acesso a dados do USUÁRIO.
// Hoje: SQLite. Amanhã: fetch/axios/Supabase — só este arquivo muda.
// O contexto NÃO sabe se é SQLite, API ou mock. Só chama as funções.
// ============================================================================
import { getDatabase } from '../database/database';
import type { User, UserRole } from '../types/context';
import type { Cadastro } from '../types/cadastro';

// ---------------------------------------------------------------------------
// CREATE
// ---------------------------------------------------------------------------
export async function createUser(data: Cadastro): Promise<User> {
  const db = await getDatabase();

  // Regra de unicidade (e-mail/telefone) fica AQUI, não no contexto
  const exists = await db.getFirstAsync<{ id: string }>(
    'SELECT id FROM users WHERE email = ? OR phone = ?',
    data.email,
    data.phone
  );
  if (exists) {
    throw new Error('E-mail ou telefone já cadastrado.');
  }

  const newUser: User = {
    ...data,
    id: String(Date.now()),
    name: data.name.trim(),
    surname: data.surname.trim(),
    email: data.email.trim().toLowerCase(),
    phone: data.phone.trim(),
    role: data.role ?? null,
  };

  await db.runAsync(
    `INSERT INTO users (id, name, surname, email, phone, cpf, birthDate, gender, role)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    newUser.id,
    newUser.name,
    newUser.surname,
    newUser.email,
    newUser.phone,
    newUser.cpf,
    newUser.birthDate,
    newUser.gender,
    newUser.role
  );

  return newUser;
}

// ---------------------------------------------------------------------------
// READ — por identificador (login)
// ---------------------------------------------------------------------------
export async function findUserByIdentifier(
  emailOrPhone: string
): Promise<User | null> {
  const db = await getDatabase();
  const identifier = emailOrPhone.trim().toLowerCase();

  const found = await db.getFirstAsync<User>(
    'SELECT * FROM users WHERE email = ? OR phone = ?',
    identifier,
    identifier
  );

  return found ?? null;
}

// ---------------------------------------------------------------------------
// READ — lista todos (útil para debugging / telas admin futuras)
// ---------------------------------------------------------------------------
export async function listUsers(): Promise<User[]> {
  const db = await getDatabase();
  return db.getAllAsync<User>('SELECT * FROM users');
}

// ---------------------------------------------------------------------------
// UPDATE — role do usuário
// ---------------------------------------------------------------------------
export async function updateUserRole(
  id: string,
  role: UserRole
): Promise<User> {
  const db = await getDatabase();

  await db.runAsync('UPDATE users SET role = ? WHERE id = ?', role, id);

  const updated = await db.getFirstAsync<User>(
    'SELECT * FROM users WHERE id = ?',
    id
  );

  if (!updated) {
    throw new Error('Usuário não encontrado após atualização.');
  }
  return updated;
}

// ---------------------------------------------------------------------------
// DELETE — remove usuário (opcional; útil para testes)
// ---------------------------------------------------------------------------
export async function deleteUser(id: string): Promise<void> {
  const db = await getDatabase();
  await db.runAsync('DELETE FROM users WHERE id = ?', id);
}