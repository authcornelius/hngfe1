import React from 'react'
import { useState } from 'react'
import "./App.css"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Slack from './images/5cb480cd5f1b6d3fbadece79.png'
import HNG from './images/Vector.png'
import I4G from './images/I4G-Logo-Color-Cropped.png'
import UserImg from './images/Device=Web, State=Default.png'
import Github from '././images/25231.png'
import Share from '././images/IconArrow.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faEllipsis } from '@fortawesome/free-solid-svg-icons'


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
          <div className='my-4'>
              <div className='first text-center my-3'>
                <div className='d-flex mb-3'>
                  <div className='mx-auto'>
                    <img src={UserImg} alt="User DP" id='profile__img' className='w-28 h-28 rounded-full' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
                    
                    {isHovering && (
                      <div className='absolute top-6 h-28 w-28 cameraSpace text-center justify-center align-middle bg-[#0000009d] rounded-full'>
                        <div className='absolute top-20 ml-12'>
                          <FontAwesomeIcon icon={faCamera} className="text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className='border-2 border-dotted rounded-full w-10 h-10 relative d-none d-md-block right-40'>
                    <img src={Share} className="w-4 h-4 m-2.5 justify-center text-center" alt='Arrow' />
                  </div>

                  <div className='border-2 border-dotted rounded-full w-10 h-10 relative d-md-none'>
                    <div className='mt-1.5'>
                      <FontAwesomeIcon icon={faEllipsis} alt='Share'/>
                    </div>
                  </div>
                </div>
                  
                <div className="my-3">
                  <h3 className=' font-extrabold'>Annette Black</h3>
                </div>
              </div>

              <div>
                <a target="_blank" href='https://google.com' rel="noreferrer" >
                  <button className='col-12 rounded-md btn-secondary my-2.5 h-16' id='Twitter'>Twitter Link</button>
                </a>

                <a target="_blank" href='https://training.zuri.team/' rel="noreferrer" id='btn__zuri'>
                  <button className='col-12 rounded-md btn-secondary my-2.5 h-16'>Zuri Team</button>
                </a>

                <a target="_blank" href='http://books.zuri.team' rel="noreferrer" id='books' >
                  <button className='col-12 rounded-md btn-secondary my-2.5 h-16'>Zuri Books</button>
                </a>

                <a target="_blank" href='https://books.zuri.team/python-for-beginners?ref_id=<Cornelius>' rel="noreferrer" id='book__python' >
                  <button className='col-12 rounded-md btn-secondary my-2.5 h-16'>Python Books</button>
                </a>  

                <a target="_blank" href='https://background.zuri.team' rel="noreferrer" id='pitch' >
                  <button className='col-12 rounded-md btn-secondary my-2.5 h-16'>Background Check for Coders</button>
                </a>  

                <a target="_blank" href='https://books.zuri.team/design-rules' rel="noreferrer" id='book__design' >
                  <button className='col-12 rounded-md btn-secondary my-2.5 h-16'>Design Books</button>
                </a>  
              </div>

              <div className='d-flex col-12 justify-center my-4'>
                  <img src={Slack} alt="Slack" className='w-5 mr-5' id='slack'/>
                  <img src={Github} alt="Slack" className='w-5 mr-5'/>
              </div>
          </div>
        </div>

        <footer className='container'>
          <div className='row border-t py-4'>
              <div className='col-sm-12 col-md-2'>
                  <img src={HNG} alt="I4G" className='w-44'/>
              </div>

              <div className='col-sm-12 col-md-8'>
                  <p className='text-gray-500 text-md-center leading-4'>HNG Internship 9 Frontend Task</p>
              </div>

              <div className='text-right col-sm-12 col-md-2'>
                  <img src={I4G} alt="I4G" className=' w-40'/>
              </div>
          </div>
        </footer>

      </div>
  )
}

export default Home