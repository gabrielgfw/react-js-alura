import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas/';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import './assets/App.css';
import ListaCategorias from './components/ListaCategorias/ListaCategorias';
import Categorias from './data/Categorias';
import ArrayDeNotas from './data/ArrayDeNotas';

class App extends Component {

  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
          categorias={this.categorias.categorias}
          criarNota={this.notas.adicionarNota}
        />
        <main className="conteudo-principal">
          <ListaCategorias 
            categorias={this.categorias.categorias}
            criarCategoria={this.categorias.adicionarCategoria}
          />
          <ListaDeNotas 
            notas={this.notas.notas}
            apagarNota={this.notas.deletarNota}
          />
        </main>
      </section>
    );
  }
}

export default App;
