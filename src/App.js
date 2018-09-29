import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ShelfTitle from './ShelfTitle'
import BookFinder from './BookFinder'

class App extends React.Component {
  state = {
    books: [] //blank array for BooksAPI.js
  }

  componentDidMount() { //get all books from BooksAPI.js
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  swapBooks = (book, shelf, books) => {
      BooksAPI.update(book, shelf)
      BooksAPI.getAll().then((books) => {
      this.setState({book})  
    })
  }

  render() {
    return (
      <div>
        <div className="app">
          <div className="list-books">

            <div className="list-books-title">
              <h1>THE BOOK APP</h1>
            </div>

            <div className="list-books-content">
              {/* <ShelfTitle 
                books={this.state.books}               
              /> */}
              <ShelfTitle 
                swapBooks = {this.swapBooks}
                books={this.state.books} 
              />
            </div>
          </div>  
        </div>
      </div>      
    )
  }
}

export default App
