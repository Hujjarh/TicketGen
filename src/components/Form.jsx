import React, { useState } from 'react'

const Form = ({ setTicketData, setSubmitted }) => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        username: '',
    })

    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({})

    const validate = () => {
        const newErrors = {}

        if(!form.name.trim()) newErrors.name = "Name is required"
        if(!form.email.trim()) newErrors.email = "Email is required"
        if(!form.username.trim()) newErrors.username = "Username is required"

        return newErrors;
    }

    const handleForm = (e) => {
        setForm({...form, [e.target.name]: e.target.value})

        if(errors[e.target.name]){
            setErrors({...errors, [e.target.name]: ""})
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        const validationError = validate()

        if(Object.keys(validationError).length !== 0){
            setErrors(validationError)
            return;
        }
        setErrors({})
        setLoading(true)

        setTicketData(form)
        setTimeout(()=>{
            setSubmitted(true)
            setLoading(false)


        }, 3000)
        // setSubmitted(true)
       
    }



  return (
    <div className='mt-20 flex justify-center'>
      <form onSubmit={handleSubmit} className='text-center '>
        <div className='flex flex-col'>
            <label htmlFor="name" className='mb-2 text-sm font-medium '>
                Full Name
            </label>
            <input type="text" name='name' value={form.name} onChange={handleForm} id='name' placeholder='John Doe' className='rounded-md border border-gray-300 px-4 py-2 bg-black  focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-5' />
            {
                errors.name && <p className='text-red-500 text-sm mb-3'>{errors.name}</p>
            }

        </div>

        <div className='flex flex-col'>
            <label htmlFor="email" className='mb-2 text-sm font-medium'>
                Email Address
            </label>
            <input type="email" name='email' value={form.email} onChange={handleForm} id='email' placeholder='John Doe@email.com' className='rounded-md border border-gray-300 px-4 py-2 bg-black focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-5' />
             {
                errors.email && <p className='text-red-500 text-sm mb-3'>{errors.email}</p>
            }
        </div>

        <div className='flex flex-col'>
            <label htmlFor="github" className='mb-2 text-sm font-medium'>
                GitHub Username
            </label>
            <input type="text" name='username' value={form.username}  onChange={handleForm} id='github' className='rounded-md border border-gray-300 px-4 py-2 bg-black focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500' />
             {
                errors.username && <p className='text-red-500 text-sm mb-3'>{errors.username}</p>
            }
        </div>


        <div>
            <button type='submit' disabled={loading} className='mt-5 text-sm font-medium rounded-lg border border-orange-500 bg-orange-500 text-neutral-300 px-3 py-2 w-full focus:border-orange'>
                {loading ? "Generating ticket..." : "Generate My Ticket"}
            </button>
        </div>
      </form>
    </div>
  )
}

export default Form
