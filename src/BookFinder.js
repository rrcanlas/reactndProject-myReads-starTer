import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import escapeRegExp from 'escape-string-regexp'
//import Proptypes from 'prop-types'
import sortBy from 'sort-by'
import OptionValue from './OptionValue'

class BookFinder extends Component {	

	state = {
		query: '',
		bookFinds: []

	}

	componentDidMount() { //get all books from BooksAPI.js
    BooksAPI.getAll().then((bookFinds) => {
      	this.setState({ bookFinds })
    	})
  	}

	updateQuery = (query) => {
		this.setState({ query: query })
	}

	render () {
		const {query} = this.state
		let a
		if (this.state.query) {
			const match = new RegExp(escapeRegExp(this.state.query), 'i')
			a = this.state.bookFinds.filter((bookFinds) => match.test(bookFinds.title))
			
		} else {
			if(this.state.bookFinds.error) {
				a=this.setState({bookFinds: [] })
			} else {
				a=this.state.bookFinds
			}
		this.state.bookFinds
		}

		a.sort(sortBy('title'))

		return (
		<div className="search-books">
	        <div className="search-books-bar">
	          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
	          <div className="search-books-input-wrapper">
	         
	            <input 
	            	type="text" 
	            	placeholder="Search by title or author"
	            	value={this.state.query}
	            	onChange={(event) => this.updateQuery(event.target.value)}
	           	/>

	          </div>
	        </div>

	        <div className="search-books-results">
	        	<ol className="books-grid">
                	
                	{a.map((foundBook) => (
                    	<li key={foundBook.id}>
                    		<OptionValue
                    			bookInShelf={ foundBook }               	
	                  			swapBooks={this.props.swapBooks}                        	
	                        />
	                    	{console.log('yo')}
                      	</li>
                	))} 
                </ol>
	        </div>
	    </div>
		)
	}
}

export default BookFinder