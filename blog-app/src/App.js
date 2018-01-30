import React, { Component } from 'react';
//import logo from './logo.svg';
import Post from './components/Post'
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state= {
      blogposts: []
  }}
  componentWillMount(){
    this.setState({blogPosts:[
      {
        title: "the Big Time",
        author: "Jim Kling",
        body: "I thought I had it all when I was in college. It turns out at when I made 60, I hit the big time!"
      },
      {
        title: "killing lollipops",
        author: "django tar-tar",
        body: "If I see a lollipop, I kill it. No questions asked. The only good lollipop is a dead lollipop!"
      },
      {
        title: "fortune 500",
        author: "peanut beasley",
        body: "fortune 500?! Come on now I am the CEO of my life bruh. What don't you get?"
      },
    ]})
  }
  render() {
    return (
      <div className="App">
        <h1>Big Time Blogging Fool</h1>
        <BlogItem BlogItem={this.state.BlogItem} />
      </div>
    );
  }
}

export default App;
