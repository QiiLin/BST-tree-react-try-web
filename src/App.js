// /client/App.js
import React, { Component } from "react";
import Node from "./Node";
import Drawing from "./Drawing";
import Inputs_form from "./Inputs_form";

class App extends Component {
    // initialize our state

    constructor(props) {
        super(props);
        this.state = {tree: new Node(50, 600, 20)};

    };

    componentDidMount() {

    }

    componentWillUnmount() {

    };
    // set up change state function
    insertstart = (val) => {
        console.log("reached");
        this.setState(state => ({tree: state.tree.insert(val, null)}));
        this.state.tree.display("root");
    };
    render() {
        // pass  change state function to the
        return (
            <div>
                <Drawing  node={this.state.tree} />
                <Inputs_form insert={this.insertstart} />
            </div>

        );
    }
}

export default App;
