import React, { Component } from 'react';
// import ChoiceBar from './components/ChoiceBar';
import VotingComponent from './components/VotingComponent';
import './App.css';

const vote = {
  title: 'How is your day?',
  description: 'Tell me: how has your day been so far?',
  totalVotes: 20,
  choices: [
    {id: 'choice_1', title: 'Good', count: 7, percent: 35},
    {id: 'choice_2', title: 'Bad', count: 12, percent: 60},
    {id: 'choice_3', title: 'Not sure yet', count: 1, percent: 5}
  ]
};


class App extends Component {
  render() {
    return (
      <VotingComponent vote={vote}/>
    );
  }
}

export default App;
