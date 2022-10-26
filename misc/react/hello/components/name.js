class Hello extends React.Component {
    
    // Properties (props) can be passed to components
    render() {
        return <h1>Hello, {this.props.name || "World"}!</h1>;
    }
}

class Name extends React.Component {

    render() {
        return (
            <div>
                <Hello name="John"/>
                <Hello name="Bob"/>
                <Hello name="Jeff"/>
                <Hello />
            </div>
        );
    }
}