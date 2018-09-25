import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import ListBooks from './ListBooks'

class ShelfTitle extends Component {
	
	render () {
	console.log(this.props.books);
	var bookShelfTitles = [ 
		{label: 'Currently Reading', category: 'currentlyReading'},
  		{label: 'Want to Read', category: 'wantToRead'},
  		{label: 'Read', category: 'read'}
		]
		// show three categories (or “bookshelves”) for books 
		// (currently reading, want to read, and read 
	    return (
	    	<ol>
	    		{bookShelfTitles.map((ShelfTitle) => (
	    			<li key={ShelfTitle.label}>
	    				<div className="bookshelf">
	    					<h2 className="bookshelf-title">
	    						{ ShelfTitle.label }
	    					</h2>							   
	    				</div>
	    				<div>
	    				<ListBooks
	    					ShelfTitle={ ShelfTitle }
							books={ this.props.books }
	    					/>
	    				</div>
	    			</li>
	    		))}
	    	</ol>

	    )	
	}
}

export default ShelfTitle