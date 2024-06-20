
// JSON DATA
export const data = [
    {
        slug: 'Expert_Ad_Blocker',
        title: 'How do you use a Expert Add Blocker?',
        banner: '/blogs/blogimage1.png',
        bannerAlt:'Expert Add addblocker',
        publishDate: '24th may, 2024',
        seo:{
            metadesc:'The article discusses how to use the Screen Recorder application to use your webcam while screen recording. It also mentions the steps to use a webcam while screen recording.',
            optitle:'How do you use a webcam while recording a screen?',
            opdesc:'The article discusses how to use the Screen Recorder application to use your webcam while screen recording. It also mentions the steps to use a webcam while screen recording.',
            siteName:'Recordbro - Blog'
        },
        content: [
            {
                heading: "",
                desc: [
                    "You could require a screen and camera recorder to record the screen and camera simultaneously when preparing instructional materials for video lessons or quickly explaining something to your colleagues. You have come to the correct place to discover how to record your Windows computer's screen and webcam simultaneously.",
                    "For such scenarios, your best option is the Screen Recorder application, which allows you to use your webcam while screen recording. This article will walk you through six in-depth instructions that will help you to use the webcam while screen recording."
                ],
                points : [],
                image:"",
                Alt:'' 
            },
            {
                heading: "How to Record Screen and Webcam at the Same Time",
                desc: ["The most excellent option for simultaneously recording displays and webcams is the Screen Recorder. With a few clicks with this program, you can easily add a facecam overlay to the screen recording. During the recording process, you have complete control over the positioning and shape of your webcam overlay on your screen as well as the quality, orientation, and other settings.", "This software's green screen function makes producing videos with simulated backgrounds simple. The camera feature can help you eliminate the background while recording video. Consequently, you can select a hazy, scenic studio, classroom, or background effect. You may also upload a photo from your device as the background. This camera and screen recorder for simultaneously recording screen and webcam are currently available for free download. Hold onto this opportunity!"],
                points : [],
                image:"",
                Alt:'' 
            },
            {
                heading:"How to simultaneously record your screen and webcam on a Windows 10 and 11 computer:",
                desc:[],
                points : [
                    {
                        steps:'Step 1:',
                        point:"Open this webcam recorder and click the left panel's down-arrow button to choose the small webcam symbol."
                    },
                    {
                        steps:'Step 2:',
                        point:" If your computer is connected to multiple cameras, you can select the one you want. In addition, you may choose the audio source, change the position and resolution, and even change the opacity if necessary."
                    },
                    {
                        steps:'Step 3:',
                        point:"The AI module will download after turning on Remove Background."
                    },
                    {
                        steps:'Step 4:',
                        point:"After that, you can use various effects, such as blur, scenery, studio, and classroom, to adjust the background image. Alternatively, you can upload a photo from your computer. It is best to have a solid colour background so that AI recognition can remove the background more effectively."
                    },
                    {
                        steps:'Step 5:',
                        point:"Press the REC button when preparing to begin your webcam recording. You can take screenshots, resize the recording window, and pause or stop the recording at any time while it's happening. Click the red square symbol to stop the recording."
                    },
                    {
                        steps:'Step 6:',
                        point:"You will then be able to view a preview of the recorded videos. In addition, there are other tools that you can use to improve the recordings."
                    }
                
                ],
                image:"/blogs/blogimage2.png",
                Alt:'' 

            }
            ,{
                heading:"",
                desc:["Our screen recorder offers a comprehensive suite of features designed to empower users to capture their digital experiences precisely and efficiently. With the ability to record your screen, camera, microphone, and internal audio simultaneously, you can effortlessly create dynamic and engaging content.","Moreover, our platform prioritizes security, enabling you to maintain complete control over who can access your videos through customizable security settings. Whether you're creating tutorials, presentations, or gameplay footage, rest assured that your recordings remain private and secure."," Additionally, the convenience of downloading recordings directly to your camera roll ensures seamless accessibility and sharing across devices. With these key features, our screen recorder provides a versatile solution for confidently capturing and sharing your moments."],
                points : [],
                image:"",
                Alt:'' 
            }
        ]
    }
]

export const handelArticle = async (slug) => {
    try {
         const article = data.find(item => item.slug === slug)
        if (article) {
            return article;
        } else {
            console.log(false, 'Somthing Went Wrong!')
        }
    } catch (error) {
        console.log(error, 'Somthing Went Wrong!')
    }
}