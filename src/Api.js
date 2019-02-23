import React, { Component } from 'react';

class Api extends Component {
    state = {
        data: []
    };

    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
        const url = "http://127.0.0.1:5000/player";

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
          </div>
        )
    }
}

export default Api;
