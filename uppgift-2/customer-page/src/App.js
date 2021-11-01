
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Customers from './views/Customers';
import RegisterCustomers from './views/RegisterCustomers';

import Card from './components/cards/Card';
import GridCard from './components/cards/GridCard';
import Navbar from './components/navbar/Navbar';
import Signin from './views/Signin';
import WelcomeBack from './views/WelcomeBack';

function App() {

  
  return (
    <BrowserRouter>
     <Switch>
       <Route path="/signin" exact component={Signin} />
       <Route path="/customers" exact component={Customers} />
       <Route path="/" exact component={RegisterCustomers} />
       <Route path="/welcomeback" exact component={WelcomeBack} />
     </Switch>
    </BrowserRouter>
  );
}

export default App;

