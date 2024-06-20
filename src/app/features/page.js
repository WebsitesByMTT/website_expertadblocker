import React from "react";
import Section1 from "../components/Home/Section1";
import Section2 from "../components/Home/Section2";
import Section3 from "../components/Home/Section3";
import Section4 from "../components/Home/Section4";
import Section5 from "../components/Home/Section5";
import Section6 from "../components/Home/Section6";
import Footer from "../components/Footer";
import Content from "../components/feature/Content";

export const metadata = {
    title: "Get Rid Of Annoying Ads And Focus Without Distractions",
    description: "Expert Adblocker blocks annoying ads and protects your privacy. So, ditch the ads and keep your speed up. Download the extension now.",
    icons: {
        icon: '/favicon.png',
    },
    keywords: "adblock chrome, adblock plus chrome, ad blocker google chrome advertisement blocker chrome, blocker chrome, abp plus chrome, ad blocker in chrome adb plus chrome, adblock browser chrome, hulu ad remover, ad blocker for hulu chrome, adblocker for hulu, block hulu ads chrome, ad blocker that works on hulu, youtube ad blocker, youtube ad skipper, adblock for youtube ads, youtube ad blocks, youtube block adblock youtube ad blocker chrome, ad blockers youtube, adblock for youtube firefox, ad block chrome youtube, ad block for youtube chrome, ad block youtube for chrome, adblocker for you tube chrome ad blocker for youtube, chrome addon youtube ad blocker, chrome plugin youtube ad blocker, chrome youtube adblocker, mozilla youtube ad blocker",
    openGraph: {
        title: "Get Rid Of Annoying Ads And Focus Without Distractions",
        description: "Expert Adblocker blocks annoying ads and protects your privacy. So, ditch the ads and keep your speed up. Download the extension now.",
        type: 'website',
        siteName: "Expertadblocker Features",
        url: 'https://www.expertadblocker.com/features',
        images: "https://experadblocker.com/favicon.png",
    }
};

