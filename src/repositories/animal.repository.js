import { connect } from "../data/db.js";

const createAnimal = async (animal) => {
  const conn = await connect();
  try {
    const sql =
      "INSERT INTO animais (nome, tipo, proprietario_id) VALUES ($1, $2, $3) RETURNING *";
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

const getAnimals = async (id) => {
  const conn = await connect();
  try{
    if(id){
      const res = await conn.query("SELECT * FROM animais WHERE proprietario_id = $1", [id])
      return res.rows;
    }else{
      const res = await conn.query("SELECT * FROM animais");
      return res.rows;
    }

  }catch(error){
    throw error
  }finally{
    conn.release();
  }
}



const getAnimal = async (id) => {
  const conn = await connect();
  try{
    
    const res = await conn.query("SELECT * FROM animais where animal_id = $1", [id]);
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
    const res = await conn.query("SELECT animal_id FROM animais WHERE animal_id = $1", [id]);
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
      "UPDATE animais SET nome = $1, tipo = $2 WHERE animal_id = $3 RETURNING *";
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
    const res = await conn.query("DELETE FROM animais WHERE animal_id = $1 RETURNING *", [id])
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