import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Page = () => {
    const data = {
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
            ]
        }
    }

    return (
        <div className="bg-white">
            <div className=' bg-[#F3F3F3] rounded-bl-[4rem] rounded-br-[4rem] lg:rounded-bl-[6.5rem] lg:rounded-br-[6.5rem]' style={{ backgroundImage: 'url(./bg.png)' }}>
                <Navbar data={data.navbar} />
                <div className="text-[4.5rem] text-center lg:text-left font-[800] px-10 lg:px-28 py-5 text-[#F74C04]">Blogs</div>
            </div>
            <div className="bg-white h-[70vh]">
            
            </div>
            <Footer data={data.footer} />
        </div>
    )
}

export default Page
