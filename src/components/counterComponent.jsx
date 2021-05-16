import React, {Component} from 'react';

class CounterComponent extends Component {

    state = {
        count : 1,
        tags : ["tag1", "tag2", "tag3", "tag4"]
    }
    render() {

        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.getCount()}</span>
                <button className = "btn btn-secondary m-2">Increment</button>
                <ul>
                    {this.state.tags.map(tag => <li key ={tag}>{tag}</li>)}
                </ul>
            </div>
        );
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-"
        classes += (this.state.count) === 0? "warning": "primary";
        return classes
    }
    getCount() {
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default CounterComponent;