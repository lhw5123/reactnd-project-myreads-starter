/**
 * Created by hevin on 2018/5/6.
 */

import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

/**
 * 用于显示书籍的独立组件。
 */
class Book extends Component {

  state = {shelf: ''}

  /**
   * 更新选中图书的阅读状态。
   * @param shelf 阅读状态。可能为：'currentlyReading', 'wantToRead', 'read'。
   */
  updateBookReadState = (book, shelf) => {
    BooksAPI.update(book, shelf)
  }

  render () {
    const {book} = this.props
    const {shelf} = this.state

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
               style={{width: 128, height: 178, backgroundImage: `url(${book.imageLinks.thumbnail})`}}>
          </div>
          <div className="book-shelf-changer">
            <select>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading" selected={shelf === 'currentlyReading'}
                      onClick={() => {this.updateBookReadState(book, 'currentlyReading')}}>
                Currently Reading
              </option>
              <option value="wantToRead" selected={shelf === 'wantToRead'}
                      onClick={() => {this.updateBookReadState(book, 'wantToRead')}}>
                Want to Read
              </option>
              <option value="read" selected={shelf === 'read'}
                      onClick={() => {this.updateBookReadState(book, 'read')}}>
                Read
              </option>
              <option value="none" selected={shelf === ''}
                      onClick={() => {this.updateBookReadState(book, '')}}>
                None
              </option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}

export default Book
