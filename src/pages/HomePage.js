import React, { Component } from 'react';
import QuoteOfTheDay from '../components/QuoteOfTheDay';

class HomePage extends Component {
  render() {

    const styles = {
      width: '40%'
    }
    const { quote, isFetching, addFavorite, callingDatabase } = this.props;

    return (
      <div style={styles} className='container'>
        {isFetching ? null : <QuoteOfTheDay quote={quote} addFavorite={addFavorite} isFetching={isFetching} callingDatabase={callingDatabase}/>}
      </div>
    );
  }
}

export default HomePage;