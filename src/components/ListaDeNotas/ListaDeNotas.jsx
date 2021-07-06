import React, { Component } from 'react';
import CardNota from '../CardNota/';
import './style.css';

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {Array.of("Teste01", "Teste02", "Teste03").map((teste, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
