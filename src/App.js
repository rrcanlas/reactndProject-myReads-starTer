import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ShelfTitle from './ShelfTitle'
import BookFinder from './BookFinder'
import { Route } from 'react-router-dom'

class App extends React.Component {
  state = {
    books: [] //blank array for BooksAPI.js
  }

  componentDidMount() { //get all books from BooksAPI.js
    BooksAPI.getAll().then((books) => {
      console.log(books)
      this.setState({ books })
    })
  }

  swapBooks = (book, shelf) => { //changing of categories
      BooksAPI.update(book, shelf).then(() => {   
      BooksAPI.getAll().then((books) => {
      this.setState({ books });
      })
    })
  }

  render() {
    return (
      <div>
        <div className="app">
          <div className="list-books">

            <div className="list-books-title">
              <h1>A BOOK LENDING APP</h1>
            </div>

            <div className="list-books-content">
              
              <Route exact path='/' render={() => ( //main-page
                <ShelfTitle
                  books={this.state.books} 
                  swapBooks = {this.swapBooks}                  
              /> 
              )}/>
              
              <Route path='/search' render={() => ( //search-page
                <BookFinder 
                  swapBooks = {this.swapBooks}
                  books={this.state.books} 
              /> 
              )}/>     

            </div>
          </div>  
        </div>
      </div>      
    )
  }
}

export default App
