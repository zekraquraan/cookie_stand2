
import { useAuth } from "@/contexts/auth"
import { useState } from "react";


export default function LoginForm() {

  const { login, user, token } = useAuth()
  const [check1, setCheck1] = useState('');

  function loginhandiler(event){
    event.preventDefault();
    let a=login(event.target.username.value,event.target.password.value)
    if (a==401){
      console.log("Zekra")
      setCheck1("The user dose not found");
    }
    
  }


    return (
      <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-10 mx-auto bg-green-300 rounded-lg lg:px-8 w-900px ">
        <div className=" sm:w-full sm:max-w-sm w-900px">
          <form className="space-y-6 w-850px " action="#" method="POST" onSubmit={loginhandiler}>
            <div className='flex flex-col items-center justify-between '>
              <div className="items-center w-full p-4 ">
                <label htmlFor="username" className="block font-semibold leading-6 text-center text-gray-900 text-20px">
                  USERNAME
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder='Username'
                  autoComplete="current-username"
                  required
                  className="block w-full p-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="items-center w-full p-4 ">
                <label htmlFor="password" className="block font-semibold leading-6 text-center text-gray-900 text-20px">
                  PASSWORD
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder='Password'
                  autoComplete="current-password"
                  required
                  className="block w-full p-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="items-center w-full p-4 ">
                <button
                  type="submit"
                  className="flex items-center justify-center w-full h-full py-2 font-semibold leading-6 text-white bg-green-700 rounded-md shadow-sm text-20px hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  LOGIN
                </button>
              </div>
              <div className="items-center w-full p-4 ">
              {check1}
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }