import React from 'react';
import Header from './common/header/'
import { GlobalStyle } from './custom'
import { Iconfont } from './static/iconfont/iconfont'
import store from './store/'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <Provider store={store}>
          <div>
              <Header />
              <BrowserRouter>
                  <div className='p-top'>
                      <Route path='/' exact component={Home}></Route>
                      <Route path='/detail' exact component={Detail}></Route>
                  </div>
              </BrowserRouter>
          </div>
          <GlobalStyle />
          <Iconfont />
      </Provider>
  );
}

export default App;
