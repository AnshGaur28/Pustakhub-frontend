import {useModal} from '../context/Context.jsx'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form'
// mobile , username , email , password , role
export default function RegisterPage(){
    const {closeRegisterModal , openCreateProfileModal} = useModal();
    const {register  , formState : {errors} , handleSubmit} = useForm();
    const navigate = useNavigate();
    const handleFormSubmit = async (e) => {
        // e.preventDefault();
        const {username , email , mobile , role , password } = e ;
        try {
            const response = await axios.post('http://localhost:80/auth/register', {username , email , mobile , role , password } );
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
                    <form onSubmit={handleSubmit(handleFormSubmit)} className=' flex flex-col justify-center items-center w-full mt-5 px-10'>

                        <input  type='email' {...register("email"  , {required : true , type : 'email' , pattern: {value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ , message: "Email is not valid."}})}  placeholder='Email' className='email p-2 my-2 bg-gray-100 w-full'/>

                        {errors.email?.type=== 'required' &&  (<p  className="errorMsg text-red-600 text-sm">Password is required.</p>)}
                        {errors.email?.type=== 'pattern' &&  (<p className="errorMsg text-red-600 text-sm">Enter a valid email.</p>)}

                        <input  type='password' {...register("password" , {required : "Password is required" , type : 'password', 
                        validate : {
                            checkLength : (value) => (value.length >=10 && value.length <= 20),
                            matchPattern: (value) =>
                                /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(value)
                        } 
                        })}  placeholder='password' className='password p-2 my-2 bg-gray-100 w-full'/>

                        {errors.password?.type === "required" && (
                            <p className="errorMsg text-red-600 text-sm">Password is required.</p>
                        )}
                        {errors.password?.type === "checkLength" && (
                            <p className="errorMsg text-red-600 text-sm">
                                Password should be at-least 6 characters.
                            </p>
                        )}
                        {errors.password?.type === "matchPattern" && (
                            <p className="errorMsg text-red-600 text-sm">
                                Password should contain at least one uppercase letter, lowercase
                        letter, digit, and special symbol.
                            </p>
                        )}


                        <input  type='string' {...register("role" , {required : true, maxLength : 20 , minLength : 3  })}  placeholder='role' className='role p-2 my-2 bg-gray-100 w-full'/>

                        {errors.role?.type=== 'required' &&  (<p  className="errorMsg text-red-600 text-sm">Role is required.</p>)}
                        {(errors.role?.type=== 'maxLength' || errors.role?.type=== 'minLength') &&  (<p className="errorMsg text-red-600 text-sm">Enter a valid role</p>)}

                        <input type='string' {...register("mobile" , {required : true , maxLength : 10 , minLength : 10 , type : 'Number' })}  placeholder='mobile' className='role p-2 my-2 bg-gray-100 w-full'/>

                        {errors.mobile?.type=== 'required' &&  (<p  className="errorMsg text-red-600 text-sm">mobile is required.</p>)}
                        {(errors.mobile?.type=== 'maxLength' || errors.mobile?.type=== 'minLength') &&  (<p className="errorMsg text-red-600 text-sm">Enter a valid mobile</p>)}

                        

                        <input  type='string' {...register("username" , {required : true , minLength : 4 , maxLength : 20})}  placeholder='username' className='role p-2 my-2 bg-gray-100 w-full'/>

                        {errors.username?.type=== 'required' &&  (<p  className="errorMsg text-red-600 text-sm">username is required.</p>)}
                        {(errors.username?.type=== 'maxLength' || errors.username?.type=== 'minLength') &&  (<p className="errorMsg text-red-600 text-sm">Enter a valid username</p>)}

                        <button type='submit' className='rounded-full btn-lg bg-red-600 p-3 w-[200px]'>Sign Up</button>
                    </form>

                </div>
                
            </div>
        </div>
    )
}