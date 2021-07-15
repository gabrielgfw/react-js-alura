import React, { Component } from 'react';
import './style.css';

class FormularioCadastro extends Component {

  constructor(props) {
    super(props);
    this.titulo = "";
    this.descricao = "";
    this.categoria = "Sem Categoria";
  }

  _handleMudancaTitulo(event) {
    event.stopPropagation();
    this.titulo = event.target.value;
  }

  _handleMudancaDescricao(event) {
    event.stopPropagation();
    this.descricao = event.target.value;
  }

  _handleMudancaCategoria(event) {
    event.stopPropagation();
    this.categoria = event.target.value;
  }

  _criarNota(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.criarNota(this.titulo, this.descricao, this.categoria);
  }

  render() {
    return (
      <form className="form-cadastro"
        onSubmit={this._criarNota.bind(this)}>

        <select 
          className="form-cadastro_input"
          onChange={this._handleMudancaCategoria.bind(this)}
        >
          <option>Sem categoria</option>
          {this.props.categorias.map(categoria => {
            return <option>{categoria}</option>
          })}
        </select>

        <input
          className="form-cadastro_input"
          type="text"
          placeholder="Título"
          onChange={this._handleMudancaTitulo.bind(this)}
        />

        <textarea
          className="form-cadastro_input"
          rows={15}
          placeholder="Escreva sua nota..."
          onChange={this._handleMudancaDescricao.bind(this)}
        />

        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>

      </form>
    );
  }
}

export default FormularioCadastro;
