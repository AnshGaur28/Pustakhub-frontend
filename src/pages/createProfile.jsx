import { useState } from 'react';
import {useModal} from '../context/Context.jsx'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export default function CreateProfile(){
    const {closeCreateProfileModal} = useModal();
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [locality, setLocality] = useState('');
    const [pincode, setPincode] = useState('');
    const [country, setCountry] = useState('');
    const navigate = useNavigate();
    const [wishlist, setWishlist] = useState([]);
    const [account, setAccounts] = useState('');
    const [upi, setUPI] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await axios.get('http://localhost:80/api/getUser' , {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        });
        console.log(user);
        console.log({city , state , locality , pincode , country , wishlist, user , account, upi})
        try {
            const response = await axios.post('http://localhost:80/profile/create', {city , state , locality , pincode , country , wishlist, user , account, upi});
            console.log(response);
            closeCreateProfileModal();
            navigate('/')
        } catch (error) {
            console.error('Error registering user:', error.message);
        }
    };
    return (
        <div className="z-50 fixed top-0 flex items-center justify-center backdrop-filter backdrop-blur-lg  w-full h-full">
            <div className="w-1/4 h-4/5 overflow-hidden rounded-lg flex items-center justify-center bg-white ">
                <button onClick={closeCreateProfileModal} className="absolute top-0 right-0 m-4 text-xl">×</button>
                <div className='flex justify-start items-center w-full flex-col'>
                    <h2 className="text-3xl font-bold leading-none m-2">Create Profile</h2>
                    <form onSubmit={handleSubmit} className=' flex flex-col justify-center items-center w-full mt-5 px-10'>
                        <input onChange={(e)=>setLocality(e.target.value)} type='text' value={locality} placeholder='locality' className='email p-2 my-2 bg-gray-100 w-full'/>
                        <input onChange={(e)=>setCity(e.target.value)} type='text' value={city} placeholder='city' className='email p-2 my-2 bg-gray-100 w-full'/>
                        <input onChange={(e)=>setState(e.target.value)} type='text' value={state} placeholder='state' className='email p-2 my-2 bg-gray-100 w-full'/>
                        <input onChange={(e)=>setPincode(e.target.value)} type='number' value={pincode} placeholder='pincode' className='email p-2 my-2 bg-gray-100 w-full'/>
                        <input onChange={(e)=>setCountry(e.target.value)} type='text' value={country} placeholder='country' className='email p-2 my-2 bg-gray-100 w-full'/>
                        <input onChange={(e)=>setAccounts(e.target.value)} type='text' value={account} placeholder='Account No.' className='role p-2 my-2 bg-gray-100 w-full'/>
                        <input onChange={(e)=>setUPI(e.target.value)} type='text' value={upi} placeholder='UPI' className='role p-2 my-2 bg-gray-100 w-full'/>
                        <button type='submit' className='rounded-full btn-lg bg-red-600 p-3 w-[200px]'>Create</button>
                    </form>

                </div>
                
            </div>
        </div>
    )
}