import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country';
import Cart from './components/Cart/Cart';

function App() {
  
  const [countries,setcountries]=useState([]);
  useEffect( () => {
       fetch('https://restcountries.eu/rest/v2/all')
       .then(res => res.json())
       .then(data => {
         //console.log(data);
         setcountries(data);
       })
       .catch(error => console.log(error))
  },[])

  const [cart,setCcart]=useState([]);

  const handleAddCountry = (countrydetails) => {
    const newCart=[...cart,countrydetails];
    setCcart(newCart)
  }

  return (
    <div className="App" style={{display:'flex'}}> 
    <div style={{width:"50%"}}>
      <h1>Country Loaded : {countries.length}</h1>
      <h3>Added country : {cart.length}</h3>
      {
        countries.map( country => <Country countrydetails={country} key={country.alpha3Code} handleAddCountry={handleAddCountry}></Country>)
      }
    </div>
    <div style={{width:"50%",border:"2px solid red"}}>
      <Cart cart={cart}></Cart>
    </div>       
    </div>  
  );
}

export default App;
