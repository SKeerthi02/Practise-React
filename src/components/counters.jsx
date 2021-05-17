import React, {Component} from 'react';
import CounterComponent from "./counterComponent";

class Counters extends Component {

    render() {
        const {onReset, onDelete, onIncrement, onDecrement} = this.props;
        return (
            <div>
                <button onClick={onReset} className="btn btn-primary m-2">Reset</button>
                {this.props.counters.map(counter =>
                    <CounterComponent
                        onDelete = {onDelete}
                        onIncrement = {onIncrement}
                        onDecrement = {onDecrement}
                        key = {counter.id}
                        counter = {counter}
                    />)}
            </div>
        );
    }
}

export default Counters;