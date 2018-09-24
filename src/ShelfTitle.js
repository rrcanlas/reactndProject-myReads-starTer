import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ShelfTitle extends Component {
	static propTypes = {
    books: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }
	render () {
	console.log(this.props.books);
	var { books } = this.props
	var bookShelfTitles = [ 
		{label: 'Currently Reading', category: 'currentlyReading'},
  		{label: 'Want to Read', category: 'wantToRead'},
  		{label: 'Read', category: 'read'}
		]

    return (
    	<ol>
    		{bookShelfTitles.map((bookShelfTitle) => (
    			<li key={bookShelfTitle.label}>
    				<div className="bookshelf">
    					<h2 className="bookshelf-title">
    						{ bookShelfTitle.label }
    					</h2>
    				</div>
    			</li>
    		))}
    	</ol>

    )	
	}
}

export default ShelfTitle