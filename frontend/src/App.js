import React from 'react';
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from './components/pages/homePage';
import Bikes from './components/pages/manageBikes';
import Rentals from './components/pages/manageRentals';
import Orders from './components/pages/manageOrders';
import Customers from './components/pages/manageCustomers';
import Appointments from './components/pages/manageAppointments';
import Categories from './components/pages/manageCategories';
import './App.css';
import AddEditBike from './components/pages/addEditBike';
import AddEditCustomer from './components/pages/addEditCustomer';
import AddEditAppointment from './components/pages/addEditAppointment';
import AddOrder from './components/pages/addOrder';
import AddEditBikeOrder from './components/pages/addEditBikeOrder';
import AddEditRental from './components/pages/addEditRental';



const client = new QueryClient()

function App() {

  return (
    <>
    <QueryClientProvider client={client}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/bikes' Component={Bikes} />
          <Route path='/bikes/:mode' Component={AddEditBike}/>
          <Route path='/bikes/:id/:mode' Component={AddEditBike}/>

          <Route path='/orders' Component={Orders} />
          <Route path='/orders/:mode' Component={AddOrder} />
          <Route path='/orders/:id/:mode' Component={AddOrder} />

          <Route path='/orders/bike-order/:mode' Component={AddEditBikeOrder} />
          <Route path='/orders/bike-order/:id/:mode' Component={AddEditBikeOrder} />

          <Route path='/rentals' Component={Rentals} />
          <Route path='/rentals/:mode' Component={AddEditRental} />
          <Route path='/rentals/:id/:mode' Component={AddEditRental} />

          <Route path='/customers' Component={Customers} />
          <Route path='/customers/:mode' Component={AddEditCustomer} />
          <Route path='/customers/:id/:mode' Component={AddEditCustomer} />

          <Route path='/appointments' Component={Appointments} />
          <Route path='/appointments/:mode' Component={AddEditAppointment} />
          <Route path='/appointments/:id/:mode' Component={AddEditAppointment} />

          <Route path='/categories' Component={Categories} />
        </Routes>

      </Router>
    </QueryClientProvider>
    </>
  );
}

export default App;
