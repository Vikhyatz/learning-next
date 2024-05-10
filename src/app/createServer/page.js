import Link from 'next/link'
import Script from 'next/script'

export default function page() {
    return(
        <div className='w-full h-screen bg-[#232428] flex justify-center items-center overflow-hidden flex-col'>
            <Script src='https://kit.fontawesome.com/60734bdbf3.js' />
            <Link href="/directMessage" className='group absolute top-[15px] left-[15px]'><i className="group-hover:bg-[#3c3e44] fa-solid fa-arrow-left text-white text-[26px] p-[10px] rounded-[10px] duration-[0.2s] "></i></Link>

            <h1 className="text-[#f2f3f5] text-4xl font-black">Vikhyatz, Create Your Server</h1>
            <p className="text-[#b5bac1] mt-[15px] w-[450px] text-center">Give your new server a personality with new name. You can never change it later</p>

            <form action="/createChannel" method="post" className='w-[70%] flex flex-col items-center text-left gap-[10px] mt-[30px]'>
                <p className="text-[#B5BAC1] font-semibold scale-y-0.93 w-[90%]">SERVER NAME</p>
                <input className="h-[20px] w-[90%] outline-0 border-0 bg-[#1e1f22] rounded-[5px] p-[20px] text-white text-[16px]" name="channelName" type="text" placeholder="# Your new server's name" />
                <p className="text-[#949ba4] text-[14px]">By creating a server, you agree to Discord clone&apos;s <a href="/communityGuide" className='text-[#008afc]'>Community Guidelines</a></p>
                <button className="p-[10px] bg-[#5865F2] text-[#ffff] outline-0 border-0 rounded-[4px] mt-[12px] duration-[0.2s] cursor-pointer disabled:bg-[#414891] disabled:text-[grey] disabled:cursor-not-allowed" disabled type="submit">Create Server</button>
            </form>
        </div>
    )
}