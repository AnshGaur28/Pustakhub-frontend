/* eslint-disable react/no-unescaped-entities */
export default function Footer(){
    return (
        <div className="mt-0 items-center justify-center text-lg bg-[#F3EBE7]">
            <div className="flex flex-col items-center justify-center ">
                <h1 className=" flex flex-row  text-4xl font-extrabold leading-none m-3 text-gray-800">Connect With Us</h1>
                <h2 className=" flex flex-row  text-xl font-bold leading-none mt-3 text-gray-600">We are excited to connect with you and solve your problems.</h2>
                <h2 className=" flex flex-row  text-xl font-bold leading-none  text-gray-600">Below are our socials , it's free to connect.</h2>
            </div>

            <div className="flex flex-row  items-center">
                <div className="flex flex-col justify-start w-1/2 p-2 m-5">
                    <h1 className="text-4xl leading-none font-extrabold">Pustakhub</h1>
                    <img />
                    {/* image as logo */}
                    <h3 className="text-lg font-bold text-gray-700">Credits: <i>Ansh Gaur</i></h3>
                </div>
                <div className="flex w-1/2 flex-row justify-between text-lg font-bold items-center">
                    <div className="flex flex-col p-10 ">
                        <h2 className="text-lg font-bold">About Us</h2>
                        <div className="text-sm my-3 text-gray-500">
                            <div className="mt-3 py-1">Our Story</div>
                            <div className="mt-3 py-1">Our Mission</div>
                            <div className="mt-3 py-1">Offerings</div>
                        </div>
                    </div>

                    <div className="flex flex-col p-10 ">
                        <h2 className="text-lg font-bold">Buisness</h2>
                        <div className="text-sm my-3 text-gray-500">
                            <div className="mt-3 py-1">Collaborations</div>
                            <div className="mt-3 py-1">Expertise</div>
                            <div className="mt-3 py-1">Invest</div>
                        </div>
                    </div>

                    <div className="flex flex-col p-10 ">
                        <h2 className="text-lg font-bold">Contact</h2>
                        <div className="text-sm my-3 text-gray-500">
                            <div className="mt-3 py-1">Email</div>
                            <div className="mt-3 py-1">Helpline</div>
                            <div className="mt-3 py-1">Customer Support</div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="p-[1px]  bg-black"></div>
                
        </div>
    )
}