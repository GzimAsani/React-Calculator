import './App.css';
import { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState((state) => calculate(
      { total: state.total, next: state.next, operation: state.operation },
      buttonName,
    ));
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="App">
        <Display result={next || total || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
