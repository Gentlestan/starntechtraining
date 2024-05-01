
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

/*import { useState, useEffect } from 'react';
import { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
    images: StaticImageData[]; // Array of images
    imgAlt: string;
    title: string;
}

export default function Hero(props: HeroProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % props.images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="relative h-[80vh]">
            <div className="absolute -z-10 inset-0">
                <Image
                    src={props.images[currentImageIndex]}
                    alt={props.imgAlt}
                    fill
                    style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900"></div>
            </div>
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="text-center md:max-w-[70%] xl:max-w-[60%] px-6]">
                    <h1 className="text-white text-3xl md:text-4xl xl:text-4xl leading-[4rem] md:leading-[4.5rem] xl:leading-[5.5rem]">{props.title}</h1>
                </div>
            </div>
        </div>
    )
}*/



