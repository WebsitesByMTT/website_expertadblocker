import Image from 'next/image'
import React from 'react'

const BannerAnimation = () => {
    return (
        <div className='md:w-[40%] flex flex-col md:min-w-[450px] relative items-center justify-center '>
            <Image src='/Hero/heroanimation.svg' width={500} height={500} className='w-[60%] mb-[-5rem] animate-bounce z-[6] md:w-[90%] duration-2000 md:min-w-[400px]' alt="" />
            <Image src="/Hero/stand.svg" width={500} height={500} className=' md:w-[90%] w-[60%]' alt="" />
        </div>
    )
}

export default BannerAnimation
