import React from 'react';
import Navigation from './components/navigation';
import Home from './components/home';
import Chat from './components/chat';
import {Route} from "react-router-dom";
import './appsource.scss';
import {spaceId, deliveryAccessToken} from './config';
import {getClient, initClient} from './services/contentfulClient';
import {createStore} from 'redux';

export default class App extends React.Component{
  componentWillMount () {

  initClient(spaceId, deliveryAccessToken)
    .then(
      (space) => {
        console.log('Successfully connected to Contentful.');
        console.log(getClient().getEntries().then( payload => {
          console.log("Title of the page is: " + payload.items[0].fields.title);
          console.log("Content of the page is:" + payload.items[0].fields.introText);
        }));
        },
      () => console.log('Failed to connect to Contentful.')
      //() => this.props.setAppClientState('success'),
      //() => this.props.setAppClientState('error')
    )
  }

    render(){
        return <Navigation>
              <div className="clearNav">
                <Route exact path="/" component={Home}/>
                <Route path = "/chat" component = {Chat} />
              </div>
          </Navigation>;
    }
}
