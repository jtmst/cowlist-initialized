import React from 'react';
import ReactDOM from 'react-dom';

class AddCow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cowNameToAdd: null,
      cowDescriptionToAdD: null,
    };
    this.handleNewCowName = this.handleNewCowName.bind(this);
    this.handleNewCowDescription = this.handleNewCowDescription.bind(this);
  }

  handleNewCowName(e) {
    this.setState({ cowNameToAdd: e.target.value });
  }

  handleNewCowDescription(e) {
    this.setState({ cowDescriptionToAdD: e.target.value });
  }

  render() {
    return (
      <div style={{ position: 'absolute', top: '30%' }}>
        <fieldset>
          <legend>Add a cow</legend>
          <div>
            <input
              type="text"
              id="name"
              placeholder="name"
              onChange={this.handleNewCowName}
            ></input>
          </div>
          <div>
            <input
              type="text"
              id="description"
              placeholder="description"
              onChange={this.handleNewCowDescription}
            ></input>
          </div>
          <div>
            <input
              type="submit"
              onClick={() => {
                this.props.addCow({
                  name: this.state.cowNameToAdd,
                  description: this.state.cowDescriptionToAdD,
                });
              }}
            ></input>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default AddCow;
