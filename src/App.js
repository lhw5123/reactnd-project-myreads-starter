import React, { Component } from 'react'
import './App.css'
import ListBooks from './ListBooks'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'

class BooksApp extends Component {
  render () {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>

          <Route exact path="/" render={() => (
            <ListBooks/>
          )}/>

          <Route path="/search" render={({history}) => (
            <SearchBooks/>
          )}/>
        </div>
      </div>
    )
  }
}

export default BooksApp
