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

    handleIncrement = (counter) => {
        const counters = [...this.state.countersList];
        const index = counters.indexOf(counter);
        // counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    }

    handleReset = () => {
        const counters = this.state.countersList.map(counter => {counter.value = 0; return counter});
        this.setState({counters})
    }
    render() {
        return (
            <div>
                <button onClick={this.handleReset} className="btn btn-primary m-2">Reset</button>
                {this.state.countersList.map(counter =>
                    <CounterComponent
                        onDelete = {this.handleDelete}
                        onIncrement = {this.handleIncrement}
                        key = {counter.id}
                        counter = {counter}
                    />)}
            </div>
        );
    }
}

export default Counters;