import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/ImageList';
import axios from 'axios';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {images: []};
  }
  componentWillMount() {
    //Load data here mothafucka, no need for done then
      axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
        .then((response) => this.setState({images: response.data.data}));
  }

  render() {
    return <ImageList images={this.state.images}/>;
  }
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
