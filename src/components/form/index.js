import React, { Component, Fragment } from "react";

import { StyleForm } from "./style";

export default class Form extends Component {
  state = {
    step: 0,
    answers: []
  };

  onChange = (event, obj) => {
    let answers = this.state.answers;

    answers = {
      id: Math.floor(Math.random() * 1000 + 1),
      title: obj.title,
      answer: event.target.value
    };

    this.setState({ answers: [...this.state.answers, answers] });
  };

  // function to create dynamic element
  handleCreateElement = () => {
    let questions = this.props.questions;

    const element = questions.map((question, i) => {
      let aux;
      if (this.state.step === i) {
        switch (question.type) {
          case "boolean":
            aux = (
              <Fragment key={question.id}>
                <h4>{question.title}</h4>
                <label>
                  <input
                    type="radio"
                    name="booleano"
                    value="Sim"
                    onChange={event =>
                      this.onChange(event, {
                        title: question.title
                      })
                    }
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="booleano"
                    value="Não"
                    defaultChecked
                    onChange={event =>
                      this.onChange(event, {
                        title: question.title
                      })
                    }
                  />
                  Não
                </label>
              </Fragment>
            );
            break;
          case "select":
            aux = (
              <Fragment key={question.id}>
                <h4>{question.title}</h4>

                <select
                  defaultValue="0"
                  key={question.id}
                  onChange={event => {
                    this.onChange(event, {
                      title: question.title
                    });
                  }}
                >
                  <option value="0">-- Selecione</option>

                  {question.options.map((option, i) => {
                    return (
                      <option key={i} value={option.option}>
                        {option.option}
                      </option>
                    );
                  })}
                </select>
              </Fragment>
            );
            break;
          default:
            break;
        }
      }
      return aux;
    });

    return element;
  };

  handleOnSubmit = event => {
    event.preventDefault();

    this.setState({ step: this.state.step + 1 });
  };

  render() {
    return (
      <StyleForm>
        <h1>Form</h1>
        <form onSubmit={this.handleOnSubmit}>
          {this.handleCreateElement()}
          <div>
            <button
              type="button"
              onClick={() => this.props.onComplete(this.state.answers)}
            >
              Finalizar
            </button>
            <button type="submit">Próximo</button>
          </div>
        </form>
      </StyleForm>
    );
  }
}
