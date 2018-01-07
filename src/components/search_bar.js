import React, { Component } from 'react'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      type: 'please type here!'
    }
  }
  onInputChange (term) {
    this.setState({term})
    this.props.onSearchTermChange(term)
  }
  render () {
    return (
      <div className='input-search' >
        <input
          placeholder='Search anything videos...'
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    )
  }
}

export default SearchBar
