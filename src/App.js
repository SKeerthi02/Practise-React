import React, {Component} from 'react';
// import './App.css';
import NavigationBar from "./components/navigationBar";
import Counters from "./components/counters";

class App extends Component {
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

  handleDecrement = (counter) =>{
    const counters = [...this.state.countersList];
    const index = counters.indexOf(counter);
    // counters[index] = {...counter};
    counters[index].value--;
    this.setState({counters});
  }

  handleReset = () => {
    const counters = this.state.countersList.map(counter => {counter.value = 0; return counter});
    this.setState({counters})
  }

  render() {
    return (
          <div>
            <NavigationBar totalCounters = {this.state.countersList.filter(counter => counter.value > 0).length}/>
            <main className="container">
              <Counters
                  onReset={this.handleReset}
                  onIncrement={this.handleIncrement}
                  onDelete = {this.handleDelete}
                  onDecrement = {this.handleDecrement}
                  counters = {this.state.countersList}/>

            </main>
          </div>
    );
  }
}

export default App;
