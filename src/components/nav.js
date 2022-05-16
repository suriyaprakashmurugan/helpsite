import React from 'react';
import Flag from './flag.jpeg';

export default function Nav() {
  return (
    <>
        <div className='nav'>
            <h2>LOGO</h2>
            <ul className='nav-list'>
                <li><i class="fa-solid fa-life-ring"></i>Help</li>
                <li><img alt='us flag' className='nav-img' src={Flag} />Deutsch | EUR</li>
                <li><button><i class="fa-solid fa-user"></i><i class="fa-solid fa-bars"></i></button></li>
            </ul>
            <a href='/' className='resicon'>open request <i class="fa-solid fa-user">  </i><i class="fa-solid fa-bars"></i></a>
        </div>
    </>
  )
}
