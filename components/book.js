import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Book = ({ source }) => {
  const book = source;
   return (
     <li>
       <Link to={`/books/${book.id}`}>
         <img src={ book.cover }/>
       </Link>
     </li>
   );
}

Book.propTypes = {
  source: PropTypes.object.isRequired
};

export default Book;
