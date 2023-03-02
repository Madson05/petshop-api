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

const getProprietarios = async () => {
  const conn = await connect();
  try{
    const sql = "SELECT * FROM proprietarios"
    const res = await conn.query(sql);
    return res.rows;

  }catch(error){
    throw error
  }finally{
    conn.release();
  }
}

const getProprietario = async (id) => {
  const conn = await connect();
  try{
    
    const res = await conn.query("SELECT * FROM proprietarios where proprietario_id = $1", [id]);
    return res.rows[0];
  }catch(error){
    throw error
  }finally{
    conn.release();
  }
}

const checkId = async (id) => {
  const conn = await connect();
  try{
    const res = await conn.query("SELECT proprietario_id FROM proprietarios where proprietario_id = $1", [id]);
    if(!res.rows[0])throw new Error("propritario_id inválido");
  }catch(error){
    throw error
  }finally{
    conn.release();
  }
}

const updateProprietario = async (proprietario) => {
  const conn = await connect();
  try{
    const sql =
      "UPDATE proprietarios SET nome = $1, telefone = $2 WHERE proprietario_id = $3 RETURNING *";
    const values = [
      proprietario.nome,
      proprietario.telefone,
      proprietario.proprietario_id
    ];
    const res = await conn.query(sql, values)
    return res.rows[0];
  }catch(error){
    throw error
  }finally{
    conn.release();
  }
}

const deleteProprietario = async (id) => {
  const conn = await connect();
  try{
    const res = await conn.query("DELETE FROM proprietarios WHERE proprietario_id = $1 RETURNING *", [id])
    return res.rows[0];
  }catch(error){
    throw error
  }finally{
    conn.release();
  }
}

export default {
  createProprietario,
  getProprietarios,
  getProprietario,
  deleteProprietario,
  updateProprietario,
  checkId
}