import { useEffect, useState } from "react";
import axios from "axios";
import Footer from '../components/footer.jsx'
export default function Profile() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const getProfile = async () => {
      const jwt = sessionStorage.getItem("token");
      const response = await axios.get(`http://localhost:80/api/getUser`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      const user = response.data.user;
      setUser(user);
      console.log(user);
      // const userProfile = await axios.get(`http://localhost:80/profile/${user._id}`);
    };
    getProfile();
  }, []);
  return (
    <div className="min-h-screen">
      <div className="header flex flex-row justify-center items-center  text-white bg-[#A79277] w-full items-start p-3 font-semibold text-lg ">
        <div className="ml-5 flex items-center w-1/2 space-x-20 ">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search"
              className="w-[300px] p-2 border-gray-400 rounded-lg border-2"
            />
          </div>
        </div>
        <div className="mr-5 flex justify-end items-center w-1/2 space-x-20 ">
          <div className=" p-3 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
              />
            </svg>
          </div>

          <div className=" p-3 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>

          <div className=" p-3 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex h-full bg-[#EAD8C0] border-2 border-black">
        <div className="w-1/2  items-start flex  ">
          <div className="flex flex-col items-center justify-start h-full w-1/3 border-2 border-x-black  p-2">
            <div className=" flex flex-col justify-start rounded-lg w-full bg-white  my-10  bg-[#EAD8C0] ">
              <div className="flex flex-row justify-start items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <h1 className="px-2 mx-2 font-bold  text-xl">Location</h1>
              </div>

              <div className="mx-2 p-2 text-md text-gray-500 font-semibold">
                <div>1439 , Berkley Street</div>
                <div>Brooklyn Central</div>
                <div>NY</div>
              </div>
            </div>
            <div className=" flex flex-col justify-start  rounded-lg w-full bg-white  my-10 bg-[#EAD8C0]  ">
              <h1 className="px-2 mx-2 font-bold text-xl">Connect</h1>
              <div className="mx-2 p-2 text-md font-semibold text-md text-gray-500 font-semibold">
                <div className="flex flex-row justify-start items-center">
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                  <h1 className="px-2 mx-2 font-semibold text-md">Instagram</h1>
                </div>
                <div className="flex flex-row justify-start items-center">
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                  <h1 className="px-2 mx-2 font-semibold text-md">Github</h1>
                </div>

                <div className="flex flex-row justify-start items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>

                  <h1 className="px-2 mx-2 font-semibold text-md">Linkedin</h1>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex justify-center items-center  w-2/3 p-3 ">
            <div className="flex flex-col bg-white justify-center items-center w-full h-full rounded-xl ">
              <div className="h-[250px] object-cover object-center overflow-hidden rounded-t-lg">
                <img src="\src\assets\ian-dooley-DuBNA1QMpPA-unsplash.jpg" />
              </div>
              <h1 className="text-4xl  font-bold ">{user.username} Gaur</h1>
              <div className="text-gray-600  font-semibold p-5">
                Email : {user.email}
              </div>
              <div className="text-gray-600 flex flex-row  items-center px-5 justify-between font-semibold">
                <div className="text-gray-600  font-semibold p-5">
                  Mobile : {user.mobile}{" "}
                </div>
                <div className="border-2 border-gray-600 h-10"></div>
                <div className="text-gray-600  font-semibold p-5">
                  Role : {user.role}{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col m-4 p-5  rounded-lg  overflow-y-auto">
          <div className="w-full flex flex-row ">
            <div className="w-1/2 flex text-3xl justify-start m-2  font-bold">
              About Me
            </div>
            <div className="w-1/2 flex justify-end m-2  font-semibold ">
              <button className="bg-[#58A399] text-white p-3 rounded">
                Edit portfolio{" "}
              </button>
            </div>
          </div>
          <div className=" m-2 flex justify-start p-3 items-center border-2 h-[300px]  bg-[#F8F6E3] rounded-xl">
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
