import React, { Component } from 'react'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'

class ShelfTitle extends Component {
	state = {
    	book: [] //blank array for BooksAPI.js
  	}

	swapBooks = (book, shelf) => { //changing categories on books
      BooksAPI.update(book, shelf).then(() => {   
      BooksAPI.getAll().then((book) => {
      this.setState({ book })
      	})
      })
  	}


	render () {
	//console.log('Eto:' + this.props.books);
	var bookShelfTitles = [ 
		{label: 'Currently Reading', category: 'currentlyReading'},
  		{label: 'Want to Read', category: 'wantToRead'},
  		{label: 'Read', category: 'read'}
		]

		// displays 3 categories (or “bookshelves”) for books 
		 
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
									swapBooks = {this.props.swapBooks}						
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