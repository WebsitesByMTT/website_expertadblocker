"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = ({ data }) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(prev => !prev);
    }

    const mobileNavData = [
        {
            text: 'Blogs',
            Link: '/blogs'
        },
        {
            text: 'About Us',
            Link: '/about-us'
        },
        {
            text: 'Contact Us',
            Link: '/contact-us'
        }
    ]

    return (
        <div className={`p-8 px-12 md:px-12 lg:px-28 md:pt-10 pb-3 flex justify-between items-center relative ${data.bgColor}`}>
            <a href="/">
                <svg className='max-w-[15rem] md:max-w-[8.5rem]' width="136" height="54" viewBox="0 0 136 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.3886 33H1.44443C1.22221 33 1.02776 32.9167 0.8611 32.75C0.694435 32.5833 0.611103 32.3889 0.611103 32.1667V12.0558C0.611103 11.8336 0.694435 11.6392 0.8611 11.4725C1.02776 11.3058 1.22221 11.2225 1.44443 11.2225H17.6387C17.8609 11.2225 18.0553 11.3058 18.222 11.4725C18.3886 11.6392 18.472 11.8336 18.472 12.0558V16.1113C18.472 16.3521 18.3886 16.5558 18.222 16.7224C18.0553 16.8891 17.8609 16.9724 17.6387 16.9724H8.30545V19.1946H16.2776C16.4998 19.1946 16.6942 19.278 16.8609 19.4446C17.0276 19.6113 17.1109 19.8057 17.1109 20.0279V24.0279C17.1109 24.2686 17.0276 24.4723 16.8609 24.639C16.6942 24.8057 16.4998 24.889 16.2776 24.889L8.30545 24.9168V27.2501H18.3886C18.6294 27.2501 18.8238 27.3334 18.972 27.5001C19.1386 27.6667 19.222 27.8704 19.222 28.1112V32.1667C19.222 32.3889 19.1386 32.5833 18.972 32.75C18.8238 32.9167 18.6294 33 18.3886 33ZM40.3847 11.2225H46.8568C47.2642 11.2225 47.542 11.3892 47.6901 11.7225C47.8383 12.0373 47.7827 12.3429 47.5235 12.6392L39.718 21.6113L47.7735 31.6389C47.9957 31.9352 48.0327 32.2408 47.8846 32.5556C47.7549 32.8519 47.4957 33 47.1068 33H40.0791C39.9865 33 39.8569 32.963 39.6902 32.8889C39.5421 32.8148 39.4402 32.7407 39.3847 32.6667L34.2181 26.1945L28.5515 32.6944C28.5145 32.7685 28.4219 32.8426 28.2737 32.9167C28.1256 32.9722 28.0052 33 27.9126 33H21.3571C21.1534 33 20.9775 32.9537 20.8294 32.8611C20.6997 32.7685 20.5979 32.6574 20.5238 32.5278C20.4683 32.3796 20.4497 32.2315 20.4683 32.0833C20.4868 31.9167 20.5609 31.7593 20.6905 31.6111L29.3848 21.6113L21.246 12.6392C21.1164 12.491 21.0331 12.3336 20.996 12.1669C20.9775 12.0003 20.996 11.8521 21.0516 11.7225C21.1257 11.5744 21.2275 11.454 21.3571 11.3614C21.5053 11.2688 21.6812 11.2225 21.8849 11.2225H29.1904C29.283 11.2225 29.3941 11.2595 29.5237 11.3336C29.6718 11.3892 29.7644 11.4447 29.8015 11.5003L34.857 17.0002L39.7458 11.5003C39.7828 11.4447 39.8754 11.3892 40.0236 11.3336C40.1717 11.2595 40.2921 11.2225 40.3847 11.2225ZM59.6937 25.2501L56.8326 25.2223V32.1667C56.8326 32.3889 56.7493 32.5833 56.5826 32.75C56.4159 32.9167 56.2122 33 55.9715 33H50.0827C49.8605 33 49.6568 32.9167 49.4716 32.75C49.3049 32.5833 49.2216 32.3889 49.2216 32.1667V12.0558C49.2216 11.8336 49.3049 11.6392 49.4716 11.4725C49.6382 11.3058 49.8327 11.2225 50.0549 11.2225H58.2492C60.0085 11.2225 61.5547 11.3521 62.8881 11.6114C64.2214 11.8521 65.3325 12.2503 66.2214 12.8058C67.1102 13.3614 67.7769 14.0836 68.2213 14.9725C68.6843 15.8428 68.9158 16.8984 68.9158 18.1391C68.9158 20.602 68.138 22.4168 66.5825 23.5835C65.0269 24.7316 62.7307 25.2871 59.6937 25.2501ZM58.4159 16.1947L56.8048 16.3058V20.2502L58.2215 20.3057C60.4622 20.3983 61.5825 19.7224 61.5825 18.278C61.5825 17.5743 61.3048 17.0372 60.7492 16.6669C60.1937 16.278 59.4159 16.1206 58.4159 16.1947ZM87.9136 33H70.9693C70.7471 33 70.5527 32.9167 70.386 32.75C70.2194 32.5833 70.136 32.3889 70.136 32.1667V12.0558C70.136 11.8336 70.2194 11.6392 70.386 11.4725C70.5527 11.3058 70.7471 11.2225 70.9693 11.2225H87.1636C87.3858 11.2225 87.5802 11.3058 87.7469 11.4725C87.9136 11.6392 87.9969 11.8336 87.9969 12.0558V16.1113C87.9969 16.3521 87.9136 16.5558 87.7469 16.7224C87.5802 16.8891 87.3858 16.9724 87.1636 16.9724H77.8304V19.1946H85.8025C86.0247 19.1946 86.2191 19.278 86.3858 19.4446C86.5525 19.6113 86.6358 19.8057 86.6358 20.0279V24.0279C86.6358 24.2686 86.5525 24.4723 86.3858 24.639C86.2191 24.8057 86.0247 24.889 85.8025 24.889L77.8304 24.9168V27.2501H87.9136C88.1543 27.2501 88.3487 27.3334 88.4969 27.5001C88.6636 27.6667 88.7469 27.8704 88.7469 28.1112V32.1667C88.7469 32.3889 88.6636 32.5833 88.4969 32.75C88.3487 32.9167 88.1543 33 87.9136 33ZM100.521 25.3057H97.8264V32.1667C97.8264 32.3889 97.7431 32.5833 97.5764 32.75C97.4097 32.9167 97.206 33 96.9653 33H90.7987C90.5765 33 90.3821 32.9167 90.2154 32.75C90.0487 32.5833 89.9654 32.3889 89.9654 32.1667V12.0558C89.9654 11.8336 90.0487 11.6392 90.2154 11.4725C90.3821 11.3058 90.5765 11.2225 90.7987 11.2225H104.743C107.132 11.2225 109.048 11.7503 110.493 12.8058C112.048 13.954 112.826 15.4632 112.826 17.3335C112.826 19.4446 112.187 20.9724 110.91 21.9168C110.595 22.1575 110.224 22.389 109.798 22.6112C109.391 22.8149 108.937 23.0001 108.437 23.1668C109.03 23.4816 109.53 23.8242 109.937 24.1946C110.363 24.5649 110.715 24.9353 110.993 25.3057L114.798 31.7222C114.984 32.037 114.993 32.3333 114.826 32.6111C114.678 32.8704 114.428 33 114.076 33H107.021C106.873 33 106.724 32.9537 106.576 32.8611C106.447 32.7685 106.345 32.6574 106.271 32.5278L102.715 25.9168L102.743 25.9723C102.669 25.8797 102.586 25.7871 102.493 25.6945C102.419 25.6019 102.336 25.5279 102.243 25.4723C102.095 25.3612 101.521 25.3057 100.521 25.3057ZM101.993 16.1947H97.6597V20.3335H100.993C102.345 20.3335 103.373 20.1761 104.076 19.8613C104.78 19.5465 105.132 18.9817 105.132 18.1669C105.132 17.4817 104.863 16.9817 104.326 16.6669C103.789 16.3521 103.012 16.1947 101.993 16.1947ZM127.531 33H121.448C121.225 33 121.031 32.9167 120.864 32.75C120.698 32.5833 120.614 32.3889 120.614 32.1667V16.6947H114.864C114.624 16.6947 114.42 16.6113 114.253 16.4447C114.105 16.278 114.031 16.0743 114.031 15.8336V12.0558C114.031 11.8336 114.105 11.6392 114.253 11.4725C114.42 11.3058 114.624 11.2225 114.864 11.2225H134.086C134.327 11.2225 134.531 11.3058 134.697 11.4725C134.864 11.6392 134.947 11.8336 134.947 12.0558V15.8336C134.947 16.0743 134.864 16.278 134.697 16.4447C134.531 16.6113 134.327 16.6947 134.086 16.6947H128.364V32.1667C128.364 32.3889 128.281 32.5833 128.114 32.75C127.966 32.9167 127.772 33 127.531 33Z" fill={data.logoColor} />
                    <path d="M31.1672 50.1447H29.9932L33.3887 40.8975H34.5446L37.9401 50.1447H36.7661L34.0028 42.3604H33.9305L31.1672 50.1447ZM31.6007 46.5325H36.3326V47.5258H31.6007V46.5325ZM42.234 50.1447H39.3804V40.8975H42.3605C43.2575 40.8975 44.0251 41.0826 44.6632 41.4528C45.3014 41.8201 45.7905 42.3484 46.1307 43.0377C46.4708 43.724 46.6409 44.5458 46.6409 45.503C46.6409 46.4662 46.4693 47.2955 46.1262 47.9909C45.783 48.6832 45.2833 49.216 44.6271 49.5893C43.9709 49.9595 43.1732 50.1447 42.234 50.1447ZM40.5002 49.1513H42.1618C42.9264 49.1513 43.56 49.0038 44.0627 48.7088C44.5654 48.4138 44.9402 47.9939 45.187 47.4491C45.4338 46.9042 45.5572 46.2555 45.5572 45.503C45.5572 44.7565 45.4353 44.1138 45.1915 43.575C44.9477 43.0332 44.5835 42.6178 44.0988 42.3288C43.6142 42.0368 43.0107 41.8908 42.2882 41.8908H40.5002V49.1513ZM48.5192 50.1447V40.8975H51.7521C52.3963 40.8975 52.9276 41.0088 53.346 41.2316C53.7644 41.4513 54.076 41.7478 54.2807 42.1211C54.4854 42.4913 54.5877 42.9022 54.5877 43.3537C54.5877 43.7511 54.517 44.0792 54.3755 44.3381C54.237 44.5969 54.0534 44.8016 53.8246 44.9521C53.5989 45.1026 53.3535 45.214 53.0886 45.2863V45.3766C53.3716 45.3946 53.6561 45.494 53.942 45.6746C54.228 45.8552 54.4673 46.1141 54.6599 46.4512C54.8526 46.7883 54.9489 47.2007 54.9489 47.6884C54.9489 48.1519 54.8436 48.5688 54.6329 48.9391C54.4221 49.3093 54.0895 49.6028 53.635 49.8196C53.1805 50.0363 52.589 50.1447 51.8605 50.1447H48.5192ZM49.639 49.1513H51.8605C52.592 49.1513 53.1112 49.0098 53.4183 48.7269C53.7283 48.4409 53.8833 48.0947 53.8833 47.6884C53.8833 47.3753 53.8036 47.0863 53.644 46.8214C53.4845 46.5535 53.2572 46.3398 52.9622 46.1803C52.6672 46.0177 52.3181 45.9365 51.9147 45.9365H49.639V49.1513ZM49.639 44.9612H51.716C52.0532 44.9612 52.3572 44.8949 52.6281 44.7625C52.902 44.6301 53.1188 44.4434 53.2783 44.2026C53.4408 43.9618 53.5221 43.6788 53.5221 43.3537C53.5221 42.9474 53.3806 42.6027 53.0977 42.3198C52.8147 42.0338 52.3662 41.8908 51.7521 41.8908H49.639V44.9612ZM56.7889 50.1447V40.8975H57.9087V49.1513H62.2072V50.1447H56.7889ZM71.3832 45.5211C71.3832 46.4963 71.2071 47.3392 70.855 48.0496C70.5028 48.76 70.0196 49.3078 69.4056 49.6931C68.7915 50.0784 68.0901 50.2711 67.3015 50.2711C66.5128 50.2711 65.8114 50.0784 65.1974 49.6931C64.5833 49.3078 64.1002 48.76 63.748 48.0496C63.3958 47.3392 63.2197 46.4963 63.2197 45.5211C63.2197 44.5458 63.3958 43.7029 63.748 42.9925C64.1002 42.2821 64.5833 41.7343 65.1974 41.349C65.8114 40.9637 66.5128 40.771 67.3015 40.771C68.0901 40.771 68.7915 40.9637 69.4056 41.349C70.0196 41.7343 70.5028 42.2821 70.855 42.9925C71.2071 43.7029 71.3832 44.5458 71.3832 45.5211ZM70.2996 45.5211C70.2996 44.7204 70.1656 44.0446 69.8977 43.4937C69.6328 42.9429 69.2731 42.526 68.8186 42.243C68.3671 41.96 67.8614 41.8186 67.3015 41.8186C66.7416 41.8186 66.2344 41.96 65.7798 42.243C65.3283 42.526 64.9686 42.9429 64.7007 43.4937C64.4358 44.0446 64.3034 44.7204 64.3034 45.5211C64.3034 46.3218 64.4358 46.9975 64.7007 47.5484C64.9686 48.0993 65.3283 48.5162 65.7798 48.7991C66.2344 49.0821 66.7416 49.2235 67.3015 49.2235C67.8614 49.2235 68.3671 49.0821 68.8186 48.7991C69.2731 48.5162 69.6328 48.0993 69.8977 47.5484C70.1656 46.9975 70.2996 46.3218 70.2996 45.5211ZM80.7072 43.7872H79.5874C79.5212 43.4651 79.4053 43.1822 79.2397 42.9383C79.0772 42.6945 78.8785 42.4898 78.6437 42.3243C78.4119 42.1557 78.1546 42.0293 77.8716 41.945C77.5887 41.8607 77.2937 41.8186 76.9866 41.8186C76.4267 41.8186 75.9195 41.96 75.465 42.243C75.0135 42.526 74.6538 42.9429 74.3859 43.4937C74.121 44.0446 73.9885 44.7204 73.9885 45.5211C73.9885 46.3218 74.121 46.9975 74.3859 47.5484C74.6538 48.0993 75.0135 48.5162 75.465 48.7991C75.9195 49.0821 76.4267 49.2235 76.9866 49.2235C77.2937 49.2235 77.5887 49.1814 77.8716 49.0971C78.1546 49.0128 78.4119 48.8879 78.6437 48.7224C78.8785 48.5538 79.0772 48.3476 79.2397 48.1038C79.4053 47.8569 79.5212 47.574 79.5874 47.2549H80.7072C80.6229 47.7275 80.4694 48.1504 80.2466 48.5237C80.0239 48.8969 79.7469 49.2145 79.4158 49.4764C79.0847 49.7353 78.713 49.9324 78.3006 50.0679C77.8912 50.2034 77.4532 50.2711 76.9866 50.2711C76.198 50.2711 75.4966 50.0784 74.8825 49.6931C74.2685 49.3078 73.7853 48.76 73.4331 48.0496C73.081 47.3392 72.9049 46.4963 72.9049 45.5211C72.9049 44.5458 73.081 43.7029 73.4331 42.9925C73.7853 42.2821 74.2685 41.7343 74.8825 41.349C75.4966 40.9637 76.198 40.771 76.9866 40.771C77.4532 40.771 77.8912 40.8388 78.3006 40.9742C78.713 41.1097 79.0847 41.3083 79.4158 41.5702C79.7469 41.8291 80.0239 42.1452 80.2466 42.5184C80.4694 42.8887 80.6229 43.3116 80.7072 43.7872ZM82.5167 50.1447V40.8975H83.6364V45.4849H83.7448L87.8988 40.8975H89.3618L85.4787 45.0695L89.3618 50.1447H88.0072L84.7923 45.8462L83.6364 47.1465V50.1447H82.5167ZM90.8111 50.1447V40.8975H96.392V41.8908H91.9309V45.0154H96.103V46.0087H91.9309V49.1513H96.4642V50.1447H90.8111ZM98.4103 50.1447V40.8975H101.535C102.257 40.8975 102.85 41.0209 103.314 41.2677C103.777 41.5115 104.121 41.8472 104.343 42.2746C104.566 42.702 104.677 43.1882 104.677 43.733C104.677 44.2779 104.566 44.761 104.343 45.1824C104.121 45.6038 103.779 45.935 103.318 46.1758C102.858 46.4136 102.269 46.5325 101.553 46.5325H99.0243V45.5211H101.517C102.01 45.5211 102.408 45.4488 102.709 45.3043C103.013 45.1598 103.233 44.9551 103.368 44.6903C103.506 44.4224 103.576 44.1033 103.576 43.733C103.576 43.3628 103.506 43.0392 103.368 42.7623C103.23 42.4853 103.008 42.2716 102.704 42.1211C102.4 41.9676 101.998 41.8908 101.499 41.8908H99.5301V50.1447H98.4103ZM102.763 45.9906L105.039 50.1447H103.738L101.499 45.9906H102.763Z" fill={data.logoColor} />
                </svg>
            </a>
            <div className='flex items-center gap-5 lg:gap-10'>
                <ul className={`md:flex hidden text-xl`}>
                    {
                        data?.navLinks.map((item, index) => (
                            <a key={index} href={item?.link} after={item.title} className={`nav after:text-center after:uppercase after:content-[attr(after)] after:text-[#F74C04] after:z-[10] after:absolute after:top-0 after:left-0 after:opacity-0 overflow-hidden hover:after:opacity-100 after:w-full after:h-full after:translate-y-[100%] hover:after:translate-y-[0] relative after:transition-all transition-all after:ease after:duration-500 duration-500  ${data.textColor} lg:px-8 md:px-4 border-r-2 border-${data.textColor} capitalize last:border-r-0`}>
                                <li>{item.title}</li>
                            </a>
                        ))
                    }
                </ul>
                <button onClick={handleClick} className='z-[500] md:hidden'>{open ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={data.textColor} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide ${data.textColor} lucide-x`}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={data.textColor} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide ${data.textColor} lucide-align-justify`}><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>}</button>
                <button className={` md:block hidden  ${data.buttonTextColor} ${data.buttonColor} uppercase text-xl font-[500]  border-2 px-4 py-2`}>
                    DOWNLOAD EXTENSION
                    <span ></span>
                    <span ></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            {/* Mobile NavBar */}
            <div className={`fixed md:hidden block top-0  ${open ? 'left-0' : '-left-[100%]'} transition-all w-full h-screen ${data.MobileNavbgColor} z-50`}>
                <ul className={` ${data.mobileNavTextColor} text-[2.5rem] pt-32 space-y-4 pl-20`}>
                    {
                        mobileNavData.map((item, ind) => (
                            <Link key={ind} href={item.Link}><li>{item.text}</li></Link>
                        ))
                    }
                </ul>
                <div className='text-[2rem]  pl-20 pt-10'>
                    <button className={`${data.mobilebuttonBgColor} ${data.mobilebuttonTextColor}  px-10 py-3 rounded-2xl`}>DOWNLOAD EXTENSION</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar