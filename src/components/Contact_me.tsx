import React, { useRef, useState } from 'react'
import { IoIosSend } from 'react-icons/io'
import { SubmitHandler,useForm,} from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod"
import emailjs from '@emailjs/browser';

const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    message: z.string()
})

type MyForm = z.infer<typeof schema>



function Contact_me () {
const form = useRef<any>()

   const {
    register, 
    handleSubmit, 
    formState: {errors},
    reset
    }   
    = useForm<MyForm> ({
   resolver : zodResolver(schema) }
)

const [submitted, setSubmitted] = useState(false)

const onSubmit: SubmitHandler<MyForm> =  () => {
    emailjs
      .sendForm('service_rj7xzr9', 'template_cugi17x', form.current, {
        publicKey: 'ZXeiXnE-UtEFnmCVz',
      })
      .then(
        () => {
          setSubmitted(true)
          reset()
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      
}

        return(
            <div className="h-4/5 flex justify-center items-center p-5 pb-20 ">
                <div className="flex w-1/2 h-1/2  justify-center items-center">
                    <div className='pl-10'>
                    <h1 className='text-3xl flex bo'>
                    Do you have any questions ?
                    </h1>
                    <br/>
                    <p>Write me your message. I answer your questions<br/>(within 24 hours).</p>
                  
                    <p>Additional methods to conact me: </p>
                    <br/>
                                              <a
                                className='text-blue-600 hover:underline'
                                href='https://www.linkedin.com/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >LinkedIn</a><br/> <a
                            className='text-blue-600 hover:underline'
                            href='mailto:1385463@mail.ru'
                            target='_blank'
                            rel='noopener noreferrer'
                        >Email</a>       
                    
                 </div>
                 </div>
                <div className=' w-1/2 h-1/2 flex '>
                <form   ref={form} onSubmit={handleSubmit(onSubmit)}>
                    <section className='gap-4 flex flex-col'>
                        <div className='flex gap-3 mt-10'>
                            <div className='flex flex-col'>
                                <p className='text-l'>Name:</p>
                                                    <input id='name'
                                                    type="text" className='p-1 pr-32 border border-gray-500 rounded '
                                                    aria-invalid={errors.name ? "true" : "false"}
                                                     {...register('name')}
                                placeholder="name"
                                />
                                                    {errors.name && <p className="text-red-600" role="alert">{errors.name.message}</p>}
                            </div>
                                                <div className='flex flex-col'>
                                                    <p className='text-l '>Email:</p>
                                                    <input id='email' type="email" className='p-1 pr-32 border border-gray-500 rounded'
                                                                                    aria-invalid={errors.email ? "true" : "false"}
                                                    {...register('email')}
                                                    placeholder='email' />
                                                    {errors.email && <span className="text-red-600"role="alert">{errors.email.message}</span>}
                                                </div>
                        </div>
                        <div className='flex flex-col'>
                            
                                                <p className='text-l'>Message:</p>
                                                <input className=' p-1 pb-14 border border-gray-500 rounded'
                                                type="text"
                                                id ='message'
                                                aria-invalid={errors.message ? "true" : "false"}
                                                 {...register('message')}
                            placeholder="message"
                            />
                                                {errors.message && <p className="text-red-600" role="alert">{errors.message.message}</p>}
                        </div>
                    {!submitted?(<div>
                        <button type='submit' className=' flex px-12 py-3 text-sm font-medium shadow bg-gray-50 active:bg-gray-500 active:text-slate-50  focus:ring cursor-pointer hover:bg-gray-100 rounded' >
                            Send  <IoIosSend size='20px' />
                            </button>
                    </div>): submitted ?(<p>Your message has been sent!</p>
) :( <p>Something went wrong!</p>)}
                    
                    </section>
               </form>
               </div>
            </div>
        );
}

export default Contact_me