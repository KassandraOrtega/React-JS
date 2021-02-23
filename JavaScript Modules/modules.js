// imports
import React from "react";
import { createMemoryHistory } from "history";
import Router from "./Router";

// code
class MemoryRouter extends React.Component {
    history = createMemoryHistory(this.props);
    render() {
        return (
            <Router
                history = {this.history}
                children = {this.props.children}
            />;
        )
    }
}

// exports
export default MemoryRouter;