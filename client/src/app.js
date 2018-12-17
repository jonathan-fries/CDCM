import React from 'react'
import Navigation from './components/navigation'
import Home from './components/home'
import Chat from './components/chat'
import Brain from './components/brain'
import {Route} from "react-router-dom"
import './appsource.scss'
import {spaceId, deliveryAccessToken} from './config'
import {createStore} from 'redux'
import chucklesApp from './reducers/reducers'

export default class App extends React.Component{

  constructor(props){
        super(props);

    const store = createStore(chucklesApp);

  }

    render(){
        return <Navigation>
              <div className="clearNav">
                <Route exact path="/" render={(props) => <Home {...props} spaceId={spaceId} deliveryAccessToken={deliveryAccessToken} contentId='CCPkPWkRbw8UwmgQYqWmS' />}/>
                <Route path="/Chuckles" render={(props) => <Home {...props} spaceId={spaceId} deliveryAccessToken={deliveryAccessToken} contentId='3yu7WFGg52OueUcuwAmEyE'/>}/>
                <Route path = "/chat" component = {Chat} />
                <Route path = "/brain" component = {Brain} />
              </div>
          </Navigation>;
    }
}
