import proprietarioService from "../services/proprietario.service.js";

const createProprietario = async (req, res, next) => {
  try{
    const proprietario = req.body;

    let validateString = "";

    if(!proprietario.nome) validateString += "nome, ";
    if(!proprietario.telefone) validateString += "telefone ";
    if(validateString) throw new Error(`O(s) campo(s) ${validateString} tem preenchimento obrigatório.`)
    res.status(201).send(await proprietarioService.createProprietario(proprietario))
    global.logger.info("Created proprietario")

  }catch(error){
    next(error)
  }
}

const getProprietarios = async (req, res, next) => {
  try{
    res.send(await proprietarioService.getProprietarios())
  }catch(error){
    next(error)
  }
}

const getProprietario = async (req, res, next) => {
  try{
    const id = req.params.id
    res.send(await proprietarioService.getProprietario(id))
  }catch(error){
    next(error)
  }
}

export default {
  createProprietario,
  getProprietarios,
  getProprietario
}