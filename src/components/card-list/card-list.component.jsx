import { Component } from "react";
import './card-list.styles.css';
import Card from "../card/card.component";

class CardList extends Component {
  render() {
    console.log("this.props", this.props);
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return (
            // <div className="card-container" key={id}>
            //   <img
            //     src={`https://robohash.org/${id}?set=set2&size=180x180`}
            //     alt={`monster ${name}`}
            //   />
            //   <h2>{name}</h2>
            //   <h2>{email}</h2>
            // </div>
            <Card monster={monster} />
          );
        })}
      </div>
    );
  }
}

export default CardList;
