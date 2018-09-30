import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import OptionValue from './OptionValue'
import { Link } from 'react-router-dom'

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
		let displayBooks
		if (query) {
			const match = new RegExp(escapeRegExp(this.state.query), 'i')
			displayBooks = this.state.bookFinds.filter((bookFinds) => match.test(bookFinds.title) || match.test(bookFinds.authors) )
			
		} else {
			if(this.state.bookFinds.error) {
				displayBooks=this.setState({bookFinds: [] })
			} else {
				displayBooks=this.state.bookFinds
			}
		}

		displayBooks.sort(sortBy('title'))

		return (
		<div className="search-books">
	        <div className="search-books-bar">

	          <Link to="/" className="close-search" >Close</Link>
	          
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
                	{displayBooks.map((foundBook) => (
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