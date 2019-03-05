import React, { Component } from 'react';

class Api extends Component {
    state = {
        data: []
    };

    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
<<<<<<< HEAD
        const url = "http://127.0.0.1:5000/player";
=======
        const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=bread&format=json&origin=*";
>>>>>>> master

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result
                })
            });
    }

    render() {
        const { data } = this.state;
<<<<<<< HEAD
        const players = data.players;
        var listPlayers = [];
        if(players!==undefined){
          listPlayers = players.map((number, index) =>
            <li key={index}>{number}</li>
          );
        }
        return(
          <div>
            <h1>API Data</h1>
            <ul>{listPlayers}</ul>
=======

        const result = data.map((entry, index) => {
            return <li key={index}>{entry}</li>;
        });

        return(
          <div>
            <h1>API Data</h1>
            <ul>{result}</ul>
>>>>>>> master
          </div>
        )
    }
}

export default Api;
