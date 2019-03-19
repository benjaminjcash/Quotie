import React, { Component } from 'react';
import styles from './styles/cardStyles';

export default class FavoriteCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleting: false
    }
    this.deleteFavoriteCard = this.deleteFavoriteCard.bind(this);
  }

  deleteFavoriteCard(id) {
    const { deleteFavorite } = this.props;
    deleteFavorite(id);
    this.setState({
      deleting: true
    })
  }

  render() {
    const { favorite, index } = this.props;
    let cardColor = index % 2 === 0 ? 'blue' : 'white';
    let buttonColor = index % 2 === 0 ? 'blue' : 'white';
    let contentColor = index % 2 === 0 ? 'white-text' : 'blue-text';

    return (
      <div style={styles.card} className={`card ${cardColor}`}>
        <div className={`card-content ${contentColor}`}>
          <p style={styles.quoteText} className='card-title'>
            <i className="fas fa-quote-left"/>
              {' ' + favorite.body + ' '}
            <i className="fas fa-quote-right"/>
          </p>
          <h5 style={styles.authorText} className="card-body">{favorite.author}</h5>
          <button 
            style={styles.button} 
            className={`waves-effect waves-light btn ${buttonColor} ${contentColor}`} 
            onClick={() => this.deleteFavoriteCard(favorite.id)}>
            {
              this.state.deleting ?
              <i className={`fas fa-spinner fa-spin ${contentColor} fa-3x`}/> :
              <i className={`fa fa-trash ${contentColor} fa-3x`} />
            }
          </button>
        </div>
      </div>
    )
  }
}
