import React from 'react';
import ReactDOM from 'react-dom';
import CowTable from './CowTable.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCow: {
        name: 'Milkshake',
        description: 'loves milk',
      },
    };
  }

  componentDidMount() {
    fetch('/cows').then((results) => {
      console.log(results);
    });
  }

  render() {
    return (
      <div>
        <h1>cow list</h1>
        <div>{this.state.currentCow.name}</div>
        <div>{this.state.currentCow.description}</div>
        {/* <CowTable cowList={this.state.cowList} /> */}
      </div>
    );
  }
}

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
