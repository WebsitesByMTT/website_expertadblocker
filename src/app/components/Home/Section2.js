"use client"
import Image from 'next/image';

const initialItems = [
    { src: '/Section2/spotify.png', alt: 'spotify' },
    { src: '/Section2/youtube.png', alt: 'youtube' },
    { src: '/Section2/twitch.png', alt: 'twitch' },
    { src: '/Section2/hulu.png', alt: 'hulu' },
    { src: '/Section2/spotify.png', alt: 'spotify' },
    { src: '/Section2/youtube.png', alt: 'youtube' },
    { src: '/Section2/twitch.png', alt: 'twitch' },
    { src: '/Section2/hulu.png', alt: 'hulu' },
];

const Section2 = ({ data }) => {
    const duplicatedItems = [...initialItems, ...initialItems];
    return (
        <div className='bg-white z-[2] text-black' style={{ backgroundImage: 'url(./bg.png)' }}>
            <div className='md:h-28 h-16 bg-black rounded-bl-[6.5rem] rounded-br-[6.5rem]'></div>
            <div className='flex flex-col gap-10 my-10 text-center items-center'>
                <h2 className={`text-${data.headingColor} text-[4.5rem] font-[700] leading-tight capitalize`}>{data?.heading}</h2>
                <p className={`md:text-xl text-${data.textColor} text-[1.8rem] font-light leading-8 md:leading-6 tracking-wide w-[80%] md:w-[60%]`}>{data.text}</p>
            </div>
            <div className="relative overflow-hidden mt-20 mb-28 mx-auto">
                <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:filter after:blur-3"></div>
                <div className="slider">
                    <div className="slide-track">
                        {duplicatedItems.map((icon, index) => (
                            <div key={index} className="slide">
                                <Image src={icon.src} height={180} width={180} alt={icon.alt}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='md:h-28 h-16 bg-[#F1C02A] rounded-tl-[6.5rem] rounded-tr-[6.5rem]'></div>
        </div >
    );
};

export default Section2;


