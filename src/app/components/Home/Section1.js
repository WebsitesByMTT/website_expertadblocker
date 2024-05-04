import Navbar from '../Navbar';
import BannerAnimation from '../animate-bounce/BannerAnimation';
const Section1 = ({ data }) => {
    return (
        <div>
            <Navbar data={data.navbar} />
            <div className={data.bgColor}>
                <div className={`grid grid-cols-12 w-[90%] mx-auto items-center  rounded-bl-[6.5rem] rounded-br-[6.5rem] min-h-screen `}>

                    <div className="col-span-12 pb-32 md:pb-0 order-2 md:order-1 md:col-span-6 space-y-10 text-center md:text-left">
                        <h1 className={`text-${data.headingColor} text-[4rem] font-[800]  leading-tight capitalize`}>{data?.heading}</h1>
                        <p className={`text-${data.textColor} text-[1.8rem]  lg:text-2xl  font-[400] md:font-[400] tracking-wide md:w-[80%] w-full`}>{data?.text}</p>
                    </div>
                    <div className='col-span-12 order-1 md:order-2 md:col-span-6 flex justify-center'>
                        <BannerAnimation />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Section1;