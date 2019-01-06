import React, { Component, Fragment } from "react";

export default class Result extends Component {
  render() {
    return (
      <Fragment>
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
          Restart
        </button>
      </Fragment>
    );
  }
}
