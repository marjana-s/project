import logo from './logo.svg';
import './App.css';
import Header from './componens/header/header';
import Main from './componens/main/main';
import End from './componens/end/end';
import Pizza from './componens/pizza/pizza';
import Promotions from'./componens/promotions/promotions';
import Sushy from'./componens/sushy/sushy'
import Login from'./componens/login/login'
import Register from './componens/register/Register';

import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom';
function App() {
  return (
    <div className="App">
<Router>
   <Header> </Header>
   <Switch>
   <Route exact path="/main">
   <Main/>
           <Link to ="/Pizza" ></Link>
           
          </Route>
         
          <Route path="/pizza" >
            <Pizza/>
          
          </Route>
          <Route path="/promotions" >
          <Link to ="/Promotions" ></Link>
           <Promotions/>
           </Route>

           <Route path="/sushy" >
          <Link to ="/Sushy" ></Link>
           <Sushy/>
           </Route>

           <Route path="/login" >
          <Link to ="/Login" ></Link>
           <Login/>
           </Route>

           <Route path="/register" >
          <Link to ="/Register" ></Link>
           <Register/>
           </Route>
        </Switch>
  
   <End> </End>
   
 </Router>
    </div>
  );
}

export default App;
