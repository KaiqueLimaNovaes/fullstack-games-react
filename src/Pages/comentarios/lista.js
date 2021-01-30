import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { Switch, Route } from "react-router-dom";

import FormNew from "./FormNew.js";

function Lista({ history }){
    const [comentarios, setComentarios] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3005/comentarios").then((response) => {
        setComentarios(response.data.comentarios);
        });
    }, []);
    
    return (
      <div class="container-fluid">
          <Table striped bordered hover>
              <thead>
              <tr>
                  <th>Nome</th>
                  <th>
                    Comentários
                  </th>
              </tr>
              </thead>
              <tbody>
              {comentarios && comentarios.map((item) => (
              <tr key={item.id}>
                  <td>{item.nome}</td>
                  <td>{item.comentario}</td>
              </tr>
              ))}
              </tbody>
          </Table>
          <Switch>
          <Route path="/comentarios/new" component={FormNew} />
          </Switch>
      </div>
    )
}

export default Lista;