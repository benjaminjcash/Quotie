import React from 'react';
import styles from './styles/cardStyles';

const DeleteQuoteButton = ({quote, index, deleteFavorite}) => {
  let contentColor = index % 2 !== 0 ? 'white-text' : 'blue-text';
  let buttonColor = index % 2 !== 0 ? 'blue' : 'white';

  return (
    <button
      style={styles.button}
      className={`waves-effect waves-light btn ${buttonColor} ${contentColor}`}
      onClick={() => deleteFavorite(quote.id)}>
      {
        <i className={`fa fa-trash ${contentColor} fa-3x`} />
      }
    </button>
  )
}

export default DeleteQuoteButton;