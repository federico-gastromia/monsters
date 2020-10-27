import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  // When JS puts component on page - it renders - it calls the method componentDidMount
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    // Using setState refreshes the DOM, so the content is displayed
    .then(users => this.setState({ 'monsters': users}))
  }

  handleChange= e => {
    this.setState({'searchField': e.target.value})
  }

  // When this.State changes React calls the render method again.
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
      <h1> Monster Rolodex </h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
