import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import {DISHES} from './shared/dishes'; //importing data from
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props); //REQUIRED

    this.state = {
      dishes: DISHES
    };
  }


  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />  {/* MAKE DISHES AVAILABE AS PROPS TO THE MENU COMPONENT */}
      </div>
    );
  }
}
export default App;
