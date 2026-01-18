import React from 'react'
import logo from '/assets/images/logo-full.svg'
import Form from '../components/Form'


const Home = ({ title, paragragh }) => {
  return (
    <div className=' flex-auto justify-center align-block'>
        <section className='pt-10 bg-[url(/assets/images/pattern-squiggly-line-top.svg)] bg-contain bg-no-repeat bg-right' >
            <div className='flex justify-center gap-2'>
                <img src={logo} alt="logo" className=' object-contain' />
                
            </div>
        </section>
       
        <section className='mt-10'>
             <div>
            <h2 className='text-neutral-0 text-center tracking-[.15em] font-[1000]'>{title}</h2>
            <p className='text-neutral-500 text-center'>{paragragh}</p>
        </div>

        </section>


        <section className='text-neural-500'>
        
        </section>
     


    </div>
  )
}

export default Home
