import { Component } from "react";
import "./card-list.styles.css";


class CardList extends Component {

  render() {
      const { monsters } = this.props;
      console.log(monsters);
      return (

        <div className="card-list">

          { monsters.map(monster => {
            return <div className="card-container">
              <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt={monster.name} />
              <h1>{monster.name}</h1>


            </div>
          })}

        </div>
    );
  };
};



export default CardList;