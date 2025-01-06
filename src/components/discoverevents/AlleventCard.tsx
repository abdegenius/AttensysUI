import React from 'react'
import location from '@/assets/darkloc.svg'
import calendar from '@/assets/darkcalend.svg'
import Image from 'next/image'

interface alleventCardprops {
    name : string,
    hall : string,
    city : string,
    date : string,
    time : string,
    fee : string,
    image : any,
    onClick?: () => void; 
}

const AlleventCard : React.FC<alleventCardprops> = (props) => {
  return (
    <div onClick={props.onClick}  className='cursor-pointer w-[100%] sm:w-[48%] flex justify-between items-center px-4 sm:px-16 py-8 sm:py-0  my-8 sm:my-0 sm:h-[242px] rounded-2xl border-[#A3A3A3] border-[0.81px] shadow-xl bg-eventcard-gradient'>
            <div className='space-y-3'>
            <h1 className='text-[21px] text-[#5801A9] font-bold leading-[35px]'>{props.name}</h1>
                <div className='flex space-x-4'>
                <Image src={location} alt='location' />
                <div>
                    <h1 className='text-[#2D3A4B] text-[16px] font-semibold leading-[22px]'>{props.hall}</h1>
                    <h1 className='text-[#2D3A4B] text-[16px] font-light leading-[22px]'>{props.city}</h1>
                </div>    
                </div>

                <div className='flex space-x-4'>
                    <Image src={calendar} alt='calendar' />
                    <div>
                        <h1 className='text-[#2D3A4B] text-[16px] font-semibold leading-[22px]'>{props.date}</h1>
                        <h1 className='text-[#2D3A4B] text-[16px] font-light leading-[22px]'>{props.time}</h1>
                    </div>
                </div>

                <div className='w-[42px] h-[26px] bg-[#FFFFFF61] rounded-lg flex justify-center items-center'><h1 className='text-[#9B51E0] text-[15px] font-bold'>${props.fee}</h1></div>
            </div>

        <div className='h-[185px] w-[194px] rounded-2xl'>
                <Image src={props.image} alt='flyer' className='h-full w-full object-cover rounded-2xl' />
        </div>
</div>
  )
}

export default AlleventCard