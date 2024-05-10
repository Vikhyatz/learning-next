import Image from 'next/image'
import Link from 'next/link'

export default function Page(){
    return(
        <div className='w-full h-screen flex items-center flex-col bg-[#232428] overflow-hidden'>
            <Link id="backBtn" className='absolute top-[15px] left-[15px] group' href="/directMessage"><i className="fa-solid fa-arrow-left group-hover:bg-[#3c3e44] text-white text-[26px] py-[10px] px-[12px] rounded-[10px] duration-[0.2s]"></i></Link>

            <h1 className='text-white text-[48px] mt-[20px]'>Pending Friend Requests</h1>

            <div id="requests" className='w-full flex flex-col justify-center items-center mt-[20px]'>
                    <div className="h-[80px] p-[20px] rounded-[10px] my-[10px] flex items-center justify-center bg-[#3f4248] ">
                        <div className='flex items-center'>
                            <div className="w-[32px] h-[32px] rounded-[50%] overflow-hidden ml-[10px] ">
                                <Image
                                    src='https://cdn.discordapp.com/avatars/724603106700296302/4d6cde241aa4504856dad566b2ff92a5.webp?size=80'
                                    alt="pfp"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <p className='ml-[10px] text-white'>Vikhyatz</p>
                        </div>
                        <div className="ml-[30px] flex gap-[20px]">
                            <button className="px-[20px] h-[50px] outline-0 border-0 cursor-pointer text-white bg-[#008f00] " data-senderId="<%= request._id %>" id="accept">ACCEPT</button>
                            <button className="px-[20px] h-[50px] outline-0 border-0 cursor-pointer text-white bg-[red] " data-senderId="<%= request._id %>" id="decline">DECLINE</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}