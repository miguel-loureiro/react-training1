import React, {Component} from 'react';

class AutomaticCounter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
        console.log("Constructor! ");
    }

    timerTick = () => {
        console.log("TimerTick fired : " +  this.state.count);
        this.setState((previousState) => {
            return {
                count: previousState.count + 1
            };
        });
    }

    componentDidMount() {
        this.timer = setInterval(this.timerTick, 100);
        console.log("Component has mounted!")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component updated from: " + prevState.count);
        if (this.state.count == 50) {
        this.props.endCounter();
        }
        }
        componentWillUnmount() {
        console.log("Component is about to be unmounted!");
        clearInterval(this.timer);
        }
        render() {
        console.log("AutomaticCounter render call!");
        return (
        <h1>{this.state.count}</h1>
        );
        }


}

export default AutomaticCounter;