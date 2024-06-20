import Image from "next/image";

const Section4 = ({ data }) => {
    const components = [];
    for (let i = 0; i < 5; i++) {
        components.push(<svg key={i} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5236 14.0567C17.4192 14.1484 17.3417 14.2666 17.2991 14.3988C17.2565 14.531 17.2506 14.6723 17.2819 14.8076L18.5686 20.3789C18.6026 20.5244 18.593 20.6767 18.541 20.8168C18.4891 20.9569 18.3971 21.0786 18.2764 21.1668C18.1558 21.255 18.0119 21.3057 17.8626 21.3127C17.7133 21.3196 17.5653 21.2825 17.437 21.2059L12.5738 18.2556C12.4556 18.1838 12.32 18.1458 12.1817 18.1458C12.0434 18.1458 11.9077 18.1838 11.7896 18.2556L6.92635 21.2059C6.79804 21.2825 6.65002 21.3196 6.50075 21.3127C6.35148 21.3057 6.20756 21.255 6.08691 21.1668C5.96627 21.0786 5.87424 20.9569 5.82229 20.8168C5.77034 20.6767 5.76077 20.5244 5.79478 20.3789L7.08148 14.8076C7.11276 14.6723 7.1068 14.531 7.06424 14.3988C7.02168 14.2666 6.9441 14.1484 6.83975 14.0567L2.54661 10.3117C2.43183 10.2142 2.34857 10.0848 2.30737 9.93989C2.26616 9.79501 2.26885 9.64116 2.31511 9.4978C2.36136 9.35445 2.4491 9.22804 2.56722 9.13456C2.68534 9.04109 2.82854 8.98476 2.97868 8.97269L8.63752 8.48351C8.77558 8.47121 8.90767 8.42146 9.01953 8.33961C9.1314 8.25777 9.2188 8.14694 9.27231 8.01908L11.4831 2.75044C11.5422 2.61423 11.6398 2.49825 11.7639 2.41678C11.888 2.33531 12.0332 2.2919 12.1817 2.2919C12.3301 2.2919 12.4754 2.33531 12.5995 2.41678C12.7236 2.49825 12.8212 2.61423 12.8802 2.75044L15.091 8.01908C15.1445 8.14694 15.2319 8.25777 15.3438 8.33961C15.4557 8.42146 15.5878 8.47121 15.7258 8.48351L21.3846 8.97269C21.5348 8.98476 21.678 9.04109 21.7961 9.13456C21.9142 9.22804 22.002 9.35445 22.0482 9.4978C22.0945 9.64116 22.0972 9.79501 22.056 9.93989C22.0148 10.0848 21.9315 10.2142 21.8167 10.3117L17.5236 14.0567Z" fill={data.starColor} />
            <path d="M22.7649 9.25913C22.6727 8.97494 22.4989 8.72415 22.2652 8.538C22.0315 8.35185 21.7482 8.23857 21.4506 8.21226L15.7984 7.72499L13.5828 2.45635C13.4675 2.1799 13.2729 1.94375 13.0236 1.77765C12.7744 1.61155 12.4815 1.52292 12.1819 1.52292C11.8824 1.52292 11.5895 1.61155 11.3402 1.77765C11.091 1.94375 10.8964 2.1799 10.781 2.45635L8.57212 7.72499L2.91329 8.21512C2.61449 8.24022 2.32975 8.35299 2.09478 8.53928C1.85981 8.72557 1.68508 8.97708 1.59248 9.26228C1.49989 9.54748 1.49356 9.85367 1.57429 10.1425C1.65502 10.4312 1.81922 10.6898 2.04628 10.8856L6.33942 14.6372L5.05272 20.2085C4.98468 20.5 5.00409 20.8052 5.10853 21.0858C5.21297 21.3663 5.3978 21.6099 5.63991 21.786C5.88203 21.9621 6.17068 22.0629 6.46978 22.0759C6.76888 22.0888 7.06516 22.0133 7.32158 21.8587L12.1753 18.9085L17.0394 21.8587C17.2959 22.0133 17.5921 22.0888 17.8912 22.0759C18.1903 22.0629 18.479 21.9621 18.7211 21.786C18.9632 21.6099 19.148 21.3663 19.2525 21.0858C19.3569 20.8052 19.3763 20.5 19.3083 20.2085L18.0225 14.6315L22.3147 10.8856C22.5418 10.6891 22.7056 10.4298 22.7857 10.1404C22.8658 9.85104 22.8586 9.54442 22.7649 9.25913ZM21.3164 9.73499L17.0242 13.4809C16.8153 13.6626 16.6599 13.8978 16.5747 14.1613C16.4895 14.4247 16.4778 14.7064 16.5407 14.976L17.8303 20.5568L12.9699 17.6065C12.7328 17.4621 12.4605 17.3857 12.1829 17.3857C11.9052 17.3857 11.633 17.4621 11.3958 17.6065L6.54214 20.5568L7.82313 14.9798C7.88609 14.7102 7.87434 14.4285 7.78915 14.1651C7.70396 13.9016 7.54856 13.6664 7.33966 13.4847L3.04557 9.7407C3.04522 9.73785 3.04522 9.73498 3.04557 9.73213L8.70251 9.24296C8.97869 9.21861 9.24299 9.11932 9.46689 8.9558C9.69079 8.79228 9.8658 8.57072 9.97303 8.31504L12.1819 3.05307L14.3899 8.31504C14.4971 8.57072 14.6721 8.79228 14.896 8.9558C15.1199 9.11932 15.3842 9.21861 15.6604 9.24296L21.3183 9.73213C21.3183 9.73213 21.3183 9.73784 21.3183 9.73879L21.3164 9.73499Z" fill={data.starColor} />
        </svg>

        );
    }
    return (
        <div className='z-[2]'>
            <div className="flex md:flex-row flex-col lg:px-28 px-10 py-28 justify-between relative">
                <div className="md:sticky md:top-0 md:left-0 md:h-full block text-center">
                    <h2
                        className={`${data.headingColor} py-6 text-[4rem] font-[700] leading-[3rem] capitalize`}>{data?.heading}</h2>
                    <a href="https://chromewebstore.google.com/detail/expert-ad-blocker-free-ad/beecichmnnhnljafpeopjcfgedbeiion" target="_blank">
                        <div className={`hidden py-4 px-10 lg:px-16 ${data.bgColor}  md:flex gap-6 items-center rounded-2xl mt-4`}>

                            <svg width="15%" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.2" d="M47.6223 19.409L41.25 25.7813L29.2188 13.75L35.591 7.37777C35.9133 7.05568 36.3503 6.87476 36.806 6.87476C37.2616 6.87476 37.6986 7.05568 38.0209 7.37777L47.6223 16.9727C47.7827 17.1324 47.91 17.3222 47.9969 17.5313C48.0838 17.7403 48.1285 17.9645 48.1285 18.1909C48.1285 18.4172 48.0838 18.6414 47.9969 18.8504C47.91 19.0595 47.7827 19.2493 47.6223 19.409Z" fill={data.iconColor} />
                                <path d="M48.8383 15.7631L39.2369 6.16384C38.9177 5.84455 38.5387 5.59128 38.1216 5.41848C37.7045 5.24568 37.2575 5.15674 36.806 5.15674C36.3545 5.15674 35.9074 5.24568 35.4903 5.41848C35.0732 5.59128 34.6942 5.84455 34.375 6.16384L7.88263 32.6562C7.56204 32.9743 7.30787 33.3529 7.13489 33.77C6.96191 34.1872 6.87357 34.6345 6.87502 35.0861V44.6875C6.87502 45.5992 7.23718 46.4735 7.88184 47.1181C8.52649 47.7628 9.40084 48.125 10.3125 48.125H46.4063C46.8621 48.125 47.2993 47.9439 47.6216 47.6216C47.9439 47.2992 48.125 46.8621 48.125 46.4062C48.125 45.9504 47.9439 45.5132 47.6216 45.1909C47.2993 44.8685 46.8621 44.6875 46.4063 44.6875H24.7758L48.8383 20.625C49.1576 20.3058 49.4109 19.9268 49.5837 19.5097C49.7565 19.0926 49.8454 18.6455 49.8454 18.194C49.8454 17.7425 49.7565 17.2955 49.5837 16.8784C49.4109 16.4612 49.1576 16.0823 48.8383 15.7631ZM10.3125 35.0861L29.2188 16.1799L38.8201 25.7812L19.9139 44.6875H10.3125V35.0861ZM41.25 23.3513L31.6508 13.75L36.807 8.59372L46.4063 18.1951L41.25 23.3513Z" fill={data.iconColor} />
                            </svg>
                            <p className={`font-normal lg:text-3xl text-2xl ${data.textColor}`}>Write a review</p>

                        </div>
                    </a>
                </div>
                <div className={`my-10 w-[100%] m-auto md:m-0 md:w-[55%] ${data.bgColor} rounded-[4.5rem] lg:p-16 p-12 ${data.textColor} flex flex-col gap-12`}>
                    {data.review.map((item, index) => (
                        <div key={index} className="star flex md:flex-row flex-col justify-between hover:scale-105 transition-all duration-200 ease-in">
                            <div className="flex flex-1 md:justify-evenly py-6 items-center gap-10">
                                <div className="md:w-12 md:h-12 rounded-[100%]">
                                    <Image src={item?.reviewer} width={50} height={50} alt='avatar' className="w-auto h-auto"/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-semibold text-[2rem] md:text-2xl">{item.name}</h3>
                                    <div className="flex gap-2">{components}</div>
                                </div>
                            </div>
                            <p className="md:w-[40%] md:text-xl text-[1.8rem] font-extralight ">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div >
    );
};


export default Section4;