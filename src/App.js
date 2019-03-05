import React, {Component} from 'react';
// import Table from './Table.js'
// import Form from './Form.js'
// import Api from './Api.js'
import Navbar from './components/Navbar/Navbar'

class App extends Component{

    state = {
      projects: []
   };

   removeProject = index => {
      const { projects } = this.state;

      this.setState({
        projects: projects.filter((project,i) => {
          return i !== index;
        })
      });
    }

    handleSubmit = project => {
      this.setState({projects: [...this.state.projects, project]});
    }

    render(){
      const {projects} = this.state;
      return(
        <div className="container">
          <Navbar />
          {/*
          <Table
            projectData={projects}
            removeProject={this.removeProject}
          />
          <Form handleSubmit={this.handleSubmit}/>
          <Api />
          */}
        </div>
      )
    }
}

export default App;
