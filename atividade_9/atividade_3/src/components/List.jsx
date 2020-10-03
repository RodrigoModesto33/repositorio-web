import React, { Component } from "react";
import TableRow from "./TableRow"
import FirebaseService from "../services/FirebaseService"

import FirebaseContext from "../utils/FirebaseContext";

const listPage = () => (
  <FirebaseContext.Consumer>
    {(firebase) => <List firebase={firebase} />}
  </FirebaseContext.Consumer>
);

class List extends Component {
  constructor(props) {
    super(props);
    this._isMouted = false;
    this.state = { disciplinas: [],loading: false  };
  }

  componentDidMount() {
    this._isMouted = true;
    this.setState({ loading: true })
    FirebaseService.list(this.props.firebase.getFirestore(),
    (disciplinas)=>{
      if(disciplinas){
        if(this._isMouted){
          this.setState({disciplinas:disciplinas, loading: false})
        }
      }
    }
    )
  }
  componentWillUnmount() {
    this._isMouted = false
  }

  gerarConteudo() {
    if (this.state.loading) {
        return (
            <tr>
                <td colSpan='6' style={{ textAlign: "center" }}>
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </td>
            </tr>
        )
    } else return this.montarTabela()
}
  montarTabela() {
    if (!this.state.disciplinas) return;
    return this.state.disciplinas.map((disciplina, i) => {
      return (
        <TableRow
          disciplina={disciplina}
          key={i}
          firebase={this.props.firebase}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <p>Lista de Disciplinas</p>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Curso</th>
              <th>Capacidade</th>
              <th colSpan="2" style={{ textAlign: "center" }}></th>
            </tr>
          </thead>
          <tbody>{this.gerarConteudo()}</tbody>
        </table>
      </div>
    );
  }
}

export default listPage;
