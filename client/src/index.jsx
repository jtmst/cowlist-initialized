import React from 'react';
import ReactDOM from 'react-dom';
import CowTable from './CowTable.jsx';
import AddCow from './AddCow.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      selectedCow: {
        name: null,
        description: null,
      },
    };
    this.selectCow = this.selectCow.bind(this);
    this.addCow = this.addCow.bind(this);
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
          () => {}
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  selectCow(cow) {
    this.setState({ selectedCow: cow });
  }

  addCow(cow) {
    // console.log(cow);
    fetch('/cows', {
      method: 'POST',
      body: JSON.stringify(cow),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        console.log(`${cow} added`);
      })
      .catch((err) => {
        console.log('error posting cow, ', err);
      });
  }

  render() {
    return (
      <div>
        <h1>cow list</h1>
        <div
          class="selectedCow"
          style={{ position: 'absolute', left: '50%', top: '20%' }}
        >
          <h3>{this.state.selectedCow.name}</h3>
          <p>{this.state.selectedCow.description}</p>
        </div>
        <CowTable cows={this.state.cows} selectCow={this.selectCow} />
        <AddCow addCow={this.addCow} />
      </div>
    );
  }
}

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
