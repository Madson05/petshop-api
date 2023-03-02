import animalRepository from "../repositories/animal.repository.js"
const createAnimal = async (animal) => {
  return await animalRepository.createAnimal(animal);
}
const getAnimals = async () => {
  return await animalRepository.getAnimals()
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
  getAnimal,
  updateAnimal,
  deleteAnimal
}