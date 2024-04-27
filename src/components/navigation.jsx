import LoginPage from '../pages/loginPage.jsx'
import RegisterPage from "../pages/registerPage";
import {useModal} from '../context/Context.jsx'
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from 'react-router-dom';
import CreateProfile from '../pages/createProfile.jsx';
import Dropdown from "./dropdowns.jsx";
export default function Navigation(){
    const token = sessionStorage.getItem('token');
   const {openLoginModal , showLoginModal , showRegisterModal , openRegisterModal , showProfileModal} = useModal() ;
   const navigate = useNavigate();
   const handleProfile = async ()=>{
        navigate('/profile');
   }
    return (
        <div className=" flex flex-row font-bold my-3" >
            <div className="flex w-3/6 items-center justify-between pt-1 mb-3">
                <Link href='/'><h1 className="ml-2  mt-2 text-3xl text-[#E77379]">PustakHub</h1></Link>
                <button className="mt-2 text-xl"><a href='#aboutus'>About Us</a></button>
                <button className="mt-2 text-xl"><a href='#offerings'>Offerings</a></button>
                <button><a className="mt-2 text-xl">MarketPlace</a></button>
            </div>

            {/* spacing div */}
            <div className="w-1/3"></div>

            <div className="justify-end mr-5 space-x-10 flex w-1/3 items-center pt-1 mb-3">
                {!token && <button onClick={()=>{
                    openLoginModal();
                }} className="mt-2 text-xl">
                    Login
                </button>}
                {!token && <button onClick={()=>{
                    openRegisterModal();
                }} className="mt-2 text-xl">Register</button>}

                {token &&  <Dropdown/>}
            </div>

            {showLoginModal && <LoginPage/>}
            {showRegisterModal && <RegisterPage/>}
            {showProfileModal && token && <CreateProfile/>}
            
        </div>
    )
}