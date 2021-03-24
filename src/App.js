import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from './Screens/Login';
import EditorPage from './Screens/EditorPage';
import WriterPage from './Screens/WriterPage';
import EditorTabContain from './Components/EditorTabContain'

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
