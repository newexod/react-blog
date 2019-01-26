import React, { Component } from 'react';
import axios from '../../../axios';
import { Route } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Posts.css';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount () {
    console.log('Posts', this.props); // routing props of route localhost:3000/
    axios.get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPost = posts.map(post => {
          return {
            ...post,
            author: 'Dima'
          }
        });
        this.setState({
          posts: updatedPost
        })
        // console.log(response)
      })
      .catch(error => {
        // this.setState({
        //   error: true
        // });
        console.log(error)
      });
  }

  // 2 variant programmatically
  postSelectedHandler = (id) => {
    this.props.history.push({pathname: '/posts/' + id}); // 2.1
    // this.props.history.push('/posts/' + id); // 2.2
  }

  render() {
    let posts = <p style={{textAlign: "center"}}>Something went wrong!</p>;
    
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          // 1 variant with <Link>
          // <Link to={'/posts/' + post.id} key={post.id}>
            <Post 
              key={post.id}
              title={post.title} 
              author={post.author}
              clicked={ () => this.postSelectedHandler(post.id) }
            />
          // </Link>
        );
      });
    }

    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
      </div>
    );
  }
}

export default Posts;