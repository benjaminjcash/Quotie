import React from 'react';
import FavoriteCard from '../components/FavoriteCard';

const FavoritesPage = ({ favorites, deleteFavorite, callingDatabase }) => {
  const styles = {
    width: '80%',
    display: 'flex',
    flexWrap: 'wrap'
  }

  return (
    <div style={styles} className='container'>
      {favorites ? favorites.map((quote, i) => {
        return (
          <FavoriteCard quote={quote} key={quote.id} index={i} deleteFavorite={deleteFavorite} callingDatabase={callingDatabase}/>
        )
      }) : null}
    </div>
  );
}

export default FavoritesPage;
