import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class Series extends React.Component {
    constructor() {
        super();
        this.state = {
            seriesNow : 1
        }
    }
    render () {
        return (
            <div class="series_component">
                <div>SERIES : { this.state.seriesNow }</div>
            </div>
        );
    }
}

export default Series;