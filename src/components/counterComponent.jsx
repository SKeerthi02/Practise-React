import React, {Component} from 'react';

class CounterComponent extends Component {

    render() {

        return (
            <div className="row">
                <div className="col-1">
                    <span className={this.getBadgeClasses()}>{this.getCount()}</span>
                </div>
                <div className="col">
                    <button onClick={() => this.props.onIncrement(this.props.counter)} className = "btn btn-secondary btn-sm">+</button>
                    <button
                        onClick={() => this.props.onDecrement(this.props.counter)}
                        className="btn btn-secondary m-2 btn-sm"
                        disabled={this.props.counter.value === 0}>-</button>
                    <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm">Delete</button>
                </div>

            </div>
        );
    }

    // isActive(){
    //     const1 =
    //     this.state.disabled = (this.props.counter.value) === 0? true: false
    // }
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