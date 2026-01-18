import React, { useState } from 'react'
import Home from './pages/Home'
import Form from './components/Form'
import Ticket from './components/Ticket'

const App = () => {
  const [ticketData, setTicketData] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  return (
    <div className="pt-10 bg-black text-white h-screen 
  bg-[url(/assets/images/background-mobile.png)] bg-cover bg-center
  md:bg-[url(/assets/images/background-desktop.png)] bg-cover bg-center">

  <div className="
    bg-[url(/assets/images/pattern-squiggly-line-bottom-mobile.svg)]
    bg-no-repeat
    bg-[position:left_bottom]
    bg-[length:auto_120px]

    md:bg-[url(/assets/images/pattern-squiggly-line-bottom-desktop.svg),url(/assets/images/pattern-lines.svg),url(/assets/images/pattern-circles.svg)]
    md:bg-[position:left_bottom,right_top,center]
    md:bg-[length:auto_200px,auto_150px,auto_120px]
  ">

      
      {
        !submitted ? (
          <>
          <Home title="Your Journey to Coding Conf 2026 Starts Here!" paragragh="Secure your spot at next year's biggest coding conference."/>
         <Form setSubmitted={setSubmitted} setTicketData={setTicketData}/>
          </>
          
        ) : (
          <>
          <Home title={
            <>
              Congrats, {" "}
              <span className='text-orange-500 text-2xl'>{ticketData.name}</span>! 
              {" "}Your Ticket is ready
            </>
          } paragragh={
              <>
                We've emailed your ticket to <span className='text-orange-300'>{ticketData.email}</span> {" "}
                and will send updates in the run up to the event.

            
              </>}/>
          <Ticket data={ticketData}/>
          </>
          
        )
      }

      <footer className='flex justify-center mt-20'>
        &copy; Developed by<span className='px-2 text-md font-bold text-gray-500'>hujjarh</span> {new Date().getFullYear()}
      </footer>
      
      </div>
    </div>
  )
}

export default App
