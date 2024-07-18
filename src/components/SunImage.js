import React from 'react'
import NumberLoading from './Num'

function SunImage() {
  return (
    // <img src="sun.jpg" class="img-fluid" alt="..."/>
    <div className="card text-bg-dark border border-0">
  <img src="sun.jpg" className="card-img" alt="..."/>
  <div className="card-img-overlay">
    <NumberLoading/>
  </div>
</div>
  )
}

export default SunImage
