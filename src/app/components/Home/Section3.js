"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
const Section3 = ({ data }) => {
    const icons = [
        { src: '/Section3/icon1.svg', alt: "" },
        { src: '/Section3/icon2.svg', alt: "" },
        { src: '/Section3/icon3.svg', alt: "" },
        { src: '/Section3/icon4.svg', alt: "" },
    ]
    const [currentIndex, setCurrentIndex] = useState(0);
    const hoverColorClass = `bg-${data.subHoverBgFeaturesColor}`;
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex === icons.length - 1 ? 0 : prevIndex + 1));
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);
    return (
        <div className={`flex flex-col ${data.bgColor} justify-between py-20 rounded-[6.5rem]`}>
            <h2 className='text-white text-[4rem] font-[700] leading-tight capitalize text-center'>{data?.subHeading}</h2>
            <h3 className={`${data.headingColor} text-[4rem] font-[700] leading-tight uppercase text-center`}>{data?.heading}</h3>
            <div className={` ${data.featureBgColor} md:w-[80%] lg:w-[50%] min-h-[45vh] md:min-h-[0hv] w-[90%] gap-5 m-auto my-[3rem] rounded-[6rem] flex-col md:flex-row p-16 md:p-0 md:pr-5 flex overflow-hidden`}>
                <div className="w-[60%] md:bg-white md:w-[40%] p-2 md:rounded-[6rem] overflow-hidden flex justify-between">
                    <motion.img
                        src={icons[currentIndex].src}
                        alt={icons[currentIndex].alt}
                        key={`img-${currentIndex}`}
                        initial={{ opacity: 0, y: ["100%"] }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className='md:m-auto md:w-[100%] w-[40%] bg-white p-5 rounded-[100%]'

                    />
                </div>
                <motion.div
                    key={`div-${currentIndex}`}
                    initial={{ opacity: 0, x: ["100%"] }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex flex-col justify-center md:w-[50%] w-[90%] md:m-auto ${data.featureTextColor}`}

                >
                    <h3 className='text-[2.5rem] font-bold leading-tight capitalize'>{data.features[currentIndex].heading}</h3>
                    <p className="text-[1.8rem] md:text-xl font-light leading-10 md:leading-6 tracking-wide">{data.features[currentIndex].text}</p>
                </motion.div>
            </div >
            <div className={`w-[95%] gap-2 md:gap-0 mx-auto my-[4rem] flex flex-wrap justify-center items-stretch ${data.subFeaturesColor}`}>
                {data.subFeatures.map((item, index) => (
                    <div key={index} className={`border-[1px] ${data.subFeaturesBorderColor} md:w-[25%] p-4 last:rounded-tr-3xl lg:last:rounded-br-3xl lg:rounded-none lg:first:rounded-tl-3xl first:rounded-bl-3xl md:min-w-[300px] rounded-3xl`}>
                        <div class={`md:hover:scale-[1.2] ${data.subHoverBgFeaturesColor} duration-200 w-full p-4  flex h-[100%] flex-col ${data.subHoverBgFeaturesColor} ${data.subHoverBgFeaturesColor} rounded-3xl`} key={index}>
                            <h3 className='text-[3.2rem] md:text-[2rem] font-[600] py-4 capitalize'>{item.heading}</h3>
                            <p className="text-2xl md:text-xl font-light leading-6 tracking-wide mb-5">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="my-[4rem] flex flex-col gap-5">
                <h3 className={`text-[4.5rem] font-[700] py-4 ${data.subTextColor} text-center`}>{data.subtext}</h3>
                <div className='flex gap-5 justify-center items-center'>
                    <svg className="w-[5%] min-w-[50px]" width="100%" height="100%" viewBox="0 0 164 163" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_217_964)">
                            <mask id="mask0_217_964" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="20" y="16" width="124" height="124">
                                <path d="M20.4854 77.5003C20.4854 43.5346 48.02 16 81.9857 16C115.951 16 143.486 43.5346 143.486 77.5003C143.486 111.466 115.951 139.001 81.9857 139.001C48.02 139.001 20.4854 111.466 20.4854 77.5003Z" fill="#F1F1F1" />
                            </mask>
                            <g mask="url(#mask0_217_964)">
                                <path d="M30.2532 16.0001V91.4746H57.7745L81.9863 49.542H143.486V16.0001H30.2532ZM30.2532 16.0001V91.4746H57.7745L81.9863 49.542H143.486V16.0001H30.2532Z" fill="#DB4437" />
                                <path d="M20.4854 139H79.0235L106.197 111.826V91.4818L57.7735 91.474L20.4854 27.5214V139ZM20.4854 139H79.0235L106.197 111.826V91.4818L57.7735 91.474L20.4854 27.5214V139Z" fill="#0F9D58" />
                                <path d="M81.9851 49.5414L106.197 91.4739L79.031 139.001H143.485V49.5414H81.9851ZM81.9851 49.5414L106.197 91.4739L79.031 139.001H143.485V49.5414H81.9851Z" fill="#FFCD40" />
                                <path d="M81.9842 49.5413C97.4255 49.5413 109.942 62.0594 109.942 77.4994C109.942 92.9406 97.4255 105.459 81.9842 105.459C66.543 105.459 54.0262 92.9406 54.0262 77.4994C54.0262 62.0594 66.543 49.5413 81.9842 49.5413Z" fill="#F1F1F1" />
                                <path d="M81.9845 55.1333C94.3372 55.1333 104.351 65.147 104.351 77.4998C104.351 89.8525 94.3372 99.8662 81.9845 99.8662C69.6317 99.8662 59.618 89.8525 59.618 77.4998C59.618 65.147 69.6317 55.1333 81.9845 55.1333Z" fill="#4285F4" />
                            </g>
                            <defs>
                                <filter id="filter0_d_217_964" x="0.485352" y="0" width="163.001" height="163.001" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="10" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_217_964" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_217_964" result="shape" />
                                </filter>
                            </defs>
                        </g>
                    </svg>
                    <svg className="w-[3.5%] min-w-[40px]" width="100%" height="100%" viewBox="0 0 120 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M115.227 41.2565C112.637 35.0264 107.391 28.3004 103.272 26.1745C106.625 32.747 108.565 39.3402 109.306 44.2607C109.306 44.2704 109.31 44.2945 109.318 44.3599C102.579 27.5639 91.153 20.7912 81.8224 6.04466C81.3513 5.299 80.8789 4.55136 80.4187 3.7633C80.1843 3.36083 79.9654 2.94944 79.7625 2.53037C79.3749 1.78198 79.0759 0.990942 78.8715 0.173122C78.8745 0.0932742 78.8152 0.0235934 78.7361 0.0134264C78.6997 0.0030115 78.6608 0.0030115 78.6243 0.0134264C78.6159 0.0164021 78.6035 0.0260731 78.5946 0.0295448C78.5814 0.0347522 78.5648 0.046655 78.5509 0.0543422C78.5576 0.0454151 78.5715 0.0253292 78.5757 0.0206177C63.6055 8.788 58.527 25.0068 58.0603 33.1212C52.0831 33.5321 46.3661 35.7351 41.6588 39.4416C41.1658 39.0253 40.6505 38.6362 40.1151 38.2761C38.757 33.5242 38.6992 28.4938 39.948 23.7121C33.826 26.4996 29.0644 30.9058 25.6027 34.7965H25.5751C23.2127 31.8042 23.3793 21.9334 23.514 19.8725C23.4857 19.7447 21.7516 20.7726 21.5245 20.9276C19.4398 22.4157 17.4909 24.0853 15.7006 25.9168C13.6632 27.983 11.8019 30.2152 10.1355 32.5906C10.1355 32.5935 10.1338 32.597 10.1328 32.6C10.1328 32.5968 10.1345 32.5935 10.1355 32.5906C6.30357 38.021 3.58552 44.1573 2.13909 50.6443C2.11057 50.7735 2.08651 50.9074 2.05874 51.0376C1.94666 51.5623 1.54295 54.1869 1.47228 54.7572C1.46683 54.8011 1.46435 54.8433 1.45914 54.8872C0.937153 57.6008 0.614043 60.3488 0.492039 63.1093C0.492039 63.2109 0.48584 63.3116 0.48584 63.4135C0.486832 96.323 27.1689 123.001 60.081 123.001C89.5565 123.001 114.03 101.603 118.822 73.4974C118.923 72.7346 119.003 71.9679 119.092 71.1984C120.277 60.9794 118.961 50.2384 115.227 41.2565ZM46.5396 87.899C46.8184 88.0322 47.0802 88.1777 47.3664 88.3055C47.3783 88.3136 47.3947 88.3228 47.4068 88.3303C47.1154 88.1909 46.8266 88.0473 46.5396 87.899ZM109.323 44.3746L109.315 44.3168C109.318 44.3379 109.322 44.3599 109.325 44.381L109.323 44.3746Z" fill="url(#paint0_linear_217_973)" />
                        <path d="M115.227 41.2559C112.637 35.0258 107.391 28.2997 103.271 26.1738C106.624 32.7464 108.564 39.3395 109.306 44.2601C109.306 44.2457 109.309 44.272 109.315 44.3161C109.318 44.3372 109.321 44.3593 109.325 44.3804C114.947 59.6233 111.884 75.1237 107.47 84.5956C100.641 99.2509 84.1071 114.271 58.2283 113.538C30.2679 112.746 5.63562 92.0001 1.03743 64.8276C0.199525 60.5426 1.03743 58.3669 1.45899 54.8878C0.945432 57.5699 0.74978 58.3445 0.491887 63.1099C0.491887 63.2115 0.485687 63.3122 0.485687 63.4141C0.486183 96.3223 27.1682 123 60.0804 123C89.5559 123 114.03 101.603 118.821 73.4968C118.922 72.734 119.003 71.9673 119.092 71.1978C120.276 60.9788 118.96 50.2378 115.227 41.2559Z" fill="url(#paint1_radial_217_973)" />
                        <path d="M115.227 41.2559C112.637 35.0258 107.391 28.2997 103.271 26.1738C106.624 32.7464 108.564 39.3395 109.306 44.2601C109.306 44.2457 109.309 44.272 109.315 44.3161C109.318 44.3372 109.321 44.3593 109.325 44.3804C114.947 59.6233 111.884 75.1237 107.47 84.5956C100.641 99.2509 84.1071 114.271 58.2283 113.538C30.2679 112.746 5.63562 92.0001 1.03743 64.8276C0.199525 60.5426 1.03743 58.3669 1.45899 54.8878C0.945432 57.5699 0.74978 58.3445 0.491887 63.1099C0.491887 63.2115 0.485687 63.3122 0.485687 63.4141C0.486183 96.3223 27.1682 123 60.0804 123C89.5559 123 114.03 101.603 118.821 73.4968C118.922 72.734 119.003 71.9673 119.092 71.1978C120.276 60.9788 118.96 50.2378 115.227 41.2559Z" fill="url(#paint2_radial_217_973)" />
                        <path d="M86.2757 48.2605C86.4057 48.3518 86.5237 48.4425 86.6459 48.5333C85.1504 45.8789 83.2879 43.4486 81.1136 41.3142C62.5887 22.7915 76.2561 1.15179 78.561 0.0527675C78.5677 0.0438404 78.5816 0.0237545 78.5858 0.019043C63.6156 8.78643 58.5371 25.0052 58.0704 33.1197C58.7647 33.0716 59.457 33.0133 60.1638 33.0133C71.3353 33.0133 81.0653 39.1556 86.2757 48.2605Z" fill="url(#paint3_radial_217_973)" />
                        <path d="M60.1796 51.9606C60.0821 53.443 54.8447 58.555 53.0131 58.555C36.0668 58.555 33.316 68.805 33.316 68.805C34.0666 77.437 40.076 84.5452 47.3541 88.3065C47.6861 88.4781 48.0221 88.6331 48.3584 88.7863C48.9349 89.0415 49.5187 89.2803 50.1088 89.502C52.6042 90.3855 55.2181 90.8896 57.8632 90.9975C87.5656 92.3906 93.3201 55.4891 71.885 44.7731C77.3744 43.8184 83.0723 46.0261 86.2543 48.2614C81.0439 39.1572 71.3139 33.0149 60.1426 33.0149C59.4359 33.0149 58.7438 33.0732 58.0492 33.1213C52.0721 33.5322 46.355 35.7352 41.6477 39.4416C42.5563 40.2104 43.5819 41.238 45.7428 43.3666C49.7852 47.3508 60.1575 51.4766 60.1796 51.9606Z" fill="url(#paint4_radial_217_973)" />
                        <path d="M60.1796 51.9606C60.0821 53.443 54.8447 58.555 53.0131 58.555C36.0668 58.555 33.316 68.805 33.316 68.805C34.0666 77.437 40.076 84.5452 47.3541 88.3065C47.6861 88.4781 48.0221 88.6331 48.3584 88.7863C48.9349 89.0415 49.5187 89.2803 50.1088 89.502C52.6042 90.3855 55.2181 90.8896 57.8632 90.9975C87.5656 92.3906 93.3201 55.4891 71.885 44.7731C77.3744 43.8184 83.0723 46.0261 86.2543 48.2614C81.0439 39.1572 71.3139 33.0149 60.1426 33.0149C59.4359 33.0149 58.7438 33.0732 58.0492 33.1213C52.0721 33.5322 46.355 35.7352 41.6477 39.4416C42.5563 40.2104 43.5819 41.238 45.7428 43.3666C49.7852 47.3508 60.1575 51.4766 60.1796 51.9606Z" fill="url(#paint5_radial_217_973)" />
                        <path d="M38.8726 37.4603C39.2877 37.7281 39.6993 38.0009 40.1077 38.2786C38.7496 33.5267 38.6918 28.4963 39.9406 23.7146C33.8186 26.5021 29.057 30.9083 25.5953 34.7991C25.8817 34.7909 34.5258 34.6354 38.8726 37.4603Z" fill="url(#paint6_radial_217_973)" />
                        <path d="M1.04831 64.8303C5.6465 92.0028 30.2788 112.749 58.2392 113.541C84.118 114.273 100.652 99.2526 107.481 84.5983C111.895 75.1257 114.958 59.6273 109.336 44.3831L109.334 44.3766L109.326 44.3188C109.319 44.2747 109.316 44.2484 109.317 44.2628C109.317 44.2725 109.32 44.2965 109.328 44.362C111.442 58.1645 104.421 71.536 93.4453 80.5772L93.4123 80.6548C72.0258 98.0683 51.5607 91.161 47.417 88.3335C47.1259 88.1934 46.8365 88.0494 46.5491 87.9013C34.0805 81.9428 28.9296 70.5833 30.034 60.8414C19.5058 60.8414 15.9159 51.9617 15.9159 51.9617C15.9159 51.9617 25.3684 45.222 37.8264 51.0836C49.3646 56.5125 60.2006 51.9621 60.2019 51.9617C60.1798 51.4776 49.8075 47.3518 45.7641 43.3678C43.6035 41.2392 42.5776 40.2129 41.669 39.4429C41.176 39.0266 40.6607 38.6375 40.1254 38.2774C39.7165 38.0002 39.3048 37.7274 38.8902 37.4591C34.5437 34.6342 25.8993 34.7897 25.6129 34.7971H25.5854C23.2229 31.8048 23.3896 21.9339 23.5242 19.873C23.4959 19.7453 21.7619 20.7732 21.5347 20.9281C19.45 22.4162 17.5012 24.0859 15.7108 25.9174C13.6734 27.984 11.8119 30.2168 10.1457 32.5926C10.1457 32.5956 10.144 32.5991 10.143 32.602C10.143 32.5988 10.1448 32.5956 10.1457 32.5926C6.3138 38.023 3.59575 44.1594 2.14932 50.6464C2.1208 50.7756 0.00433862 60.0302 1.04831 64.8303Z" fill="url(#paint7_radial_217_973)" />
                        <path d="M81.0997 41.3146C83.274 43.4489 85.1365 45.8793 86.6321 48.5336C86.9601 48.7801 87.2666 49.0258 87.5267 49.2656C101.037 61.7139 93.9582 79.3201 93.4303 80.5748C104.406 71.5337 111.427 58.1622 109.313 44.3597C102.575 27.5639 91.1482 20.7912 81.8176 6.04466C81.3465 5.299 80.8741 4.55136 80.4138 3.76329C80.1795 3.36083 79.9605 2.94944 79.7577 2.53037C79.3701 1.78198 79.0711 0.990941 78.8667 0.173122C78.8697 0.0932742 78.8104 0.0235934 78.7313 0.0134264C78.6949 0.0030115 78.656 0.0030115 78.6195 0.0134264C78.6111 0.0164021 78.5987 0.0260731 78.5897 0.0295448C78.5766 0.0347522 78.56 0.046655 78.5461 0.0543422C76.2422 1.15237 62.5748 22.7921 81.0997 41.3146Z" fill="url(#paint8_radial_217_973)" />
                        <path d="M87.5196 49.2681C87.2594 49.0283 86.953 48.7825 86.6249 48.536C86.5036 48.4448 86.3846 48.354 86.2547 48.2633C83.0726 46.028 77.3747 43.8203 71.8853 44.775C93.3204 55.491 87.5659 92.3925 57.8636 90.9994C55.2184 90.8915 52.6045 90.3874 50.1091 89.5039C49.519 89.2819 48.9352 89.0434 48.3587 88.7882C48.0224 88.635 47.6864 88.48 47.3544 88.3084C47.3663 88.3166 47.3827 88.3257 47.3948 88.3332C51.5385 91.1601 72.0036 98.0679 93.3901 80.6544L93.4231 80.5768C93.951 79.3235 101.03 61.7166 87.5196 49.2681Z" fill="url(#paint9_radial_217_973)" />
                        <path d="M33.3214 68.8062C33.3214 68.8062 36.0722 58.5562 53.0185 58.5562C54.8506 58.5562 60.088 53.4442 60.185 51.9618C60.282 50.4794 49.3485 56.5126 37.8095 51.0837C25.3516 45.2221 15.899 51.9618 15.899 51.9618C15.899 51.9618 19.4889 60.8415 30.0172 60.8415C28.913 70.5835 34.0639 81.9442 46.5323 87.9015C46.811 88.0347 47.0729 88.1802 47.359 88.308C40.0815 84.5464 34.0721 77.4382 33.3214 68.8062Z" fill="url(#paint10_radial_217_973)" />
                        <path d="M115.226 41.2565C112.636 35.0264 107.39 28.3004 103.271 26.1745C106.624 32.747 108.564 39.3402 109.305 44.2607C109.305 44.2704 109.309 44.2945 109.317 44.3599C102.578 27.5639 91.152 20.7912 81.8214 6.04466C81.3503 5.299 80.8779 4.55136 80.4177 3.7633C80.1833 3.36083 79.9644 2.94944 79.7615 2.53037C79.3739 1.78198 79.0749 0.990942 78.8706 0.173122C78.8735 0.0932742 78.8143 0.0235934 78.7352 0.0134264C78.6987 0.0030115 78.6598 0.0030115 78.6233 0.0134264C78.6149 0.0164021 78.6025 0.0260731 78.5936 0.0295448C78.5804 0.0347522 78.5638 0.046655 78.5499 0.0543422C78.5566 0.0454151 78.5705 0.0253292 78.5747 0.0206177C63.6045 8.788 58.526 25.0068 58.0593 33.1212C58.7536 33.0731 59.446 33.0149 60.1527 33.0149C71.3247 33.0149 81.0547 39.1572 86.2644 48.2613C83.0824 46.0261 77.3844 43.8184 71.895 44.7731C93.3302 55.489 87.5757 92.3906 57.8733 90.9975C55.2282 90.8896 52.6143 90.3855 50.1189 89.5019C49.5287 89.28 48.945 89.0414 48.3685 88.7863C48.0322 88.633 47.6962 88.478 47.3642 88.3064C47.3761 88.3146 47.3924 88.3238 47.4046 88.3312C47.1135 88.1911 46.8241 88.0471 46.5367 87.899C46.8154 88.0322 47.0773 88.1777 47.3634 88.3055C40.0854 84.5442 34.076 77.436 33.3253 68.804C33.3253 68.804 36.0761 58.554 53.0224 58.554C54.8545 58.554 60.0919 53.442 60.1889 51.9596C60.1668 51.4756 49.7946 47.3498 45.7511 43.3658C43.5905 41.2372 42.5646 40.2108 41.656 39.4409C41.1631 39.0245 40.6478 38.6354 40.1124 38.2754C38.7542 33.5234 38.6965 28.493 39.9453 23.7113C33.8233 26.4988 29.0617 30.9051 25.5999 34.7958H25.5724C23.21 31.8035 23.3766 21.9326 23.5113 19.8717C23.483 19.744 21.7489 20.7719 21.5218 20.9268C19.437 22.4149 17.4882 24.0845 15.6978 25.9161C13.6612 27.9825 11.8002 30.215 10.1345 32.5906C10.1345 32.5935 10.1328 32.597 10.1318 32.6C10.1318 32.5968 10.1335 32.5935 10.1345 32.5906C6.30258 38.021 3.58453 44.1573 2.13809 50.6443C2.10958 50.7735 2.08552 50.9074 2.05775 51.0376C1.94567 51.5623 1.44129 54.2248 1.37086 54.7959C1.36541 54.8398 1.37607 54.7523 1.37086 54.7959C0.910868 57.5472 0.617514 60.3238 0.492039 63.1105C0.492039 63.2122 0.48584 63.3129 0.48584 63.4148C0.48584 96.323 27.1679 123.001 60.08 123.001C89.5555 123.001 114.029 101.603 118.821 73.4974C118.922 72.7346 119.002 71.9679 119.092 71.1984C120.276 60.9794 118.96 50.2384 115.226 41.2565ZM109.314 44.3168C109.317 44.3379 109.321 44.3599 109.324 44.381L109.322 44.3746L109.314 44.3168Z" fill="url(#paint11_linear_217_973)" />
                        <defs>
                            <linearGradient id="paint0_linear_217_973" x1="104.338" y1="19.0698" x2="11.6745" y2="114.514" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FFF44F" />
                                <stop offset="0.05" stopColor="#FFF44F" />
                                <stop offset="0.37" stopColor="#FF980E" />
                                <stop offset="0.53" stopColor="#FF3647" />
                                <stop offset="0.7" stopColor="#E31587" />
                                <stop offset="1" stopColor="#E31587" />
                            </linearGradient>
                            <radialGradient id="paint1_radial_217_973" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(104.733 13.6833) scale(152.356 152.356)">
                                <stop stopColor="#FFBD4F" />
                                <stop offset="0.13" stopColor="#FFBD4F" />
                                <stop offset="0.28" stopColor="#FF980E" />
                                <stop offset="0.47" stopColor="#FF3750" />
                                <stop offset="0.78" stopColor="#EB0878" />
                                <stop offset="0.86" stopColor="#E50080" />
                                <stop offset="1" stopColor="#E50080" />
                            </radialGradient>
                            <radialGradient id="paint2_radial_217_973" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(58.931 65.0034) scale(152.356 152.356)">
                                <stop stopColor="#960E18" />
                                <stop offset="0.3" stopColor="#960E18" />
                                <stop offset="0.35" stopColor="#B11927" stopOpacity="0.74" />
                                <stop offset="0.43" stopColor="#DB293D" stopOpacity="0.34" />
                                <stop offset="0.5" stopColor="#F5334B" stopOpacity="0.09" />
                                <stop offset="0.53" stopColor="#FF3750" stopOpacity="0" />
                                <stop offset="1" stopColor="#FF3750" stopOpacity="0" />
                            </radialGradient>
                            <radialGradient id="paint3_radial_217_973" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(71.7866 -5.80266) scale(67.9199 67.92)">
                                <stop stopColor="#FFF44F" />
                                <stop offset="0.13" stopColor="#FFF44F" />
                                <stop offset="0.53" stopColor="#FF980E" />
                                <stop offset="1" stopColor="#FF980E" />
                            </radialGradient>
                            <radialGradient id="paint4_radial_217_973" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(45.3648 96.9018) scale(58.0211 58.0211)">
                                <stop stopColor="#3A8EE6" />
                                <stop offset="0.35" stopColor="#3A8EE6" />
                                <stop offset="0.67" stopColor="#9059FF" />
                                <stop offset="1" stopColor="#C139E6" />
                            </radialGradient>
                            <radialGradient id="paint5_radial_217_973" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(54.4102 52.1617) scale(30.8091 34.2324)">
                                <stop stopColor="#9059FF" stopOpacity="0" />
                                <stop offset="0.21" stopColor="#9059FF" stopOpacity="0" />
                                <stop offset="0.97" stopColor="#6E008B" stopOpacity="0.6" />
                                <stop offset="1" stopColor="#6E008B" stopOpacity="0.6" />
                            </radialGradient>
                            <radialGradient id="paint6_radial_217_973" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(56.0713 9.15057) scale(42.2358)">
                                <stop stopColor="#FFE226" />
                                <stop offset="0.1" stopColor="#FFE226" />
                                <stop offset="0.79" stopColor="#FF7139" />
                                <stop offset="1" stopColor="#FF7139" />
                            </radialGradient>
                            <radialGradient id="paint7_radial_217_973" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(94.5257 -18.5568) scale(200.928 200.928)">
                                <stop stopColor="#FFF44F" />
                                <stop offset="0.11" stopColor="#FFF44F" />
                                <stop offset="0.46" stopColor="#FF980E" />
                                <stop offset="0.72" stopColor="#FF3647" />
                                <stop offset="0.9" stopColor="#E31587" />
                                <stop offset="1" stopColor="#E31587" />
                            </radialGradient>
                            <radialGradient id="paint8_radial_217_973" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(77.7142 -15.0274) scale(281.027 281.027)">
                                <stop stopColor="#FFF44F" />
                                <stop offset="0.3" stopColor="#FF980E" />
                                <stop offset="0.57" stopColor="#FF3647" />
                                <stop offset="0.74" stopColor="#E31587" />
                                <stop offset="1" stopColor="#E31587" />
                            </radialGradient>
                            <radialGradient id="paint9_radial_217_973" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(56.5002 24.3421) scale(115.362 115.362)">
                                <stop stopColor="#FFF44F" />
                                <stop offset="0.14" stopColor="#FFF44F" />
                                <stop offset="0.48" stopColor="#FF980E" />
                                <stop offset="0.66" stopColor="#FF3647" />
                                <stop offset="0.9" stopColor="#E31587" />
                                <stop offset="1" stopColor="#E31587" />
                            </radialGradient>
                            <radialGradient id="paint10_radial_217_973" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(86.4477 30.9703) scale(138.662 138.662)">
                                <stop stopColor="#FFF44F" />
                                <stop offset="0.09" stopColor="#FFF44F" />
                                <stop offset="0.63" stopColor="#FF980E" />
                                <stop offset="1" stopColor="#FF980E" />
                            </radialGradient>
                            <linearGradient id="paint11_linear_217_973" x1="95.708" y1="17.2249" x2="21.9109" y2="103.321" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FFF44F" stopOpacity="0.8" />
                                <stop offset="0.17" stopColor="#FFF44F" stopOpacity="0.8" />
                                <stop offset="0.6" stopColor="#FFF44F" stopOpacity="0" />
                                <stop offset="1" stopColor="#FFF44F" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
            <p className={`w-[75%] md:w-[55%] m-auto text-[1.8rem] md:text-xl font-light md:leading-6 leading-10 tracking-wide mb-5 text-center ${data.textColor}`}>{data.text}</p>
        </div>
    )
}

export default Section3;