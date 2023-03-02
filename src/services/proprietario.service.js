import proprietarioRepository from "../repositories/proprietario.repository.js"
import animalRepository from "../repositories/animal.repository.js";
const createProprietario = async (proprietario) => {
  return await proprietarioRepository.createProprietario(proprietario);
}
const getProprietarios = async () => {
  return await proprietarioRepository.getProprietarios()
}
const getProprietario = async (id) => {
  await proprietarioRepository.checkId(id)
  return await proprietarioRepository.getProprietario(id)
}

const updateProprietario = async (proprietario) => {
  await proprietarioRepository.checkId(proprietario.proprietario_id)
  return await proprietarioRepository.updateProprietario(proprietario)
}
const deleteProprietario = async (id) => {
  await proprietarioRepository.checkId(id)
  const animals = await animalRepository.getAnimalsByProp(id)
  if(!animals){
    return await proprietarioRepository.deleteProprietario(id)
  }throw new Error("O proprietario possui animais cadastrados. remova-os primeiro")
  
}

export default {
  createProprietario,
  getProprietarios,
  getProprietario,
  updateProprietario,
  deleteProprietario
}