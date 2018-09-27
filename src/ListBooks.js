import React, { Component } from 'react'
//import BookFinder from './BookFinder'
import OptionValue from './OptionValue'

class ListBooks extends Component {	
	render () {
		console.log(this.props.ShelfTitle.category)
		return (      
			<div>
                <ol className="books-grid">
                	{this.props.books
                	.filter(bookInShelf => bookInShelf.shelf === this.props.ShelfTitle.category)
                	.map(bookInShelf => (
                    	<li key={bookInShelf.id}>
	                    	<OptionValue                	
	                        	swapBooks={this.props.swapBooks}
	                        	bookInShelf={ bookInShelf }
	                        />
                      	</li>
                	))} 
                </ol>

	            <div className="open-search">
	              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
	            </div>
	        </div> 	       
		);
	}
}

export default ListBooks