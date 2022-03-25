import React from 'react'
import MenuItem from '../components/MenuItem.js'
import {Data} from '../data/data.js'
import "../styles/Menu.css"

const Menu = () => {
  return (
    <div className="menu">
        <div className="menuList">
            {
                Data.map((item,key)=> <MenuItem name={item.name} price={item.price} image={item.image} />  )
            }
        </div>
    </div>
  )
}

export default Menu