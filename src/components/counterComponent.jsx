import React, {Component} from 'react';

class CounterComponent extends Component {

    state = {
        value : this.props.counter.value,
    }

    handleIncrement = () => {
        this.setState({value : this.state.value+ 1})
}
    render() {

        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.getCount()}</span>
                <button onClick={this.handleIncrement} className = "btn btn-secondary m-2 btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn m-2 btn-danger btn-sm"> Delete</button>
            </div>
        );
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-"
        classes += (this.state.value) === 0? "warning": "primary";
        return classes
    }
    getCount() {
        const {value} = this.state;
        return value === 0 ? "Zero" : value;
    }
}

export default CounterComponent;