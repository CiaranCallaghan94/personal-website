import React, {Component} from 'react';

import './Navbar.css'

class Navbar extends Component{
  render(){
    return(
      <div className='navbar'>
        <div className='navbar_logo'></div>
        <div className='navbar_name'>Ciaran Callaghan</div>
        <div className='nav_spacer'/>
        <div className='navbar_list'>
          <ul>
            <li><a href="/">Resume</a></li>
            <li><a href="/">Projects</a></li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Navbar;
