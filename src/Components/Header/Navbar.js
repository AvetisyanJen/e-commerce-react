import { memo, useState } from "react"
import { Link, Outlet } from "react-router-dom"


const Navbar=memo(({ state, setState })=> {
 

console.log(state)
  return (<>
    <div className="header">
      <div className="container d_flex">
        {<div className='catgrories d_flex'>

          <img className="haverj" src="./imigs/haverj.png" />
          <h4
            onClick={() => setState(!state)} >
            Բաժիններ
            {state ? <i className='fas fa-times close home-btn'></i> : <i className='fa fa-chevron-down'></i>}


          </h4>

        </div>}
        <div className='navlink'>
          <ul className='link f_flex capitalize'>
            <li><Link to="/">Գլխավոր</Link></li>
            <li><Link to="/about">Մեր մասին</Link></li>

          </ul>
        </div>
      </div>
    </div>

  </>)
})
 export default Navbar