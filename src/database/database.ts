// src/database/database.ts
import * as SQLite from 'expo-sqlite';

const DATABASE_NAME = 'mobapp.db';
let db: SQLite.SQLiteDatabase | null = null;

export const getDatabase = async (): Promise<SQLite.SQLiteDatabase> => {
  if (db) {
    return db;
  }
  db = await SQLite.openDatabaseAsync(DATABASE_NAME);
  return db;
};