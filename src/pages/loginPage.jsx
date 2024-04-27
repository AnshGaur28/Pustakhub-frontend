import { useState } from 'react';
import {useModal} from '../context/Context.jsx'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export default function LandingPage(){
    const {closeLoginModal} = useModal();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // console.log(formData);
            const response =  await axios.post('http://localhost:80/auth/login', {email , password , role ,});
            console.log(response)
            sessionStorage.setItem('token' , response.data.jwt);
            // setTimeout(()=>{
            //     sessionStorage.removeItem('token');
            //     window.location.reload();
            // } , 1000*3600)
            closeLoginModal();
            navigate('/');
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };
    return (
        <div className="z-50 fixed top-0 flex items-center justify-center backdrop-filter backdrop-blur-lg  w-full h-full">
            <div className="w-1/4 h-2/3 rounded-lg flex items-center justify-center bg-white ">
                <button onClick={closeLoginModal} className="absolute top-0 right-0 m-4 text-xl">×</button>
                <div className='flex justify-start items-center w-full flex-col'>
                    <h2 className="text-3xl font-bold leading-none m-2">Sign In</h2>
                    <form onSubmit={handleSubmit} className=' flex flex-col justify-center items-center w-full mt-5 px-10'>

                        <input type='email' onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder='Email' className='email p-2 my-2 bg-gray-100 w-full'/>

                        <input type='password'  onChange={(e)=>{setPassword(e.target.value)}} value={password} placeholder='password' className='password p-2 my-2 bg-gray-100 w-full'/>

                        <input type='text' onChange={(e)=>{setRole(e.target.value)}} value={role} placeholder='role' className='role p-2 my-2 bg-gray-100 w-full'/>

                        <button className='text-sm text-gray-600 my-5'>forgot your password?</button>

                        <button type='submit' className='rounded-full btn-lg bg-red-600 p-3 w-[200px]'>Sign In</button>
                    </form>

                </div>
                
            </div>
        </div>
    )
}