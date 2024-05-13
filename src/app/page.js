'use client'

import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

export default function home() {
    const { data: session } = useSession()
    if (session) {
        return <>
            Signed in as {session.user.email} <br />
            <button onClick={() => signOut()}>Sign out</button>
        </>
    }
    return <>
        <div className='flex justify-center items-center w-full h-screen overflow-hidden bg-[#313338] flex-col '>
            <div className="w-[80%] max-w-[550px] justify-center items-center flex-col p-[5%] text-center">
                <p className="w-full text-white font-bold text-[30px]">Welcome Back!</p>
                <p className="text-[#b5bac1] mb-[20px]">We&apos;re so excited to see you again!</p>
                <form className="flex items-center justify-center flex-col w-full gap-[10px]" action="/login" method="post">
                    <input type="text" name="username" placeholder="Enter your username" className="w-full h-[50px] rounded-[5px] border-[1px] border-solid border-[#302d2d] bg-[#1e1f22] p-[10px] text-white outline-0 duration-[0.5s] focus:border-1px focus:border-solid focus:border-[#5865f2] focus:placeholder:text-[#5865f2] text-[14px]" required autocomplete="off" />

                    <input type="password" name="password" placeholder="Enter your password" className="w-full h-[50px] rounded-[5px] border-[1px] border-solid border-[#302d2d] bg-[#1e1f22] p-[10px] text-white outline-0 duration-[0.5s] focus:border-1px focus:border-solid focus:border-[#5865f2] focus:placeholder:text-[#5865f2] text-[14px]" required />

                    <button className="w-full p-[10px] rounded-[5px] cursor-pointer duration-[0.3s] mt-[20px] bg-[#5865f2] outline-0 border-0 text-white hover:opacity-[0.7] " type="submit">log in</button>
                </form>
                <div className="flex justify-start w-full mt-[15px] text-[#949ba4] text-[13px] bg-[#ff000000]">
                    <p>don&apos;t have an account?&nbsp;</p>
                    <Link className='text-[#00a8fc]' href="/signup"> sign up </Link>
                </div>
                <button onClick={() => signIn()} className="w-full p-[10px] rounded-[5px] cursor-pointer duration-[0.3s] mt-[20px] bg-[#5865f2] outline-0 border-0 text-white hover:opacity-[0.7] " type="submit">log in using github</button>
            </div>
        </div>

    </>
}