import React from 'react';
import Navigation from './components/navigation';
import Home from './components/home';
import Chat from './components/chat';
import {Route} from "react-router-dom";

export default class App extends React.Component{

    render(){
        return <Navigation>
                <Route exact path="/" component={Home}/>
                <Route path = "/chat" component = {Chat} />
          </Navigation>;
    }
}
