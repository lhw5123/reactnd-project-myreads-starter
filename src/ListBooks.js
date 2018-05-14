/**
 * Created by hevin on 2018/5/11.
 */

import React, { Component } from 'react'
import BooksGallery from './BooksGallery'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

const BOOK_SHELF = ['currentlyReading', 'wantToRead', 'read']

class ListBooks extends Component {

  state = {books: []}

  onUpdateBookShelf (book, newShelf) {
    let books = this.state.books
    let index = books.indexOf(book)
    books[index].shelf = newShelf
    this.setState({books: books})
  }

  componentDidMount () {
    BooksAPI.getAll().then(books => {
      this.setState({books: books})
    })
  }

  render () {
    const {books} = this.state
    let currentlyReadingBooks = books.filter(b => b.shelf === BOOK_SHELF[0])
    let wantToReadBooks = books.filter(b => b.shelf === BOOK_SHELF[1])
    let readBooks = books.filter(b => b.shelf === BOOK_SHELF[2])
    return (
      <div>
        <BooksGallery title="Currently Reading"
                      books={currentlyReadingBooks}
                      onUpdateBookShelf={(book, newShelf) => this.onUpdateBookShelf(book, newShelf)}/>
        <BooksGallery title="Want to Read"
                      books={wantToReadBooks}
                      onUpdateBookShelf={(book, newShelf) => this.onUpdateBookShelf(book, newShelf)}/>
        <BooksGallery title="Read"
                      books={readBooks}
                      onUpdateBookShelf={(book, newShelf) => this.onUpdateBookShelf(book, newShelf)}/>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
