import proprietarioRepository from "../repositories/proprietario.repository.js"
const createProprietario = async (proprietario) => {
  return await proprietarioRepository.createProprietario(proprietario);
}

export default {
  createProprietario
}