import TourInfo from '@/app/components/TourInfo'
import { getSingleTour } from '@/utils/action'
import React from 'react'
import Link from 'next/link'
import { redirect} from 'next/navigation'

const SingleTOurPage = async ({params}) => {
    const tour = await getSingleTour(params.id)

    if(!tour){
        redirect('/tours')
    }
  return (
    <div>
        <Link href='/tours' className='btn btn-secondary mb-12'>Back to tours</Link>
        <TourInfo tour={tour} />
    </div>
  )
}

export default SingleTOurPage