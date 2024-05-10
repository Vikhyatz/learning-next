import ServerSideBar from '@/app/components/serverSideBar'
import Image from 'next/image'

export default function page({ params }){
    return(
        <>
        <ServerSideBar />

        <main className='w-calc-minus-312 relative'>
            <div className="w-full h-[45px] bg-[#313338] flex items-center text-white font-semibold text-[16px] border-[1.5px] border-solid border-[#131313]">
                <p className="text-[grey] font-thin text-[26px] pl-[10px] ml-10px">#</p>
                <p className='ml-[10px]'>{params.channel}</p>
            </div>

            <div className="w-full max-h-[81%] overflow-auto absolute bottom-[75px] ">
                <div className="text-white ml-[20px] mb-[40px]">
                    <div className='w-[68px] h-[68px] text-[50px] bg-[#41434A] rounded-[50%] flex justify-center items-center mb-[10px] '>#</div>
                    <h1 className='text-[48px]'>Welcome to #{params.channel}</h1>
                    <p className='mt-[10px]'>This is the start of the #{params.channel} channel</p>
                </div>
                {/* messages are generated here */}
                <div className='flex items-center ml-[20px] py-[10px]'>
                    <div className="w-[32px] h-[32px] rounded-[50%] overflow-hidden ml-[10px]">
                        <Image
                            className=''
                            src='https://cdn.discordapp.com/avatars/724603106700296302/4d6cde241aa4504856dad566b2ff92a5.webp?size=80'
                            alt="pfp"
                            width={100}
                            height={100}
                        />
                    </div>

                    <div className="ml-[15px]">
                        <div className="flex items-baseline">
                            <p className="text-[#f2f3f5] font-semibold mb-[5px]">Vikhyatz</p>
                            <p className="text-[grey] text-[11px] ml-[10px] font-semibold">05/09/2024 23;39</p>
                        </div>
                        <div className="max-w-[900px] break-words h-fit text-[#dbdee1]">Hello Everyone</div>
                    </div>
                </div>
                {/* messages are generated here */}
            </div>

            <form className='absolute bottom-[20px] bg-[#383A40] w-[94%] h-[44px] flex items-center rounded-[10px] ml-[20px]'> 
                <input type="text" name="message" id="messageInp" placeholder="" autocomplete="off" className='w-[92%] bg-transparent text-[15px] outline-0 border-0 p-[10px] text-white break-words '/>
                <button id="iconDiv" type="submit" className='w-[30px] h-[30px] rounded-[50%] bg-[#5865F2] flex justify-center items-center border-0 duration-[0.1s] scale-[0] '>
                    <i className="fa-solid fa-paper-plane"></i>
                </button>
            </form>
        </main>

        <div className='group absolute top-[10px] right-[25px]'>
            <button className='bg-[#7289da] text-white py-[3px] px-[10px] border-none rounded-[5px] cursor-pointer'>Invite Link!</button>

            <div className="hidden group-hover:block absolute top-[27px] right-[0] bg-[#202225] rounded-[5px] p-[10px] w-[200px] shadow-[0px 8px 16px 0px rgba(0, 0, 0, 0.2)]">
                <input className='w-[90%] p-[8px] mb-[5px] bg-[#36393F] text-white border-none rounded-[3px]' type="text" readonly value="localhost:3000/invite/?serverId=<%= server._id %>" />
                <p className='m-[0] text-[12px] text-[red]'>the other user should be strictly logged in beforehand to become the member of this server, if not then
                    he will be redirected to sign in page</p>
            </div>
        </div>
        </>
    )
}