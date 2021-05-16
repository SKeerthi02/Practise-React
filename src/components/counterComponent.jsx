import React, {Component} from 'react';

class CounterComponent extends Component {

    render() {

        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.getCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className = "btn btn-secondary m-2 btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn m-2 btn-danger btn-sm"> Delete</button>
            </div>
        );
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-"
        classes += (this.props.counter.value) === 0? "warning": "primary";
        return classes
    }
    getCount() {
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default CounterComponent;