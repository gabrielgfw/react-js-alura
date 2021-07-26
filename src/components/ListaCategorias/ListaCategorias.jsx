import React, { Component } from 'react';
import './style.css';

class ListaCategorias extends Component {
  
  constructor() {
    super();
    this.state = { categorias: [] };
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

  _handleEventoInput(e) {
    if(e.key === "Enter") {
      const categoria = e.target.value;
      this.props.criarCategoria(categoria);
    }
  }

  render() { 
    return (
      <section className="categorias-conteudo">
        <ul>
          {this.state.categorias.map((categoria, index) => {
            return <li key={index}>{categoria}</li>
          })}
        </ul>  
        <input 
          type="test" 
          placeholder="Adicionar Categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}
 
export default ListaCategorias;