import { Component } from "react";
import './card-list.styles.css'
import Card from "../card/card-component";

class CardList extends Component {
  render() {
    const {elements} = this.props 

    return <div className="card-list">        
       {elements.map((ele) => {
        return (
            <Card element={ele} />
        );
      })}
      </div>;
  }
}

export default CardList;
