import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import CountBookList from './CountBookList';
import CounterList from './CounterList';
import Series from './Series';


let number=0;


//-----------------------Appクラス----------------------------
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
    
    
    render() {
      return (
        <div className="container">
          <Series />
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


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);