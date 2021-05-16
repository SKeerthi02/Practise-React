import React, {Component} from 'react';
import CounterComponents from './counterComponent'
import CounterComponent from "./counterComponent";

class Counters extends Component {
    state = {
        countersList : [
            {id : 0, value: 0},
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id:3, value: 0},
            {id: 4, value: 0}
        ]
    }

    render() {
        return (
            <div>
                {this.state.countersList.map(counter => <CounterComponent key = {counter.id}/>)}
            </div>
        );
    }
}

export default Counters;