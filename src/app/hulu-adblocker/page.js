import React from 'react'
import Section1 from '../components/Home/Section1'
import Section2 from '../components/Home/Section2'
import Section3 from '../components/Home/Section3'
import Section4 from '../components/Home/Section4'
import Section5 from '../components/Home/Section5'
import Section6 from '../components/Home/Section6'
import Footer from '../components/Footer'


export const metadata = {
    title: "Hulu ad blocker Chrome Extension - Free adblocker",
    description: "Hulu ad blocker Chrome Extension is the best extension for Hulu where you can block all the disturbing ads that annoy you while watching your favorite movie.",
    icons: {
        icon: '/favicon.png',
    },
    keywords: "Expert adblocker chrome extension, Hulu adblock, adblock chrome, adblock plus chrome, adblocker google chrome, advertisement blocker chrome, blocker chrome, abp plus chrome, ad blocker in Chrome, adb plus chrome, adblock browser chrome, ad free hulu, Youtube Adblocker, hulu without ads, why does hulu have ads, hulu commercial free",
    openGraph: {
        title: "Hulu ad blocker Chrome Extension - Free adblocker",
        description: "Hulu ad blocker Chrome Extension is the best extension for Hulu where you can block all the disturbing ads that annoy you while watching your favorite movie.",
        type: 'website',
        siteName: "Hulu adblocker",
        url: 'https://expertadblocker.com/hulu-adblocker',
        images: "https://experadblocker.com/favicon.png",
    }
};

