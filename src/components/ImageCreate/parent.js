import React from "react";
import ImageCreate from "./images";

class Parent extends React.Component {
    state: {
        count = false
    }

    increment() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <Child count={this.state.count} increment={this.increment.bind(this)} />
        )
    }
}

export default Parent;