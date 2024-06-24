import React from 'react';
import Link from 'next/link';

const Login = () => {
  return (
    <main className='w-full'>
      <section className='bg-semi-dark-blue text-white rounded-[20px] p-6 min-w-[327px] max-w-[400px] w-auto'>
        <h1 className='heading-l mb-10'>Login</h1>
        <form
          className='flex flex-col'
          noValidate
        >
          <label
            htmlFor='email'
            className='sr-only'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            required
            className='bg-transparent mb-6 pl-4 pb-[18px] border-b border-b-greyish-blue caret-red cursor-pointer body-m focus:border-b-white focus:outline-none'
            placeholder='Email address'
          />
          <label
            htmlFor='password'
            className='sr-only'
          >
            Password
          </label>
          <input
            type='password'
            id='password'
            required
            className='bg-transparent mb-10 pl-4 pb-[18px] border-b border-b-greyish-blue caret-red cursor-pointer body-m focus:border-b-white focus:outline-none'
            placeholder='Password'
          />
          <button
            className='bg-red py-[15px] rounded-md body-m focus:bg-white focus:text-black hover:bg-white hover:text-black'
            type='submit'
          >
            Login to your account
          </button>
        </form>
        <p className='text-center body-m mt-6 '>
          Don’t have an account?{' '}
          <Link
            className='text-red'
            href='signup'
          >
            Signup
          </Link>
        </p>
      </section>
    </main>
  );
};

export default Login;
