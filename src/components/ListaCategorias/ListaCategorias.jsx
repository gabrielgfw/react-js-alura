import React, { Component } from 'react';
import { isDOMComponent } from 'react-dom/test-utils';
import './style.css';

class ListaCategorias extends Component {
  
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
          {this.props.categorias.map((categoria, index) => {
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