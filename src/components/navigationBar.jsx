import React, {Component} from 'react';

class NavigationBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="#">NavBar
                        <span className="badge badge-info m-2">{this.props.totalCounters}</span>
                    </a>

                </nav>
            </div>
        );
    }
}

export default NavigationBar;