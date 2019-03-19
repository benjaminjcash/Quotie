import React from 'react';
import styles from './styles/cardStyles';

const QuoteOfTheDay = ({ quote, addFavorite, callingDatabase, isFetching }) => {
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
          <a href='/favorites'>
            {
            callingDatabase ?
              <i className="fas fa-spinner fa-spin blue-text fa-3x"/> :
              <i style={styles.icons} className="fas fa-thumbs-up blue-text fa-3x" onClick={() => addFavorite(quote)}/>
            }
          </a>
          <a href='/'>
            {
              isFetching ?
              <i className="fas fa-spinner fa-spin blue-text fa-3x" /> :
              <i style={styles.icons} className="fas fa-sync-alt blue-text fa-3x" />
            }
          </a>
        </div>
    </div>
  )
}

export default QuoteOfTheDay;