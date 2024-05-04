import React from 'react'
import Section1 from '../components/Home/Section1'
import Section2 from '../components/Home/Section2'
import Section3 from '../components/Home/Section3'
import Section4 from '../components/Home/Section4'
import Section5 from '../components/Home/Section5'
import Section6 from '../components/Home/Section6'
import Footer from '../components/Footer'


const page = () => {

    const data = {
        section1: {
          heading: "Block ads with the ultimate Twitch Adblocker Chrome Extension",
          text: "Twitch is the most popular streaming website where people gather for live streaming. While streaming, some disturbing ads spoil our moment, but just downloading Adblocker for Twitch you can block all disturbing ads including banner ads, pop-ups, and video ads. So, block ads and have fast browsing.",
          bgColor: "bg-[#6441A5]",
          headingColor: "text-[#F1C02A]",
          textColor: "text-white",
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
            bgColor: "bg-[#6441A5]",
            logoColor: "white",
            textColor: "text-white",
            buttonColor: "bg-black",
            buttonTextColor: "text-white"
          },
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
          subFeaturesColor: "text-white",
          subHoverBgFeaturesColor:"hover:bg-[#6441A5]",
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
          review: [
            {
              name: "Anushka",
              text: "By downloading this free adblocker Chrome extension, now I can block all the hidden ads that disturb me while browsing."
            },
            {
              name: "Gursimar",
              text: "Yeah!! This is the best extension where I can stream all my favorite movies without those ads."
            },
            {
              name: "Rahul",
              text: "I have been using this extension for years now and this is the best extension."
            },
            {
              name: "Gaurav",
              text: "Such an amazing extension, as it eliminates all the ads in one go and lets you browse freely."
            },
            {
              name: "Ashish",
              text: "This is the best extension as it not only blocks ads but also protects your browser from all the malware."
            },
          ]
        },
        section5: {
          heading: "FAQ",
          bgColor:'bg-[#190839]',
          headingColor: "text-[#012A84]",
          subHeadingColor:"black",
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
          subHeading:'chrome extension',
          bgColor: "bg-[#0B1418]",
          subHeadingColor: "text-[#F1C02A]",
          headingColor: "text-white",
          subheading: "Twitch adblocker",
          textColor: "text-white",
          text: "Twitch is the most popular streaming platform among gamers where you can stream live streaming. But some ads frustrate us while streaming. In that case, there is the Twitch adblocker Chrome extension where you can eliminate all the ads that spoil your moment. It not only blocks ads but also protects your browser from all the third-party trackers.",
          subtext: "Say goodbye to ",
          subTextColor: "text-[#F1C02A]",
          subTextHoverColor: "hover:text-black",
          tag: "and Enjoy Streaming",
          tagColor: "[#F1C02A]",
          tag2:'TWITCH ADS',
          borderColor:'border-[#F1C02A]',
          hoverColor:'hover:bg-[#F1C02A]'
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
