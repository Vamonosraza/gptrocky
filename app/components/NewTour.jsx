'use client';
import React from 'react'
import TourInfo from './TourInfo'
const handleSubmit = (e) =>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const destination = Object.fromEntries(formData.entries());
    console.log(destination)
}

const NewTour = () => {
  return (
    <>
    <form onSubmit={handleSubmit} className='max-w-2sl'>
        <h2 className='mb-4'>Select your dream destination</h2>
        <div className='join w-full'>
            <input
                type='text'
                placeholder='City'
                className='input input-border join-item w-full'
                name='city'
                required
                />
            <input
                type='text'
                placeholder='Country'
                className='input input-border join-item w-full'
                name='country'
                required
                />
                <button className='btn btn-primary join-item' type='submit'>Generate Tour</button>
        </div>
    </form>
    <div className="mt-16">
        <TourInfo />
    </div>
    </>
  )
}

export default NewTour