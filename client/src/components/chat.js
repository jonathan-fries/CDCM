import React from 'react';

export default class Chat extends React.Component{

    render(){
        return <div>
                  <div className="chatBackground">
                      <div className="chatBubble">
                          <p className="triangle-isosceles" id="ChatBox">"They put me on dirty paper."</p>
                      </div>
                      <div>
                          <img className="chuckPick" id="ChuckPick" src="https://storage.googleapis.com/chucklesthedirtchipmuffin.com/ChatPix/ChucklesChat1T.png" />
                      </div>
                  </div>
                  <div style={{clear: 'both'}}></div>
                  <input id="clickMe" type="button" value="Talk to me Chuckles" />
              </div>;

    }
}
