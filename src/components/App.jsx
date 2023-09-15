import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './styles.css';


export default class App extends Component {

  state = {
    table: [[2.4, 1.05, 2.5, 0.38], [3.0, 1.12, 2.5, 0.35], [3.6, 1.20, 2.5, 0.32]],
    mode: ["Органічний", "Напівнезалежний", "Вбудований"],
    size: 0,
    currentSize: 0,
    effort: 0,
    time: 0,
    staff: 0,
    model: 0,
    resultsVisibility: false,
  }

  handleInputSize = async (e) => {
    await this.setState({ size: e.target.value });
  }

  calculation = async (e) => {
    e.preventDefault();

    const { table,
      size,
      model } = this.state;

    this.setState({ currentSize: size, resultsVisibility: true });

    if (size >= 2 && size <= 50)
      this.setState({ model: 0 }) // organic

    else if (size > 50 && size <= 300)
      this.setState({ model: 1 }) // semi-detached

    else if (size > 300)
      this.setState({ model: 2 }) // embedded

    this.setState(prevState => {
      return {
        effort: Math.round(table[prevState.model][0] * (Math.pow(prevState.currentSize, table[prevState.model][1]))),
      }
    });
    this.setState(prevState => {
      return {
        time: Math.round(table[prevState.model][2] * (Math.pow(prevState.effort, table[prevState.model][3]))),
      }
    });
    this.setState(prevState => {
      return {
        staff: Math.round(prevState.effort / prevState.time)
      }
    });
  }

  render() {
    return (

      <div
        style={{
          fontSize: 40,
          color: '#010101'
        }}
      >
        <header className="searchbar">
          <form action="">
            <input
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Кількість рядків коду (тис)"
              onChange={this.handleInputSize}
            />
            <button type="button" onClick={this.calculation}>
              <span className="button-label">розрахунок</span>
            </button>
          </form></header>

        {!this.state.resultsVisibility && <div className='write-smth-container'>
          <a href="#" class="arrow-up">Up</a>
          <p>Напишіть щось вище</p>
        </div>}
        {this.state.resultsVisibility &&
          <div className='results-container'>
            <p className='results'><span>Тип проєкту</span> {this.state.mode[this.state.model]}</p>
            <p className='results'><span>Трудомісткість</span>  {this.state.effort} (люд*міс)</p>
            <p className='results'><span>Час розробки</span> {this.state.time} місяців</p>
            <p className='results'><span>Чисельність персоналу</span> {this.state.staff} осіб</p></div>}

      </div>


    );
  }
};


export { App };
