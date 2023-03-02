import animalRepository from "../repositories/animal.repository.js"
import proprietarioRepository from "../repositories/proprietario.repository.js";
const createAnimal = async (animal) => {
  await proprietarioRepository.checkId(animal.proprietario_id);
  return await animalRepository.createAnimal(animal);
}
const getAnimals = async () => {
  return await animalRepository.getAnimals()
}

const getAnimalsByProp = async (id) => {
  return await animalRepository.getAnimalsByProp(id)
}

const getAnimal = async (id) => {
  await animalRepository.checkId(id)
  return await animalRepository.getAnimal(id)
}

const updateAnimal = async (animal) => {
  await animalRepository.checkId(animal.animal_id)
  return await animalRepository.updateAnimal(animal)
}
const deleteAnimal = async (id) => {
  await animalRepository.checkId(id)
  return await animalRepository.deleteAnimal(id)
}

export default {
  createAnimal,
  getAnimals,
  getAnimalsByProp,
  getAnimal,
  updateAnimal,
  deleteAnimal
}