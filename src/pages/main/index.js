import React, { Component, Fragment } from "react";

import Form from "../../components/form";
import Result from "../../components/result";

import { StyleMain } from "./style";

// eslint-disable-next-line no-unused-vars
const sugestions = {
  welcomeTitle: "Bem vindo, vamos achar seu jogo?",
  questions: [
    {
      id: 0,
      title: "Você gosta de interagir com as pessoas?",
      type: "boolean",
      name: "radio"
    },
    {
      id: 1,
      title: "Quanto tempo você quer jogar?",
      type: "select",
      name: "game_time",
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
    },
    {
      id: 2,
      title: "Que tipo de jogo gosta?",
      type: "select",
      name: "type_game",
      options: [
        {
          id: 0,
          option: "FPS"
        },
        {
          id: 1,
          option: "RPG"
        },
        {
          id: 2,
          option: "Puzzle"
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

export default class Main extends Component {
  state = {
    step: 0,
    answers: []
  };

  onNext = () => {
    this.setState({ step: this.state.step + 1 });
  };

  render() {
    switch (this.state.step) {
      case 1:
        return (
          <StyleMain>
            <Form
              questions={sugestions.questions}
              onComplete={pAnswers =>
                this.setState({ step: 2, answers: pAnswers })
              }
            />
          </StyleMain>
        );
      case 2:
        return (
          <StyleMain>
            <Fragment>
              <Result
                onStart={() => this.setState({ step: 0 })}
                answers={this.state.answers}
              />
            </Fragment>
          </StyleMain>
        );

      default:
        return (
          <StyleMain>
            <div>
              <h1>Search Game</h1>
              <h3>Bem vindo</h3>
              <p>{sugestions.welcomeTitle}</p>
              <button type="button" onClick={this.onNext}>
                Começar
              </button>
            </div>
          </StyleMain>
        );
    }
  }
}
