import animalService from "../services/animal.service.js";

const createAnimal = async (req, res, next) => {
  try{
    const animal = req.body;

    let validateString = "";

    if(!animal.nome) validateString += "nome, ";
    if(!animal.tipo) validateString += "tipo, ";
    if(!animal.proprietario_id) validateString += "proprietario_id, "
    if(validateString) throw new Error(`O(s) campo(s) ${validateString}tem preenchimento obrigatório.`)
    res.status(201).send(await animalService.createAnimal(animal))
    global.logger.info("Created animal")

  }catch(error){
    next(error)
  }
}

const getAnimals = async (req, res, next) => {
  try{
    res.send(await animalService.getAnimals())
  }catch(error){
    next(error)
  }
}

const getAnimal = async (req, res, next) => {
  try{
    const id = req.params.id
    res.send(await animalService.getAnimal(id))
  }catch(error){
    next(error)
  }
}

const updateAnimal = async (req, res, next) => {
  try{
    const animal = req.body;

    let validateString = "";
    if(!animal.animal_id) validateString += "animal_id, "
    if(!animal.nome) validateString += "nome, ";
    if(!animal.tipo) validateString += "tipo, ";
    if(!animal.proprietario_id) validateString += "proprietario_id, ";
    if(validateString) throw new Error(`O(s) campo(s) ${validateString} tem preenchimento obrigatório.`)
    res.send(await animalService.updateAnimal(animal))
    global.logger.info(`updated animal - ${animal.animal_id}` )

  }catch(error){
    next(error)
  }
}

const deleteAnimal = async (req, res, next) => {
  try{
    const id = req.params.id
    res.send(await animalService.deleteAnimal(id))
  }catch(error){
    next(error)
  }
}

export default {
  createAnimal,
  getAnimals,
  getAnimal,
  updateAnimal,
  deleteAnimal
}


