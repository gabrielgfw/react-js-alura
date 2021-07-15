import React, { Component } from 'react';
import './style.css';

class ListaCategorias extends Component {
  
  _handleEventoInput(e) {
    console.log(e.key);
  }

  render() { 
    return (
      <section className="categorias-conteudo">
        <ul>
          <li>Jogos</li>
          <li>Diversão</li>
          <li>Lazer</li>
          <li>Trabalho</li>
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