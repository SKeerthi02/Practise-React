import React, {Component} from 'react';

class CounterComponent extends Component {

    state = {
        count : 0
    }
    render() {
        return (
            <div>
                <span className="badge badge-primary badge-warning m-2">{this.getCount()}</span>
                <button className = "btn btn-primary m-2">Increment</button>
            </div>
        );
    }

    getCount() {
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default CounterComponent;