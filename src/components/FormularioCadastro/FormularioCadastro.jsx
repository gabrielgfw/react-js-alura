import React, { Component } from 'react';
import './style.css';

class FormularioCadastro extends Component {

  constructor(props) {
    super(props);
    this.titulo = "";
    this.descricao = "";
    this.categoria = "Sem Categoria";
    this.state = { titulo: '', descricao: '', categorias: [] };
    this._novasCategorias = this._novasCategorias.bind(this);
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias); 
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this._novasCategorias);
  }

  _novasCategorias(categorias) {
    this.setState({...this.state, categorias})
  }

  _handleMudancaTitulo(event) {
    event.stopPropagation();
    this.setState({...this.state, titulo: event.target.value});
  }

  _handleMudancaDescricao(event) {
    event.stopPropagation();
    this.setState({...this.state, descricao: event.target.value});
  }

  _handleMudancaCategoria(event) {
    event.stopPropagation();
    this.categoria = event.target.value;
  }

  _criarNota(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.criarNota(this.state.titulo, this.state.descricao, this.categoria);
    this._limparFormulario();
  }

  _limparFormulario() {
    this.setState({...this.state, titulo: '', descricao: ''});
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
          {this.state.categorias.map((categoria, index) => {
            return <option key={index}>{categoria}</option>
          })}
        </select>

        <input
          className="form-cadastro_input"
          type="text"
          placeholder="Título"
          onChange={this._handleMudancaTitulo.bind(this)}
          value={this.state.titulo}
        />

        <textarea
          className="form-cadastro_input"
          rows={15}
          placeholder="Escreva sua nota..."
          onChange={this._handleMudancaDescricao.bind(this)}
          value={this.state.descricao}
        />

        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>

      </form>
    );
  }
}

export default FormularioCadastro;
