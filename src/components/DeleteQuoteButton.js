import React from 'react';
import styles from './styles/cardStyles';

const DeleteQuoteButton = ({quote, index, deleteFavorite}) => {
  const contentColor = index % 2 !== 0 ? 'white-text' : 'blue-text';
  const buttonColor = index % 2 !== 0 ? 'blue' : 'white';

  return (
    <button
      style={styles.button}
      className={`${buttonColor} ${contentColor}`}
      onClick={() => deleteFavorite(quote.id)}
    >
    <i className={`fa fa-trash ${contentColor} fa-3x`} />
    </button>
  )
}

export default DeleteQuoteButton;