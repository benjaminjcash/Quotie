import React from 'react';
import FavoriteCard from '../components/FavoriteCard';

const FavoritesPage = (props) => {
  const { favorites } = props;
  const styles = {
    width: '80%',
    display: 'flex',
    flexWrap: 'wrap'
  }

  return (
    <div style={styles} className='container'>
      {favorites ? favorites.map((quote, i) => {
        return (
          <FavoriteCard {...props } quote={quote} key={quote.id} index={i}/>
        )
      }) : null}
    </div>
  );
}

export default FavoritesPage;
