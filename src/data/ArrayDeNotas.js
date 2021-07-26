export default class ArrayDeNotas {

  constructor() {
    this.notas = [];
    this._inscritos = [];
  }

  adicionarNota(titulo, texto, categoria) {
    const novaNota = new Nota(titulo, texto, categoria);
    this.notas.push(novaNota);
    this.notificar();
  }

  deletarNota(index) {
    this.notas.splice(index, 1);
    this.notificar();
  }

  inscrever(func) {
    this._inscritos.push(func);
  }

  notificar() {
    this._inscritos.forEach(func => {
      func(this.notas);
    });
  }

}

class Nota {
  constructor(titulo, descricao, categoria) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.categoria = categoria;
  }
}