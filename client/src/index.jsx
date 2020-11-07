import React from 'react';
import ReactDOM from 'react-dom';
import CowTable from './CowTable.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      selectedCow: {
        name: 'lulu',
        description: null,
      },
    };
  }

  componentDidMount() {
    fetch('/cows')
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.setState(
          {
            cows: response,
          },
          () => {
            // console.log(this.state.cows);
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>cow list</h1>
        <div>{this.state.selectedCow.name}</div>
        <div>{this.state.selectedCow.description}</div>
        <CowTable cows={this.state.cows} />
      </div>
    );
  }
}

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