export default function page() {

    const data = {
        section1: {
            heading: "Experience the Bliss of Ad-Free Browsing with Expert Adblocker",
            text: "<span>Whenever we surf online, we face so many advertisements that we prefer to exit and shut our laptops. Are you tired of constantly dodging annoying advertisements?  With Expert Adblocker, bid farewell to the chaos of unwanted advertisements and enjoy a smooth browsing experience. Use your internet without any annoying interruptions.With our Expert Adblocker, you can return to your favorite sites without distractions. Say goodbye to the noise and welcome the calmness of ad-free surfing. Save your time and data with our <a href='' className='inline-block'>adblock chrome extension.</a></span>",
            bgColor: "bg-[#04D9FF]",
            headingColor: "text-[#000]",
            textColor: "text-[#fff]",
            HeadingFontSize: 'text-[4.5rem]',
            textFontSize: 'text-[1.2rem]',
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
                logoUrl: "/",
                logoColor: "#fff",
                textColor: "text-white",
                buttonColor: "bg-[#252525]",
                hoverColor: "hover:after:bg-[#F74C04]",
                buttonTextColor: "text-white",
                borderColor: "border-white",
                bgColor: "bg-[#04D9FF]",
                MobileNavbgColor: 'bg-black',
                mobileNavTextColor: 'text-white',
                mobilebuttonBgColor: 'bg-yellow-400',
                mobilebuttonTextColor: 'text-white',
                afterColor: "after:bg-[#252525]"
            },
            animationImages: {
                image1: '/Hero/heroanimation.svg',
                image2: '/Hero/stand.svg'
            }
        },
        section2: {
            heading: "all in one",
            headingColor: "text-[#F74C04]",
            textColor: "text-black",
            text: "As compared to all the adblockers including abp plus chrome, adb plus chrome and fair adblocker, it is the only extension that has a separate Hulu adblock, adblocker for Twitch, YouTube adblock, and Spotify Adblock that will work smoothly on these platforms.",

        },
        section3: {
            bgColor: "bg-[#F1C02A]",
            subHeading: "Exceptional features of",
            heading: "Expert Adblocker",
            headingColor: "text-[#F74C04]",
            featureTextColor: "text-black",
            featureBgColor: "bg-[#F02828]",
            features: [
                {
                    heading: "Go ad-free with this adblock chrome",
                    text: "This is the free adblocker Chrome extension that blocks all the hidden ads from your browser."
                },
                {
                    heading: "Shield your privacy",
                    text: "It is the best extension that maintains and protects your privacy from all the harmful sites that may ruin your experience while streaming your favorite shows. So, keep your device safe by installing this adblock Chrome."
                },
                {
                    heading: "Speed up your page loading with this free adblocker Chrome extension",
                    text: "Block all the annoying ads including pop-ups, banner ads, video ads, etc. It will also improve your page loading and give you a seamless experience. "
                },
                {
                    heading: "Parenting control",
                    text: "With Expert Adblocker, be the boss of your browser. You can restrict all the adult content that you don’t want to see while browsing."
                }
            ],
            icons: [
                { src: '/Section3/icon1.svg', alt: "" },
                { src: '/Section3/icon2.svg', alt: "" },
                { src: '/Section3/icon3.svg', alt: "" },
                { src: '/Section3/icon4.svg', alt: "" },
            ],
            subFeaturesColor: "text-white",
            subFeaturesBorderColor: "border-white ",
            subHoverBgFeaturesColor: "hover:bg-black",
            subFeatures: [
                {
                    heading: "Browse Freely and Block Ads",
                    text: "Block all those irritating ads that interrupt you while working or streaming your favorite content. Say goodbye to video ads, pop-ups, banner ads, and more. Eliminating those ads means you can browse freely and quickly."
                },
                {
                    heading: "Go Ad-free Now and Enjoy",
                    text: "By just downloading this free adblocker Chrome extension you can binge a series without ads and enjoy every moment with your loved ones."
                },
                {
                    heading: "Keep Your Device Safe",
                    text: "It is the best free adblocker Chrome extension that not only removes ads but also protects your browser from all dangerous sites and third-party trackers."
                }
            ],
            subtext: "Expert Adblocker for",
            subTextColor: "text-[#F02828]",
            textColor: "text-black",
            text: "It works smoothly on both Firefox and Chrome. So, what are you waiting for download the extension now and bid farewell to all the disturbing ads."
        },
        section4: {
            heading: "Reviews",
            headingColor: "text-[#F1C02A]",
            textColor: "text-white",
            bgColor: "bg-black",
            iconColor: "white",
            starColor: "#F1C02A",
            review: [
                {
                    name: "Jack",
                    text: "By downloading this free adblocker Chrome extension, now I can block all the hidden ads that disturb me while browsing.",
                    reviewer: '/Section4/reviewer1.png'
                },
                {
                    name: "Alexei",
                    text: "Yeah!! This is the best extension where I can stream all my favorite movies without those ads.",
                    reviewer: '/Section4/reviewer2.png'
                },
                {
                    name: "Brayden",
                    text: "I have been using this extension for years now and this is the best extension.",
                    reviewer: '/Section4/reviewer3.png'
                },
                {
                    name: "Driss",
                    text: "Such an amazing extension, as it eliminates all the ads in one go and lets you browse freely.",
                    reviewer: '/Section4/reviewer4.png'
                },
                {
                    name: "Ethan",
                    text: "This is the best extension as it not only blocks ads but also protects your browser from all the malware.",
                    reviewer: '/Section4/reviewer5.png'
                },
            ]
        },
        section5: {
            heading: "FAQ",
            bgColor: "bg-[#F1C02A]",
            headingColor: "text-[#F74C04]",
            subHeadingColor: "text-black",
            subheading: "Frequently Asked Questions",
            faqTextColor: "text-white",
            borderColor: "border-white",
            svgIconColor: "#F02828",
            faq: [
                {
                    ques: "What is an Expert Adblocker?",
                    answer: "Expert Adblocker is a powerful ad-blocking solution that removes all unnecessary ads from web pages to provide a cleaner browsing experience."
                },
                {
                    ques: "How does Expert Adblocker work? ",
                    answer: "Expert Adblocker uses powerful algorithms to recognize and block various types of ads. It does not pop up on the screen; instead, it operates silently in the background of your browser."
                },
                {
                    ques: "Is Expert Adblocker slowing down my browsing speed?",
                    answer: "No, Expert Adblocker is designed to have minimal impact on browsing speed, improving your experience by removing ads and extra content."
                },
                {
                    ques: "Is Expert Adblocker collecting personal information?",
                    answer: "No, Expert Adblocker does not collect personal information. Our team prioritizes our user privacy and security."
                },
                {
                    ques: "Is Expert Adblocker free to use? ",
                    answer: "Yes, Expert Adblocker offers a free version with basic ad-blocking functionality. We also provide a premium version for additional features and customization."
                },
            ]
        },
        section6: {
            heading: "About ",
            bgColor: "bg-black",
            borderColor: "border-[#F74C04]",
            subHeadingColor: "text-[#F74C04]",
            headingColor: "text-white",
            subheading: "expert Adblocker",
            textColor: "text-white",
            text: "It is the best browser extension that eliminates all the ads including banner ads, video ads, pop-ups, and many more. It also protects your browser from third-party trackers and dangerous websites. This is the free adblocker Chrome extension so that everyone can use it freely. With just a few clicks, you can protect your privacy. We aim to give the best experience to our users by blocking all the unnecessary ads that distract you while working or streaming your favorite content. So, go ad-free and enjoy the best internet experience.",
            subtext: "Goodbye to all the annoying ads with ",
            subTextColor: "text-[#F74C04]",
            hoverColor: "hover:bg-[#F74C04]",
            subTextHoverColor: "hover:text-black",
            tag2: "EXPERT ADBLOCKER",
            tagColor: "text-white",
            afterHoverBgColor: "hover:after:bg-[#F74C04]"
        },
        footer: {
            heading: "Popular Searches",
            wrapperColor: "bg-black",
            headingColor: "text-black",
            bgColor: "bg-[#F74C04]",
            textColor: "text-black",
            textlinkColor: "text-black",
            webLinksBg: "bg-white",
            socialLinksBg: "#F1C02A",
            linksBg: "bg-[#F1C02A]",
            keywords: "Expert adblocker chrome extension, <a href='/hulu-adblocker'>Hulu adblock</a>, adblock chrome, adblock plus chrome, adblocker google chrome, advertisement blocker chrome, blocker chrome, abp plus chrome, ad blocker in chrome, adb plus chrome, adblock browser chrome, <a href='/spotify-adblocker'>Spotify adblocker</a>, twitch adblock extension, ad free hulu, ad blocker free, <a href='/twitch-adblocker'>twitch adblocker</a>, adblock for twitch, <a href='/youtube-adblocker'>Youtube Adblocker</a>",
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
            webLinks :[]
        }
    }
    return (
        <>
            <div>
                <Section1 data={data.section1} />
                <Section2 data={data.section2} />
                <Section3 data={data.section3} />
                <Content />
                <Section4 data={data.section4} />
                <Section5 data={data.section5} />
                <Section6 data={data.section6} />
                <Footer data={data.footer} />
            </div>
        </>

    );
}
