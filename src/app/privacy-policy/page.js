import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const PrivacyPolicy = () => {
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
        }
      ],
      logoColor: "black",
      textColor: "text-black",
      buttonColor: "bg-black",
      buttonTextColor: "text-white",
      MobileNavbgColor: 'bg-white',
      mobileNavTextColor: 'text-black',
      mobilebuttonBgColor: 'bg-black',
      mobilebuttonTextColor: 'text-white'
    },
    heading: "Privacy Policy",
    subHeadings: [
      {
        heading: "Personal Information",
        text: "It applies the collection and use of personal data for users by Expert Adblocker. We ask for personal information like your name, contact number, email ID, etc. We do not disclose our customer's information without their knowledge. We also collect information about the device from where you have access including the IP address."
      },
      {
        heading: "Personal information about your children",
        text: "If your kid is under 18 and he/she mistakenly has an account on this website. Then we delete all their information immediately as this service is not intended to be used for children."
      },

      {
        heading: 'How we use cookies on our website',
        text: "We utilize cookies and other technologies to collect data that will enhance the usability, performance, and effectiveness of the expert adblocker. Cookies are the files that are transmitted to your browser and they also gather general information about your visits to our website. It also stores your data but we never use any of your information. "
      }
    ],
    cookies: [
      {
        heading: "Strictly Necessary Cookies",
        text: "These cookies are essential for enabling you to navigate the website and improve its features including secure areas. Without these important services like security, e-billing is not possible."
      },
      {
        heading: "Performance Cookies",
        text: "It collect all the information about your website usage that helps to improve its functionality."
      },
      {
        heading: "Functionality Cookies",
        text: "When you visit our website your preference will be superior including computer configuration and provide personalized features."
      },
      {
        heading: "Advertising Cookies",
        text: "It deliver adverts tailored to your interests and helps to limit the number of times that you see a commercial. Advertisers place it with our permission. "
      },
    ],
    communication: {
      heading: "How we communicate with  you",
      text: "We send you various types of communications including emails, SMS, desktop alerts, or other notifications. ",
      list: [
        "Notifications regarding detected issues.",
        "Alerts about the expiration of your account.",
        "Your status report on our website.",
        "Notices about our service and software updates.",
        "Requests for feedback."
      ]
    },
    protection: {
      heading: "How we protect your data",
      text: "Your personal information offered to us is stored in secure facilities which is only accessible to authorized personnel. We have secured an operating environment inaccessible to unauthorized users and complete security cannot be guaranteed. It is free to use, hence there are no charges.<br/><br/>Note- If you want to have more information regarding our privacy policy, you can mail us on your official ID. We will be happy to help you."
    },
    footer: {
      heading: "Popular Searches",
      wrapperColor: "bg-[#F1C02A]",
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
    <div className="bg-[#F1C02A]">
      <div className=' bg-white rounded-bl-[4rem] rounded-br-[4rem] lg:rounded-bl-[6.5rem] lg:rounded-br-[6.5rem]' style={{ backgroundImage: 'url(./bg.png)' }}>
        <Navbar data={data.navbar} />
        <h1 className="text-[4.5rem] text-center lg:text-left font-[800] px-10 lg:px-28 py-5 text-[#F74C04]">{data.heading}</h1>
      </div>
      <div className="w-[90%] md:w-[80%] lg:w-[60%] m-auto bg-white my-20 rounded-[4.5rem] p-10 text-black md:text-xl text-3xl font-[500]">
        {data.subHeadings.map((item, index) => (
          <div key={index}>
            <p className="font-[600] mt-4">{item.heading}</p>
            <p className="md:text-lg text-2xl font-[400] leading-6">{item.text}</p>
          </div>
        ))}
        {data.cookies.map((item, index) => (
          <div key={index}>
            <p className="font-[600] mt-4 leading-5">{item.heading}{": "}
              <span className="md:text-lg text-2xl font-[400] leading-6">{item.text}</span></p>
          </div>
        ))}
        <p className="font-[600] mt-4">{data.communication.heading}</p>
        <p className="md:text-lg text-2xl font-[400] leading-6">{data.communication.text}</p>
        {data.communication.list.map((item, index) => (
          <ul className="list-disc md:text-lg text-2xl font-[400] leading-6" key={index}>
            <li className="m-2">{item}</li>
          </ul>
        ))}
        <p className="font-[600] mt-4">{data.protection.heading}</p>
        <p className="md:text-lg text-2xl font-[400] leading-6" dangerouslySetInnerHTML={{ __html: `<span>${data.protection.text}</span>` }}></p>
      </div>

      <Footer data={data.footer} />
    </div>
  )
}

export default PrivacyPolicy;