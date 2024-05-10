import Sidebar2 from '../../components/sidebar2'

export default function page() {
    return (
        <>
        <Sidebar2 />
        <main className='w-calc-minus-312 relative'>
            <div className="w-full h-[45px] bg-[#313338] border-b-[1.5px] border-b-[#131313] border-b-[solid] flex items-center text-[#2dc770] text-[16px]">
                <h3 className='ml-[20px]'><i className="fa-solid fa-user-group"></i> | Add Friends</h3>
            </div>

            <div className="w-[90%] h-fit flex flex-col justify-center text-left mt-[20px] ml-[20px] gap-[20px]">
                <h3 className='text-[#f2f3f5] font-bold'>ADD FRIEND</h3>
                <p className='text-[#b5bac1]'>You can add friends with their Discord usernames.</p>
                <form className='w-[80%] h-[50px] bg-[#1e1f22] flex justify-center items-center gap-[20px] rounded-[10px]' action="/sendFriendRequest" method="post">
                    <input id="friendNameInp" type="text" name="friendName" placeholder="You can add friends with their Discord usernames" autoComplete='off' className='h-[20px] w-[60%] p-[10px] text-[17px] bg-transparent bordre-0 outline-0 text-white ' />
                    <button id="sendBtn" disabled type="submit" className='h-[35px] w-[30%] bg-[#5865f2] text-white border-0 outline-0 rounded-[5px] disabled:cursor-not-allowed disabled:bg-[#3b418a] disabled:text-[grey]' >Send Friend Request</button>
                </form>
                <h3 className='hidden'>Wrong Username, try again!!</h3>
            </div>
        </main>
    </>
    )
}