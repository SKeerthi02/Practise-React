import React, {Component} from 'react';
import CounterComponent from "./counterComponent";

class Counters extends Component {

    render() {
        return (
            <div>
                <button onClick={this.props.onReset} className="btn btn-primary m-2">Reset</button>
                {this.props.counters.map(counter =>
                    <CounterComponent
                        onDelete = {this.props.onDelete}
                        onIncrement = {this.props.onIncrement}
                        key = {counter.id}
                        counter = {counter}
                    />)}
            </div>
        );
    }
}

export default Counters;