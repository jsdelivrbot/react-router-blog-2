import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter , Route , Switch} from 'react-router-dom';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import ListPosts from './components/list_posts';
import NewPost from './components/new_post';
import PostShow from './components/post_show';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={NewPost} />
          <Route path="/posts/:id" component={PostShow} />
          <Route path="/" component={ListPosts} />
        </Switch>
      </div>
    </BrowserRouter>

  </Provider>
  , document.querySelector('.container'));
