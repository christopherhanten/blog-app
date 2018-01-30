import React, { Component } from 'react';

class BlogItem extends Component {
  render() {
    console.log(this.props);
    return (
      <li className="blogPost">
        <strong>{this.props.blogPost.title}</strong>: {this.props.blogPost.author}
        {this.props.blogPost.body}
      </li>
    );
  }
}

export default BlogItem;
