import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
      searchInput: ''
    }
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
  }

  render() {
    const styles = {
      width: '40%'
    }

    return (
      <div style={styles} className='container'>
        <SearchForm handleInputChange={this.handleInputChange} searchInputValue={this.state.searchInput} handleFormSubmit={this.handleFormSubmit}/>
      </div>
    );
  }
}

export default SearchPage;