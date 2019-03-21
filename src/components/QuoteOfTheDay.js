import React from 'react';
import styles from './styles/cardStyles';
import AddFavoriteButton from '../components/AddFavoriteButton';

const QuoteOfTheDay = (props) => {
  const { quote } = props;

  return (
    <div className="card white">
        <div className="card-content blue-text">
          <p className="card-title">
            <i className="fas fa-quote-left"/>
              {' ' + quote.body + ' '}
            <i className="fas fa-quote-right"/>
          </p>
          <h5 className="card-body">{quote.author}</h5>
        </div>
        <div className="card-action">
          <AddFavoriteButton {...props} index={1} />
          <a href='/'>
            <i style={styles.icons} className="fas fa-sync-alt blue-text fa-3x" />
          </a>
        </div>
    </div>
  )
  
}

export default QuoteOfTheDay;