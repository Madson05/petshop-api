import proprietarioRepository from "../repositories/proprietario.repository.js"
const createProprietario = async (proprietario) => {
  return await proprietarioRepository.createProprietario(proprietario);
}
const getProprietarios = async () => {
  return await proprietarioRepository.getProprietarios()
}

export default {
  createProprietario,
  getProprietarios,
}