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

  updateBookShelf = (newShelf) => {
    let book = this.props.book
    if (book.shelf !== newShelf) {
      BooksAPI.update(book, newShelf).then(() => {
        this.setState({shelf: newShelf})
        // 将参数回调给父组件。
        if (this.props.onUpdateBookShelf) {
          this.props.onUpdateBookShelf(book, newShelf)
        }
      })
    }
  }

  componentDidMount () {
    let bookShelf
    if (this.props.book.shelf === undefined) {
      bookShelf = 'none'
    } else {
      bookShelf = this.props.book.shelf
    }
    this.setState({shelf: bookShelf})
  }

  render () {
    const {book} = this.props
    const {shelf} = this.state

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
               style={{
                 width: 128,
                 height: 178,
                 backgroundImage: `url(${
                   book.imageLinks ? book.imageLinks.thumbnail : ''
                 })`
               }}>
          </div>
          <div className="book-shelf-changer">
            <select value={shelf} onChange={event => this.updateBookShelf(event.target.value)}>
              <option disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title ? book.title : ''}</div>
        <div className="book-authors">{book.authors ? book.authors : ''}</div>
      </div>
    )
  }
}

export default Book
