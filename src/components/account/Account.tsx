import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { getUserEmail } from '@/lib/utils/tokens'

const Account = () => {
    const email = getUserEmail();
    return (
        <div className='flex flex-col justify-center'>
            <h1 className='text-center lg:text-2xl'>Account</h1>
            <div className='p-5'>
                <h1 className='p-2'>Email Address</h1>
                <Input className='p-2' placeholder={email} />
                <Button className='my-2'>Save changes</Button>
            </div>

            <div className='p-5'>
                <h1 className='p-2'>Password</h1>
                <Input className='p-2' />
                <Button className='my-2'>Save changes</Button>
            </div>
            <div className='p-5'>
                <h1 className='p-2'>Profile photo</h1>
                <Input type='file' />
                <Button className='my-2'>Save changes</Button>
            </div>
        </div>
    )
}

export default Account