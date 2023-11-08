export default class Tarea {
  id = '';
  desc = '';
  compleatadoEn = null;
  constructor(desc) {
    this.id = crypto.randomUUID();
    this.desc = desc;
  }
}
