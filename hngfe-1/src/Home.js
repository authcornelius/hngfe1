import React from 'react'
import { useState } from 'react'
import "./App.css"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Slack from './images/5cb480cd5f1b6d3fbadece79.png'
import HNG from './images/Vector.png'
import I4G from './images/I4G-Logo-Color-Cropped.png'
import UserImg from './images/IMG-20210709-WA0045.jpg'
import Github from '././images/25231.png'
import Share from '././images/IconArrow.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faEllipsisV } from '@fortawesome/free-solid-svg-icons'


function Home() {
  const [isHovering, setHovering] = useState(false);

  const handleMouseOver = () => {
    setHovering(true);
  }

  const handleMouseOut = () => {
    setHovering(false);
  }

  return (
    <div>
      <div className='container'>
        <div className='my-3'>
            <div className='first text-center my-3'>
              <div className='d-flex mb-3'>
                <div className='mx-auto'>
                  <img src={UserImg} alt="User DP" className='w-28 h-28 rounded-full' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
                  
                  {isHovering && (
                    <div className='absolute top-4 h-28 w-28 cameraSpace text-center justify-center align-middle bg-[#0000009d] rounded-full'>
                      <div className='absolute top-20 ml-11'>
                        <FontAwesomeIcon icon={faCamera} className="text-white" />
                      </div>
                    </div>
                  )}
                </div>
                <div className='border-2 border-dotted rounded-full w-10 h-10 relative'>
                  <img src={Share} className="w-4 h-4 d-md-none m-2.5 justify-center text-center" alt='Arrow' />
                  <div className='d-none d-md-block mt-1.5'>
                    <FontAwesomeIcon icon={faEllipsisV} alt='Share'/>
                  </div>
                </div>
              </div>
                
              <h3>Annette Black</h3>
            </div>

            <div>
                <button className='col-12 rounded-md btn-secondary my-2 h-16'>Twitter Link</button>
                <button className='col-12 rounded-md btn-secondary my-2 h-16'>Zuri Team</button>
                <button className='col-12 rounded-md btn-secondary my-2 h-16'>Zuri Books</button>
                <button className='col-12 rounded-md btn-secondary my-2 h-16'>Python Books</button>
                <button className='col-12 rounded-md btn-secondary my-2 h-16'>Background Check for Coders</button>
                <button className='col-12 rounded-md btn-secondary my-2 h-16'>Design Books</button>
            </div>

            <div className='d-flex col-12 justify-center my-4'>
                <img src={Slack} alt="Slack" className='w-5 mr-5'/>
                <img src={Github} alt="Slack" className='w-5 mr-5'/>
            </div>
        </div>
      </div>

      <footer className='container d-md-block d-none'>
        <div className='d-flex text-center border-t py-3'>
            <div className='col-2'>
                <img src={HNG} alt="I4G" className='w-44'/>
            </div>

            <div className='col-8'>
                <p className='text-gray-500 leading-10'>HNG Internship 9 Frontend Task</p>
            </div>

            <div className='col-2 text-right'>
                <img src={I4G} alt="I4G" className='w-44'/>
            </div>
        </div>
      </footer>

    </div>
  )
}

export default Home