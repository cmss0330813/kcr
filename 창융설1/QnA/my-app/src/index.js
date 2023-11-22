import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import TagPage from "./pages/TagPage";
import TagUnit from "./components/TagUnit";
import MainPage from "./pages/MainPage";
//import LoginPage from "./pages/LoginPage";
/*
import * as PropTypes from "prop-types";

const root = ReactDOM.createRoot(document.getElementById('root'));

function Switch(props) {
    return null;
}

Switch.propTypes = {children: PropTypes.node};
root.render(
    <Switch>
        <Route exact path='/' component={MainPage}></Route>
    </Switch>
);

*/

/*    <div style={{display: 'flex'}}>
        {<Sidebar />}
        {<Main><Login /></Main>}
        
      </div>
      */



function index() {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path='/' component={MainPage}></Route>
              <Route exact path='/login'></Route>

              <Route exact path='/signup' />
              <Route exact path='/logout' />
              <Route exact path='/user/update' />
              <Route exact path='/user/profiles' />
              <Route exact path='/api/signup' />
              <Route exact path='/api/user/update' />
              <Route exact path='/api/user/delete' />
          </Routes>
      </BrowserRouter>

  );
}