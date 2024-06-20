'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NotFound() {

    const router = useRouter()
    const [state, setState] = useState(false)
    const handelclick = () => {
        setState(true);
        const route = setTimeout(() => {
            router.push('/');
        }, 300);
        return () => clearTimeout(route);
    };

    return (
        <main className="w-full relative bg-[#F74C04] h-screen">
            <div className="bg-[url('/404/line.png')] w-full h-[50%]"></div>
            <div className="top-[3%] space-y-[10%] absolute w-full">
                <div>
                    <div className="text-center text-[10rem] font-bold text-[#F1C02A] md:text-[6rem]">404 ERROR</div>
                    <div className="text-[#F1C02A] text-[1.6rem] text-center md:text-[1.2rem]">The link you followed is probably broken or the page does not exist</div>
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                    <Image alt="404" src={'/404/returntohome.png'} onClick={handelclick} className={`${state && 'animate'} 404Image animate-bounce cursor-pointer mx-auto w-[25%] md:w-[8%] lg:w-[10%]`} width={170} height={170} />
                    <Image alt="404" src={'/404/element.svg'} className={`${state && 'animate-scale'} absolute animate-bounce w-[30%] bottom-[10%]`} width={300} height={300} />
                    <Image alt="404" src={'/404/404.svg'} className="mx-auto w-full md:w-[60%] lg:w-[40%]" width={150} height={150} />
                </div>
            </div>
        </main>
    );
}

