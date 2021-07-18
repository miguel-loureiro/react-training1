import Table from './Table';
import React, {Component} from 'react';
import Counter from './Counter';
import Form from './Form';
import AutomaticCounter from './AutomaticCounter';

const people = [{name: 'Miguel', job: 'Dev', age: 45},{name: 'Marta',job: 'Happiness manager', age: 47}, {name: 'Tomas', job: 'Fortnite proplayer', age: 14}];

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    title: "SWITCH react example",
    characters: people,
    automaticCounterActive: true
  };
}

removeAutomaticCounter = () => {
  this.setState({automaticCounterActive: false})
};



removePerson = (index) => {
  const {characters} = this.state;
  this.setState({
    characters: characters.filter((character, i) => {
      return i !== index
    }),
  })
}

addPerson = (character) => {
  this.setState({characters: [...this.state.characters, character]})
}

render() {
    const { title, characters, automaticCounterActive } = this.state;
    const headers = {header1: 'Name', header2: 'Job', header3: 'Age'};

    let data;
    if (characters.length > 0) {
      data = <Table data={characters} headers={headers} removePerson={this.removePerson}/>
    } else {
      data =<h1>No data here</h1>
    }

    let ac;
    if (automaticCounterActive === true) {
      ac = <AutomaticCounter endCounter = {this.removeAutomaticCounter} />
    }

return (
  <div>
  <h1>{title}</h1>
  <Counter />
  {data}
  <Form handleSubmit={this.addPerson}/>
  {ac}
  </div>
  )
}
}

export default App;