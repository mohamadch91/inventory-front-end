// Copied from: https://codesandbox.io/s/vymm4oln6y?file=/ChangingProgressProvider.js:0-500
import React from "react";

class ChangingProgressProvider extends React.Component {
    static defaultProps = {
        interval: 1000
    };

    state = {
        valuesIndex: 0
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                valuesIndex: (this.state.valuesIndex + 1) % this.props.values.length
            });
        }, this.props.interval);
    }

    render() {

        return this.props.children(this.props.values[this.state.valuesIndex]);
    }
}

export default ChangingProgressProvider;
