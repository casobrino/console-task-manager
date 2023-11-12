import fs from 'fs'
const archivo = './bd/data.json'
export const guardarDB = (data) => {
  fs.writeFileSync(archivo, JSON.stringify(data))
}

export const leerDb = () => {
  return !fs.existsSync(archivo) ? null : JSON.parse(fs.readFileSync(archivo, { encoding: 'utf-8' }))
}
