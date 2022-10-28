class Counter extends React.Component {

    // The state is something a component has that might change at some point
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.initialValue
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }

    increment = () => {
        /**
         * Increment the state by 1. If the state is
         * incremented past 10, it will be rest to 0
         * and alert the user.
         */
        if (this.state.count === 10) {
            alert('Resetting back to 0');
            this.setState(state => ({
                count: 0
            }));
        } else {
            this.setState(state => ({
                count: state.count + 1
            }));
        }
    };

    decrement = () => {
        /**
         * Decrement the state by 1. If the state is
         * decremented past 0, it will alert the user
         * that it can't be decremented any further.
         */
        if (this.state.count > 0) {
            this.setState(state => ({
                count: state.count - 1
            }));
        } else {
            alert('Can\'t decrement below 0');
        }
    };
}

class App extends React.Component {

    render() {
        return (
            <div>
                <Counter initialValue={0}/>
                <Counter initialValue={5}/>
                <Counter initialValue={9}/>
            </div>
        )
    }
}