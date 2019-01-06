import React, { Component } from "react";

import { StyleResult } from "./style";

export default class Result extends Component {
  render() {
    return (
      <StyleResult>
        <h1>Result</h1>
        {this.props.answers.map(e => {
          return (
            <ul key={e.id}>
              <li>
                id:
                {e.id}
              </li>
              <li>
                title:
                {e.title}
              </li>
              <li>
                answer:
                {e.answer}
              </li>
            </ul>
          );
        })}
        <button type="button" onClick={this.props.onStart}>
          Reiniciar
        </button>
      </StyleResult>
    );
  }
}
