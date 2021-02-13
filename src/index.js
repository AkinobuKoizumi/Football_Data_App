import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

let number=0;

//-----------------------count系----------------------------
const Counter = (props) =>{
    return (
      <li className="count_Btn" style={{backgroundColor:props.counter.color}} onClick={() =>
         props.countUp(props.counter)} >
        <div className="play_pattern">{props.counter.id}</div>
        <div className="play_pattern_count">{props.counter.count}</div>
      </li>
    );
};

Counter.propTypes = {
    counter: PropTypes.object.isRequired
};

const CounterList= (props) => {
    const counters = props.counters.map(counter => {
      return (
        <Counter
          counter={counter}
          key={counter.id}
          countUp={props.countUp}
        />
      );
    });
    return (
      <ul>
        {counters}
      </ul>
    );
};
CounterList.propTypes = {
    counters: PropTypes.object.isRequired
};

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        counters: [
          {id: 'RUN', count: 0, color: 'tomato'},
          {id: 'PASS', count: 0, color: 'skyblue'},
          {id: 'P.A', count: 0, color: 'limegreen'}
        ],
        total: 0,
        books : []
      };
      this.countUp = this.countUp.bind(this);
    }
    
    countUp(counter) {
      this.setState(prevState => {
        const counters = prevState.counters.map(counter => {
          return {id: counter.id, count: counter.count, color: counter.color};
        });
        const pos = counters.map(counter => {
          return counter.id;
        }).indexOf(counter.id);
        counters[pos].count++;
        return {
          counters: counters,
          total: prevState.total + 1
        };
      });
      number++;
      // books.length
      const book = {number : number , id : counter.id };
      this.setState({books: this.state.books.concat(book)});
    }
    
    // addBook(id) {
    //   const number = this.state.books.total;
    //   const book = {number : number , id : id };
    //   this.setState({books: this.state.books.concat(book)});
    // }
    
    render() {
      return (
        <div className="container">
          <CounterList
            counters={this.state.counters}
            books={this.state.books}
            countUp={this.countUp}
            // addBook={this.addBook}
          />
          <div>TOTAL PlAY COUNT: {this.state.total}</div>
          <CountBookList
            counters={this.state.counters}
            books={this.state.books}
            total={this.state.total}
          />
        </div>
      );
    }
}
//---------------------------------------------------

//-----------------------画面表示系----------------------------
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
// const CounterList= (props) => {
//     const counters = props.counters.map(counter => {
//       return (
//         <Counter
//           counter={counter}
//           key={counter.id}
//           countUp={props.countUp}
//         />
//       );
//     });
//     return (
//       <ul>
//         {counters}
//       </ul>
//     );
// };

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

//---------------------------------------------------



ReactDOM.render(
    <App/>,
    document.getElementById('root')
);