import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            project: '',
            tools: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
      const {name, value} = event.target;

      this.setState({
          [name] : value
      });
    }

    submitForm = () => {
      this.props.handleSubmit(this.state)
      this.setState(this.initialState)
    }

    render() {
      const { project, tools } = this.state;

      return (
          <form>
              <label>Project</label>
              <input
                  type="text"
                  name="project"
                  value={project}
                  onChange={this.handleChange} />
              <label>Tools</label>
              <input
                  type="text"
                  name="tools"
                  value={tools}
                  onChange={this.handleChange} />
              <input
                type="button"
                value="Submit"
                onClick={this.submitForm} />
          </form>
      );
  }
}
export default Form;
