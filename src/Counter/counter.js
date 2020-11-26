import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {

    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
    }

    state = {
        count: 0,
    }

    handleClick(type) {
        let value = this.state.count
        if (type === 'Decrease' && value > 0) {
            value -= 1
        } else if (type === 'Increase') {
            value += 1
        } else if (type === 'Reset') {
            value = 0
        }
        this.setState({
            count: value
        });
    }
    render() {
        return (
            <div className="Counter-header">

                <button className="Reset" onClick={() => this.handleClick('Reset')}>
                    Reset
                </button>
                <p className="Counter">
                    {this.state.count}
                </p>
                <div>
                    <button className="Decrease" onClick={() => this.handleClick('Decrease')} disabled={this.state.count === 0}>
                        -
                    </button>
                    <button className="Increase" onClick={() => this.handleClick('Increase')}>
                        +
                    </button>
                </div>

            </div>
        )
    }
}

export default Counter