import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App.js';
import Home from './components/Home/Home.js';

import Blog from './components/Blog/Blog.js';
import About from './components/About/About.js';
import Post from './components/Blog/Post';
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="blog" component={Blog} />
    <Route path="blog/:title" component={Post} />
  </Route>
)
