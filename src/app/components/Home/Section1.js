import Image from 'next/image';
import Heroanimaton from '../../../../public/hero/heroanimation.svg';
import Stand from '../../../../public/hero/stand.svg';
import Navbar from '../Navbar';
const Section1 = ({ data }) => {
    return (
        <div>
            <Navbar data={data.navbar} />
            <div className="flex flex-col-reverse md:flex-row min-h-[calc(100vh-8rem)] md:justify-between justify-evenly lg:px-28 md:px-12 px-4 py-10 bg-black">

                <div className="flex flex-col justify-center items-center gap-10 md:w-[55%] text-center md:text-left">
                    <h1 className="text-[#F74C04] text-[6.5rem] font-[800] leading-tight capitalize">{data?.heading}</h1>
                    <p className="text-[#F1C02A] text-[1.8rem] lg:text-2xl font-[400] md:font-[500] leading-10 lg:leading-6 tracking-wide w-[70%] md:w-full">{data?.text}</p>
                </div>
                <div className='md:w-[40%] flex flex-col md:min-w-[450px] relative items-center justify-center '>
                    <Image src={Heroanimaton} className='w-[60%] mb-[-5rem] animate-bounce z-[6] md:w-[90%] duration-2000 md:min-w-[400px]' />
                    <Image src={Stand} className=' md:w-[90%] w-[60%]' />
                </div>

            </div>
        </div>
    )
}

export default Section1;