import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import Blog from './containers/Blog/Blog';

import User from './containers/User';
import Welcome from './containers/Welcome';

const Posts = React.lazy(() => import('./containers/Posts'));

class App extends Component {
  state = {showPosts: false};

  modeHandler = () => {
    this.setState(prevState => {
      return {showPosts: !prevState.showPosts};
    });
  }

  render() {
    return (
      // 2 вариант
      <React.Fragment>
        <button onClick={this.modeHandler}>Toggle Mode</button>
        {this.state.showPosts ? 
          (
            <Suspense fallback={<div>Loading...</div>}>
              <Posts/>
            </Suspense>
          ) : (
            <User />
          )
        }
      </React.Fragment>

      // 1 вариант
      // <BrowserRouter>
      //   <React.Fragment>
      //     <nav>
      //       <NavLink to="/user">User Page</NavLink> |&nbsp;
      //       <NavLink to="/posts">Posts Page</NavLink>
      //     </nav>
      //     <Route path="/" component={Welcome} exact />
      //     <Route path="/user" component={User} />
      //     <Route 
      //       path="/posts" 
      //       render={() => (
      //         <Suspense fallback={<div>Loading...</div>}>
      //           <Posts/>
      //         </Suspense>
      //       )} 
      //     />
      //   </React.Fragment>
      // </BrowserRouter>

      // <BrowserRouter>
      //   <div className="App">
      //     <Blog />
      //   </div>
      // </BrowserRouter>
    );
  }
}

export default App;
