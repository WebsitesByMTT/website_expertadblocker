import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import BannerAnimation from "../components/animate-bounce/BannerAnimation"

export const metadata = {
  title: "About us - Expert adblocker",
  description: "About us - Expert adblocker is the free Adblocker Chrome extension that not only blocks unwanted ads or pop-ups",
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: "About us - Expert adblocker",
    description: "About us - Expert adblocker is the free Adblocker Chrome extension that not only blocks unwanted ads or pop-ups",
    type: 'website',
    siteName: "Expert adblocker",
    url: 'https://expertadblocker.com/about-us',
    images: "https://experadblocker.com/favicon.png",
  }
};

const AboutUs = () => {
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
      logoUrl: "/",
      logoColor: "black",
      textColor: "text-black",
      buttonColor: "bg-black",
      buttonTextColor: "text-white",
      borderColor: "border-black",
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
    <div className="bg-white">
      <div className=' bg-[#F3F3F3] rounded-bl-[4rem] rounded-br-[4rem] lg:rounded-bl-[6.5rem] lg:rounded-br-[6.5rem]' style={{ backgroundImage: 'url(./bg.png)' }}>
        <Navbar data={data.navbar} />
        <h1 className="text-[4.5rem] text-center lg:text-left font-[800] px-10 lg:px-28 py-5 text-[#F74C04]">About Us</h1>
      </div>
      <div className="bg-white py-20  md:pb-20 md:py-5">
        <div className="grid grid-cols-12  px-5 md:px-0 space-y-5 md:space-y-0 items-center md:w-[95%] 2xl:w-[90%] mx-auto">
          <div className="col-span-12 md:col-span-6 md:flex justify-center hidden w-[75%]">
            <BannerAnimation images={data?.navbar.animationImages} />
          </div>
          <div className="col-span-12 md:col-span-6 flex justify-center">
            <div className="space-y-8">
              <div className="bg-[#F3F3F3] border-[2px] border-transparent group hover:border-black md:w-[90%] 2xl:w-[70%] p-5 rounded-[1.5rem]">
                <div className="text-black group-hover:text-[#F74C04] text-[2.4rem] font-bold md:text-[2rem] 2xl:text-[2.5rem]">What is an <a href="/">Expert AdBlocker</a>?</div>
                <p className="text-black text-[1.6rem] md:text-sm">It is the <a href="https://www.expertadblocker.com/">browser extension</a> that blocks all the unnecessary ads and protects you from third-party trackers. It also saves your data usage. By simply downloading the extension, you can have the best internet experience and it also speeds up your page loading. The best part is it not only removes ads but also protects your privacy. It is very simple to use and it&apos;s customizable which will improve your online experience.</p>
              </div>
              <div className="bg-[#F3F3F3] border-[2px] border-transparent group hover:border-black  md:w-[90%] md:text-[2rem] 2xl:w-[70%] p-5 rounded-[1.5rem]">
                <div className="text-black group-hover:text-[#F1C02A] md:text-[2rem] text-[2.4rem] font-bold 2xl:text-[2.5rem]">Adblocker for all</div>
                <p className="text-black text-[1.6rem] py-4 md:text-sm">We have a separate extension for YouTube where you can block all the disturbing ads on YouTube. As Youtube is the most visited website around the globe and everyone loves to watch videos on it. By blocking these ads with <a href="/youtube-adblocker">YouTube adblocker</a> you can enjoy all your favorite videos without Ads.</p>
                <p className="text-black text-[1.6rem] md:text-sm">For game streaming, we have a separate <a href="/twitch-adblocker">Twitch ad blocker</a>, <a href="/hulu-adblocker">Hulu adblocker</a>, and <a href="/spotify-adblocker">Spotify adblocker</a> where you can remove all those ads that can ruin your streaming. It works both on Google Chrome and Firefox. It is easy to install and has been helping people for the last ten years. So, what are you waiting for? Hurry up and download the extension now and enjoy your content freely.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer data={data.footer} />
    </div>
  )
}

export default AboutUs
