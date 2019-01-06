import React, { Component, Fragment } from "react";

import Form from "./components/form";
import Result from "./components/result";

// eslint-disable-next-line no-unused-vars
const sugestions = {
  welcomeTitle: "Bem vindo, vamos achar seu jogo?",
  questions: [
    {
      id: 0,
      title: "Você gosta de interagir com as pessoas?",
      type: "boolean"
    },
    {
      id: 1,
      title: "Quanto tempo você quer jogar?",
      type: "select",
      options: [
        {
          id: 0,
          option: "15 minutos"
        },
        {
          id: 1,
          option: "mais de 30 minutos"
        },
        {
          id: 2,
          option: "mais de 1 hora"
        }
      ]
    }
  ],
  results: ["mario", "zelda", "topgear", "cs", "metalslug", "gta"],
  resultsTitle: "Encontramos o seu jogo.",
  results2: [
    {
      title: "mario",
      categories: ["ação", "aventura", "single-player"]
    },
    {
      title: "zelda",
      categories: ["ação", "aventura", "single-player"]
    },
    {
      title: "cs",
      categories: ["ação", "fps", "multi-player"]
    }
  ],
  finalResult: [
    {
      interagir: "true",
      categories: ["acao", "aventura", "puzzle"],
      games: ["gta", "cs"],
      time: "30"
    },
    {
      interagir: "false",
      categories: ["acao", "aventura", "puzzle"],
      games: ["mario", "zelda"],
      time: "60"
    }
  ]
};

export default class App extends Component {
  state = {
    step: 0,
    answers: []
  };

  onNext = () => {
    this.setState({ step: this.state.step + 1 });
  };

  teste() {
    this.setState({ step: 0 });
  }

  render() {
    switch (this.state.step) {
      case 1:
        return (
          <Form
            questions={sugestions.questions}
            onComplete={pAnswers =>
              this.setState({ step: 2, answers: pAnswers })
            }
          />
        );
      case 2:
        return (
          <Result
            onStart={() => this.setState({ step: 0 })}
            answers={this.state.answers}
          />
        );

      default:
        return (
          <Fragment>
            <div>
              <h1>Search Game</h1>
              <h3>Bem vindo</h3>
              <p>{sugestions.welcomeTitle}</p>
              <button type="button" onClick={this.onNext}>
                Começar
              </button>
            </div>
          </Fragment>
        );
    }
  }
}
