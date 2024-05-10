import NavSubTabs from '@/app/components/navSubTabs'
import Link from 'next/link'
import Image from 'next/image'

export default function ServerSideBar () {
    return (
        <div id="serverNav" className='w-[240px] h-screen bg-[#2B2D31] flex items-center flex-col relative'>

            <p className='text-[18px] text-white mt-[15px]'>v&apos;s server</p>

            <Link href="/addFriends" className="w-[224px] h-[42px] flex items-center text-[#949ba4] rounded-[5px] mx-[2px] duration-[0.1s] mt-[10px] hover:text-white hover:bg-[#3f4248]">
                <i className="fa-solid fa-user-group ml-[10px]"></i>
                <p className='ml-[15px]'>Friends</p>
            </Link>

            <p className="w-[200px] text-[#949ba4] text-[13px] font-bold px-[10px] pt-[20px] pb-[10px] cursor-default mb-[10px] border-b-[1.5px] border-b-[#131313] border-b-[solid] hover:text-white">TEXT CHANNELS</p>

            <NavSubTabs
            pfp='https://cdn.discordapp.com/avatars/724603106700296302/4d6cde241aa4504856dad566b2ff92a5.webp?size=80'
            name='# general'
            active={false}
            />
            <NavSubTabs
            pfp='https://cdn.discordapp.com/avatars/724603106700296302/4d6cde241aa4504856dad566b2ff92a5.webp?size=80'
            name='# another one'
            active={true}
            />

            <div className="w-full h-[52px] bg-[#232428] absolute bottom-0  flex justify-between items-center text-[#f2f3f5]">
                <div className="flex items-center duration-[0.2s] p-[5px] rounded-[5px] ml-[10px] w-[150px] hover:bg-[#3c3e44]">
                    <div className="w-[32px] h-[32px] rounded-[50%] overflow-hidden ml-[0px]">
                        <Image
                        className='w-[32px]'
                        src="https://cdn.discordapp.com/avatars/724603106700296302/4d6cde241aa4504856dad566b2ff92a5.webp?size=80"
                        alt="pfp"
                        width={100}
                        height={100}
                        />
                    </div>
                    <p className='ml-[10px]'>Vikhyatz</p>
                </div>
                <i className="fa-solid fa-gear mr-[20px] p-[12px] duration-[0.2s] rounded-[5px] hover:bg-[#3c3e44]"></i>
            </div>
        </div>
    )
}