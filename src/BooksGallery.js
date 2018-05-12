/**
 * Created by hevin on 2018/5/8.
 */

import React, { Component } from 'react'
import Book from './Book'

/**
 * 用于展示图书列表。
 */
class BooksGallery extends Component {

  onBookSelectReadState = state => {

  }

  render () {
    const {books, title, bookState} = this.props

    return (
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.map(book => (
                  <li>
                    <Book book={book} onSelectReadState={this.onBookSelectReadState}/>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BooksGallery