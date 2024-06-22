import Section1 from '../components/Home/Section1'
import Section2 from '../components/Home/Section2'
import Section3 from '../components/Home/Section3'
import Section4 from '../components/Home/Section4'
import Section5 from '../components/Home/Section5'
import Section6 from '../components/Home/Section6'
import Footer from '../components/Footer'

export const metadata = {
    title: "Spotify ad blocker- Best adblocker for free",
    description: "Spotify ad blocker is the extension that blocks all Spotify ads and lets you listen to your favorite music without any trouble.",
    icons: {
        icon: '/favicon.png',
    },
    keywords: "Expert adblocker chrome extension, adblock chrome, adblock plus chrome, adblocker google chrome, advertisement blocker chrome, blocker chrome, abp plus chrome, ad blocker in Chrome, adb plus chrome, adblock browser chrome, Spotify adblocker, extension, Youtubdblocker, blockthespot, does spotify have ads, spotify without ads.",
    openGraph: {
        title: "Spotify ad blocker- Best adblocker for free",
        description: "Spotify ad blocker is the extension that blocks all Spotify ads and lets you listen to your favorite music without any trouble.",
        type: 'website',
        siteName: "Spotify adblocker",
        url: 'https://expertadblocker.com/spotify-adblocker',
        images: "https://experadblocker.com/favicon.png",
    }
};

