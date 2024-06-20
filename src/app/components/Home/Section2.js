"use client"
import Image from 'next/image';
import Link from 'next/link';

const initialItems = [
    { src: '/Section2/spotify.svg', alt: 'spotify',link:'/spotify-adblocker'},
    { src: '/Section2/youtube.svg', alt: 'youtube',link:'/youtube-adblocker'},
    { src: '/Section2/twitch.png', alt: 'twitch',link:'/twitch-adblocker'},
    { src: '/Section2/hulu.png', alt: 'hulu',link:'/hulu-adblocker'}
];

const Section2 = ({ data }) => {
    return (
        <div className='z-[2] text-black'>
            <div className='flex flex-col gap-10 py-16 text-center items-center'>
                <h2 className={`${data.headingColor} text-[4.5rem] font-[700] leading-tight capitalize`}>{data?.heading}</h2>
                <p className={`md:text-xl ${data.textColor} text-[1.8rem] font-light leading-8 md:leading-6 tracking-wide w-[80%] md:w-[60%]`}>{data.text}</p>
            </div>
<<<<<<< Updated upstream
            <div className="relative overflow-hidden mt-20 mx-auto">
                <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:filter after:blur-3"></div>
                <div className="slider">
                    <div className="slide-track">
                        {duplicatedItems.map((icon, index) => (
                            <div key={index} className="slide">
                                <Image src={icon.src} height={180} width={180} alt={icon.alt}/>
                            </div>
=======
            <div className=" mt-10 mb-16 mx-auto">
                <div className=" inset-0 z-20  before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:filter after:blur-3"></div>
                <div>
                    <div className='flex justify-center  space-x-10'>
                        {initialItems.map((icon, index) => (
                            <Link href={icon.link} key={index} className="cursor-pointer shadow-2xl bg-white rounded-lg py-3 px-5 border">
                                <Image src={icon.src} height={180} width={100} alt={icon.alt} quality={100} className='w-[250px]'/>
                            </Link>
>>>>>>> Stashed changes
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Section2;


