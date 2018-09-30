import React, { Component } from 'react'
import OptionValue from './OptionValue'
import { Link } from 'react-router-dom'

class ListBooks extends Component {	
	
	render () {
		console.log(this.props.ShelfTitle.category)
		//filter books with designated categories
		return (      
			<div> 
                <ol className="books-grid">
                	{this.props.books
                	.filter(bookInShelf => bookInShelf.shelf === this.props.ShelfTitle.category)
                	.map(bookInShelf => (
                    	<li key={bookInShelf.id}>
	                    	<OptionValue                	
	                        	bookInShelf={ bookInShelf }
	                        	swapBooks={this.props.swapBooks}
	                        />
	                        {console.log('yi')}
                      	</li>
                	))} 
                </ol>

	            <div className="open-search">
	            	<Link to="/search">Add a Books</Link>
	            </div>
	        </div> 	       
		);
	}
}

export default ListBooks