import { Component } from "react"
import "./App.css"
import CardList from "./components/card-list/card-list.component";
import SearchBox  from "./components/search-box/search-box.component";

class App extends Component {

  constructor() {
    super();
    this.state = {

      "monsters": [], 
      "searchText": ""

    }
  }


  componentDidMount() {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({"monsters": users});
      })

  }


  searchMonsters = (event) => {
    const searchText = event.target.value;
    this.setState({searchText});
  }
 
  render() {

      const { monsters, searchText } = this.state;
      const { searchMonsters } = this;

    let filteredMonsters = monsters.filter((monster) => monster.name.startsWith(searchText));

    if(searchText === "")
      filteredMonsters = monsters;

    return (

      <div className="monster-container">
        <SearchBox searchMonsters={searchMonsters} />
        <CardList monsters={ filteredMonsters } />
      </div>
      

    )
  }

}


export default App;
