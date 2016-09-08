import React, { Component, PropTypes } from 'react';
import filters from '../mocks/filters';
import books from '../mocks/books';
import BookList from './bookList';
import SideBarFilters from './sideBarFilters';
import FilterMenu from './filterMenu';

class Main extends Component {
  constructor () {
    super();
    this.closeSideBar = this.closeSideBar.bind(this);
    this.openSideBar = this.openSideBar.bind(this);
    this.search = this.search.bind(this);
    this.selectTab = this.selectTab.bind(this);
    this.state = {
      books,
      filters,
      navClosed: true,
    };
  }

  selectTab (category) {
    this.setState({
      filters: filters.map(filter => {
        if (filter.category === category) {
          filter.selected = true;
        } else {
          filter.selected = false;
        }
        return filter;
      }),
     books: category === 'All'? books : books.filter( book => {
      return book.category === category;
     }),
    });
  }

  closeSideBar () {
    this.setState({
      navClosed: true,
    });
  }

  openSideBar () {
    this.setState({
      navClosed: false,
    });
  }

  search (input) {
    console.log(input.target.value);
  }

  render () {
    const { books, filters, navClosed } = this.state;

    return (
     <main className="main-content">

      <FilterMenu filters={ filters } selectTab={ this.selectTab }/>

      <BookList books={ books } navClosed={ navClosed }/>

      <SideBarFilters
        navClosed={ navClosed }
        closeSideBar={ this.closeSideBar }
        onChange={ this.search }
        openSideBar={ this.openSideBar }
      />
    </main>
   );
  }
}

export default Main;
