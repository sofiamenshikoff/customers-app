import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer'
import './App.css';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';
import NewCustomerContainer from './containers/NewCustomerContainer';

class App extends Component {
  renderHome = () => <HomeContainer/>
  renderCustomerContainer = () => <h1>Customer Container</h1>
  renderCustomerListContainer = () => <CustomersContainer/>
  renderCustomerNewContainer = () => <h1>Customer New Container</h1>

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={this.renderHome} />
          <Route exact path="/customers" component={this.renderCustomerListContainer}/>
          <Switch>
            <Route path="/customers/new" component={NewCustomerContainer} />
            <Route path="/customers/:dni" render={props => <CustomerContainer dni={props.match.params.dni}/>} />
          </Switch>
        </div>
      </Router>
    )
  }
}



// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Link to="/customers">Customers</Link> 
//       </div>
//     </Router>
//   );
// }

export default App;
