import React from 'react';
import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (btnName) => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState(calculate(this.state, btnName));
  }

  render() {
    const defaultDisplay = '0';
    const { next, total } = this.state;

    const result = next || total || defaultDisplay;
    return (
      <div className="App">
        <Display result={result} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
