import React from 'react';
import {Link, Route} from "react-router-dom";

export default class Navigation extends React.Component {

    render() {
        return <div className="topNav"><nav><ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Chuckles">Chuckles</Link></li>
                <li><Link to="/chat">Chuckles Chat</Link></li>
                <li><Link to="/brain">Chuckles' Brain</Link></li>
            </ul></nav>
            {this.props.children}</div>;
    }

}
