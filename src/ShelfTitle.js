import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'

class ShelfTitle extends Component {
	state = {
    	book: [] //blank array for BooksAPI.js
  	}

	 swapBooks = (book, shelf, books) => {
	    BooksAPI.update(book, shelf);
	    BooksAPI.getAll().then((books) => {
	    this.setState({book})  
	    }) 
  	}
	
	render () {
	console.log(this.props.books);
	var bookShelfTitles = [ 
		{label: 'Currently Reading', category: 'currentlyReading'},
  		{label: 'Want to Read', category: 'wantToRead'},
  		{label: 'Read', category: 'read'}
		]

		// shows three categories (or “bookshelves”) for books 
		// (currently reading, want to read, and read 
	    return (
	    	<ol>
	    		{bookShelfTitles.map((ShelfTitle) => (
	    			<li key={ShelfTitle.label}>
	    				<div className="bookshelf">
	    					<h2 className="bookshelf-title">
	    						{ ShelfTitle.label }
	    					</h2>							   
	    				
		    				<div>
		    					<ListBooks
		    						ShelfTitle={ ShelfTitle }
									books = { this.props.books }
									swapBooks = {this.swapBooks.bind(this)}						
		    					/>
		    				</div>
	    				</div>
	    			</li>
	    		))}
	    	</ol>
	    )	
	}
}

export default ShelfTitle