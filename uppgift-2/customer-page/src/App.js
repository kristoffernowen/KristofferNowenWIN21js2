
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Customers from './views/Customers';
import ViewCustomer from './views/ViewCustomer';
import RegisterCustomers from './views/RegisterCustomers';

import Signin from './views/Signin';
import WelcomeBack from './views/WelcomeBack';

function App() {

  
  return (
    <BrowserRouter>
     <Switch>
       <Route path="/" exact component={Signin} />
       <Route path="/customers" exact component={Customers} />
       <Route path="/viewcustomer" exact component={ViewCustomer} />
       <Route path="/registercustomers" exact component={RegisterCustomers} />
       <Route path="/welcomeback" exact component={WelcomeBack} />
     </Switch>
    </BrowserRouter>
  );
}

export default App;

