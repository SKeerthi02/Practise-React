import React, {Component} from 'react';

class CounterComponent extends Component {

    state = {
        value : this.props.value,
    }

    handleIncrement = () => {
        this.setState({count : this.state.count+ 1})
}
    render() {

        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.getCount()}</span>
                <button onClick={this.handleIncrement} className = "btn btn-secondary m-2">Increment</button>
            </div>
        );
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-"
        classes += (this.state.count) === 0? "warning": "primary";
        return classes
    }
    getCount() {
        const {value} = this.state;
        return value === 0 ? "Zero" : value;
    }
}

export default CounterComponent;