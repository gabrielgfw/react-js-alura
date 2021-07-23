import React, { Component } from 'react';
import './style.css';

class ListaCategorias extends Component {
  
  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias.bind(this));
  }

  _novasCategorias(categorias) {
    console.log(categorias);
  }

  _handleEventoInput(e) {
    if(e.key == "Enter") {
      const categoria = e.target.value;
      this.props.criarCategoria(categoria);
    }
  }

  render() { 
    return (
      <section className="categorias-conteudo">
        <ul>
          {this.props.categorias.categorias.map((categoria, index) => {
            return <li indice={index}>{categoria}</li>
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