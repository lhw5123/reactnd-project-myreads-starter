/**
 * Created by hevin on 2018/5/10.
 */

import React, { Component } from 'react'
import ListBooks from './BooksGallery'
import escapeRegExp from 'escape-string-regexp'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {

  state = {query: '', showingBooks: []}

  updateQuery = query => {
    BooksAPI.search(query)
      .then(books => this.setState({showingBooks: books}))
    // this.setState({query: query.trim()})
  }

  render () {
    const {query, showingBooks} = this.state
    //
    // let showingBooks
    // if (query) {
    //   const match = new RegExp(escapeRegExp(query), 'i')
    //   let matchTitleBooks = books.filter(b => match.test(b.title))
    //   let matchAuthorsBooks = books.filter(b => match.test(b.authors))
    //   showingBooks = matchTitleBooks.concat(matchAuthorsBooks.filter(b => !matchTitleBooks.includes(b)))
    // } else {
    //   showingBooks = []
    // }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link exact to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text"
                   value={query}
                   onChange={event => this.updateQuery(event.target.value)}
                   placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ListBooks books={showingBooks}/>
        </div>
      </div>
    )
  }
}

export default SearchBooks
