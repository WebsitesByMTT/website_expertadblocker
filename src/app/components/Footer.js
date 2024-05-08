import React from 'react'

const Footer = ({ data }) => {
    const webLinks = [
        { name: "Twitch adblocker", link: "/twitch-adblocker" },
        { name: "Hulu adblocker", link: "/hulu-adblocker" },
        { name: "Youtube adblocker", link: "/youtube-adblocker" },
        { name: "Spotify adblocker", link: "/spotify-adblocker" }

    ]
    const socialLinks = [
        {
            icon: (<svg className="m-auto" width="50%" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M22.5008 0C34.8915 0 44.9361 10.0476 44.9361 22.442C44.9361 34.8363 34.8915 44.8839 22.5008 44.8839C10.1101 44.8839 0.0654297 34.8363 0.0654297 22.442C0.0654297 10.0476 10.1101 0 22.5008 0ZM34.673 13.2118C36.0713 14.2022 36.4513 16.0867 36.6278 17.7914C36.951 20.9312 36.9542 24.1025 36.6389 27.2438C36.5096 28.5385 36.2904 29.9057 35.4375 30.8882C34.5925 31.8628 33.3392 32.2397 32.0244 32.3816C31.356 32.4541 30.6718 32.4667 30.0159 32.4652C24.9002 32.462 19.7844 32.4573 14.6701 32.4526C13.0589 32.451 11.3059 32.4005 10.0636 31.3771C8.66205 30.2211 8.3704 28.2168 8.25532 26.4033C8.09924 23.9179 8.08505 21.4247 8.2159 18.9379C8.28685 17.5722 8.40981 16.1734 8.99785 14.9386C9.42193 14.0508 10.1266 13.2528 11.0268 12.8334C11.9374 12.4088 12.8848 12.4184 13.8577 12.4282C14.005 12.4297 14.1528 12.4312 14.3012 12.4312C15.6519 12.4297 17.0026 12.4285 18.3532 12.4273C19.7047 12.4261 21.0562 12.4249 22.4077 12.4234C23.5319 12.4227 24.6563 12.4216 25.7807 12.4205C27.4664 12.4187 29.1521 12.417 30.8373 12.417C32.1663 12.4155 33.5899 12.4439 34.673 13.2118ZM19.4501 18.0374V26.8448L27.0742 22.4403L19.4501 18.0374Z" fill={data.socialLinksBg} />
            </svg>)
            ,
            link: ""
        },
        {
            icon: (<svg className="m-auto" width="50%" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M26.5671 44.7956C37.5097 43.2707 45.933 33.8735 45.933 22.5066H45.9361C45.9361 10.0769 35.8622 0 23.4361 0C11.01 0 0.936127 10.0769 0.936127 22.5066C0.936127 33.7079 9.11823 42.9995 19.8306 44.7247C21.0036 44.9139 22.208 45.0117 23.4346 45.0117C24.4971 45.0117 25.5439 44.9376 26.5671 44.7956ZM26.5245 17.7789V12.876L26.5261 12.8745C26.5261 11.7028 27.4767 10.7519 28.648 10.7519H32.5893V5.04004H26.5576C26.5521 5.04004 26.5469 5.04083 26.5418 5.04162C26.5367 5.04241 26.5316 5.0432 26.5261 5.0432V5.04004C22.8039 5.04004 19.788 8.05838 19.788 11.7801V17.7789H14.1961V24.3833H19.788V39.5286C20.961 39.7178 22.1654 39.8156 23.3919 39.8156C24.4545 39.8156 25.5013 39.7414 26.5245 39.5995V24.3833H31.6276L32.5877 17.7789H26.5245Z" fill={data.socialLinksBg} />
            </svg>
            ),
            link: ""
        },
        {
            icon: (<svg className="m-auto" width="50%" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M23.3841 0H23.4866C35.8842 0 45.9346 10.0533 45.9346 22.4546V22.5571C45.9346 34.9584 35.8842 45.0117 23.4866 45.0117H23.3841C10.9864 45.0117 0.936127 34.9584 0.936127 22.5571V22.4546C0.936127 10.0533 10.9864 0 23.3841 0ZM16.4742 9.1582H30.398C34.2447 9.1582 37.3741 12.2885 37.3741 16.1363V28.8783C37.3741 32.7261 34.2447 35.8564 30.398 35.8564H16.4742C12.6275 35.8564 9.49814 32.7261 9.49814 28.8783V16.1363C9.49814 12.2885 12.6275 9.1582 16.4742 9.1582ZM16.4742 11.6199C13.9849 11.6199 11.9591 13.6463 11.9591 16.1363V28.8783C11.9591 31.3684 13.9849 33.3948 16.4742 33.3948H30.398C32.8873 33.3948 34.9131 31.3684 34.9131 28.8783V16.1363C34.9131 13.6463 32.8873 11.6199 30.398 11.6199H16.4742ZM23.4363 28.9964C27.0134 28.9964 29.9252 26.0853 29.9252 22.5055C29.9252 18.9258 27.015 16.0147 23.4363 16.0147C19.8576 16.0147 16.9474 18.9258 16.9474 22.5055C16.9474 26.0853 19.8576 28.9964 23.4363 28.9964ZM23.4363 18.4779C25.6576 18.4779 27.4643 20.2852 27.4643 22.5071C27.4643 24.7291 25.6576 26.5363 23.4363 26.5363C21.215 26.5363 19.4083 24.7291 19.4083 22.5071C19.4083 20.2852 21.215 18.4779 23.4363 18.4779ZM32.2741 15.3147C32.2741 16.2798 31.489 17.0636 30.5257 17.0636C29.5609 17.0636 28.7774 16.2798 28.7774 15.3147C28.7774 14.3496 29.5609 13.5658 30.5257 13.5658C31.4906 13.5658 32.2741 14.3496 32.2741 15.3147Z" fill={data.socialLinksBg} />
            </svg>
            ),
            link: ""
        },


    ]


    return (
        <div className={`${data.wrapperColor}`}>
            <div className={`${data.bgColor} rounded-tl-[6.5rem]  pt-10 rounded-tr-[6.5rem]`}>
                <h3 className={`md:text-2xl text-[2.2rem] font-semibold ${data.headingColor} text-center mb-8`}>{data.heading}</h3>
                <p className={`md:w-[60%] w-[90%] m-auto text-[1.8rem] md:text-lg font-normal ${data.textColor} text-center`} dangerouslySetInnerHTML={{ __html: `<span>${data?.keywords}</span>` }}></p>
                <div className='md:w-[50%] w-[80%] m-auto flex-wrap gap-2 gap-y-5 flex justify-evenly pt-10'>
                    {webLinks.map((item, index) => (
                        <a key={index} href={item.link} className={` hover:scale-90 transition-all ease-in-out px-4 py-2 text-[2rem] md:text-xl font-normal ${data.textColor} rounded-3xl bg-white`}>{item.name}</a>
                    ))}
                </div>
                <div className='md:w-[50%] w-[70%] m-auto flex flex-wrap gap-2 gap-y-4 justify-evenly py-16 md:py-8'>
                    {data.links.map((item, index) => (
                        <a key={index} href={item.link} className={` hover:scale-90 transition-all ease-in-out px-4 py-2 md:text-xl text-[2rem] font-normal ${data.textlinkColor} rounded-3xl ${data.linksBg}`}>{item.name}</a>
                    ))}
                </div>
                <div className='w-[70%] md:w-[30%]  m-auto flex-wrap gap-5 flex justify-evenly pb-5'>
                    {socialLinks.map((item, index) => (
                        <a key={index} href={item.link} className=' hover:scale-90 transition-all ease-in-out  py-2 min-w-[8rem] md:min-w-[0rem] text-[2rem] w-[20%] '>{item.icon}</a>
                    ))}
                </div>
                <p className={`${data.textColor} text-center md:font-md font-normal p-2`}>copyright © 2024 expertadblocker. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;