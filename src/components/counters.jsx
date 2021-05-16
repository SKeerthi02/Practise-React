import React, {Component} from 'react';
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

    handleDelete = (counterId) => {
        const countersList = this.state.countersList.filter( counter => counterId !== counter.id );
        this.setState({countersList});
    }
    render() {
        return (
            <div>
                {this.state.countersList.map(counter => <CounterComponent onDelete = {this.handleDelete} key = {counter.id} counter = {counter}/>)}
            </div>
        );
    }
}

export default Counters;