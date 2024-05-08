import React from 'react'
import Section1 from '../components/Home/Section1'
import Section2 from '../components/Home/Section2'
import Section3 from '../components/Home/Section3'
import Section4 from '../components/Home/Section4'
import Section5 from '../components/Home/Section5'
import Section6 from '../components/Home/Section6'
import Footer from '../components/Footer'

export const metadata = {
    title: "Youtube Adblocker Chrome Extension- Free Adblocker",
    description: "YouTube Adblocker Chrome extension is the best adblocker that blocks all YouTube ads in one go. So that you can enjoy all your favorite videos without those annoying ads.",
    icons: {
        icon: '/favicon.png',
    },
    openGraph: {
        title: "Youtube Adblocker Chrome Extension- Free Adblocker",
        description: "YouTube Adblocker Chrome extension is the best adblocker that blocks all YouTube ads in one go. So that you can enjoy all your favorite videos without those annoying ads.",
        type: 'website',
        siteName: "Youtube adblocker",
        url: 'https://expertadblocker.com/youtube-adblocker',
        images: "https://experadblocker.com/favicon.png",
    }
};

const Youtube = () => {
    const data = {
        section1: {
            heading: "Tired of ads? Don’t worry download YouTube Adblocker",
            text: "YouTube is a platform that is loved by many as there is a huge variety of videos. But while watching these videos some ads come in between which can frustrate us. For that, we have <a href='/youtube-adblocker'>Youtube Adblocker</a>. This amazing extension is easy to use and download, within just a few clicks you can say a final goodbye to all those ads that ruined your moment. Download the extension and enjoy YouTube no ads.",
            bgColor: "bg-[#FF4A4A]",
            headingColor: "text-[#FFD7B3]",
            textColor: "text-[#430101]",
            HeadingFontSize: 'text-[4.5rem]',
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
                    }
                ],
                logoUrl: "/youtube-adblocker",
                bgColor: "bg-[#FF4A4A]",
                logoColor: "white",
                textColor: "text-white",
                buttonColor: "bg-[#252525]",
                hoverColor: "hover:after:bg-[#FFD7B3]",
                afterColor: "after:bg-[#252525]",
                buttonTextColor: "text-white",
                borderColor: "border-white",
                MobileNavbgColor: 'bg-[#FF4A4A]',
                mobileNavTextColor: 'text-white',
                mobilebuttonBgColor: 'bg-white',
                mobilebuttonTextColor: 'text-black'
            },
            animationImages: {
                image1: '/Hero/heroanimation.svg',
                image2: '/Hero/youtubestand.svg'
            }
        },
        section2: {
            heading: "all in one",
            headingColor: "text-[#FF0000]",
            textColor: "text-[#0B1418]",
            text: "As compared to all the adblockers including abp plus chrome, adb plus chrome and fair adblocker, it is the only extension that has a separate Hulu adblock, adblocker for Twitch, YouTube adblock, and Spotify Adblock that will work smoothly on these platforms.",

        },
        section3: {
            bgColor: "bg-[#DBDBDB]",
            subHeading: "Features of",
            heading: "Youtube Adblocker",
            headingColor: "text-[#E31010]",
            featureTextColor: "text-white",
            featureBgColor: "bg-black",
            features: [
                {
                    heading: "Shield Your Privacy",
                    text: "YouTube ad blocker is the best extension that not only blocks ads but also protects your privacy. It also saves your data usage and shields you from all the malware that may harm your browser."
                },
                {
                    heading: "Eliminate ads with YouTube ad blocker",
                    text: "This adblocker free to use and very simple to download. It removes all types of YouTube ads that spoil your moment. So install the extension now and feel free to watch the video."
                },
                {
                    heading: "Parenting Control",
                    text: "It has the best web assistance and you can be the boss of your online journey by removing all the content that you don’t want on your screen."
                },
                {
                    heading: "Free to Use",
                    text: "Now you can block YouTube ads for free. So, what are you waiting for? Download the extension now!"
                }
            ],
            icons: [
                { src: '/Section3/youtubeicon1.svg', alt: "" },
                { src: '/Section3/youtubeicon2.svg', alt: "" },
                { src: '/Section3/youtubeicon3.svg', alt: "" },
                { src: '/Section3/youtubeicon4.svg', alt: "" },
            ],
            subFeaturesColor: "text-[#FF0000] ",
            subFeaturesBorderColor: "border-[#FF0000] ",
            subHoverBgFeaturesColor: "hover:bg-[#FF0000]",
            subHoverTextFeaturesColor: "hover:text-[#DBDBDB]",
            subFeatures: [
                {
                    heading: "Enjoy More and Browse Fast",
                    text: "By simply downloading the YouTube Adblocker Chrome extension you can watch all your favorite videos without any disturbance. By removing all those ads, it will also speed up your page loading."
                },
                {
                    heading: "Protect Your Browser",
                    text: "Thanks to the YouTube ad blocker that will remove all the elements that may harm your browser. It will give you a seamless experience where you can stream hassle-free."
                },
                {
                    heading: "It is very simple to use",
                    text: "The best part is YouTube Adblocker Chrome extension is very simple to download. You just need to visit its official website where you can install the extension directly. After downloading it will automatically block ads from your browser."
                }
            ],
            subtext: "YouTube Adblocker Chrome Extension works On",
            subTextColor: "text-[#FF0000]",
            textColor: "text-[#012A84]",
            text: "The extension perfectly works on both Chrome and Firefox and allows you to remove any distracting elements while you work."
        },
        section4: {
            heading: "Reviews",
            headingColor: "text-[#142C38]",
            textColor: "text-[#FFD7B3]",
            bgColor: "bg-[#FF4A4A]",
            iconColor: "#FFD7B3",
            starColor: "#D40000",
            review: [
                {
                    name: "Marielia",
                    text: "I have been using this extension for years now and it is the best.",
                    reviewer: '/Section4/reviewer5.png'
                },
                {
                    name: "Paloma",
                    text: "Now I can watch all my favorite videos without those irritating ads.",
                    reviewer: '/Section4/reviewer1.png'
                },
                {
                    name: "Thylane",
                    text: "This extension is free to use and smoothly runs in both Chrome and Firefox.",
                    reviewer: '/Section4/reviewer3.png'
                },
                {
                    name: "Dylan",
                    text: "Such a wonderful extension it is! It automatically removes all the ads and lets me stream freely.",
                    reviewer: '/Section4/reviewer2.png'
                },
                {
                    name: "Luca",
                    text: "The best part is it also protects your browser from all the dangerous websites.",
                    reviewer: '/Section4/reviewer4.png'
                },
            ]
        },
        section5: {
            heading: "FAQ",
            bgColor: "bg-[#DBDBDB]",
            headingColor: "text-[#012A84]",
            subHeadingColor: "text-black",
            subheading: "Frequently Asked Questions",
            faqTextColor: "text-black",
            borderColor: "border-[#FEFAF9]",
            svgIconColor: "#430101",
            faq: [
                {
                    ques: "How to use an adblocker on YouTube?",
                    answer: "Yes, by simply downloading the Spotify adblocker you can block all those spotify ads that ruin your mood while listening to your favorite music.It is very easy, you just need to install our separate extension for YouTube which is YouTube adblocker, and block ads."
                },
                {
                    ques: "How does Adblock affect Youtubers?",
                    answer: "They indirectly on Youtubers as it may reduce the ad revenue. Adblocker prevents users from seeing ads while watching a YouTube video."
                },
                {
                    ques: "Which ad blocker works on YouTube?",
                    answer: "YouTube adblocker Chrome extension perfectly works on YouTube."
                },
                {
                    ques: "Do ad blockers violate YouTube's terms of service?",
                    answer: "Yes, it may violate their terms and services because the whole model of YouTube is based on ads. YouTube adblocker blocks those ads."
                },
                {
                    ques: "Which ad blocker works on YouTube?",
                    answer: "YouTube ad blocker Chrome extension works on YouTube."
                },
            ]
        },
        section6: {
            heading: "About ",
            bgColor: "bg-[#0B1418]",
            borderColor: "border-[#FF0000]",
            subHeadingColor: "text-[#FF0000]",
            headingColor: "text-white",
            subheading: "Youtube Adblocker",
            textColor: "text-white",
            text: "YouTube is the most popular streaming website among people and they love to watch videos on it. Most of the time when we stream our favorite content some ads are so annoying to watch. But don’t worry about that now as there is a YouTube <a href='/'>adblocker Chrome extension</a> that blocks all those ads that come in between while streaming. By removing those ads, you can also browse faster on YouTube. It will also block all those dangerous websites that may harm your browser. So, download the extension now and block ads for free.",
            subtext: "Get rid of ",
            subTextColor: "text-[#FF0000]",
            subTextHoverColor: "hover:text-black",
            hoverColor: "hover:bg-[#FF0000]",
            tag: " now",
            tag2: "YOUTUBE ADS",
            tagColor: "text-white",
        },
        footer: {
            heading: "Popular Searches",
            wrapperColor: "bg-black",
            headingColor: "text-black",
            bgColor: "bg-[#FF4A4A]",
            textColor: "text-black",
            textlinkColor: "text-black",
            webLinksBg: "bg-[#C3F0C8]",
            socialLinksBg: "#FFD7B3",
            linksBg: "bg-[#FFD7B3]",
            keywords: "Expert adblocker chrome extension, <a href='/hulu-adblocker>Hulu adblock</a>, adblock chrome, adblock plus chrome, adblocker google chrome, advertisement blocker chrome, blocker chrome, abp plus chrome, ad blocker in Chrome, adb plus chrome, adblock browser chrome, Spotify adblocker, <a href='/twitch-adblocker>twitch adblock extension</a>, Youtube Adblocker, adblock for youtube, youtube adblock reddit, best free ad blocker",
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
            ]
        }
    }
    return (
        <>
            <div>
                <Section1 data={data.section1} />
                <Section2 data={data.section2} />
                <Section3 data={data.section3} />
                <Section4 data={data.section4} />
                <Section5 data={data.section5} />
                <Section6 data={data.section6} />
                <Footer data={data.footer} />
            </div>
        </>
    )
}

export default Youtube