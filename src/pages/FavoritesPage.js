import React, { Component } from 'react';
import FavoriteCard from '../components/FavoriteCard';

class FavoritesPage extends Component {
  render() {
    const { favorites, deleteFavorite, callingDatabase } = this.props;
    const styles = {
      width: '80%',
      display: 'flex',
      flexWrap: 'wrap'
    }

    return (
      <div style={styles} className='container'>
        {favorites ? favorites.map((favorite, i) => {
          return (
            <FavoriteCard favorite={favorite} key={favorite.id} index={i} deleteFavorite={deleteFavorite} callingDatabase={callingDatabase}/>
          )
        }) : null}
      </div>
    );
  }
}

export default FavoritesPage;
