/**
 * Created by hevin on 2018/5/10.
 */

import React, { Component } from 'react'
import BooksGallery from './BooksGallery'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {

  state = {query: '', queryBooks: []}

  updateQuery = (query) => {
    this.setState({query: query.trim()})
    let {books} = this.props

    BooksAPI.search(query)
      .then(result => {
        console.log(result)

        if (result.error === 'empty query') {
          result = []
        } else {
          // 求查询得到的 Book 数组和已有 Book 数组的交集，并更新其状态。
          result.map(b => {
            for (let i = 0; i < books.length; i++) {
              if (books[i].id === b.id) {
                b.shelf = books[i].shelf
              }
            }
          })
        }
        this.setState({queryBooks: result})
      })
  }

  render () {
    const {query, queryBooks} = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text"
                   value={query}
                   onChange={(event) => this.updateQuery(event.target.value)}
                   placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <BooksGallery books={queryBooks}
                        onUpdateBookShelf={this.props.onUpdateBookShelf}/>
        </div>
      </div>
    )
  }
}

export default SearchBooks
