import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import ContactForm from '../components/ContactForm'

export const metadata = {
  title: "Contact us - Expert adblocker",
  description: "Contact us - Expert adblocker is the free Adblocker Chrome extension that not only blocks unwanted ads or pop-ups",
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: "Contact us - Expert adblocker",
    description: "Contact us - Expert adblocker is the free Adblocker Chrome extension that not only blocks unwanted ads or pop-ups",
    type: 'website',
    siteName: "Expert adblocker",
    url: 'https://expertadblocker.com/contact-us',
    images: "https://experadblocker.com/favicon.png",
  }
};

const page = () => {
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
      webLinks :[
        { name: "Twitch adblocker", link: "/twitch-adblocker" },
        { name: "Hulu adblocker", link: "/hulu-adblocker" },
        { name: "Youtube adblocker", link: "/youtube-adblocker" },
        { name: "Spotify adblocker", link: "/spotify-adblocker" }

    ]
    }
  }

  return (
    <div className="bg-[#F1C02A]">
      <div className=' bg-[#F3F3F3] rounded-bl-[4rem] rounded-br-[4rem] lg:rounded-bl-[6.5rem] lg:rounded-br-[6.5rem]' style={{ backgroundImage: 'url(./bg.png)' }}>
        <Navbar data={data.navbar} />
        <h1 className="text-[4.5rem] text-center lg:text-left font-[800] px-10 lg:px-28 py-5 text-[#F74C04]">Contact us</h1>
      </div>
      <div className='py-10'>
        <div className='bg-[#0B1418] py-20 rounded-[3rem] w-[95%] md:w-[85%] mx-auto'>
          <div className='grid grid-cols-12 items-center '>
            <ContactForm />
            <div className='col-span-12 md:col-span-6'>
              <Image src="/contact-us.svg" alt="img" height={200} width={200} className='lg:w-[80%] md:w-[90%] w-[80%] 2xl:w-[60%] mx-auto' />
            </div>
          </div>
        </div>
      </div>
      <Footer data={data.footer} />
    </div>
  )
}

export default page;
