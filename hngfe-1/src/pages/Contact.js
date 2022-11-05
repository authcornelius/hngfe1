import React, { useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from '../Components/Footer'

function Contact() {

    const [ fname, setFname ] = useState('')
    const [ lname, setLname ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')


  return (
    <div>
      <form className=''>
        <div className='container my-5'>
            <div className='col-lg-8 offset-lg-2'>
                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask me about anything you have in mind</p>

                <div className='row'>
                    <label className='col-12 col-md-6 my-2'>
                        <h6 className=' font-normal'>First Name</h6>
                        <input 
                            value={fname} 
                            placeholder='Enter your first name' 
                            className='col-12 p-2 border rounded-md' 
                            type="text" 
                            id='first_name'
                            onChange={e => setFname(e.target.value)}
                        />
                    </label>

                    <label className='col-12 col-md-6 my-2'>
                        <h6 className=' font-normal'>Last Name</h6>
                        <input 
                            value={lname} 
                            placeholder='Enter your last name'
                            className=' col-12 p-2 border rounded-md' 
                            id='last_name'
                            type="text"
                            onChange={e => setLname(e.target.value)}
                        />
                    </label>

                    <label className='col-12 my-2'>
                        <h6 className=' font-normal'>Email</h6>
                        <input 
                            value={email} 
                            placeholder='youremail@email.com' 
                            className='col-12 p-2 border rounded-md' 
                            id='email'
                            type="text"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </label>

                    <label className='col-12 my-2'>
                        <h6 className='font-normal'>Message</h6>                   
                        <textarea 
                            value={message} 
                            placeholder="Send me a message and I'll reply you as soon as possible..." 
                            className='col-12 border rounded-md h-32 p-2' 
                            type="text" 
                            id='message'
                            onChange={e => setMessage(e.target.value)}
                        ></textarea>

                        <p className=' text-red-500'>Something went wrong</p>
                    </label>

                    <div className='d-flex my-2'>
                        <input type="checkbox" className='absolute mt-1 w-4 h-4 rounded--md'/>
                        <p className='ml-6'>You agree to provide your data to Cornelius Oaikhienan who may contact you.</p>
                    </div>

                    <div className='col-12 my-2'>
                        <button className='btn btn-primary col-12' id='btn__submit'>Send message</button>
                    </div>

                </div>
            </div>
        </div>
      </form>

      <Footer />
    </div>
  )
}

export default Contact
