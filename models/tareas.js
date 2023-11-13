import colors from 'colors'
import Tarea from "./tarea.js"

export default class Tareas {
  _listado = {}
  constructor() {
    this._listado = {}
  }

  crearTarea (desc = '') {
    const tarea = new Tarea(desc)
    this._listado[tarea.id] = tarea
  }
  get listadoArr () {
    return Object.values(this._listado)
  }
  cargarTareasfromArr (tareas = []) {
    tareas.map(tarea => this._listado[tarea.id] = tarea)
  }
  listadoTareasStatus () {
    this.listadoArr.map(({ desc, completadoEn }, idx) => console.log(`${idx + 1}. ${desc} :: ${completadoEn != null ? 'Completado'.green : 'Pendiente'.red}`))
  }
  listarPendientesCompletadas (completadas = true) {
    const newArr = completadas
      ? Object.values(this._listado).filter(({ completadoEn }) => completadoEn != null)
      : Object.values(this._listado).filter(({ completadoEn }) => completadoEn == null)
    newArr.map(({ desc, completadoEn }, idx) =>
      console.log(`${idx + 1}. ${desc} :: ${completadoEn != null ? completadoEn.green : 'Pendiente'.red}`))
  }
  borrarTarea (id = '') {
    if (this._listado[id]) {
      delete this._listado[id]
    }
  }
  cambiarStatusTareas (ids = []) {
    ids.map(id => {
      if (!this._listado[id].completadoEn) this._listado[id].completadoEn = new Date().toISOString()
    })

    this.listadoArr.forEach(({ id }) => {
      if (!ids.includes(id)) this._listado[id].completadoEn = null
    })
  }
}
