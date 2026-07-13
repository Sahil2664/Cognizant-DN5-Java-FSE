import React, { Component } from 'react';
import { Post } from './Post';
import './Posts.css';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        // Map the fetched data into the Post class objects
        const loadedPosts = data.slice(0, 10).map(item => new Post(item.id, item.title, item.body));
        this.setState({ posts: loadedPosts });
      })
      .catch(error => {
        console.error("Error fetching posts:", error);
        // We throw an error here to trigger componentDidCatch if we want, or just handle it
        this.setState({ hasError: true });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert("An error occurred while loading the posts: " + error.message);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <div className="error-message">Something went wrong while fetching the posts.</div>;
    }

    return (
      <div className="posts-container">
        {this.state.posts.map(post => (
          <div key={post.id} className="post-card">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-body">{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
