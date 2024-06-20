import React from 'react'
import Section1 from '../components/Home/Section1'
import Section2 from '../components/Home/Section2'
import Section3 from '../components/Home/Section3'
import Section4 from '../components/Home/Section4'
import Section5 from '../components/Home/Section5'
import Section6 from '../components/Home/Section6'
import Footer from '../components/Footer'


export const metadata = {
  title: "Twitch Adblocker Chrome Extension- Best Ad Detector",
  description: "Twitch adblocker Chrome Extension is the best extension where you can block all the annoying ads that can spoil your moment while streaming.",
  icons: {
    icon: '/favicon.png',
  },
  keywords: "Expert adblocker chrome extension, Hulu adblock, adblock chrome, adblock plus chrome, adblocker google chrome, advertisement blocker chrome, blocker chrome, abp plus chrome, ad blocker in Chrome, adb plus chrome, adblock browser chrome, Spotify adblocker, twitch adblock extension, ad free hulu, ad blocker free, ublock origin twitch, block twitch ad",
  openGraph: {
    title: "Twitch Adblocker Chrome Extension- Best Adblocker",
    description: "Download Twitch Adblocker Chrome Extension and eliminate all the disturbing ads that annoy you while streaming. It will also maintain your privacy.",
    type: 'website',
    siteName: "Twitch adblocker",
    url: 'https://expertadblocker.com/twitch-adblocker',
    images: "https://experadblocker.com/favicon.png",
  }
};

