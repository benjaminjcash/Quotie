import React from 'react';
import styles from './styles/cardStyles';
import AddFavoriteButton from './AddFavoriteButton';

const SearchResultCard = ({ quote, index, callingDatabase, addFavorite }) => {
  let cardColor = index % 2 === 0 ? 'blue' : 'white';
  let contentColor = index % 2 === 0 ? 'white-text' : 'blue-text';

  return (
    <div style={styles.card} className={`card ${cardColor}`}>
      <div className={`card-content ${contentColor}`}>
        <p style={styles.quoteText} className='card-title'>
          <i className="fas fa-quote-left" />
          {' ' + quote.body + ' '}
          <i className="fas fa-quote-right" />
        </p>
        <h5 style={styles.authorText} className="card-body">{quote.author}</h5>
      </div>
      <div className="card-action">
        <AddFavoriteButton quote={quote} callingDatabase={callingDatabase} index={index} addFavorite={addFavorite} />
      </div>
    </div>
  )
}

export default SearchResultCard;