
import { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
    imgData: StaticImageData;
    imgAlt: string;
    title: string;
}

export default function Hero(props: HeroProps) {
    return (
        <div className="relative h-[80vh]">
            <div className="absolute -z-10 inset-0">
                <Image
                    src={props.imgData}
                    alt={props.imgAlt}
                    fill
                    style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900"></div>
            </div>
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="text-center md:max-w-[80%] xl:max-w-[80%] px-6]">
                    <h1 className="text-white md:text-2xl xl:text-2xl  md:leading-[2.5rem] xl:leading-[3.5rem]">{props.title}</h1>
                </div>
            </div>
        </div>
    )
}
