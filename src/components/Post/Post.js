import React from 'react';
import { withRouter } from 'react-router-dom';

import './Post.css';

const post = (props) => {
  // Post {title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", author: "Dima", clicked: ƒ, match: {…}, location: {…}, …}
  // author: "Dima"
  // clicked: ƒ clicked()
  // history: {length: 29, action: "POP", location: {…}, createHref: ƒ, push: ƒ, …}
  // location: {pathname: "/", search: "", hash: "", state: undefined, key: "dgeat6"}
  // match: {path: "/", url: "/", isExact: true, params: {…}}
  // staticContext: undefined
  // title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
  // __proto__: Object

  // таких пропсов будет столько, сколько всего постов
  console.log('Post', props);

  return (
    <article 
      className="Post"
      onClick={props.clicked}
    >
      <h1>{props.title}</h1>
      <div className="Info">
        <div className="Author">{props.author}</div>
      </div>
    </article>
  );
};

export default withRouter(post);