import React, { ChangeEvent, useRef, useState } from 'react'
import add from '@/assets/add.svg'
import exclaim from '@/assets/exclaim.svg'
import clsx from 'clsx'
import checkmark from '@/assets/checkmark.svg'
import Image from 'next/image'
import { Button, Dialog, DialogBackdrop, DialogPanel, DialogTitle, Field, Input, Label } from '@headlessui/react'
import { orguploadstatus, confirmationstatus } from '@/state/connectedWalletStarknetkitNext'
import { useAtom } from 'jotai'



const UploadOrglogo = () => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [inputValue, setInputValue] = useState<number | string>('');
    const [orguploadstat, setOrguploadStat] = useAtom(orguploadstatus)
    const [confirmationstat, setConfirmationStat] = useAtom(confirmationstatus)
  
    const handleNext = () =>{
        setOrguploadStat(false);
        setConfirmationStat(true);
    }
    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      // Validate numeric input or clear it
      if (value === '' || /^[0-9]*\.?[0-9]*$/.test(value)) {
        setInputValue(value);
      }
    };
  
    const handleImageClick = () => {
      // Trigger the file input on image click
      fileInputRef.current?.click(); 
    };
  
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg')) {
        // Process the file 
        console.log("Selected file:", file);
      } else {
        console.log("Please select a valid image file (JPEG, JPG, or PNG).");
      }
    };



  return (
    <div className="flex px-16 space-x-4 mt-4">
    <div className='w-[50%] space-y-8'>
        <h1 className='text-[#2D3A4B] text-[18px] font-semibold leading-[26px]'>Organization Logo</h1>
        <div className="w-[342px] h-[320px] bg-[#3F3E58] border-[#DCDCDC] border-[1px] rounded-xl flex justify-center items-center">
                        <Image src={add} alt="add"  onClick={handleImageClick} className="cursor-pointer" />
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/jpeg, image/jpg, image/png"
                            onChange={handleFileChange}
                            style={{ display: 'none' }} // Hide the input
                        />
          </div>
          <p className='text-[#667185] text-[13px] font-normal leading-[18px]'>Upload size must be less than 10MB | Best upload <br/> dimension is 500px x 500px</p>
          <div className='flex space-x-4'>
              <Image src={exclaim} alt='disclaim' />
              <p className='text-[#5801A9] text-[13px] font-medium leading-[20px]'>All sponsorship funds will undergo a verification <br/> process before being reflected on the platform.</p>
          </div>
    </div>

    <div className='w-[50%] space-y-6'>
        <h1 className='text-[#2D3A4B] text-[16px] font-normal leading-[23px]'>Organization Name </h1>
        <div className="w-full max-w-lg">
                    <Field>
                        <Input
                        placeholder='Organization name'
                        className={clsx(
                            'h-[55px] border-[2px] border-[#D0D5DD] block w-full rounded-lg bg-white/5 py-1.5 px-3 text-sm/6 text-[#667185]',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                        )}
                        />
                    </Field>
          </div>
        <h1 className='text-[#2D3A4B] text-[16px] font-normal leading-[23px]'>Transfer to </h1>

          <div className="w-full max-w-lg">
                <div className={clsx(
                            'flex justify-between h-[55px] border-[2px] border-[#9B51E0] w-full rounded-lg bg-white/5 py-1.5 px-8 text-[#9B51E0] items-center',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25')}>
                            <h1 className='text-[14px] font-medium leading-[16px]'>0x5c956e61...de5232dc11</h1>
                            <Image src={checkmark} alt='check' />

                </div>
          </div>
          
        <h1 className='text-[#2D3A4B] text-[16px] font-normal leading-[23px]'>Amount </h1>
        <div className='w-full h-[202px] rounded-xl bg-amount-gradient flex flex-col justify-center space-y-7'>
                  <div className='text-[#FFFFFF] flex flex-col items-center justify-center'>
                      <div className='flex space-x-3 items-center'>
                      <Input onChange={handleAmountChange} placeholder='0' className={clsx('bg-transparent text-[#FFFFFF] outline-none placeholder-white min-w-[44px] max-w-[200px] font-bold w-auto h-[54px] text-[40px] placeholder:text-[40px]')}
                      style={{ width: `${Math.max(2, inputValue.toString().length || 1)}ch` }}/>
                      <h1 className='text-[40px] font-bold leading-[54px]' >USDT</h1>
                      </div>
                      <p className='text-[17px] font-normal leading-[24px]'>$0.00</p>
                  </div>

                  <div className='flex justify-between px-8'>
                      <div>
                        <h1 className='text-[13px] font-semibold leading-[18px] text-[#FFFFFF]'>Available to Send</h1>
                        <h1 className='text-[18px] font-normal leading-[24px] text-[#FFFFFF]'>15,025.01 USDT</h1>
                      </div>

                      <Button className='text-[#5801A9] text-[13px] font-bold leading-[18px] w-[79px] h-[39px] rounded-2xl bg-[#FFFFFF]'>Max</Button>
                  </div>
        </div>

                  <Button onClick={handleNext} className="hidden justify-center lg:flex rounded-lg bg-[#4A90E2] px-4 lg:h-[50px] items-center lg:w-full text-sm text-[#FFFFFF] data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
                            <div>Send funds</div>
                        </Button>  

    </div>

</div>
  )
}

export default UploadOrglogo