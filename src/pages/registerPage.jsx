import { useState } from 'react';
import {useModal} from '../context/Context.jsx'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
// mobile , username , email , password , role
export default function RegisterPage(){
    const {closeRegisterModal , openCreateProfileModal} = useModal();
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [mobile, setMobile] = useState('');
    const [username, setUsername] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // console.log(formData);
            const response = await axios.post('http://localhost:80/auth/register', {email , password , role , username , mobile});
            sessionStorage.setItem('token' , response.data.jwt);
            closeRegisterModal();
            openCreateProfileModal();
            navigate('/')
        } catch (error) {
            console.error('Error registering user:', error.message);
        }
    };
    return (
        <div className="z-50 fixed top-0 flex items-center justify-center backdrop-filter backdrop-blur-lg  w-full h-full">
            <div className="w-1/4 h-2/3 rounded-lg flex items-center justify-center bg-white ">
                <button onClick={closeRegisterModal} className="absolute top-0 right-0 m-4 text-xl">×</button>
                <div className='flex justify-start items-center w-full flex-col'>
                    <h2 className="text-3xl font-bold leading-none m-2">Sign Up</h2>
                    <form onSubmit={handleSubmit} className=' flex flex-col justify-center items-center w-full mt-5 px-10'>

                        <input onChange={(e)=>setEmail(e.target.value)} type='email' value={email} placeholder='Email' className='email p-2 my-2 bg-gray-100 w-full'/>

                        <input onChange={(e)=>setPassword(e.target.value)} type='password' value={password} placeholder='password' className='password p-2 my-2 bg-gray-100 w-full'/>

                        <input onChange={(e)=>setRole(e.target.value)} type='text' value={role} placeholder='role' className='role p-2 my-2 bg-gray-100 w-full'/>

                        <input onChange={(e)=>setMobile(e.target.value)} type='text' value={mobile} placeholder='mobile' className='role p-2 my-2 bg-gray-100 w-full'/>


                        <input onChange={(e)=>setUsername(e.target.value)} type='text' value={username} placeholder='username' className='role p-2 my-2 bg-gray-100 w-full'/>



                        <button type='submit' className='rounded-full btn-lg bg-red-600 p-3 w-[200px]'>Sign Up</button>
                    </form>

                </div>
                
            </div>
        </div>
    )
}