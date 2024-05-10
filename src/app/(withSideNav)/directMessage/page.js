import Sidebar2 from '../../components/sidebar2'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
    return(
        <div className='w-full h-screen flex bg-[#313338] overflow-hidden'>
            <Sidebar2 />
            <h1 className='text-white text-4xl'>this is the DM page</h1>
        </div>
    )
}