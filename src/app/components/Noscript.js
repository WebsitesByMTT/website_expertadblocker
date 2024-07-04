'use client'
import React from 'react'
import { useEffect } from 'react'
const Noscript = () => {
    useEffect(() => {
        const noscriptElement = document.createElement('noscript');
        const iframeElement = document.createElement('iframe');
        iframeElement.src = 'https://www.googletagmanager.com/ns.html?id=GTM-WK6TLBF5'; 
        iframeElement.setAttribute('frameborder', '0'); 
        noscriptElement.appendChild(iframeElement);
        document.body.appendChild(noscriptElement);
    }, [])
    return (
        <>

        </>
    )
}

export default Noscript
