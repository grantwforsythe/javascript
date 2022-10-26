class Button extends React.Component {
    
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        );
    }

    // Event handlers can be added
    handleClick = () => {
        alert("Hi!");
    }
}