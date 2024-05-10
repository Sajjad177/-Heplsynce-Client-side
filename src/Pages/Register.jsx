import { Link } from "react-router-dom"

const Register = () => {
    return (
      <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-20'>
        <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
          <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
            <p className='mt-3 text-xl text-center text-gray-600 font-bold lg:text-3xl'>
              Create your account
            </p>
            <form>
              <div className='mt-4'>
                <label
                  className='block mb-2 text-sm font-medium text-gray-600 '
                  htmlFor='name'
                >
                  Username
                </label>
                <input
                  id='name'
                  autoComplete='name'
                  name='name'
                  className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                  type='text'
                />
              </div>
              <div className='mt-4'>
                <label
                  className='block mb-2 text-sm font-medium text-gray-600 '
                  htmlFor='photo'
                >
                  Photo URL
                </label>
                <input
                  id='photo'
                  autoComplete='photo'
                  name='photo'
                  className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                  type='text'
                />
              </div>
              <div className='mt-4'>
                <label
                  className='block mb-2 text-sm font-medium text-gray-600 '
                  htmlFor='LoggingEmailAddress'
                >
                  Email Address
                </label>
                <input
                  id='LoggingEmailAddress'
                  autoComplete='email'
                  name='email'
                  className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                  type='email'
                />
              </div>
  
              <div className='mt-4'>
                <div className='flex justify-between'>
                  <label
                    className='block mb-2 text-sm font-medium text-gray-600 '
                    htmlFor='loggingPassword'
                  >
                    Password
                  </label>
                </div>
  
                <input
                  id='loggingPassword'
                  autoComplete='current-password'
                  name='password'
                  className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                  type='password'
                />
              </div>
              <div className='mt-6'>
                <button
                  type='submit'
                  className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#FF0080] rounded-lg hover:bg-[#FF0080]/70 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                >
                  Sign Up
                </button>
              </div>
            </form>
            
            <div className='flex items-center justify-between mt-4'>
              <span className='w-1/5 border-b  md:w-1/4'></span>
              <Link
                to='/login'
                className='text-xs uppercase  hover:underline text-red-500'
              >
                <span className="text-black">
                Have an account !    
                </span> sign in
              </Link>
              <span className='w-1/5 border-b  md:w-1/4'></span>
            </div>

          </div>
          <div
            className='hidden bg-cover bg-center lg:block lg:w-1/2'
            style={{
              backgroundImage: `url('https://i.ibb.co/S5954gK/register-2.jpg')`,
            }}
          ></div>
        </div>
      </div>
    )
  }
  
  export default Register