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

  updateBookReadShelf = (newShelf) => {
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
      bookShelf = ''
    } else {
      bookShelf = this.props.book.shelf
    }
    this.setState({shelf: bookShelf})
  }

  componentWillUnmount () {

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
            <select value={shelf} onChange={event => this.updateBookReadShelf(event.target.value)}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="">None</option>
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
