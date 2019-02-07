import React from 'react';
import {initClient, getClient} from '../services/contentfulClient'

export default class Home extends React.Component{

  constructor(props){
    super(props);
    console.log(props.spaceId);
    console.log(props.deliveryAccessToken);
    this.state = {'page':"Home Page", 'pageTitle':"Rocco!", 'content':"<p>I am winning!<p>", 'mainImage': 'blank' };
  }

  componentDidMount () {
    console.log(this.props.spaceId);
    console.log(this.props.deliveryAccessToken);
    initClient( this.props.spaceId, this.props.deliveryAccessToken)
      .then(
        (space) => {
          console.log('Successfully connected to Contentful.');
          console.log(getClient().getEntries({'sys.id': this.props.contentId}).then( payload => {
            //console.log(payload.items[0]);
            console.log("Content of the page is:" + payload.items[0].fields.content);
            this.setState({
              'page':payload.items[0].fields.page,
              'pageTitle':payload.items[0].fields.pageTitle,
              'content':payload.items[0].fields.content,
              'mainImage':payload.items[0].fields.mainImage
              })
            this.props.setAppClientState('success');
          }));
          },
        () => {
          console.log('Failed to connect to Contentful.');
          this.props.setAppClientState('error');
        }
      )
  }

    render(){
      const title = this.state.pageTitle;
      const content = this.state.content;
      const mainImage = this.state.mainImage;

        return <div>
                  <div>
                    <h1>{title}</h1>
                    <div dangerouslySetInnerHTML={createMarkup(content)}></div>
                  </div>
                  <div class="imageContainer">
                    <img width="500px" src={mainImage}/>
                  </div>
              </div>;
    }

}

function createMarkup(htmlVal) {
  return {__html: htmlVal};
}
