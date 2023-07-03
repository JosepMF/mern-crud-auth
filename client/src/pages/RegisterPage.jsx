import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/authContext';
import { useNavigate, useNavigation } from 'react-router-dom';

export default function RegisterPage() {
    const { singup, isAuthenticated } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate("/tasks")
        console.log(isAuthenticated);
    }, [isAuthenticated])

    const { register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = handleSubmit(async (values) => {
        singup(values);
    });

    return (
        <div className="bg-zinc-800 max-w-md p-10 rounded-md">
            <form onSubmit={onSubmit}>
                <input type="text" {...register("username", { required: true })}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    placeholder='username'
                />
                {errors.username && <p className='text-red-500 font-light'>The username is required</p>}
                <input type="email" {...register("email", { required: true })}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    placeholder='email'
                />
                {errors.email && <p className='text-red-500 font-light'>The email is required</p>}
                <input type="password" {...register("password", { required: true })}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    placeholder='password'
                />
                {errors.password && <p className='text-red-500 font-light'>The password is required</p>}
                <button type='submit'>
                    Register
                </button>
            </form>
        </div >
    )
}
