import React, { Component } from 'react';
import './style.css';
import { ReactComponent as DeleteIcon } from '../../assets/img/delete-icon.svg'

class CardNota extends Component {

  apagar() {
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }
  
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <div className="card-nota_cabecalho-top">
            <span>{this.props.categoria}</span>
            <DeleteIcon className="card-nota_icon" onClick={this.apagar.bind(this)}/>
          </div>
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          
        </header>
        <p className="card-nota_texto">{this.props.descricao}</p>
      </section>
    );
  }
}

export default CardNota;
