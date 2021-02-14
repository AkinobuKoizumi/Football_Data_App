import React from 'react'
import PropTypes from 'prop-types';


const CountBookList = (props) => {
    return (
        <div>
            <table className="data_list">
                <thead>
                    <tr><th>Number</th><th>Play Pattern</th></tr>
                </thead>
                <tbody>
                    {props.books.map((book) =>
                    <CountBookItem 
                        book={book}
                        total={props.total}
                        key={props.counters.id
                        }
                    />
                    )}
                </tbody>
            </table>
        </div>
    );
};
CountBookList.propTypes = {
    books: PropTypes.object.isRequired
};

const CountBookItem = (props) => {
    return (
      <tr>
        <td>{props.book.number}</td>
        <td>{props.book.id}</td>
      </tr>
  );  
};
CountBookItem.propTypes = {
    book: PropTypes.object.isRequired,
    total : PropTypes.object.isRequired
};

export default CountBookList;