const Section4 = ({ data }) => {
    const components = [];
    for (let i = 0; i < 5; i++) {
        components.push(<svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2" d="M17.2622 13.847C17.1594 13.9373 17.083 14.0538 17.041 14.184C16.9991 14.3142 16.9932 14.4534 17.024 14.5867L18.2915 20.0748C18.325 20.2182 18.3156 20.3682 18.2644 20.5062C18.2133 20.6442 18.1226 20.7641 18.0038 20.851C17.8849 20.9379 17.7432 20.9878 17.5961 20.9947C17.4491 21.0015 17.3033 20.965 17.1769 20.8895L12.3862 17.9833C12.2698 17.9125 12.1362 17.875 12 17.875C11.8637 17.875 11.7301 17.9125 11.6137 17.9833L6.82311 20.8895C6.6967 20.965 6.5509 21.0015 6.40386 20.9947C6.25681 20.9878 6.11504 20.9379 5.99619 20.851C5.87735 20.7641 5.78669 20.6442 5.73552 20.5062C5.68435 20.3682 5.67492 20.2182 5.70842 20.0748L6.97592 14.5867C7.00673 14.4534 7.00086 14.3142 6.95893 14.184C6.91701 14.0538 6.84059 13.9373 6.73779 13.847L2.50873 10.1579C2.39567 10.0619 2.31365 9.93438 2.27306 9.79166C2.23246 9.64893 2.23512 9.49738 2.28068 9.35616C2.32625 9.21495 2.41268 9.09043 2.52904 8.99835C2.64539 8.90627 2.78645 8.85077 2.93436 8.83889L8.50873 8.35701C8.64473 8.3449 8.77485 8.29589 8.88504 8.21526C8.99524 8.13464 9.08133 8.02547 9.13404 7.89951L11.3119 2.70951C11.37 2.57533 11.4662 2.46108 11.5884 2.38083C11.7107 2.30057 11.8537 2.25781 12 2.25781C12.1462 2.25781 12.2893 2.30057 12.4115 2.38083C12.5338 2.46108 12.6299 2.57533 12.6881 2.70951L14.8659 7.89951C14.9186 8.02547 15.0047 8.13464 15.1149 8.21526C15.2251 8.29589 15.3552 8.3449 15.4912 8.35701L21.0656 8.83889C21.2135 8.85077 21.3546 8.90627 21.4709 8.99835C21.5873 9.09043 21.6737 9.21495 21.7193 9.35616C21.7648 9.49738 21.7675 9.64893 21.7269 9.79166C21.6863 9.93438 21.6043 10.0619 21.4912 10.1579L17.2622 13.847Z" fill="white" />
            <path d="M22.425 9.121C22.3342 8.84104 22.163 8.594 21.9328 8.41063C21.7026 8.22726 21.4235 8.11566 21.1303 8.08975L15.5625 7.60974L13.38 2.41974C13.2664 2.14742 13.0747 1.9148 12.8291 1.75117C12.5836 1.58755 12.2951 1.50024 12 1.50024C11.7049 1.50024 11.4164 1.58755 11.1709 1.75117C10.9253 1.9148 10.7336 2.14742 10.62 2.41974L8.44407 7.60974L2.8697 8.09256C2.57535 8.11729 2.29487 8.22838 2.06341 8.41188C1.83195 8.59539 1.65982 8.84315 1.56861 9.1241C1.4774 9.40504 1.47116 9.70666 1.55069 9.99113C1.63021 10.2756 1.79195 10.5303 2.01563 10.7232L6.2447 14.4188L4.9772 19.9069C4.91017 20.1941 4.9293 20.4947 5.03218 20.7711C5.13506 21.0475 5.31713 21.2874 5.55563 21.4609C5.79413 21.6344 6.07847 21.7337 6.37311 21.7464C6.66775 21.7592 6.95961 21.6848 7.2122 21.5326L11.9934 18.6263L16.785 21.5326C17.0376 21.6848 17.3295 21.7592 17.6241 21.7464C17.9187 21.7337 18.2031 21.6344 18.4416 21.4609C18.6801 21.2874 18.8621 21.0475 18.965 20.7711C19.0679 20.4947 19.087 20.1941 19.02 19.9069L17.7534 14.4132L21.9816 10.7232C22.2052 10.5296 22.3666 10.2742 22.4455 9.98914C22.5244 9.70406 22.5173 9.40202 22.425 9.121ZM20.9981 9.58974L16.77 13.2797C16.5642 13.4587 16.4111 13.6905 16.3272 13.95C16.2433 14.2095 16.2317 14.487 16.2938 14.7526L17.5641 20.2501L12.7763 17.3438C12.5427 17.2016 12.2744 17.1263 12.0009 17.1263C11.7274 17.1263 11.4592 17.2016 11.2256 17.3438L6.44438 20.2501L7.70626 14.7563C7.76827 14.4907 7.7567 14.2132 7.67279 13.9537C7.58887 13.6942 7.43579 13.4625 7.23001 13.2835L3.00001 9.59537C2.99967 9.59257 2.99967 9.58974 3.00001 9.58693L8.57251 9.10506C8.84457 9.08108 9.10493 8.98327 9.32549 8.82219C9.54605 8.6611 9.71844 8.44286 9.82407 8.191L12 3.00756L14.175 8.191C14.2806 8.44286 14.453 8.6611 14.6736 8.82219C14.8942 8.98327 15.1545 9.08108 15.4266 9.10506L21 9.58693C21 9.58693 21 9.59256 21 9.59349L20.9981 9.58974Z" fill="white" />
        </svg>
        );
    }
    return (
        <div className='z-[2]'>
            <div className="flex md:flex-row flex-col lg:px-28 px-10 py-28 justify-between relative">
                <div className="md:sticky md:top-0 md:left-0 md:h-full block text-center">
                    <h2
                        className={`${data.headingColor} py-6 text-[4rem] font-[700] leading-[3rem] capitalize`}>{data?.heading}</h2>
                    <div className={`hidden py-4 px-10 lg:px-16 ${data.bgColor}  md:flex gap-6 items-center rounded-2xl mt-4`}>
                        <svg width="15%" height="55" viewBox="0 0 55 55" fill="none"  xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.2" d="M47.6223 19.409L41.25 25.7813L29.2188 13.75L35.591 7.37777C35.9133 7.05568 36.3503 6.87476 36.806 6.87476C37.2616 6.87476 37.6986 7.05568 38.0209 7.37777L47.6223 16.9727C47.7827 17.1324 47.91 17.3222 47.9969 17.5313C48.0838 17.7403 48.1285 17.9645 48.1285 18.1909C48.1285 18.4172 48.0838 18.6414 47.9969 18.8504C47.91 19.0595 47.7827 19.2493 47.6223 19.409Z" fill={data.iconColor} />
                            <path d="M48.8383 15.7631L39.2369 6.16384C38.9177 5.84455 38.5387 5.59128 38.1216 5.41848C37.7045 5.24568 37.2575 5.15674 36.806 5.15674C36.3545 5.15674 35.9074 5.24568 35.4903 5.41848C35.0732 5.59128 34.6942 5.84455 34.375 6.16384L7.88263 32.6562C7.56204 32.9743 7.30787 33.3529 7.13489 33.77C6.96191 34.1872 6.87357 34.6345 6.87502 35.0861V44.6875C6.87502 45.5992 7.23718 46.4735 7.88184 47.1181C8.52649 47.7628 9.40084 48.125 10.3125 48.125H46.4063C46.8621 48.125 47.2993 47.9439 47.6216 47.6216C47.9439 47.2992 48.125 46.8621 48.125 46.4062C48.125 45.9504 47.9439 45.5132 47.6216 45.1909C47.2993 44.8685 46.8621 44.6875 46.4063 44.6875H24.7758L48.8383 20.625C49.1576 20.3058 49.4109 19.9268 49.5837 19.5097C49.7565 19.0926 49.8454 18.6455 49.8454 18.194C49.8454 17.7425 49.7565 17.2955 49.5837 16.8784C49.4109 16.4612 49.1576 16.0823 48.8383 15.7631ZM10.3125 35.0861L29.2188 16.1799L38.8201 25.7812L19.9139 44.6875H10.3125V35.0861ZM41.25 23.3513L31.6508 13.75L36.807 8.59372L46.4063 18.1951L41.25 23.3513Z" fill={data.iconColor} />
                        </svg>
                        <p className={`font-normal lg:text-3xl text-2xl ${data.textColor}`}>Write a review</p>

                    </div>
                </div>
                <div className={`my-10 w-[100%] m-auto md:m-0 md:w-[55%] ${data.bgColor} rounded-[4.5rem] lg:p-16 p-12 ${data.textColor} flex flex-col gap-12`}>
                    {data.review.map((item, index) => (
                        <div key={index} className="star flex md:flex-row flex-col justify-between hover:scale-105 transition-all duration-200 ease-in">
                            <div className="flex flex-1 md:justify-evenly py-6 items-center gap-10">
                                <div className="w-12 h-12 rounded-[100%] bg-[#dfdfdf]"></div>
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

        </div>
    );
};


export default Section4;