const page = () => {
  const data = {
    section1: {
      heading: "Block ads with the ultimate Twitch Adblocker Chrome Extension",
      text: "Twitch is the most popular streaming website where people gather for live streaming. While streaming, some disturbing ads spoil our moment, but just downloading <a href='/twitch-adblocker'>Adblocker for Twitch</a> you can block all disturbing ads including banner ads, pop-ups, and video ads. So, block ads and have fast browsing.",
      bgColor: "bg-[#6441A5]",
      headingColor: "text-[#F1C02A]",
      textColor: "text-white",
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
        logoUrl: "/twitch-adblocker",
        bgColor: "bg-[#6441A5]",
        logoColor: "white",
        textColor: "text-white",
        hoverColor: "hover:after:bg-[#F1C02A]",
        afterColor: "after:bg-[#252525]",
        buttonColor: "bg-[#252525]",
        buttonTextColor: "text-white",
        borderColor: "border-white",
        MobileNavbgColor: 'bg-[#6441A5]',
        mobileNavTextColor: 'text-white',
        mobilebuttonBgColor: 'bg-white',
        mobilebuttonTextColor: 'text-black'
      }, animationImages: {
        image1: '/Hero/heroanimation.svg',
        image2: '/Hero/twitchstand.svg'

      }
    },
    section2: {
      heading: "all in one",
      headingColor: "[#F1C02A]",
      textColor: "black",
      text: "As compared to all the adblockers including abp plus chrome, adb plus chrome and fair adblocker, it is the only extension that has a separate Hulu adblock, adblocker for Twitch, YouTube adblock, and Spotify Adblock that will work smoothly on these platforms.",

    },
    section3: {
      bgColor: "bg-[#190839]",
      subHeading: "Amazing Features of",
      heading: "Twitch Adblocker Chrome Extension",
      headingColor: "text-[#F1C02A]",
      featureTextColor: "black",
      featureBgColor: "bg-[#F1C02A]",
      features: [
        {
          heading: "Bid farewell to all the disturbing ads",
          text: "By simply downloading the Twitch Adblock extension you can remove all the unnecessary ads and enjoy nonstop streaming."
        },
        {
          heading: "Protect privacy with Twitch Adblock Chrome",
          text: "Keep data safe and protected by third-party trackers and all the dangerous websites."
        },
        {
          heading: "Save data usage and speed up page loading ",
          text: "With this best adblock for Twitch, you can also save your data usage and speed up your loading. "
        },
        {
          heading: "Technical Assistance",
          text: "Twitch is the best adblocker and has technical assistance where you can enjoy hassle-free streaming."
        }
      ],
      icons: [
        { src: '/Section3/twitchicon1.svg', alt: "" },
        { src: '/Section3/twitchicon2.svg', alt: "" },
        { src: '/Section3/twitchicon3.svg', alt: "" },
        { src: '/Section3/twitchicon4.svg', alt: "" },
      ],
      subFeaturesColor: "text-white",
      subHoverBgFeaturesColor: "hover:bg-[#6441A5]",
      subFeatures: [
        {
          heading: "Enjoy More and Surf Fast",
          text: "By downloading the Twitch adblocker Chrome extension you can eliminate all the intrusive ads that spoil your streaming experience. So, install the extension now and enjoy!"
        },
        {
          heading: "Browse Freely Without Ads",
          text: "With a few clicks, you can remove all the ads from your screen and browse smoothly. It will also shield you from all the third-party trackers and malware attacks."
        },
        {
          heading: "Keep Your Device Safe",
          text: "With the Twitch adblocker Chrome extension avoid tracking and stop hidden companies from following your online activity. It keeps your device safe by eliminating all the hidden ads that can spoil your browser."
        }
      ],
      subtext: "Twitch adblocker Chrome extension is for both ",
      subTextColor: "text-[#F1C02A]",
      textColor: "text-white",
      text: "If you look at Twitch Adblock 2023 and Twitch Adblock Reddit in comparison, they operate seamlessly on popular web browsers like Chrome and Firefox. All you have to do is install the extension."
    },
    section4: {
      heading: "Reviews",
      headingColor: "text-[#190839]",
      textColor: "text-white",
      bgColor: "bg-[#6441A5]",
      iconColor: "#fff",
      starColor: "#F1C02A",
      review: [
        {
          name: "Laurent",
          text: "This Twitch adblock is the best extension where you can block all the ads while streaming.",
          reviewer: '/Section4/reviewer1.png'
        },
        {
          name: "Marcello",
          text: "Such an amazing extension it is! Now I can stream non-stop and enjoy.",
          reviewer: '/Section4/reviewer4.png'
        },
        {
          name: "Tao",
          text: "Using this extension for years now and I can bet that it is the best extension for Twitch.",
          reviewer: '/Section4/reviewer5.png'
        },
        {
          name: "Xavier",
          text: "Now I can stream all my favorite shows without those annoying ads.",
          reviewer: '/Section4/reviewer2.png'
        },
        {
          name: "Amara",
          text: "Hurry up and download the extension as it is the best extension.",
          reviewer: '/Section4/reviewer3.png'
        },
      ]
    },
    section5: {
      heading: "FAQ",
      bgColor: 'bg-[#190839]',
      headingColor: "text-[#012A84]",
      subHeadingColor: "black",
      subheading: "Frequently Asked Questions",
      faqTextColor: "text-white",
      svgIconColor: "#F1C02A",
      faq: [
        {
          ques: "How do AdBlock detectors work?",
          answer: "By just downloading the extension, it will automatically detect all the elements from your page that may harm your browser."
        },
        {
          ques: "How to stop YouTube adblocker popup?",
          answer: "The best part is that this ad blocker works on YouTube also. It works by eliminating all the YouTube ads and lets you stream all your favorite videos without ads."
        },
        {
          ques: "How to get rid of YouTube adblocker popup?",
          answer: "It is very simple, just download our separate extension for YouTube and block all the pop-ups, video ads, banner ads, and many more."
        },
        {
          ques: "Are ad blockers legal?",
          answer: "Yes, all ad blockers including expert adblocker are legal to use."
        },
        {
          ques: "Why are people using adblockers?",
          answer: "Because by just installing the extension you can have the best experience. It is the most trustworthy extension that continuously helps users block all ads and protect their data from all malware."
        },
      ]
    },
    section6: {
      heading: "About ",
      subHeading: 'chrome extension',
      bgColor: "bg-[#0B1418]",
      subHeadingColor: "text-[#F1C02A]",
      headingColor: "text-white",
      subheading: "Twitch adblocker",
      textColor: "text-white",
      text: "Twitch is the most popular streaming platform among gamers where you can stream live streaming. But some ads frustrate us while streaming. In that case, there is the Twitch <a href='/'>adblocker Chrome extension</a> where you can eliminate all the ads that spoil your moment. It not only blocks ads but also protects your browser from all the third-party trackers.",
      subtext: "Say goodbye to ",
      subTextColor: "text-[#F1C02A]",
      subTextHoverColor: "hover:text-black",
      tag: " and Enjoy Streaming",
      tagColor: "[#F1C02A]",
      tag2: 'TWITCH ADS',
      borderColor: 'border-[#F1C02A]',
      hoverColor: 'hover:bg-[#F1C02A]',
      afterHoverBgColor: "hover:after:bg-[#F1C02A]"
    },
    footer: {
      heading: "Popular Searches",
      wrapperColor: "bg-[#0B1418]",
      headingColor: "black",
      bgColor: "bg-[#9747FF]",
      textColor: "black",
      webLinksBg: "white",
      socialLinksBg: "#F1C02A",
      linksBg: "bg-[#F1C02A]",
      keywords: "Expert adblocker chrome extension, <a href='/hulu-adblocker'>Hulu adblock</a>, adblock chrome, adblock plus chrome, adblocker google chrome, advertisement blocker chrome, blocker chrome, abp plus chrome, ad blocker in chrome, adb plus chrome, adblock browser chrome, <a href='/spotify-ablocker'>Spotify adblocker</a>, twitch adblock extension, ad free hulu, ad blocker free, ublock origin twitch, block twitch ads, how to block twitch ads, twitch adblock 2023, <a href='/youtube-adblocker'>Youtube Adblocker</a>",
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
