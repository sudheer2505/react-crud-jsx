import React from 'react'
import Employees from './Employees'
import Products from './Products'

function Home() {
  return (
    <>
      <div className='row col-md-12 mt-2'>
        <div className='col-md-6'>
          <Employees />
        </div>
        <div className='col-md-6'>
          <Products />
        </div>
      </div>
    </>
  )
}

export default Home