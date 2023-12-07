import React from 'react'
import "../Navbar/navbar.scss"

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div>
            <img src="https://preview.colorlib.com/theme/eiser/img/logo.png" alt="" />
        </div>
        <div className='Pages'>
            <div>Home</div>
            <div>Shop</div>
            <div>Blog</div>
            <div>Pages</div>
            <div>Contact</div>
        </div>
        <div className='icons'>
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-basket-shopping"></i>
            <i class="fa-solid fa-user"></i>
            <i class="fa-solid fa-heart"></i>
        </div>
    </div>
  )
}

export default Navbar