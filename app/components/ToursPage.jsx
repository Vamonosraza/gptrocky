'use client'

import { useQuery } from '@tanstack/react-query'
import { getAllTours } from '@/utils/action'
import React from 'react'
import ToursList from './ToursList'

const ToursPage = () => {
    const [searchValue, setSearchValue] = React.useState('')
    const { data, isPending } = useQuery({
    queryKey:['tours', searchValue],
    queryFn: ()=> getAllTours(searchValue),
    })
    return (
        <>
        <form className='max-w-lg mb-12'>
            <div className='join w-full'>
                <input type='text' placeholder='City or Country' className='input input-border join-item w-full' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} required />
                <button className='btn btn-primary join-item' type='button' disabled={isPending} onClick={()=> setSearchValue('')}>
                    {isPending? <span className='loading loading-lg'></span> : 'Reset'}
                </button>
                </div>
        </form>
        {isPending? <span className='loading loading-lg'></span> : <ToursList data = {data  }/>}
        </>
    )
}

export default ToursPage