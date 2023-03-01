import proprietarioRepository from "../repositories/proprietario.repository.js"
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

export default {
  createProprietario,
  getProprietarios,
  getProprietario
}