import React from 'react'
import ToursPage from '@/app/components/ToursPage'
import { dehydrate, HydrateBoundary, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { getAllTours } from '@/utils/action'

const AllTourspage = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey:['tours'],
    queryFn: ()=> getAllTours(),
  });
  return (
    
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ToursPage />
    </HydrationBoundary>
    
  )
}

export default AllTourspage