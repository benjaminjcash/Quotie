import React, { Component } from 'react';
import QuoteOfTheDay from '../components/QuoteOfTheDay';

class HomePage extends Component {
  render() {

    const styles = {
      width: '40%'
    }
    const { isFetching } = this.props;

    return (
      <div style={styles} className='container'>
        {isFetching ? null : <QuoteOfTheDay {...this.props}/>}
      </div>
    );
  }
}

export default HomePage;