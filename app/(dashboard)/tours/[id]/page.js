import TourInfo from '@/app/components/TourInfo'
import { getSingleTour } from '@/utils/action'
import React from 'react'
import Link from 'next/link'
import { redirect} from 'next/navigation'
import axios from 'axios'
const url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_API_KEY}&query=`;
import Image from 'next/image'

const SingleTOurPage = async ({params}) => {
    const tour = await getSingleTour(params.id)

    if(!tour){
        redirect('/tours')
    }
    const {data} = await axios.get(`${url}${tour.city}`);
    const tourImage = data?.results[0]?.urls?.raw
    return (
    <div>
        <Link href='/tours' className='btn btn-secondary mb-12'>Back to tours</Link>
        {tourImage? (
            <div>
                <Image
                    src={tourImage}
                    alt={tour.city}
                    layout='responsive'
                    width={1000}
                    height={600}
                    className='rounded-xl'
                    />
            </div>
        ): null}
        <TourInfo tour={tour} />
    </div>
    )
}

export default SingleTOurPage