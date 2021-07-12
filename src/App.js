import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas/';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import './assets/App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      notas: []
    };
  }

  criarNota(titulo, descricao) {
    const novaNota = {titulo, descricao};
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado);
  }

  apagarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas });
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas 
          notas={this.state.notas}
          apagarNota={this.apagarNota.bind(this)}
        />
      </section>
    );
  }
}

export default App;
