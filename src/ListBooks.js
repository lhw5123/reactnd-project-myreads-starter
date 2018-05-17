/**
 * Created by hevin on 2018/5/11.
 */

import React from 'react'
import BooksGallery from './BooksGallery'
import { Link } from 'react-router-dom'

const BOOK_SHELF = ['currentlyReading', 'wantToRead', 'read']

function ListBooks (props) {
  let currentlyReadingBooks = props.books.filter(b => b.shelf === BOOK_SHELF[0])
  let wantToReadBooks = props.books.filter(b => b.shelf === BOOK_SHELF[1])
  let readBooks = props.books.filter(b => b.shelf === BOOK_SHELF[2])

  return (
    <div>
      <BooksGallery title="Currently Reading"
                    books={currentlyReadingBooks}
                    onUpdateBookShelf={(book, newShelf) => props.onUpdateBookShelf(book, newShelf)}/>
      <BooksGallery title="Want to Read"
                    books={wantToReadBooks}
                    onUpdateBookShelf={(book, newShelf) => props.onUpdateBookShelf(book, newShelf)}/>
      <BooksGallery title="Read"
                    books={readBooks}
                    onUpdateBookShelf={(book, newShelf) => props.onUpdateBookShelf(book, newShelf)}/>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}

export default ListBooks
