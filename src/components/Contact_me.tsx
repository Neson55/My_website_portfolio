import React from 'react'
import { SubmitHandler,useForm,} from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod"

const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
})

type MyForm = z.infer<typeof schema>

function Contact_me () {

   const {
    register, 
    handleSubmit, 
    formState: {errors},
    reset
    }   
    = useForm<MyForm> ({
   resolver : zodResolver(schema) }
)


const onSubmit: SubmitHandler<MyForm> = async (data) => {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve({name: data.name, email: data.email});
        }, 500);
      });
      console.log(data)
      reset()
      
}

        return(
            <div className="h-4/5 flex justify-center items-center bg-green-100 ">
                <form   onSubmit={handleSubmit(onSubmit)}>
                    <section className='gap-4 flex flex-col' >
                    <input className='border-2 border-gray-700 rounded'
                    type="text"
                    aria-invalid={errors.name ? "true" : "false"}
                     {...register('name')}
                        placeholder="name"  
                        />
                    {errors.name && <p role="alert">{errors.name.message}</p>}
                    <input type="email" className='border-2 border-gray-700 rounded'
                            aria-invalid={errors.email ? "true" : "false"}
                    {...register('email')}
                    placeholder='email' />
                    {errors.email && <span role="alert">{errors.email.message}</span>}
                    <button className='px-12 py-3 text-sm font-medium rounded shadow bg-gray-50 active:bg-gray-500 active:text-slate-50 focus:outline-none focus:ring cursor-pointer hover:bg-gray-100'>Send</button>
                    </section>
               </form>
            </div>
        );
}

export default Contact_me