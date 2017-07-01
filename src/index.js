import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter , Route } from 'react-router-dom';

 import reducers from './reducers';
 import ListPosts from './components/list_posts';

const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={ListPosts} />
      </div>
    </BrowserRouter>

  </Provider>
  , document.querySelector('.container'));
