import React, { Component } from 'react';
import books from '../mocks/books';
import { uniqBy } from 'lodash';
import classnames from 'classnames';
import autobind from 'autobind';

class Main extends Component {
  selectedCategory = '';

  constructor () {
    super();
    this.state = {
      books,
      categories: uniqBy(books.map(book => ({name: book.category})), 'name'),
    };
  }

  @autobind
  selectTab ( category ) {
    this.selectedCategory = category.toLowerCase();

    this.setState({
      books: category === 'all'? books : books
        .filter( book => book.category.toLowerCase()
        .includes(category.toLowerCase())),
    });
  }

  @autobind
  closeSideBar () {
    this.setState({
      navClosed: false
    });
  }

  @autobind
  openSideBar () {
    this.setState({
      navClosed: true
    });
  }

  @autobind
  search (input) {
    const term = input.target.value.toLowerCase();
    this.setState({
      books: term === ''? books : books.filter( book => {
      return book.category.toLowerCase().includes(term) || 
          book.title.toLowerCase().includes(term)
      }),
    });
  }

  render () {
    const { books, categories } = this.state;

    const filterItems = categories.map(category => {

      const filterStyle = classnames({
        'selected': category.name.toLowerCase() === this.selectedCategory.toLowerCase(),
      });
      const categoryName = category.name;

      return (
        <li key={ categoryName } onClick={ this.selectTab.bind(null, categoryName) } style={{display: 'inline-style'}}>
        <a className={filterStyle} href="#0">{ categoryName }</a>
        </li>
      );
    });


    const galleryStyle = classnames({
      'gallery': true,
      'filter-is-visible': this.state.navClosed,
    });

    const navbarStyle = classnames({
      'filter': true,
      'filter-is-visible': this.state.navClosed,
    });


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

      <section className={ galleryStyle }>
         { this.state.books.map( book => <li key={ book.title }><img src={ book.cover }/></li>) }
      </section>

      <div className={ navbarStyle }>
			  <form>
				<div className="filter-block">
					<h4>Search</h4>

					<div className="filter-content">
						<input type="search" placeholder="title, price..." onChange={ this.search }/>
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
