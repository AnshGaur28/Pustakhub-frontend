import bookImage from '../assets/ugur-akdemir-XT-o5O458as-unsplash.jpg'
export default function HeroSection(){
    return (
        <div className="hero-section flex bg-[#F7E9D6]">
            <div className="flex flex-row w-1/2 justify-center">
                <div className="py-40 px-20 flex-col justify-center items-center">
                    <h1 className="text-6xl font-semibold leading-none tracking-tight text-gray-900">Step Into the World</h1>
                    <h1 className="mt-2 text-6xl font-semibold leading-none tracking-tight text-gray-900 ">of learning.</h1>
                    <h2 className="mt-5 text-xl font-bold text-gray-500">Join us into the journey towards affordable learning</h2>
                    <div className="flex justify-start w-full mt-2"><button className=" w-2/5 bg-gray-800 justify-center hover:bg-gray-600 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 ">Sign up it's free</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row w-1/2 justify-center">
                <div className="py-20 px-20 flex-col justify-center items-center">
                    <img src={bookImage}/>
                </div>
            </div>
        </div>
    )
}