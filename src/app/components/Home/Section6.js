const Section6 = ({ data }) => {
    return (
        <div className={`md:pt-20 ${data.bgColor} py-24 rounded-tl-[6.5rem] rounded-tr-[6.5rem]`}>
            <div className="w-[85%] m-auto flex flex-col gap-2 text-center">
                <h2 className={`${data.headingColor} py-6 text-[4rem] font-[700] leding-tight md:leading-[1rem]`}>{data.heading}<span className={`uppercase ${data.subHeadingColor}`}>{data.subheading}</span></h2>
                <h2 className={`text-[4rem] font-[700] text-white`}>{data.subHeading}</h2>
                <p className={`md:w-[60%] text-[1.8rem] m-auto ${data.textColor} py-6 md:text-xl font-light capitalize`} dangerouslySetInnerHTML={{ __html: `<span>${data?.text}</span>` }}></p>
                <div className="w-fit m-auto">
                <div className='box'>
                    <a href="https://chromewebstore.google.com/detail/expert-ad-blocker-free-ad/beecichmnnhnljafpeopjcfgedbeiion" target="_blank" className={`md:block hidden button after:bg-[#363131] hover:scale-95 ${data.afterHoverBgColor} text-white uppercase text-xl font-[500]  border-2 px-4 py-2 `}>
                        <span>Add to Chrome it&apos;s free</span>
                    </a>
                </div>
                </div>
                <div className={`aboutTag w-[100%] mt-20 border-2 rounded-[3rem] ${data.borderColor} ${data.hoverColor} ${data.subTextHoverColor} ${data.subTextColor}`}><h3 className=' md:w-[70%] m-auto py-6 text-[3rem] md:text-[4rem] font-[700] leading-tight'>{data.subtext}<span className={`uppercase ${data.tagColor}`}><span className="text-white capitalize">{data?.tag2}</span><span className={`lowercase ${data?.subTextColor}`}>{data?.tag}</span></span></h3></div>
            </div>
        </div>
    )
}

export default Section6;