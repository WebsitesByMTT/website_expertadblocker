'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NotFound() {

    const router=useRouter()
    const [state,setState]=useState(false)
    const handelclick = () => {
        setState(true);
        const route = setTimeout(() => {
            router.push('/');
        }, 250); 
        return () => clearTimeout(route);
    };

    return (
        <main className="w-full relative bg-[#F74C04] h-screen">
            <div className="bg-[url('/404/line.png')] w-full h-[50%]"></div>
            <div className="top-[3%] absolute w-full">
                <div className="text-center text-[10rem] font-bold text-[#F1C02A]">404 ERROR</div>
                <div className="text-[#F1C02A] text-[1.6rem] text-center">The link you followed is probably broken or the page does not exist</div>
                <div className="w-full pt-[35%] h-full md:pt-[6%]">
                    <Image src={'/404/returntohome.png'} onClick={handelclick} className={`${state&&'animate'} cursor-pointer mx-auto w-[25%] md:w-[8%]`} width={170} height={170}/>
                    <Image src={'/404/404.svg'} className="mx-auto  w-full md:w-[60%] 2xl:w-[45%]" width={150} height={150}/>
                </div>
            </div>
        </main>
    );
}

