// src/database/migrations.ts
import { getDatabase } from './database';

const DATABASE_VERSION = 1;

export const initializeDatabase = async () => {
  const db = await getDatabase();

  // Habilita o modo WAL para melhor performance
  await db.execAsync('PRAGMA journal_mode = WAL;');

  const result = await db.getFirstAsync<{ user_version: number }>(
    'PRAGMA user_version'
  );
  const currentVersion = result?.user_version ?? 0;

  if (currentVersion >= DATABASE_VERSION) {
    return; // Schema já está atualizado
  }

  if (currentVersion === 0) {
    // Migração da versão 0 para 1: criar tabela de usuários
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        surname TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        phone TEXT NOT NULL UNIQUE,
        cpf TEXT NOT NULL,
        birthDate TEXT NOT NULL,
        gender TEXT,
        role TEXT
      );
    `);
  }

  // Atualiza a versão do schema
  await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
};