import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas/';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import './assets/App.css';
import ListaCategorias from './components/ListaCategorias/ListaCategorias';

class App extends Component {

  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: [],
    };
  }

  criarNota(titulo, descricao) {
    this.setState({notas: [...this.state.notas, {titulo, descricao}]});
  }

  apagarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas });
  }

  criarCategoria(categoria) {
    this.setState({ categorias: [...this.state.categorias, categoria] });
  }


  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <main className="conteudo-principal">
          <ListaCategorias 
            categorias={this.state.categorias}
            criarCategoria={this.criarCategoria.bind(this)}
          />
          <ListaDeNotas 
            notas={this.state.notas}
            apagarNota={this.apagarNota.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default App;
