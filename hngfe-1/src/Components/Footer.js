import React from 'react'
import HNG from '.././images/download.png'
import I4G from '.././images/I4G-Logo-Color-Cropped.png'

function Footer() {
  return (
    <div>
      <footer className='container'>
          <div className='row py-3'>
              <div className='col-sm-12 col-md-2 py-2'>
                  <img src={HNG} alt="I4G" className='w-44'/>
              </div>

              <div className='col-sm-12 col-md-8 py-2'>
                  <p className='text-gray-500 text-md-center leading-4'>HNG Internship 9 Frontend Task</p>
              </div>

              <div className='text-right col-sm-12 col-md-2 py-2'>
                  <img src={I4G} alt="I4G" className=' w-40'/>
              </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer
