import Script from "next/script";
import React from "react";

const Schema = () => {
    return (
        <>
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        {
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "How do AdBlock detectors work?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "By just downloading the extension, it will automatically detect all the elements from your page that may harm your browser."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "How to stop YouTube adblocker popup?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "The best part is that this ad blocker works on YouTube also. It works by eliminating all the YouTube ads and lets you stream all your favorite videos without ads."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "How to get rid of YouTube adblocker popup?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "It is very simple, just download our separate extension for YouTube and block all the pop-ups, video ads, banner ads, and many more."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Are ad blockers legal?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes, all ad blockers including expert adblocker are legal to use."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Why are people using adblockers?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Because by just installing the extension you can have the best experience. It is the most trustworthy extension that continuously helps users block all ads and protect their data from all malware."
                                    }
                                }
                            ]
                        },
                        null,
                        "\t"
                    ),
                }}
                id="schema"
            />
        </>
    );
};

export default Schema;