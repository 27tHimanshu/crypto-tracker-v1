import React, { useContext } from 'react'
import './Navbar.css'
import logo from '/src/assets/logo.png';
import arrow_icon from '/src/assets/arrow_icon.png';
import { CoinContext } from '../context/CoinContext';


const Navbar = () => {

  const {setCurrency}=useContext(CoinContext);

  const currencyHandler = (event)=>{
     switch(event.target.value){
      case "usd":{
          setCurrency({name:"usd",symbol:"$"});
          break;
      }
      case "inr":{
          setCurrency({name:"inr" , symbol:"₹"})
          break;
      }
      case "eur":{
           setCurrency({name:"eur",symbol:"€"})
           break;
      }
       default: {
        setCurrency({name:"usd",symbol:"$"});
        break;
   }
     }

  }
  return (
    <div className='navbar'>
      <img src={logo} alt="" className='logo' />
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Bolgs</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
            <option value="usd"> USD </option>
            <option value="eur"> EUR </option>
            <option value="inr"> INR </option>
        </select>
        <button>
            Sign Up 
            <img src="{arrow_icon}" alt="" />
        </button>
      </div>
    </div>
  )
}

export default Navbar
