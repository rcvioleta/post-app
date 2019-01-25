import React, { Component } from 'react';

import './App.css';
import Toolbar from './components/UI/Toolbar/Toolbar';
import Posts from './components/Posts/Posts';

class App extends Component {
  state = {
    posts: [],
    searchField: ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then(resp => resp.json())
      .then(data => {
        const posts = data.slice(0, 20);
        this.setState({ posts: posts });
      });
  }

  onChangeHandler = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const filteredPosts = this.state.posts.filter(post => {
      return post.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className="App">
        <Toolbar changed={this.onChangeHandler} />
        <Posts posts={filteredPosts} />
      </div>
    );
  }
}

export default App;
