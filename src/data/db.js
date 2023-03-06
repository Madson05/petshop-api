import pg from "pg";
import dotenv from "dotenv";
import  Sequelize from "sequelize";

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

const sequelize = new Sequelize(
  process.env.DB_URL, 
  {
    dialect: "postgres",
    define: {
      timestamps: false
    }
  })

  export default sequelize;
