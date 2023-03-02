import { connect } from "../data/db.js";

const createAnimal = async (animal) => {
  const conn = await connect();
  try {
    const sql =
      "INSERT INTO animals (nome, tipo, proprietario_id) VALUES ($1, $2) RETURNING *";
    const values = [
      animal.nome,
      animal.tipo,
      animal.proprietario_id
    ];

    const res = await conn.query(sql, values);

    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

const getAnimals = async () => {
  const conn = await connect();
  try{
    const sql = "SELECT * FROM animals"
    const res = await conn.query(sql);
    return res.rows;

  }catch(error){
    throw error
  }finally{
    conn.release();
  }
}

const getAnimal = async (id) => {
  const conn = await connect();
  try{
    
    const res = await conn.query("SELECT * FROM animals where animal_id = $1", [id]);
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
    const res = await conn.query("SELECT animal_id FROM animals where animal_id = $1", [id]);
    if(!res.rows[0])throw new Error("animal_id inválido");
  }catch(error){
    throw error
  }finally{
    conn.release();
  }
}

const updateAnimal = async (animal) => {
  const conn = await connect();
  try{
    const sql =
      "UPDATE animals SET nome = $1, tipo = $2 WHERE animal_id = $3 RETURNING *";
    const values = [
      animal.nome,
      animal.tipo,
      animal.animal_id
    ];
    const res = await conn.query(sql, values)
    return res.rows[0];
  }catch(error){
    throw error
  }finally{
    conn.release();
  }
}

const deleteAnimal = async (id) => {
  const conn = await connect();
  try{
    const res = await conn.query("DELETE FROM animals WHERE animal_id = $1 RETURNING *", [id])
    return res.rows[0];
  }catch(error){
    throw error
  }finally{
    conn.release();
  }
}

export default {
  createAnimal,
  getAnimals,
  getAnimal,
  deleteAnimal,
  updateAnimal,
  checkId
}