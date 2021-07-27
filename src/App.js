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
          categorias={this.categorias}
          notas={this.notas}
          criarNota={this.notas.adicionarNota.bind(this.notas)}
        />
        <main className="conteudo-principal">
          <ListaCategorias 
            categorias={this.categorias}
            criarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
          />
          <ListaDeNotas 
            notas={this.notas}
            apagarNota={this.notas.deletarNota.bind(this.notas)}
          />
        </main>
      </section>
    );
  }
}

export default App;
