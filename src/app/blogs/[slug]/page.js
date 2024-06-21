import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import { handelArticle } from '@/app/components/articlesData/Data';
import Image from 'next/image'
import React from 'react'


export async function generateMetadata({ params, searchParams }, parent) {
   const data = await handelArticle(params?.slug)
   return {
      title: data?.title,
      description: data?.seo.metadesc,
      icons: {
         icon: '/favicon.png',
      },
      openGraph: {
         title: data?.seo.optitle,
         description: data?.seo.opdesc,
         type: 'website',
         siteName: data?.seo.siteName,
         images: "/favicon.png",
         url: data?.seo.url,
      },
      alternates: {
         canonical: "/",
      },
   };
}


const page = async ({ params }) => {
   const data = await handelArticle(params?.slug)

   const Data = {
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
         keywords: "Expert adblocker chrome extension, Hulu adblock,Youtube adblocker chrome extension,Twitch adblocker, adblock chrome, adblock plus chrome, adblocker google chrome, advertisement blocker chrome, blocker chrome, abp plus chrome, ad blocker in chrome, adb plus chrome, adblock browser chrome, Spotify adblocker, twitch adblock extension, ad free hulu, ad blocker free",
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
         webLinks: [
            { name: "Twitch adblocker", link: "/twitch-adblocker" },
            { name: "Hulu adblocker", link: "/hulu-adblocker" },
            { name: "Youtube adblocker", link: "/youtube-adblocker" },
            { name: "Spotify adblocker", link: "/spotify-adblocker" }
         ]
      }
   }


   return (
      <>
         <div className=' bg-[#F3F3F3] rounded-bl-[4rem] rounded-br-[4rem] lg:rounded-bl-[6.5rem] lg:rounded-br-[6.5rem]' style={{ backgroundImage: 'url(./bg.png)' }}>
            <Navbar data={Data.navbar} />
         </div>
         <div className='pt-10  w-[90%] mx-auto'>
            <div className='flex items-center'>
               <div className='text-[#B6A4E6]'>Blogs</div>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide text-[#B6A4E6] lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
            </div>
            <div className='pt-3'>
               {data?.title && <h1 className='md:text-[3rem] text-[2rem]'>{data?.title}</h1>}
               {data?.banner && <div className='py-4'>
                  <Image src={data?.banner} alt={data.bannerAlt} width={1000} height={1000} className='w-full' quality={100} />
               </div>}
               <div className='md:w-[90%] mx-auto'>
                  <div className='text-black text-[2rem]'>Published on</div>
                  <div className='text-[1.2rem] md:text-[.9rem] text-black '>{data?.publishDate}</div>
                  {data?.content.length > 0 && (
                     <div className='py-4 space-y-4'>
                        {data?.content?.map((item, index) => (
                           <div key={index}>
                              {item.heading && <h2 className={` ${item?.type=='faq'?'md:text-[2.5rem]':'md:text-[1.7rem]'} font-semibold text-[2rem]`}>{item.heading}</h2>}

                              {item.desc.length > 0 && item?.desc.map((subitem, descIndex) => (
                                 <p className='py-4 text-[1.5rem] md:text-[1.1rem]' key={descIndex} dangerouslySetInnerHTML={{ __html: subitem }}></p>
                              ))}
                              {item?.methods?.data.length > 0 &&
                                 item?.methods?.data?.map((method, methodindx) => (
                                    <div key={methodindx} className='py-5'>
                                       <div className='md:text-[1.7rem] text-[1.7rem]'>{method?.heading}</div>
                                       {item?.methoddesc&&<p className='text-[1.5rem] md:text-[1.1rem]'>{item?.methoddesc}</p>}
                                       <ul className='space-y-3 pl-6 py-3 list-disc'>
                                          {
                                             method.points?.map((point, ind) => (
                                                <li key={ind}>
                                                   <div className='text-[1.5rem] md:text-[1.1rem]'>
                                                      <p>{point}</p>
                                                   </div>
                                                </li>))}
                                       </ul>
                                    </div>
                                 ))

                              }
                              {item?.points.length > 0 && <ul className='space-y-3 pl-6 py-3 list-disc'>
                                 {
                                    item?.points.map((point, ind) => (
                                       <li key={ind}>
                                          <div className=''>
                                             <div className='text-[1.5rem]  md:text-[1.1rem]'>  <span className='font-semibold text-[1.5rem] md:text-[1.1rem] pr-2'>{point.steps}</span><p dangerouslySetInnerHTML={{__html:point.point}} className='inline'></p></div>
                                          </div>
                                       </li>
                                    ))
                                 }

                              </ul>}
                              <div className='pb-5'>
                                 {item.image && <Image src={item.image} alt={item.Alt} width={1000} height={1000} className='w-full' />}
                              </div>
                           </div>
                        ))}
                     </div>
                  )}
               </div>
            </div>
         </div>
         <Footer data={Data.footer} />
      </>
   )
}

export default page