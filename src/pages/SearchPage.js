import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';
import SearchResultCard from '../components/SearchResultCard';

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: ''
    }
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.setState({
      searchInput: ''
    });
    // dispatch action to search for quotes
    this.props.searchQuote(this.state.searchInput);
  }

  render() {
    const { quoteList, addFavorite } = this.props;
    const styles = {
      width: '40%'
    }

    return (
      <div style={styles} className='container'>
        <SearchForm handleInputChange={this.handleInputChange} searchInputValue={this.state.searchInput} handleFormSubmit={this.handleFormSubmit}/>
        {
          quoteList.length > 0 
          ?
            quoteList.map((quote, i) => {
              const newQuote = {
                body: quote.body,
                author: quote.author
              }
              return <SearchResultCard key={quote.id} index={i} quote={newQuote} addFavorite={addFavorite} />
            }) 
          : 
          <div></div>
        }
      </div>
    );
  }
}

export default SearchPage;