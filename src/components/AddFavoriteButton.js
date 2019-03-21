import React from 'react';
import styles from '../components/styles/cardStyles';

const AddFavoriteButton = ({ quote, callingDatabase, index, addFavorite}) => {
  const color = index % 2 === 0 ? 'white-text' : 'blue-text';

  return (
    <a href='/favorites'>
      {
        callingDatabase ?
          <i className="fas fa-spinner fa-spin blue-text fa-3x" /> :
          <i style={styles.icons} className={`fas fa-thumbs-up ${color} fa-3x`} onClick={() => addFavorite(quote)} />
      }
    </a>
  )
}

export default AddFavoriteButton;