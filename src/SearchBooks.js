/**
 * Created by hevin on 2018/5/10.
 */

import React, { Component } from 'react'
import BooksGallery from './BooksGallery'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {

  state = {query: '', queryBooks: [], books: []}

  updateQuery = (query) => {
    this.setState({query: query.trim()})
    let {books} = this.state

    BooksAPI.search(query)
      .then(queryBooks => {
        if (!Array.isArray(queryBooks)) {
          queryBooks = []
        }
        // 求查询得到的数组和已有数组的交集。
        queryBooks.map(b => {
          for (let i = 0; i < books.length; i++) {
            if (books[i].id === b.id) {
              b.shelf = books[i].shelf
            }
          }
        })
        this.setState({queryBooks: queryBooks})
      })
  }

  componentDidMount () {
    BooksAPI.getAll().then(books => {
      this.setState({books: books})
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
          <BooksGallery books={queryBooks}/>
        </div>
      </div>
    )
  }
}

export default SearchBooks
