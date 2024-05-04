"use client"
import { useState } from "react";

const Section5 = ({ data }) => {
    const [openIndex, setOpenIndex] = useState(null);
    return (
        <div className='bg-white z-[2] text-black' style={{ backgroundImage: 'url(./bg.png)' }}>
            <div className="flex md:flex-row flex-col-reverse px-10 lg:px-28 py-28 gap-20 relative">
                <div className="md:w-[55%] bg-[#F1C02A] rounded-[4.5rem] p-16 text-white flex flex-col gap-4">
                    {data.faq.map((item, index) => (
                        <div key={index} className={`border-b-2 border-${data.faqTextColor} text-${data.faqTextColor}`}>
                            <div onClick={() => setOpenIndex(openIndex === index ? null : index)} className='flex justify-between px-5 py-4 transition-all duration-300 ease-in-out'>
                                <p className="text-[2.2rem] md:text-[1.9rem] font-semibold md:my-auto">{item.ques}</p>
                                <div className={openIndex === index ? 'transform rotate-180 transition-transform duration-300 min-w-[3rem] w-[4rem] h-fit ease' : 'min-w-[3rem] w-[4rem] transition-transform h-fit duration-300 ease'}>
                                    <svg width="100%" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.2" d="M42 24C42 27.5601 40.9443 31.0402 38.9664 34.0003C36.9886 36.9604 34.1774 39.2675 30.8883 40.6298C27.5992 41.9922 23.98 42.3487 20.4884 41.6541C16.9967 40.9596 13.7894 39.2453 11.2721 36.7279C8.75473 34.2106 7.04039 31.0033 6.34586 27.5116C5.65132 24.02 6.00778 20.4008 7.37016 17.1117C8.73254 13.8226 11.0396 11.0114 13.9997 9.03355C16.9598 7.05568 20.4399 6 24 6C28.7739 6 33.3523 7.89642 36.7279 11.2721C40.1036 14.6477 42 19.2261 42 24Z" fill={data.svgIconColor} />
                                        <path d="M24 4.5C20.1433 4.5 16.3731 5.64366 13.1664 7.78634C9.95962 9.92903 7.46025 12.9745 5.98434 16.5377C4.50843 20.1008 4.12227 24.0216 4.87468 27.8043C5.62709 31.5869 7.48429 35.0615 10.2114 37.7886C12.9385 40.5157 16.4131 42.3729 20.1957 43.1253C23.9784 43.8777 27.8992 43.4916 31.4623 42.0156C35.0255 40.5397 38.071 38.0404 40.2136 34.8336C42.3563 31.6269 43.5 27.8567 43.5 24C43.4945 18.83 41.4383 13.8732 37.7825 10.2174C34.1268 6.56167 29.17 4.50546 24 4.5ZM24 40.5C20.7366 40.5 17.5465 39.5323 14.8331 37.7192C12.1197 35.9062 10.0048 33.3293 8.75598 30.3143C7.50714 27.2993 7.18038 23.9817 7.81704 20.781C8.45369 17.5803 10.0252 14.6403 12.3327 12.3327C14.6403 10.0252 17.5803 8.4537 20.781 7.81704C23.9817 7.18039 27.2993 7.50714 30.3143 8.75599C33.3293 10.0048 35.9062 12.1197 37.7192 14.8331C39.5323 17.5465 40.5 20.7366 40.5 24C40.495 28.3745 38.7551 32.5685 35.6618 35.6618C32.5685 38.7551 28.3745 40.495 24 40.5ZM33 24C33 24.3978 32.842 24.7794 32.5607 25.0607C32.2794 25.342 31.8978 25.5 31.5 25.5H25.5V31.5C25.5 31.8978 25.342 32.2794 25.0607 32.5607C24.7794 32.842 24.3978 33 24 33C23.6022 33 23.2206 32.842 22.9393 32.5607C22.658 32.2794 22.5 31.8978 22.5 31.5V25.5H16.5C16.1022 25.5 15.7206 25.342 15.4393 25.0607C15.158 24.7794 15 24.3978 15 24C15 23.6022 15.158 23.2206 15.4393 22.9393C15.7206 22.658 16.1022 22.5 16.5 22.5H22.5V16.5C22.5 16.1022 22.658 15.7206 22.9393 15.4393C23.2206 15.158 23.6022 15 24 15C24.3978 15 24.7794 15.158 25.0607 15.4393C25.342 15.7206 25.5 16.1022 25.5 16.5V22.5H31.5C31.8978 22.5 32.2794 22.658 32.5607 22.9393C32.842 23.2206 33 23.6022 33 24Z" fill={data.svgIconColor}  />
                                    </svg>

                                </div>
                            </div>
                            <div
                                className={`px-5 text-[2rem] md:text-xl leading-10 font-[400] rounded-md ${openIndex === index ? 'py-2 max-h-[500px] transition-all duration-300 ease-in-out opacity-100' : 'max-h-0 overflow-hidden transition-all duration-300 ease-in-out opacity-0'
                                    }`}
                            >
                                {item.answer}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="md:sticky md:top-0 md:left-0 md:h-full text-center md:text-left">
                    <h2 className={`text-${data.headingColor} py-6 text-[4rem] font-[700] leading-[3rem] uppercase`}>{data?.heading}</h2>
                    <p className={`text-${data.subHeadingColor} py-6 text-3xl font-[800] leading-10 lg:leading-3 capitalize`}>{data.subheading}</p>
                </div>
            </div>
            <div className='h-28 bg-black rounded-tl-[6.5rem] rounded-tr-[6.5rem]'></div>
        </div>
    );
};


export default Section5;