import React from 'react'
import "./App.css"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Slack from './images/5cb480cd5f1b6d3fbadece79.png'
import I4G from './images/I4G-Logo-Color-Cropped.png'
import UserImg from './images/IMG-20210709-WA0045.jpg'
import Github from '././images/25231.png'
import Share from '././images/share-png-file-share-icon-free-download-1156313309811bbndeiii.png'
import ThreeDot from '././images/download.png'


function Home() {
  return (
    <div>
      <div className='container'>
        <div className='mx-auto'>
            <div className='first text-center my-3'>
              <div className='d-flex'>
                <img src={UserImg} alt="User DP" className='w-28 h-28 rounded-full mx-auto mb-3' />
                <div>
                  <img src={Share} className="w-5 h-5 d-md-none" alt='Share' />
                  <img src={ThreeDot} className="w-5 h-5 d-none d-md-block" alt='dropdown' />
                </div>
              </div>
                
                <h3>Annette Black</h3>
            </div>

            <div>
                <button className='col-12 btn bg-[#EAECF0] btn-lg'>Twitter Link</button>
                <button className='col-12 btn bg-[#EAECF0] btn-lg'>Zuri Team</button>
                <button className='col-12 btn bg-[#EAECF0] btn-lg'>Zuri Books</button>
                <button className='col-12 btn bg-[#EAECF0] btn-lg'>Python Books</button>
                <button className='col-12 btn bg-[#EAECF0] btn-lg'>Background Check for Coders</button>
                <button className='col-12 btn bg-black btn-lg'>Design Books</button>
            </div>

            <div className='d-flex col-12 justify-center my-5'>
                <img src={Slack} alt="Slack" className='w-5 mr-5'/>
                <img src={Github} alt="Slack" className='w-5 mr-5'/>
            </div>
        </div>
      </div>

      <footer className='container d-md-block d-none'>
        <div className='d-flex text-center border-t py-5'>
            <div className='col-2'>
                <img src={I4G} alt="I4G" className='w-44'/>
            </div>

            <div className='col-8'>
                <p className='mt-3 text-gray-500'>HNG Internship 9 Frontend Task</p>
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