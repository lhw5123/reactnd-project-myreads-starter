/**
 * Created by hevin on 2018/5/11.
 */

import React, { Component } from 'react'
import BooksGallery from './BooksGallery'
import { Link } from 'react-router-dom'

class ListBooks extends Component {
  state = {
    bookReadState: ['reading', 'wantToRead', 'read']
  }

  render () {
    const {books} = this.props

    return (
      <div>
        <BooksGallery title="Currently Reading" bookState={this.state.bookReadState[0]} books={books}/>
        <BooksGallery title="Want to Read" bookState={this.state.bookReadState[1]} books={books}/>
        <BooksGallery title="Read" bookState={this.state.bookReadState[2]} books={books}/>

        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
