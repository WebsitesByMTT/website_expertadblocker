import Image from 'next/image'
import React from 'react'

const BannerAnimation = ({images}) => {
    return (
        <div className='w-full pt-32 md:pt-0'>
            <Image src={images?.image1} width={100} height={100} priority={true} className='md:w-[70%] w-full mx-auto  animate-bounce z-[6]  duration-2000 ' alt="img" />
            <Image src={images?.image2} width={100} height={100} className='md:w-[80%] w-full md:ml-[14%] mt-[-5rem] md:mr-[6%] ' alt="img" />
        </div>
    )
}

export default BannerAnimation
