import React from 'react'
import './header.css'

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import AddLocationIcon from '@mui/icons-material/AddLocation';

const Header = () => {
  return (
    <div className='header'>
        <img
        className='header__logo' 
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt='Logo'    
        />

        <div className='header__location'>
            <AddLocationIcon className='header__locationIcon'/>
            <div className='header__locationOption'>
                <span className='header__optionLineOne'>Hello</span>
                <span className='header__optionLineTwo'>Select Your Address</span>
            </div>
        </div>

        <div
        className='header__search'>
             <select className="header__searchDropDown">
                <option value="all">All Department</option>
                <option value="audiobooks">Audiobooks</option>
                <option value="dvds">DVDs</option>
                <option value="other-resources">Other Resources</option>
            </select>
            <input
            className='header__searchInput'
            type='text'
            />
            <SearchIcon className='header__searchIcon'/>
        </div>

        <div className='header__nav'>
            
            <div className='header__option'>
                <span className='header__optionLineOne'>Hello Guest</span>
                <span className='header__optionLineTwo'>Sign In</span>
            </div>

            <div className='header__option'>
                <span className='header__optionLineOne'>Returns</span>
                <span className='header__optionLineTwo'>& Orders</span>
            </div>

            <div className='header__option'>
                <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>
            </div>

        </div>

        <div className='header__basketOption'>
            <ShoppingBasketIcon />
            <span className='header__optionLineTwo header__basketCount'>0</span>
        </div>

    </div>
  )
}

export default Header;