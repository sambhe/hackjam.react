import React, { Component } from 'react';
import books from '../mocks/books';
import { uniqBy } from 'lodash';

class Main extends Component {
  selectedCategory = "all";

  constructor () {
    super();
    this.closeSideBar = this.closeSideBar.bind(this);
    this.openSideBar = this.openSideBar.bind(this);
    this.search = this.search.bind(this);
    this.selectTab = this.selectTab.bind(this);
    this.state = {
      books,
      filters: uniqBy(books.map(book => ({category: book.category})), 'category'),
    };
  }

  selectTab ( category ) {
    this.selectedCategory = category.toLowerCase();

    this.setState({
      books: category === 'all'? books : books.filter( book => book.category.toLowerCase() === category.toLowerCase()),
    });
  }

  closeSideBar () {
    this.setState({
      navClosed: false
    });
  }

  openSideBar () {
    this.setState({
      navClosed: true
    });
  }

  search (input) {
    console.log(input.target.value);
  }

  render () {
    const { books, filters } = this.state;

    const filterItems = this.state.filters.map(filter => {
          return (<li key={ filter.category } onClick={ this.selectTab.bind(null, filter.category) } style={{display: 'inline-style'}}>
            <a className={filter.category.toLowerCase() === this.selectedCategory.toLowerCase()? 'selected': ''} href="#0">{filter.category}</a>
          </li>);
    });


    let className = 'gallery';

    if ( this.state.navClosed ) {
      className += ' filter-is-visible';
    }

    return (
    <main className="main-content">
      <div className="tab-filter-wrapper">
          <div className="tab-filter">
            <ul>
              <li className="placeholder">
                <a data-type="all" href="#0">All</a>
              </li>
              {filterItems}
            </ul>
          </div>
		    </div>

      <section className={ className }>
      { this.state.books.map( book => <li key={ book.title }><img src={ book.cover }/></li>) }
      </section>

      <div className={ this.state.navClosed? 'filter filter-is-visible': 'filter' }>
			  <form>
				<div className="filter-block">
					<h4>Search</h4>

					<div className="filter-content">
						<input type="search" placeholder="title, price..." onChange={ this.onChange }/>
					</div>
				</div>

        </form>
        <a href="#0" className="close" onClick={ this.closeSideBar }>Close</a>
      </div>

      <a href="#0" className="filter-trigger" onClick={ this.openSideBar }>Filters</a>
    </main>
   );
  }
}

export default Main;
