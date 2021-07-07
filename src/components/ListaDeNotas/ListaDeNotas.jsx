import React, { Component } from 'react';
import CardNota from '../CardNota/';
import './style.css';

class ListaDeNotas extends Component {

  // This constructor is unnecessary by the fact that
  // no other property is defined beyond external props.
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota titulo={nota.titulo} descricao={nota.descricao}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
