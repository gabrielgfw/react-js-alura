import React, { Component } from 'react';
import CardNota from './CardNota/CardNota';

class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Teste01", "Teste02", "Teste03").map((teste, index) => {
          return (
            <li key={index}>
              <h3>{teste}</h3>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
