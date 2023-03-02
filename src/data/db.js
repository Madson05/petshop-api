import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

export const connect = async () => {
  if (global.connection) {
    return global.connection.connect();
  }

  const pool = new pg.Pool({
    connectionString: process.env.DB_URL,
  });

  global.connection = pool;

  return pool.connect();
};