const Spotify = () => {
    const data = {
        section1: {
            heading: "Enjoy Spotify Without Ads",
            text: "Spotify is our all-time favorite music app where we can listen to all the latest songs. While listening to it some ads ruin our mood. But now with <a href='/spotify-adblocker'>Spotify adblocker</a> you can create your playlist and listen to it without ads as it blocks all types of spotify ads.",
            bgColor: "bg-[#1AB26B]",
            headingColor: "text-[#FFCDD2]",
            textColor: "text-[#C3F0C8]",
            HeadingFontSize: 'text-[6rem]',
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
                bgColor: "bg-[#1AB26B]",
                logoColor: "white",
                textColor: "text-white",
                hoverColor: "hover:after:bg-[#FFCDD2]",
                afterColor: "after:bg-[#252525]",
                buttonColor: "bg-[#252525]",
                buttonTextColor: "text-white",
                borderColor: "border-white",
                MobileNavbgColor: 'bg-[#1AB26B]',
                mobileNavTextColor: 'text-white',
                mobilebuttonBgColor: 'bg-white',
                mobilebuttonTextColor: 'text-black'
            },
            animationImages: {
                image1: '/Hero/heroanimation.svg',
                image2: '/Hero/spotifystand.svg'
            }
        },
        section2: {
            heading: "all in one",
            headingColor: "text-[#2D46B9]",
            textColor: "text-[#0B1418]",
            text: "As compared to all the adblockers including abp plus chrome, adb plus chrome and fair adblocker, it is the only extension that has a separate adblocker for spotify, Hulu, Twitch, and youtube that will work smoothly on these platforms.",
        },
        section3: {
            bgColor: "bg-[#2D46B9]",
            subHeading: "Incredible Features of ",
            heading: "Spotify Adblocker ",
            headingColor: "text-[#FFCDD2]",
            featureTextColor: "text-white",
            featureBgColor: "bg-[#006450]",
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
            icons: [
                { src: '/Section3/spotifyicon1.svg', alt: "" },
                { src: '/Section3/spotifyicon2.svg', alt: "" },
                { src: '/Section3/spotifyicon3.svg', alt: "" },
                { src: '/Section3/spotifyicon4.svg', alt: "" },
            ],
            subFeaturesColor: "text-[#C3F0C8] ",
            subFeaturesBorderColor: "border-[#C3F0C8] ",
            subHoverBgFeaturesColor: "hover:bg-[#C3F0C8]",
            subHoverTextFeaturesColor: "hover:text-[#2D46B9]",
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
            subTextColor: "text-[#FFCDD2]",
            textColor: "text-[#C3F0C8]",
            text: "This extension smoothly runs on Chrome and Firefox for free. Now you can remove all types of ads by simply installing it."
        },
        section4: {
            heading: "Reviews",
            headingColor: "text-[##142C38]",
            textColor: "text-[#C3F0C8]",
            bgColor: "bg-[#1AB26B]",
            iconColor: "#C3F0C8",
            starColor: "#2D46B9",
            review: [
                {
                    name: "Micah",
                    text: "Now I can play my favorite music list without worrying about ads.",
                    reviewer: '/Section4/reviewer2.png'
                },
                {
                    name: "Elanie",
                    text: "This is the best extension as it helps me to listen to my favorite songs without those irritating ads.",
                    reviewer: '/Section4/reviewer4.png'
                },
                {
                    name: "Lucia",
                    text: "Thanks to adblock extension for spotify as now with blocking ads I can keep my device safe by removing all the malware",
                    reviewer: '/Section4/reviewer1.png'
                },
                {
                    name: "Malia",
                    text: "Thanks to spotify adblocker as now with blocking ads I can keep my device safe by removing all the malware.",
                    reviewer: '/Section4/reviewer5.png'
                },
                {
                    name: "Alex",
                    text: "I have been using adblock spotify extension for months now and I bet this is the best.",
                    reviewer: '/Section4/reviewer3.png'
                },
            ]
        },
        section5: {
            heading: "FAQ",
            bgColor: "bg-[#2D46B9]",
            headingColor: "text-[#012A84]",
            subHeadingColor: "text-black",
            subheading: "Frequently Asked Questions",
            faqTextColor: "text-[#C3F0C8]",
            borderColor: "border-[#FFCDD2]",
            svgIconColor: "#FFCDD2",
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
            borderColor: "border-[#1AB26B]",
            subHeadingColor: "text-[#1AB26B]",
            headingColor: "text-white",
            subheading: "Spotify Adblocker",
            textColor: "text-white",
            text: "Spotify is the most popular audio-streaming platform where there are huge variety of songs. Whether you are fond of old classic music or rap, you will get everything on Spotify. But while listening to our music some ads come in between and spoil our mood. But for that case, we have a Spotify ad blocker Chrome extension that will block all those ads for free and let you enjoy your music without limits. Apart from removing ads, it will also speed up your page loading and protect you from all the malware that may ruin your browser. The best part is, that you dont have to buy premium as this extension is free to use.",
            subtext: "Tired of ",
            subTextColor: "text-[#1AB26B]",
            subTextHoverColor: "hover:text-black",
            hoverColor: "hover:bg-[#1AB26B]",
            tag2: "Spotify ads? ",
            tag: "Download the extension now",
            tagColor: "text-white",
            afterHoverBgColor: "hover:after:bg-[#1AB26B]"
        },
        footer: {
            heading: "Popular Searches",
            wrapperColor: "bg-black",
            headingColor: "black",
            bgColor: "bg-[#1AB26B]",
            textColor: "text-black",
            textlinkColor: "text-black",
            webLinksBg: "bg-[#C3F0C8]",
            socialLinksBg: "#C3F0C8",
            linksBg: "bg-[#C3F0C8]",
            keywords: "<span><a href='https://www.expertadblocker.com'>Expert adblocker chrome extension</a>,adblock chrome, adblock plus chrome, adblocker google chrome, advertisement blocker chrome, blocker chrome, abp plus chrome, ad blocker in Chrome, adb plus chrome, adblock browser chrome, Spotify adblocker,blockthespot, does spotify have ads, spotify without ads, spotify ad blocker, spotify ads blocker on windows, no ads spotify extension, spotify ad blocker extension chrome</span>",
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
                <Section4 data={data.section4} />
                <Section5 data={data.section5} />
                <Section6 data={data.section6} />
                <Footer data={data.footer} />
            </div>
        </>
    )
}

export default Spotify