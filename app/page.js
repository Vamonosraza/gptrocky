import React from 'react'
import  Link  from 'next/link'

const HomePage = () => {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-6xl font-bold text-primary'>
            RockyAI
          </h1>
          <p className='py-6 text-lg leading-loose'>
            Your Cat companion for the road
          </p>
          <Link href='/chat' className='btn btn-secondary'>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage