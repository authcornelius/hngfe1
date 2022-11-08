import React from 'react'
import { useState } from 'react'
import "../App.css"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Slack from '../images/5cb480cd5f1b6d3fbadece79.png'
import UserImg from '../images/Device=Web, State=Default.png'
import Github from '.././images/25231.png'
import Share from '.././images/IconArrow.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'


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
        <div className='container border-b'>
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
                  <h3 className='font-extrabold'>Annette Black</h3>
                </div>
              </div>

              <div>

                <button className='col-12 rounded-md btn-secondary my-2.5 h-16' id='Twitter'>
                  Twitter Link
                </button>
                

                <a href="https://training.zuri.team/" id='btn__zuri' title=''>
                  <button className='col-12 rounded-md btn-secondary my-2.5 h-16'>Zuri Team</button>
                </a>

                <a href="http://books.zuri.team" id='books' title='' >
                  <button className='col-12 rounded-md btn-secondary my-2.5 h-16'>Zuri Books</button>
                </a>

                <a href="https://books.zuri.team/python-for-beginners?ref_id=<Cornelius>" title='' >
                  <button className='col-12 rounded-md btn-secondary my-2.5 h-16'>Python Books</button>
                </a>  

                <a href="https://background.zuri.team" title='' >
                  <button className='col-12 rounded-md btn-secondary my-2.5 h-16'>Background Check for Coders</button>
                </a>  

                <a href="https://books.zuri.team/design-rules" title='' >
                  <button className='col-12 rounded-md btn-secondary my-2.5 h-16 font-extrabold'>Design Books</button>
                </a> 

                <Link to="/contact" title='' id="contact" >
                  <button className='col-12 rounded-md btn-secondary my-2.5 h-16 font-extrabold'>Contact Me</button>
                </Link>

              </div>

              <div className='d-flex col-12 justify-center my-10'>
                <img src={Slack} alt="Slack" className='w-5 mr-5' id='slack'/>
                <img src={Github} alt="Slack" className='w-5 mr-5'/>
              </div>
          </div>
        </div>

        <Footer />

      </div>
  )
}

export default Home
