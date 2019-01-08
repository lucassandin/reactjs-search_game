import React, { Component, Fragment } from "react";

import { StyleForm } from "./style";

export default class Form extends Component {
  state = {
    step: 0,
    answers: [],
    input: { id: "", value: "", title: "", name: "" }
  };

  next = () => {
    let answers = this.state.answers;

    if (this.state.input.value !== "") {
      answers = {
        id: Math.floor(Math.random() * 1000 + 1),
        title: this.state.input.title,
        answer: this.state.input.value
      };

      this.setState(
        {
          answers: [...this.state.answers, answers],
          input: { id: "", value: "", title: "", name: "" }
        },
        () => {
          if (this.props.questions.length === this.state.step) {
            this.props.onComplete(this.state.answers);
          }
        }
      );

      return true;
    } else {
      return false;
    }
  };

  onChange = (event, obj) => {
    let aux =
      this.state.answers &&
      this.state.answers.find(e => {
        return e.name === event.target.name;
      });
    if (aux === undefined) {
      this.setState({
        input: {
          id: Math.floor(Math.random() * 10 + 1),
          value: event.target.value,
          title: obj.title,
          name: event.target.name
        }
      });
    }
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
                    name={question.name}
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
                    name={question.name}
                    value="Não"
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
                  defaultValue=""
                  key={question.id}
                  name={question.name}
                  onChange={event => {
                    this.onChange(event, {
                      title: question.title
                    });
                  }}
                >
                  <option value="">-- Selecione</option>

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

    if (this.next()) {
      this.setState({
        step: this.state.step + 1
      });
    } else {
      alert("Favor responder à pergunta");
    }
  };

  render() {
    return (
      <StyleForm>
        <h1>Form</h1>
        <form onSubmit={this.handleOnSubmit}>
          {this.handleCreateElement()}
          <div>
            <button type="submit">Próximo</button>
          </div>
        </form>
      </StyleForm>
    );
  }
}
