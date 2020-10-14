import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from './components/Login';
import EditorPage from './components/EditorPage';
import WriterPage from './components/WriterPage';


function App() {
  return (
    // <div>
    //   <Login/>
    // </div>
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/EditorPage012' component={EditorPage} />
      <Route  exact path='/WriterPage013' component={WriterPage} />
      </Switch>

      </BrowserRouter>
  );
}

export default App;
