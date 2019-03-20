import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';

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
    const { quoteList } = this.props;
    const styles = {
      width: '40%'
    }
    if(quoteList.length > 0) {
      console.log(quoteList);
    }

    return (
      <div style={styles} className='container'>
        <SearchForm handleInputChange={this.handleInputChange} searchInputValue={this.state.searchInput} handleFormSubmit={this.handleFormSubmit}/>
      </div>
    );
  }
}

export default SearchPage;