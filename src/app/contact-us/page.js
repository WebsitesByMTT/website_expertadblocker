"use client"
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import emailjs from "@emailjs/browser";

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
        }
      ],
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
      ]
    }
  }
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="bg-[#F1C02A]">
      <div className=' bg-[#F3F3F3] rounded-bl-[4rem] rounded-br-[4rem] lg:rounded-bl-[6.5rem] lg:rounded-br-[6.5rem]' style={{ backgroundImage: 'url(./bg.png)' }}>
        <Navbar data={data.navbar} />
        <div className="text-[4.5rem] text-center lg:text-left font-[800] px-10 lg:px-28 py-5 text-[#F74C04]">Contact us</div>
      </div>
      <div className='py-10'>
        <div className='bg-[#0B1418] py-20 rounded-[3rem] w-[95%] md:w-[85%] mx-auto'>
          <div className='grid grid-cols-12 items-center'>
            <form onSubmit={sendEmail} className='col-span-12 order-2 md:order-1 md:col-span-6'>
              <div className='w-[90%] md:w-[80%] mx-auto space-y-8'>
                <div className='space-y-3'>
                  <div className='text-white text-[1.2rem]'>Name And Last Name</div>
                  <input type='text' name='fullname' placeholder="Your name" className='placeholder-gray-600 w-full outline-none border-[1px] text-[1.4rem] md:text-[1rem] text-white bg-transparent border-red-500 rounded-lg py-[1rem] md:py-2 px-5' required />
                </div>
                <div className='space-y-3'>
                  <div className='text-white text-[1.2rem]'>Email</div>
                  <input type='email' name='email' placeholder="Your@company.com" className='placeholder-gray-600 w-full outline-none border-[1px] text-white bg-transparent text-[1.4rem] md:text-[1rem] border-red-500 rounded-lg py-[1rem] md:py-2 px-5' required />
                </div>
                <div className='space-y-3'>
                  <div className='text-white text-[1.2rem]'>Phone</div>
                  <input type='text' name='phoneNumber' placeholder="+91" className='placeholder-gray-600 w-full outline-none border-[1px] text-white bg-transparent text-[1.4rem] md:text-[1rem] border-red-500 rounded-lg py-[1rem] md:py-2 px-5' required />
                </div>
                <div className='space-y-3'>
                  <div className='text-white text-[1.2rem]'>How Can We Help</div>
                  <textarea name="message" placeholder="Tell us a little about your query" className='placeholder-gray-600 w-full outline-none border-[1px] text-white resize-none bg-transparent border-red-500 text-[1.4rem] md:text-[1rem] rounded-lg py-[1rem] md:py-2 px-5' rows={7} required></textarea>
                </div>
                <div>
                  <button type="submit" className='rounded-[3.5rem] text-white text-[1.2rem] hover:scale-90 transition-all hover:bg-opacity-70 bg-[#F02828] px-4 py-[4px]'>SUBMIT</button>
                </div>
              </div>
            </form>
            <div className='col-span-12 order-1 md:order-2 md:col-span-6'>
              <Image src="/contact-us.svg" alt="img" height={200} width={200} className='lg:w-[80%] md:w-[90%] w-[80%] 2xl:w-[60%] mx-auto' />
            </div>
          </div>
        </div>
      </div>
      <Footer data={data.footer} />
    </div>
  )
}

export default page
