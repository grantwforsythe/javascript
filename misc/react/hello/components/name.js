class Hello extends React.Component {
    
    // Properties (props) can be passed to components
    // Properties are never changed by the component
    // They are attributes given to a component
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