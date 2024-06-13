import React from 'react'
import Cart from '../common/cart'
import Searchbar from '../common/Searchbar';
import SearchIcon from '../common/searchIcon';
import AmzonLogo from '../common/AmzonLogo';
import Location from '../common/Location'
function Header() {
  return (
    <div className='header'>
  <AmzonLogo/>
        <div className ='Location' >
            <Location/>
            <div>
            <p>Deliver to</p>
                <p className='countery'>Ethiopia</p>
                </div>
                </div>
                <div className='Search'>
                    <select>
                <option value='All' selected>All</option>    
                    </select>
                    <Searchbar />
                    <SearchIcon/>
                    </div>
        <div className = 'left' >
                 
                     <select>
                <option selected>EN</option>    
            </select>
            <div>
                    <p > Hello, Sign in </p>
                       <select>
                <option selected>Account&Lists</option>    
        </select> 
        </div>
         <div className='OrdersRet'>   
                    <p >Return</p>
             <p> & Orders </p>
             </div>
            <div className='cart'>
                <Cart />
                < p > Cart </p>   
                </div>
                        </div>
    </div>
  )
}

export default Header
