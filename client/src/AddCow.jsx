import React from 'react';
import ReactDOM from 'react-dom';

class AddCow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cowNameToAdd: null,
      cowDescriptionToAdD: null,
    };
  }

  render() {
    return (
      <div style={{ position: 'absolute', top: '30%' }}>
        <fieldset>
          <legend>Add a cow</legend>
          <div>
            <input type="text" id="name" placeholder="name"></input>
          </div>
          <div>
            <input
              type="text"
              id="description"
              placeholder="description"
            ></input>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default AddCow;
