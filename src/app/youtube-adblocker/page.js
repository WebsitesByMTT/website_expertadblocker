import React from 'react'
import Section1 from '../components/Home/Section1'
import Section2 from '../components/Home/Section2'
import Section3 from '../components/Home/Section3'
import Section4 from '../components/Home/Section4'
import Section5 from '../components/Home/Section5'
import Section6 from '../components/Home/Section6'
import Footer from '../components/Footer'

const Youtube = () => {
    const data = {
        section1: {
            heading: "Tired of ads? Don’t worry download YouTube Adblocker",
            text: "YouTube is a platform that is loved by many as there is a huge variety of videos. But while watching these videos some ads come in between which can frustrate us. For that, we have adblock Youtube. This amazing extension is easy to use and download, within just a few clicks you can say a final goodbye to all those ads that ruined your moment. Download the extension and enjoy YouTube no ads.",
            bgColor: "bg-[#FF4A4A]",
            headingColor: "text-[#FFD7B3]",
            textColor: "text-[#430101]",
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
                textColor: "white",
                buttonColor: "black",
                bgColor: "bg-[#FF4A4A]"
            },
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
            heading: "Youtube Adblocker Chrome Extension ",
            headingColor: "text-[#E31010]",
            featureTextColor: "text-white",
            featureBgColor: "bg-black",
            features: [
                {
                    heading: "Block Spotify Ads",
                    text: "By simply downloading the extension you can enjoy spotify without ads"
                },
                {
                    heading: "Avoid Third-Party Trackers",
                    text: "This is the best extension that not only blocks ads but also protects you from third-party hackers and all the malware that may harm your browser."
                },
                {
                    heading: "Save Data Usage",
                    text: "By removing all those ads, it will save your data usage and also maintain your privacy"
                },
                {
                    heading: "Enjoy ad-free Spotify for free",
                    text: "Enjoy spotify no ads by using this extension for free"
                }
            ],
            subFeaturesColor: "text-[#FF0000] ",
            subFeaturesBorderColor: "border-[#FF0000] ",
            subHoverBgFeaturesColor: "hover:bg-[#FF0000]",
            subHovertextFeaturesColor: "hover:text-[#DBDBDB]",
            subFeatures: [
                {
                    heading: " Listen Without Limits",
                    text: "There will be no limits after downloading this amazing extension on your browser. With this extension, you can listen to all your most awaited music lists that are on hold due to those disturbing ads. So, freshen up your mood and start your playlist with the only Spotify ad blocker."
                },
                {
                    heading: "Security Comes First",
                    text: "Before downloading any extension, security is the first thing that comes to our mind. But with spotify adblocker, you don’t need to worry about that this extension is free and safe to use."
                },
                {
                    heading: "Protect Your Device",
                    text: "This amazing extension not only blocks ads but also maintains your privacy. Apart from ads, it will also remove all the malware that can ruin your browser. By deleting those, it will also fasten up your web page loading."
                }
            ],
            subtext: "Spotify adblocker works on",
            subTextColor: "text-[#FF0000]",
            textColor: "text-[#012A84]",
            text: "This extension smoothly runs on Chrome and Firefox for free. Now you can remove all types of ads by simply installing it."
        },
        section4: {
            heading: "Reviews",
            headingColor: "text-[#142C38]",
            textColor: "text-[#FFD7B3]",
            bgColor: "bg-[#FF4A4A]",
            iconColor: "#FFD7B3",
            review: [
                {
                    name: "Anushka",
                    text: "Now I can play my favorite music list without worrying about ads."
                },
                {
                    name: "Gursimar",
                    text: "This is the best extension as it helps me to listen to my favorite songs without those irritating ads."
                },
                {
                    name: "Rahul",
                    text: "Now I can block spotify ads for free."
                },
                {
                    name: "Gaurav",
                    text: "Thanks to spotify adblocker as now with blocking ads I can keep my device safe by removing all the malware."
                },
                {
                    name: "Ashish",
                    text: "I have been using this for months now and I bet this is the best."
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
                    ques: "Can I block ads on Spotify?",
                    answer: "Yes, by simply downloading the Spotify adblocker you can block all those spotify ads that ruin your mood while listening to your favorite music."
                },
                {
                    ques: "What is a Spotify ad blocker, and how does it function within the Spotify platform?",
                    answer: "Spotify adblocker is the extension that blocks all types of spotify ads. Just download the extension and it will work automatically on your browser."
                },
                {
                    ques: "How to Block Spotify Ads without Premium?",
                    answer: "Now you don’t have to buy premium as with spotify adblocker you can block ads for free."
                },
                {
                    ques: "Is this extension safe to use?",
                    answer: "Yes, this is safe to use as it is the most trustworthy extension around the world."
                },
                {
                    ques: "Is spotify adblocker free?",
                    answer: "Yes, this extension is free to use."
                },
            ]
        },
        section6: {
            heading: "About ",
            bgColor: "bg-[#0B1418]",
            borderColor: "border-[#FF0000]",
            subHeadingColor: "text-[#FF0000]",
            headingColor: "text-white",
            subheading: "Spotify Adblocker",
            textColor: "text-white",
            text: "Spotify is the most popular audio-streaming platform where there are huge variety of songs. Whether you are fond of old classic music or rap, you will get everything on Spotify. But while listening to our music some ads come in between and spoil our mood. But for that case, we have a spotify ad blocker that will block all those ads for free and let you enjoy your music without limits. Apart from removing ads, it will also speed up your page loading and protect you from all the malware that may ruin your browser. The best part is, that you don’t have to buy premium as this extension is free to use.",
            subtext: "Tired of Spotify ads? ",
            subTextColor: "text-[#FF0000]",
            subTextHoverColor: "hover:text-black",
            hoverColor: "hover:bg-[#FF0000]",
            tag: "Download the extension now",
            tagColor: "text-white",
        },
        footer: {
            heading: "Popular Searches",
            wrapperColor: "bg-black",
            headingColor: "text-black",
            bgColor: "bg-[#FF4A4A]",
            textColor: "text-black",
            webLinksBg: "bg-[#C3F0C8]",
            socialLinksBg: "#FFD7B3",
            linksBg: "bg-[#FFD7B3]",
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