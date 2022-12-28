import "./App.css";
import { Component } from "react";
import { CardList } from "./component/card-list/card-list-component";
import { SearchBox } from "./component/search-box/search-box.component";
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((usesrs) => this.setState({ monsters: usesrs }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter((monsters) =>
      monsters.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className="App">
       <h1>monster rodolex</h1>
        <SearchBox  placeholder="Search Here" handleChange={(e) => {
            this.setState({ searchField: e.target.value });
            console.log(this.state);
          }}>

        </SearchBox>
        
        <CardList monsters={filterMonsters}/>
      </div>
    );
  }
}

export default App;
