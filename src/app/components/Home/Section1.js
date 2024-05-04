import Navbar from '../Navbar';
import BannerAnimation from '../animate-bounce/BannerAnimation';
const Section1 = ({ data }) => {
    return (
        <div>
            <Navbar data={data.navbar} />
            <div className={`flex flex-col-reverse rounded-bl-[6.5rem] rounded-br-[6.5rem] md:flex-row min-h-screen md:justify-between justify-evenly lg:px-28 md:px-12 px-4 py-10 bg-${data.bgColor}`}>

                <div className="flex flex-col justify-center items-center gap-10 md:w-[55%] text-center md:text-left">
                    <h1 className={`text-${data.headingColor} text-[6.5rem] font-[800] leading-tight capitalize`}>{data?.heading}</h1>
                    <p className={`text-${data.textColor} text-[1.8rem] lg:text-2xl font-[400] md:font-[500] leading-10 lg:leading-6 tracking-wide w-[70%] md:w-full`}>{data?.text}</p>
                </div>
                <BannerAnimation />
            </div>
        </div>
    )
}

export default Section1;