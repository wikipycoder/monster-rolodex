import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {


  render() {
    const { searchMonsters } = this.props

    return (

      <div className="search-container">
        <input type="search" className="search"  placeholder="search monsters" onChange={searchMonsters}/>
      </div>
    );

  }
};


export default SearchBox;