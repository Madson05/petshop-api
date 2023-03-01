import { connect } from "../data/db.js";

const createProprietario = async (proprietario) => {
  const conn = await connect();
  try {
    const sql =
      "INSERT INTO proprietarios (nome, telefone) VALUES ($1, $2) RETURNING *";
    const values = [
      proprietario.nome,
      proprietario.telefone,
    ];

    const res = await conn.query(sql, values);

    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

export default {
  createProprietario,
}