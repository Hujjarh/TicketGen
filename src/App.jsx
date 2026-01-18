import React, { useState } from 'react'
import Home from './pages/Home'
import Form from './components/Form'
import Ticket from './components/Ticket'

const App = () => {
  const [ticketData, setTicketData] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  return (
    <div className=' pt-10 bg-black text-white h-screen bg-[url(/assets/images/background-desktop.png)] bg-cover bg-center'>
      <div className='bg-[url(/assets/images/pattern-squiggly-line-bottom-desktop.svg)] bg-contain bg-no-repeat bg-size-[auto_200px] bg-bottom-left '>
      
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
      
      </div>
    </div>
  )
}

export default App
