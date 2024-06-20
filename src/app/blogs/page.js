import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { data } from '../components/articlesData/Data'
import Link from 'next/link'
import Image from 'next/image'

const Page = () => {
    const Data = {
        navbar: {
            navLinks: [
                {
                    title: "blogs",
                    link: "/blogs"
                },
                {
                    title: "about us",
                    link: "/about-us"
                },
                {
                    title: "contact us",
                    link: "/contact-us"
                },
                {
                    title: 'Features',
                    link: '/features'
                }
            ],
            animationImages: {
                image1: '/Hero/heroanimation.svg',
                image2: '/Hero/stand.svg'
            },
            logoColor: "black",
            textColor: "text-black",
            buttonColor: "bg-black",
            buttonTextColor: "text-white",
            MobileNavbgColor: 'bg-white',
            mobileNavTextColor: 'text-black',
            mobilebuttonBgColor: 'bg-black',
            mobilebuttonTextColor: 'text-white'
        },
        footer: {
            heading: "Popular Searches",
            wrapperColor: "bg-transparent",
            headingColor: "text-black",
            bgColor: "bg-[#F74C04]",
            textColor: "text-black",
            textlinkColor: "text-black",
            webLinksBg: "bg-white",
            socialLinksBg: "#F1C02A",
            linksBg: "bg-[#F1C02A]",
            keywords: "Expert adblocker chrome extension, Hulu adblock, adblock chrome, adblock plus chrome, adblocker google chrome, advertisement blocker chrome, blocker chrome, abp plus chrome, ad blocker in chrome, adb plus chrome, adblock browser chrome, Spotify adblocker, twitch adblock extension, ad free hulu, ad blocker free",
            links: [
                {
                    name: "About us",
                    link: "/about-us"
                },
                {
                    name: "Contact US",
                    link: "/contact-us"
                },
                {
                    name: "Eula",
                    link: "/terms"
                },
                {
                    name: "Terms of services",
                    link: "/terms"
                },
                {
                    name: "Privacy Policy",
                    link: "/privacy-policy"
                },
            ],
            webLinks: [
                { name: "Twitch adblocker", link: "/twitch-adblocker" },
                { name: "Hulu adblocker", link: "/hulu-adblocker" },
                { name: "Youtube adblocker", link: "/youtube-adblocker" },
                { name: "Spotify adblocker", link: "/spotify-adblocker" }
            ]
        }
    }

    return (
        <div className="bg-white">
            <div className=' bg-[#F3F3F3] rounded-bl-[4rem] rounded-br-[4rem] lg:rounded-bl-[6.5rem] lg:rounded-br-[6.5rem]' style={{ backgroundImage: 'url(./bg.png)' }}>
                <Navbar data={Data.navbar} />
                <div className="text-[4.5rem] text-center lg:text-left font-[800] px-10 lg:px-28 py-5 text-[#F74C04]">Blogs</div>
            </div>
                <div className='bg-white pb-12 md:pt-12 w-[80%] mx-auto md:pb-20'>
                    <div>
                        <div className='text-black text-center text-[2rem] md:text-[3rem]'>Blogs</div>
                        <div className='grid grid-cols-12 space-y-4 items-center md:space-y-0  md:gap-10 pt-10'>
                            {
                                data?.map((item, ind) => (
                                    <Link href={`/blogs/${item?.slug}`} key={ind} className='cursor-pointer rounded-3xl   shadow-sm shadow-[#5329C4]  border-b-[1px] hover:border-[#5329C4] col-span-12 md:col-span-6 lg:col-span-4'>
                                        <div className='bg-white px-3 md:px-10 py-8 md:py-12 md:h-[350px] lg:h-[400px] xl:h-[500px] rounded-3xl '>
                                            <div className='flex justify-center pb-6'>
                                                <span className='inline-block w-[60%] h-[5px] bg-[#B6A4E6]'></span>
                                            </div>
                                            <h6 className='md:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.7rem] pb-5 text-[#230346]'>{item.title}</h6>
                                            {item.banner && <Image src={item.banner} alt={item.bannerAlt} width={1000} height={1000} className='w-full rounded-3xl' />}
                                        </div>
                                    </Link>
                                ))
                            }

                        </div>
                </div>
            </div>
            <Footer data={Data.footer} />
        </div>
    )
}

export default Page
