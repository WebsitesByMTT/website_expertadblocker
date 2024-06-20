import React from 'react'

const Content = () => {
    const subFeatures=[
        {
            heading: "Improved User Experience",
            text: "When advertisements take up a large amount of the screen, they become annoying. With the help of our adblocking software, you can ignore these distractions and concentrate on your screen without any interruptions. Our adblock chrome aims for a more enjoyable and productive browsing experience for every user regardless of time and place."
        },
        {
            heading: "Protection of Privacy",
            text: "everyone knows that by gathering information about surfing choices, habits, and even personal data, online tracking through advertisements surely jeopardizes your privacy. By stopping these tracking systems from operating, our adblocking software protects your privacy and keeps your private information from being disclosed to unaffiliated parties."
        },
        {
            heading: "Reduced Distractions",
            text: "Intrusive advertisements can disrupt the user experience by drawing attention away from a web page's essential content. Adblock chrome contributes to a more intense browsing environment, allowing users to engage with material more efficiently and without unwanted distractions."
        },
        {
            heading: "Reduced Data Usage",
            text: "For users with inadequate internet infrastructure, decreasing data usage is serious. Adblocking software helps conserve data by stopping the loading of resource-intensive advertising, which reduces data usage during browser sessions."
        }
    ]
  return (
    <div className='w-[90%] py-10 mx-auto'>
       <div>
          <h6 className='text-center text-black font-semibold text-[3rem]'>Protect Your Browsing: Get Our Virus-Free App Today!</h6>
          <div className='grid grid-cols-12 gap-6 text-[#fff] text-opacity-90 font-normal text-[1.5rem] md:text-[1.2rem] mx-auto w-[100%] md:w-[80%] pt-6'>
             <div className='bg-black p-5 col-span-12 md:col-span-6 rounded-2xl'>
                <p>Are you tired of compromising your privacy by enduring unwanted ads and suffering slow browsing? Look no further! Regain control over your internet experience effortlessly with Expert Adblocker.</p>
             </div>
            <div className='bg-black p-5 col-span-12 md:col-span-6 rounded-2xl'>
                <p>Downloading our app takes just a few clicks. Visit our official website to download the link safely without any interruptions. Bid farewell to intrusive ads and enjoy faster, cleaner browsing within minutes with our adblock plus chrome extension.</p>
            </div>  
            <div className='bg-black p-5 col-span-12 rounded-2xl'>
              <p>Whenever you decide to download something online, it is expected to have a fear of viruses or malware. But you do not need to have this fear for our application. Your security is our top priority. Therefore, we have ensured that all the necessary steps were performed before launching our Adblocking magic to you. Easily download and install the application with our ad blocker google chrome extension.</p>
            </div>
          </div>
       </div>
       <div className='pt-20'>
          <h6 className='text-center text-yellow-500 font-semibold text-[3rem]'>Enjoy a Seamless Browsing Experience With Expert Adblocker</h6>
          <p className='text-center text-[1.8rem] md:text-[1.5rem] md:w-[80%] mx-auto'>Join the millions of happy users who use Expert Adblocker to browse smoothly without ads.. Say goodbye to interruptions and welcome a more seamless, enjoyable experience. Download our application now to step into a safer, cleaner internet experience</p>
       </div>
       <div className='mt-20 px-10 py-20 rounded-[4rem] bg-gray-100'>
          <h6 className='text-center font-semibold tracking-wide text-[3rem]'>Explore the Benefits of Expert Adblocker</h6>
          <p className='text-[1.8rem] md:text-[1.2rem] text-center md:w-[80%] mx-auto'>Are you also sick and tired of those flashy and unwanted advertisements, and no matter what you do, they don&apos;t leave your screen? There is no need to stress yourself out when the solution is just a few clicks away. With our Expert advertisement blocker chrome, you can easily block most advertisements without disrupting your browsing experience.</p>
          <p className='text-[1.8rem] md:text-[1.2rem] text-center pt-5 md:w-[80%] mx-auto'>If you still have any doubts, here are some of the top benefits of our Expert Adblocker extension.</p>
          <div className={`w-[100%] gap-2 md:gap-0 mx-auto my-[4rem] flex flex-wrap justify-center items-stretch `}>
                {subFeatures.map((item, index) => (
                    <div key={index} className={`border-[1px] border-black md:w-[25%] p-4 last:rounded-tr-3xl lg:last:rounded-br-3xl lg:rounded-none lg:first:rounded-tl-3xl first:rounded-bl-3xl md:min-w-[300px] rounded-3xl`}>
                        <div className={`md:hover:scale-[1.2] hover:bg-yellow-500 duration-200 w-full p-4  flex h-[100%] flex-col  rounded-3xl`} key={index}>
                            <h3 className='text-[3.2rem] md:text-[2rem] font-[600] py-4 capitalize'>{item.heading}</h3>
                            <p className="text-[1.8rem] md:text-xl font-light md:leading-6 tracking-wide mb-5">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='text-center text-[1.8rem] md:text-[1.5rem] md:w-[80%] mx-auto font-semibold'>Our team works on finding the right balance between improving the user experience and blocking ads without compromising the quality of the website.</div>
       </div>
       <div className='pt-[1.5rem] space-y-10'>
        <div className='text-center'>
            <div className='text-[2.5rem] text-yellow-500 font-semibold'>Block ads everywhere, including Twitch, Hulu, YouTube, Spotify, and more!</div>
            <p className='text-[1.8rem] md:text-[1.2rem] py-3 md:w-[80%] mx-auto'>Say goodbye to bothersome advertising on your favorite platforms with our firm and safe plugin, the adblock browser chrome. We&apos;ve got you covered, whether you&apos;re streaming on Twitch, viewing Hulu, or listening to Spotify. Our adblocker works flawlessly across platforms, allowing you to enjoy your favorite content without interruption. Experience the web as it should be: ad-free. Say welcome to a cleaner and quicker browsing experience today!</p>
            <p className='text-[1.8rem] md:text-[1.2rem] w-[80%] mx-auto'>Our app lets you browse without worrying about who is stealing your information. Use Expert Adblocker for safe and uninterrupted internet browsing.</p>
        </div>
        <div className='text-center'>
            <div className='text-[2.5rem] text-blue-800 font-semibold'>Enjoy ad-free bliss with our Expert Adblocker</div>
            <p className='text-[1.8rem] md:text-[1.2rem] md:w-[80%] mx-auto py-3'>With our adblock chrome capabilities, you may browse uninterrupted. Glide effortlessly around the web, regaining your peace of mind with each click. Say goodbye to bothersome advertisements and welcome ad-free bliss. Let us work together to make the internet experience cleaner and more serene.</p>
        </div>
       </div>
    </div>
  )
}

export default Content