const page = () => {

    const data = {
        section1: {
            heading: "Surf safely with the Hulu adblocker Chrome extension",
            text: "Download the <a href='/hulu-adblocker'>Hulu Adblocker Chrome extension</a> and enjoy ad-free Hulu. It is the best extension that will not only remove ads from your screen but also keep your device safe from all the malware.",
            bgColor: "bg-[#1DE783]",
            headingColor: "text-[#142C38]",
            textColor: "text-[#012A84]",
            HeadingFontSize: 'text-[4rem]',
            textFontSize: 'text-[1.1rem]',
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
                        title: "Features",
                        link: "/features"
                    }
                ],
                logoUrl: "/",
                bgColor: "bg-[#1DE783]",
                logoColor: "black",
                textColor: "text-black",
                buttonColor: "bg-[#252525]",
                buttonTextColor: "text-white",
                borderColor: "border-black",
                hoverColor: "hover:after:bg-[#142C38]",
                afterColor: "after:bg-[#252525]",
                MobileNavbgColor: 'bg-[#1DE783]',
                mobileNavTextColor: 'text-black',
                mobilebuttonBgColor: 'bg-black',
                mobilebuttonTextColor: 'text-white'
            },
            animationImages: {
                image1: '/Hero/heroanimation.svg',
                image2: '/Hero/hulustand.svg'
            }
        },
        section2: {
            heading: "all in one",
            headingColor: "[#F1C02A]",
            textColor: "black",
            text: "As compared to all the adblockers including abp plus chrome, adb plus chrome and fair adblocker, it is the only extension that has a separate Hulu adblock, Twitch, YouTube, and Spotify Adblock that will work smoothly on these platforms.",

        },
        section3: {
            bgColor: "bg-[#00D9D9]",
            subHeading: "Wonderful Features of",
            heading: "Hulu adblocker",
            headingColor: "text-[#142C38]",
            featureTextColor: "text-white",
            featureBgColor: "bg-[#142C38]",
            features: [
                {
                    heading: "Avoid third-party trackers",
                    text: "By simply downloading the extension, it will protect you from third-party trackers and all the dangerous websites that may harm your browser."
                },
                {
                    heading: "Eliminate all types of ads",
                    text: "With the Hulu, Adblock Chrome extension enjoy Hulu without ads. Enjoy all the latest series and shows without spoiling your moment."
                },
                {
                    heading: "Web assistance",
                    text: "It has the best web assistance where you can enjoy Hulu no ads."
                },
                {
                    heading: "Maintain your privacy",
                    text: "It also protects your data and speeds up your web page loading."
                }
            ],
            icons: [
                { src: '/Section3/huluicon1.svg', alt: "" },
                { src: '/Section3/huluicon2.svg', alt: "" },
                { src: '/Section3/huluicon3.svg', alt: "" },
                { src: '/Section3/huluicon4.svg', alt: "" },
            ],
            subFeaturesColor: "text-[#012A84]",
            subFeaturesBorderColor: "border-[#012A84]",
            subHoverBgFeaturesColor: "hover:bg-[#1DE783]",
            subFeatures: [
                {
                    heading: "Fasten Up Your Page",
                    text: "Within just a few clicks bid farewell to all the disturbing ads that ruin your special moment. By removing all the elements, it will speed up your page loading while browsing."
                },
                {
                    heading: "Eliminate Hulu Ads",
                    text: "By just installing the extension on your web browser, you can finally say goodbye to all the frustrating ads including banner ads, video ads, and pop-ups. So you can enjoy Hulu movies and series peacefully without ads."
                },
                {
                    heading: "Maintain Your Data",
                    text: "Avoid tracking and eliminate all the dangerous websites that harm your data. It also saves your data usage and supports privacy."
                }
            ],
            subtext: "Hulu adblocker works on both",
            subTextColor: "text-[#142C38]",
            textColor: "text-[#012A84]",
            text: "It is the best extension that works perfectly on both Chrome and Firefox."
        },
        section4: {
            heading: "Reviews",
            headingColor: "text-[#142C38]",
            textColor: "text-[#012A84]",
            bgColor: "bg-[#1DE783]",
            iconColor: "#012A84",
            starColor: "#F74C04",
            review: [
                {
                    name: "Ayami",
                    text: "Hulu adblocker is the best extension that lets you watch all your favorite movies without ads.",
                    reviewer: '/Section4/reviewer2.png'
                },
                {
                    name: "Cathenna",
                    text: "I have been using this extension for years now and it is the best extension to block ads.",
                    reviewer: '/Section4/reviewer1.png'
                },
                {
                    name: "Chiyo",
                    text: "This is an amazing extension where you can remove all the ads and enjoy unlimited movies.",
                    reviewer: '/Section4/reviewer4.png'
                },
                {
                    name: "Elena",
                    text: "It is the best extension as now I can watch all the latest shows without those spoiling ads.",
                    reviewer: '/Section4/reviewer5.png'
                },
                {
                    name: "Francesca",
                    text: "Have a great online experience with this extension.",
                    reviewer: '/Section4/reviewer3.png'
                },
            ]
        },
        section5: {
            heading: "FAQ",
            bgColor: 'bg-[#00D9D9]',
            headingColor: "text-[#012A84]",
            subHeadingColor: "black",
            subheading: "Frequently Asked Questions",
            faqTextColor: "text-[#142C38]",
            svgIconColor: "#012A84",
            faq: [
                {
                    ques: "Why does Hulu have ads?",
                    answer: "Hulu has a huge number of ads in its library that pop up during streaming. But to get rid of these ads download Hulu Adblocker Chrome extension and say goodbye to Hulu ads."
                },
                {
                    ques: "How to get rid of ads on Hulu?",
                    answer: "It is very simple and easy, just download the extension now and it will automatically block all the annoying ads."
                },
                {
                    ques: "Why do I have ads on Hulu?",
                    answer: "Hulu is an ad-supported platform where you see a variety of ads on it. But don’t worry install the extension now and eliminate all the annoying ads in one go."
                },
                {
                    ques: "What is Adblock Hulu?",
                    answer: "Hulu adblock is the perfect extension that removes all types of ads including banner ads, video ads, pop-ups, and many more. "
                },
                {
                    ques: "Does Adblocker work on Hulu?",
                    answer: "Yes, we have a separate extension for Hulu that blocks all the ads on Hulu."
                },
            ]
        },
        section6: {
            heading: "About ",
            subHeading: 'chrome extension',
            bgColor: "bg-[#0B1418]",
            subHeadingColor: "text-[#00D9D9]",
            headingColor: "text-white",
            subheading: "HULU ADS?",
            textColor: "text-white",
            text: "Hulu is the most famous online platform among people where you can binge all the latest movies and series. But when you stream your favorite content some ads ruin your moment. For that, the Hulu <a href='/'>Adblock Chrome extension</a> blocks all types of ads in one go. The best part is it is free to use and not only blocks ads but also protects your data and privacy.",
            subtext: "Worry About HULU ADS? Download ",
            subTextColor: "text-[#00D9D9]",
            subTextHoverColor: "hover:text-black",
            tag: " now",
            tagColor: "[#F1C02A]",
            tag2: 'HULU ADBLOCKER',
            borderColor: 'border-[#00D9D9]',
            hoverColor: 'hover:bg-[#00D9D9]',
            afterHoverBgColor: "hover:after:bg-[#00D9D9]"
        },
        footer: {
            heading: "Popular Searches",
            wrapperColor: "bg-[#0B1418]",
            headingColor: "black",
            bgColor: "bg-[#1DE783]",
            textColor: "text-black",
            webLinksBg: "white",
            socialLinksBg: "#012A84",
            textlinkColor: 'text-white',
            linksBg: "bg-[#012A84]",
            keywords: "<span><a href='https://www.expertadblocker.com/'>Expert adblocker chrome extension</a>, Hulu adblock, adblock chrome, adblock plus chrome, adblocker google chrome, advertisement blocker chrome, blocker chrome, abp plus chrome, ad blocker in Chrome, adb plus chrome, adblock browser chrome, ad free hulu, hulu without ads, why does hulu have ads, hulu commercial free, ad blocker for hulu chrome, adblocker for hulu,  block hulu ads chrome</span>",
            links: [
                {
                    name: "About us",
                    link: "/about-us"
                },
                {
                    name: "Contact us",
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
            webLinks :[
                { name: "Twitch adblocker", link: "/twitch-adblocker" },
                { name: "Hulu adblocker", link: "/hulu-adblocker" },
                { name: "Youtube adblocker", link: "/youtube-adblocker" },
                { name: "Spotify adblocker", link: "/spotify-adblocker" }
        
            ]
        }
    }

    return (
        <div>
            <Section1 data={data.section1} />
            <Section2 data={data.section2} />
            <Section3 data={data.section3} />
            <Section4 data={data.section4} />
            <Section5 data={data.section5} />
            <Section6 data={data.section6} />
            <Footer data={data.footer} />
        </div>
    )
}

export default page
