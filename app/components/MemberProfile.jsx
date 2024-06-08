import React from 'react'
import { UserButton} from '@clerk/nextjs'
import { auth, currentUser } from '@clerk/nextjs/server'
// import { fetchOrGenerateUser } from '@/utils/action'

const MemberProfile = async () => {
    const user = await currentUser();
    const {userId } = auth();
    // await fetchOrGenerateUser(userId);
    // console.log(user);

    return (
        <div className='px-4 flex items-center gap-2'>
            <UserButton afterSignOutUrl='/' />
            <p>{user.emailAddresses[0].emailAddress}</p>
        </div>
    )
}

export default MemberProfile