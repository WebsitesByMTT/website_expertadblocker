const Section6 = ({ data }) => {
    return (
        <div className={`md:pt-20 bg-${data.bgColor} py-24 rounded-tl-[6.5rem] rounded-tr-[6.5rem]`}>
            <div className="w-[85%] m-auto flex flex-col gap-2 text-center">
                <h2 className={`text-${data.headingColor} py-6 text-[4rem] font-[700] leding-tight md:leading-[3rem]`}>{data.heading}<span className={`uppercase text-${data.subHeadingColor}`}>{data.subheading}</span></h2>
                <p className={`md:w-[60%] text-[1.8rem] m-auto text-${data.textColor} py-6 md:text-xl font-light capitalize`}>{data.text}</p>
                <div className={`w-[100%] mt-20 border-2 rounded-[3rem] border-${data.subTextColor} text-${data.subTextColor} hover:text-${data.subTextHoverColor} hover:bg-${data.subTextColor}`}><h3 className=' md:w-[60%] m-auto py-6 text-[3rem] md:text-[4rem] font-[700] leading-tight'>{data.subtext}<span className="uppercase text-white">{data.tag}</span></h3></div>
            </div>
        </div>
    )
}

export default Section6;