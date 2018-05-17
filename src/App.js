import React, { Component } from 'react'
import './App.css'
import ListBooks from './ListBooks'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {

  state = {books: []}

  componentDidMount () {
    BooksAPI.getAll().then(books => {
      this.setState({books: books})
    })
  }

  onUpdateBookShelf (book, newShelf) {
    let updatedBook = {...book, shelf: newShelf}
    this.setState(prevState => ({
      books: [...prevState.books.filter(b => b.id !== updatedBook.id), updatedBook]
    }))
  }

  render () {
    const {books} = this.state

    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>

          <Route exact path="/" render={() => (
            <ListBooks books={books} onUpdateBookShelf={(book, newShelf) => this.onUpdateBookShelf(book, newShelf)}/>
          )}/>

          <Route path="/search" render={({history}) => (
            <SearchBooks books={books} onUpdateBookShelf={(book, newShelf) => this.onUpdateBookShelf(book, newShelf)}/>
          )}/>
        </div>
      </div>
    )
  }
}

export default BooksApp
