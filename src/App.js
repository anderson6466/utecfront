import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Card, CardHeader, CardContent } from "@material-ui/core";
import Container  from '@material-ui/core/Container';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch 
} from 'react-router-dom';
import Iniciocons from './components/Iniciocons';
import Status from './components/Status';
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
           <Container fixed>

           <Card >


             
           </Card>



           </Container>
           
           
           
              <Switch >
              <Route exact path='/' component={Iniciocons}></Route>
              <Route exact path='/status' component={Status}></Route>
              
            </Switch>
           </div>
       </Router>
   );
  }
}
export default App;