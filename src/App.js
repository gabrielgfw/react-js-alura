import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas/';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import './assets/App.css';

class App extends Component {

  criarNota(titulo, descricao) {
    console.log(`Criando: ${titulo} | ${descricao}`);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota} />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;
