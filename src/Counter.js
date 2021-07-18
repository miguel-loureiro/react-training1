import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    handleClick = () => {
        let val = this.state.count;
        val = val + 1;
        this.setState({count: val})
    }

    render() {
        const count = this.state.count;
        return (
            <div>
                <button onClick={this.handleClick}> Click here</button>
                <span>{count}</span>
            </div>
        )
    }

}

export default Counter;


