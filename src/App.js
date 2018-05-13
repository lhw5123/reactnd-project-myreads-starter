import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount () {
    BooksAPI.getAll().then(books => {
      this.setState({books: books})
    })
  }

  render () {
    const {books} = this.state

    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>

          <Route exact path="/" render={() => (
            <ListBooks books={books}/>
          )}/>

          <Route path="/search" render={({history}) => (
            <SearchBooks books={books}/>
          )}/>
        </div>
      </div>
    )
  }
}

export default BooksApp
