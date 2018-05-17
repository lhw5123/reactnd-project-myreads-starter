/**
 * Created by hevin on 2018/5/8.
 */

import React from 'react'
import Book from './Book'

/**
 * 用于展示图书列表。
 */

function BooksGallery (props) {
  return (
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{props.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {(props.books instanceof Array) && (
                props.books.map(book => (
                  <li key={book ? book.id : ''}>
                    <Book book={book} onUpdateBookShelf={props.onUpdateBookShelf}/>
                  </li>
                ))
              )}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BooksGallery