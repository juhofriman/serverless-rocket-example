import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const API_ENDPOINT = process.env.REACT_APP_NO_CORS ? '' : 'http://localhost:3001';

class ServerResponse extends Component {
  constructor(props) {
    super(props);
    this.state = {response: '', loading: false};
  }

  componentWillMount = () => {
    this.setState({launched: true});
    axios.post(API_ENDPOINT + '/api/send', {})
      .then((res) => {
        // Just a cool timeout for rendering cool animation man.
        setTimeout(() => {
          this.setState({launched: false, response: res.data});
        }, 1000);
      })
      .catch((err) => {
        this.setState({launched: false, error: err});
      });
  }

  render() {
    if(this.state.error) {
      return (
        <p>Error: {this.state.error.message}</p>
      );
    }
    else if(this.state.launched) {
      return (<img src={logo} className="launched-animation" alt="logo" />);
    } else {
      return (
        <p>Server response: {this.state.response.message}</p>
      );
    }
  }
}

class Rocket extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Serverless/Cloudfront stub</h1>
        </header>
        <div className="App-intro">
          <ServerResponse/>
        </div>
      </div>
    );
  }
}

export default Rocket;
