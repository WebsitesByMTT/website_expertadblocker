import Navbar from '../Navbar';
import BannerAnimation from '../animate-bounce/BannerAnimation';
const Section1 = ({ data }) => {
    return (
        <div>
            <Navbar data={data.navbar} />
            <div className={`${data.bgColor}  rounded-bl-[6.5rem] rounded-br-[6.5rem] `}>
                <div className={`grid grid-cols-12 w-[90%] md:w-[80%] mx-auto items-center min-h-screen `}>

                    <div className="col-span-12 pb-[6rem] md:pb-[5rem] order-2 md:order-1 md:col-span-6 space-y-10 md::space-y-0 text-center md:text-left">
                        <h1 className={`${data.headingColor} ${data.HeadingFontSize} font-[800]  leading-tight capitalize`}>{data?.heading}</h1>
                        <p className={`${data.textColor} ${data.textFontSize}  font-[400] md:font-[400] tracking-wide  w-full`} dangerouslySetInnerHTML={{ __html: `<span>${data?.text}</span>` }}></p>
                    </div>
                    <div className='col-span-12  order-1 md:order-2 md:col-span-6 flex justify-center'>
                        <BannerAnimation images={data.animationImages} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Section1;