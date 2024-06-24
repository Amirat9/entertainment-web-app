import React from 'react';
import Link from 'next/link';

const SignUp = () => {
  return (
    <main className='mt-14 sm:mt-[72px] lg:mt-[82px]'>
      <section className='bg-semi-dark-blue text-white rounded-[20px] p-6 w-[327px] sm:w-[400px]'>
        <h1 className='heading-l mb-10'>Sign Up</h1>
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
            className='bg-transparent mb-6 pl-4 pb-[18px] border-b border-b-greyish-blue caret-red cursor-pointer body-m focus:border-b-white focus:outline-none'
            placeholder='Password'
          />
          <label
            htmlFor='password'
            className='sr-only'
          >
            Password
          </label>
          <input
            type='password'
            id='password-repeat'
            required
            className='bg-transparent mb-10 pl-4 pb-[18px] border-b border-b-greyish-blue caret-red cursor-pointer body-m focus:border-b-white focus:outline-none'
            placeholder='Repeat Password'
          />
          <button
            className='bg-red py-[15px] rounded-md body-m focus:bg-white focus:text-black hover:bg-white hover:text-black'
            type='submit'
          >
            Create an account
          </button>
        </form>
        <p className='text-center body-m mt-6 '>
          Alread have an account?{' '}
          <Link
            className='text-red'
            href='signup'
          >
            Login
          </Link>
        </p>
      </section>
    </main>
  );
};

export default SignUp;
