import { Component } from "react"
import './card.styles.css'


class Card extends Component {

    render () {
        const {id, name, email} = this.props.element

        return (
            <div className='card-container' key={id}>
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`element ${name}`} />
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        )
    }
}

export default Card