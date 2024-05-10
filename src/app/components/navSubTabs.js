import Image from 'next/image'

export default function NavSubTabs(props) {
    console.log(props.active)
    return (
        <div className={`w-[224px] h-[42px] flex items-center text-[#949ba4] rounded-[5px] mx-[2px] duration-[0.1s] hover:bg-[#3f4248] hover:text-white ${props.active ? 'text-white bg-[#3f4248]' : null}`}>
            <div className="w-[32px] h-[32px] rounded-[50%] overflow-hidden ml-[10px]">
                <Image
                className='w-[32px]'
                src={props.pfp}
                alt="pfp"
                width={100}
                height={100}
                />
            </div>
            <p className='ml-[10px]'>{props.name}</p>
        </div>
    )
}