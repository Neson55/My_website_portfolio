import React from 'react'
import {SubmitErrorHandler, SubmitHandler,useForm,} from 'react-hook-form'

interface MyForm {
    name: string;
    age: number;
}
function Contact_me () {

   const {register, handleSubmit, clearErrors ,formState: {errors}}= useForm<MyForm> ({defaultValues:{
       age: 18
   }
})


const submit: SubmitHandler<MyForm> = data => {
    console.log(data)
}
const error: SubmitErrorHandler<MyForm> = data => {
    console.log(data)
}

        return(
            <div>
                <form  className='gap-4 flex flex-col' onSubmit={handleSubmit(submit, error)}>
                    <input type="text" {...register('name', {required: true})}  aria-invalid={errors.name ? "true" : "false"}/>
                    <input type="number" {...register('age')} />
                    <button className='bg-blue-500 hover:bg-blue-400 text-white  py-0.5 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>Send</button>
                    <button  onClick={() => clearErrors()}className='bg-blue-500 hover:bg-blue-400 text-white  py-0.5 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>Clear errors</button>
                                </form>
            </div>
        );
}

export default Contact_me