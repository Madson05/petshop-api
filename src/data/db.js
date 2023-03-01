import pg from "pg";

export const connect = async () => {
  
  if (global.connection) {
    return global.connection.connect();
  }

  const pool = new pg.Pool({
    connectionString:
      "postgres://qyemqexq:5wl-H-rsRpqlE2YmigrODjlQ8EGqj8-K@mahmud.db.elephantsql.com/qyemqexq",
  });
  
  global.connection = pool;

  return pool.connect();
};
