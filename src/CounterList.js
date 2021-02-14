import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


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

export default CounterList;