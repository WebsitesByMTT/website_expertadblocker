import Section1 from "./components/Home/Section1";
import Navbar from "./components/Navbar";
import Section2 from "./components/Home/Section2";
import Section3 from "./components/Home/Section3";
import Section4 from "./components/Home/Section4";
import Section5 from "./components/Home/Section5";
import Section6 from "./components/Home/Section6";
import Footer from "./components/Footer";

export default function Home() {
  const data = {

    section1: {
      heading: "Block Ads not your privacy",
      text: "Expert Adblocker is the ultimate extension that not only blocks all the annoying ads from your browser but also protects your privacy. So, download this ad blocker in Chrome now and enjoy an ad-free experience.",
      bgColor: "black",
      headingColor: "[#F74C04]",
      textColor: "[#F1C02A]",
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
        buttonColor: "black"
      },
    },
    section2: {
      heading: "all in one",
      headingColor: "[#F74C04]",
      textColor: "black",
      text: "As compared to all the adblockers including abp plus chrome, adb plus chrome and fair adblocker, it is the only extension that has a separate Hulu adblock, adblocker for Twitch, YouTube adblock, and Spotify Adblock that will work smoothly on these platforms.",

    },
    section3: {
      bgColor: "[#F1C02A]",
      subHeading: "Exceptional features of",
      heading: "Expert Adblocker",
      headingColor: "[#F74C04]",
      featureTextColor: "black",
      featurebgColor: "[#F02828]",
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
      subFeaturesColor: "white",
      subHoverBgFeaturesColor: "black",
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
      subTextColor: "[#F02828]",
      textColor: "black",
      text: "It works smoothly on both Firefox and Chrome. So, what are you waiting for download the extension now and bid farewell to all the disturbing ads."
    },
    section4: {
      heading: "Reviews",
      headingColor: "[#F1C02A]",
      textColor: "white",
      bgColor: "black",
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
      headingColor: "[#F74C04]",
      subHeadingColor: "black",
      subheading: "Frequently Asked Questions",
      faqTextColor: "white",
      svgIconColor: "#F02828",
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
      bgColor: "black",
      subHeadingColor: "[#F74C04]",
      headingColor: "white",
      subheading: "expert Adblocker",
      textColor: "white",
      text: "It is the best browser extension that eliminates all the ads including banner ads, video ads, pop-ups, and many more. It also protects your browser from third-party trackers and dangerous websites. This is the free adblocker Chrome extension so that everyone can use it freely. With just a few clicks, you can protect your privacy. We aim to give the best experience to our users by blocking all the unnecessary ads that distract you while working or streaming your favorite content. So, go ad-free and enjoy the best internet experience.",
      subtext: "Goodbye to all the annoying ads with ",
      subTextColor: "[#F74C04]",
      subTextHoverColor: "black",
      tag: "Expert adblocker",
      tagColor: "white",
    },
    footer: {
      heading: "Popular Searches",
      headingColor: "black",
      bgColor: "[#F74C04]",
      textColor: "black",
      webLinksBg: "white",
      socialLinksBg: "#F1C02A",
      linksBg: "[#F1C02A]",
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
   
  );
}
