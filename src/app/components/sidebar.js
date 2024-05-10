import Link from "next/link"

export default function Sidebar () {
    return (
      <>
      <nav className='bg-[#1E1F22] w-[72px] h-screen flex items-center flex-col'>
        <Link href='/directMessage' id="direct" className="w-[48px] h-[48px] bg-[#313338] rounded-[50%] flex justify-center items-center mt-[10px] duration-[0.3s] text-[#DBDEE1] font-bold text-base hover:rounded-[10px] hover:bg-[#5865F2]"><i className="fa-brands fa-discord text-2xl"></i></Link>
        <div className="w-[30px] h-[2px] bg-[#34363B] mt-[10px]"></div>

        <Link href='/server/general' className="w-[48px] h-[48px] bg-[#313338] rounded-[50%] flex justify-center items-center mt-[10px] duration-[0.3s] text-[#DBDEE1] font-bold text-base hover:rounded-[10px] hover:bg-[#5865F2]">vs</Link>

        <Link href="/createServer" id="create" className="w-[48px] h-[48px] bg-[#313338] rounded-[50%] flex justify-center items-center mt-[10px] duration-[0.3s] text-[#DBDEE1] font-bold text-base hover:rounded-[10px] hover:bg-[#23A559] green"><i className="fa-brands fa-plus text-2xl"></i></Link>
        <div className="w-[30px] h-[2px] bg-[#34363B] mt-[10px]"></div>
        <Link href="https://github.com/Vikhyatz" id="github" className="w-[48px] h-[48px] bg-[#313338] rounded-[50%] flex justify-center items-center mt-[10px] duration-[0.3s] text-[#DBDEE1] font-bold text-base hover:rounded-[10px] hover:bg-[#23A559]"><i className="fa-brands fa-github text-2xl"></i></Link>
        <Link href="/requests" id="notifications" className="w-[48px] h-[48px] bg-[#313338] rounded-[50%] flex justify-center items-center mt-[10px] duration-[0.3s] text-[#DBDEE1] font-bold text-base hover:rounded-[10px] hover:bg-[#23A559]"><i className="fa-solid fa-bell text-2xl"></i></Link>
      </nav>
      </>
    )
}