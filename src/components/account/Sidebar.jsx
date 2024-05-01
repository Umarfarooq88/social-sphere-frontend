import { cn } from '@/lib/utils/utils'
import React from 'react'
import { IoGrid } from 'react-icons/io5'
import { MdOutlineManageAccounts } from 'react-icons/md'

const Sidebar = ({ className, setPage }) => {
    return (
        <div className={cn(className, ' fixed w-40 bg-stone-800 text-white dark:bg-zinc-800 dark:text-white')}>
            <h1 className='lg:text-xl text-center'>Settings</h1>
            <ul className='list-none'>
                <li onClick={() => setPage("Account")} className='flex hover:cursor-pointer justify-center px-3 py-2 items-center'>
                    <MdOutlineManageAccounts className='mr-2' size={25} />
                    <span className='text-xl'>Account</span>
                </li>
                <li onClick={() => setPage("Channels")} className='flex hover:cursor-pointer justify-center px-3 py-2 items-center'>
                    <IoGrid className='mr-2' size={25} />
                    <span className='text-xl'>Channels</span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar