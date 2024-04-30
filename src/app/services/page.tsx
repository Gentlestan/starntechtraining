import InstallationImage from '/public/trainingImg.jpg'; // Import the service image
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Services() {
    return (
        <div>
            <Hero
                imgData={InstallationImage}
                imgAlt='solar Installation'
                title='Your investment deserves expertise. 
                Trust us to guide and execute your professional 
                installations. From solar to CCTV, fire alarms, 
                and smart Home amplifiers, we"ve got you covered'/>
            <h1 className="text-2xl md:text-3xl xl:text-4xl text-center mt-4 font-bold">Our Services</h1>
            <div>
                <div>
                    <h1 className="text-3xl text-center md:text-left md:ml-48 xl:ml-48 mt-4">Renewable Energy/Solar system Installation</h1>
                </div>
                    <div className="text-center flex items-start justify-start mt-16 flex-col  md:flex-col xl:flex-row mb-8">
                    <Image 
                        src="/inverter-1.jpeg" 
                        alt="training image"
                        width={500}
                        height={400}
                        objectFit="cover"
                        className=" mx-auto md:ml-48 xl:ml-48 xl:block"/>
                        <ul className="list-disc list-inside text-2xl text-start xl:text-3xl py-2 ml-2 md:ml-8 xl:ml-8">
                            <li className="py-2">Complete nationwide installation of solar systems and inverters, covering solar panels,
                            inverters, batteries, and more.    
                            </li>
                            <li className="py-2">Segregation of inverter and non-inverter circuits, enabling you to power essential appliances 
                            using solar energy while heavier appliances can run on PHCN or generator power.
                            </li>
                            <li className="py-2">
                            Implementation of earthing to safeguard your solar equipment against lightning strikes.
                            </li>
                            <li className="py-2">
                            Rapid installation turnaround, with services completed within two business days in Abuja
                            and five business days outside Abuja.
                            </li>
                            <li className="py-2">
                            "Our team comprises highly skilled in-house installers, with qualifications in Electrical 
                            Engineering, including both BSc and HND certifications
                            </li>
                            <li className="py-2">
                            Utilization of high-quality, cost-effective components sourced from leading manufacturers 
                            such as Felicity, Index, luminious, afripower, Schneider (Xantrex), US Battery, indian batteries,Multipower
                            Addo Su-Kam, and Luminous. Alternatively, you have the option to supply your own components. 
                            </li>
                        </ul> 
                    </div>
                    <div>
                    <h1 className="text-3xl text-center md:text-left md:ml-48 xl:ml-48 mb-8">Security/CCTV system Installation</h1>
                </div>
                <div className="flex">
                <div className=" text-center flex flex-col xl:flex-row items-start mb-8">
                    <Image 
                        src="/installation-cctv3.avif" 
                        alt="training image"
                        width={500}
                        height={400}
                        objectFit="cover"
                        className="mx-auto md:ml-48 xl:ml-48 xl:block"/>

                        <ul className="list-disc list-inside text-2xl text-start xl:text-3xl py-2 ml-2 md:ml-8 xl:ml-8">
                    
                        <li className="py-2">
                        Comprehensive CCTV installation services for residential and commercial properties
                        </li>
                        <li className="py-2">
                        Customized CCTV system design tailored to your specific security needs
                        </li>
                        <li className="py-2">
                        Installation of high-definition cameras for clear and detailed video surveillance.  
                        </li>
                        <li className="py-2">
                        Integration of advanced features such as motion detection, night vision, and remote access.
                        </li>
                        <li>
                        Professional setup of DVR/NVR systems for video recording and storage.  
                        </li>
                        <li className="py-2">
                        Expert placement of cameras to ensure maximum coverage and effectiveness  
                        </li>
                        <li className="py-2">
                        Configuration of mobile apps for convenient remote monitoring on smartphones and tablets.  
                        </li>
                    </ul>
                </div>
                </div>

                <div>
                    <h1 className="text-3xl text-center md:text-left md:ml-48 xl:ml-48 mt-4">Conventional Fire-Alarm System Installation</h1>
                </div>
                <div className="flex">
                <div className="text-center flex flex-col xl:flex-row items-start">
                    <Image 
                        src="/fire-panel.jpeg" 
                        alt="training image"
                        width={500}
                        height={400}
                        objectFit="cover"
                        className="mx-auto md:ml-48 xl:ml-48 xl:block"/>

                        <ul className="list-disc list-inside text-2xl text-start xl:text-3xl py-2 ml-2 md:ml-8 xl:ml-8">
                    
                        <li className="py-2">
                        Professional fire alarm installation services for both residential and commercial properties
                        </li>
                        <li className="py-2">
                        Customized fire alarm system design to meet your specific safety requirements
                        </li>
                        <li className="py-2">
                        Installation of high-quality fire alarm devices, including smoke detectors, 
                        heat detectors, and alarm panels  
                        </li>
                        <li className="py-2">
                        Integration of advanced features such as remote monitoring and notification 
                        systems for enhanced safety management
                        </li>
                        <li>
                        Professional setup of fire alarm control panels and communication devices for 
                        efficient emergency response  
                        </li>
                        <li className="py-2">
                        Expert placement of fire alarm devices to ensure optimal coverage and early 
                        detection of fire hazards  
                        </li>
                    </ul>
                </div>
                </div>
             </div>

               <div>
                    <h1 className="text-3xl text-center md:text-left md:ml-48 xl:ml-48 mt-4">Smart wall Amplifiers/ceiling Speakers Installation</h1>
                </div>
                <div className="flex">
                <div className=" text-center flex flex-col xl:flex-row items-start">
                    <Image 
                        src="/amplifiers.jpeg" 
                        alt="training image"
                        width={500}
                        height={400}
                        objectFit="cover"
                        className="mx-auto md:ml-48 xl:ml-48 xl:block"/>

                        <ul className="list-disc list-inside text-2xl text-start xl:text-3xl py-2 ml-2 md:ml-8 xl:ml-8">
                    
                        <li className="py-2">
                        Professional fire alarm installation services for both residential and commercial properties
                        </li>
                        <li className="py-2">
                        Customized fire alarm system design to meet your specific safety requirements
                        </li>
                        <li className="py-2">
                        Installation of high-quality fire alarm devices, including smoke detectors, 
                        heat detectors, and alarm panels  
                        </li>
                        <li className="py-2">
                        Integration of advanced features such as remote monitoring and notification 
                        systems for enhanced safety management
                        </li>
                        <li>
                        Professional setup of fire alarm control panels and communication devices for 
                        efficient emergency response  
                        </li>
                        <li className="py-2">
                        Expert placement of fire alarm devices to ensure optimal coverage and early 
                        detection of fire hazards  
                        </li>
                    </ul>
                </div>
                </div> 

        </div>
    );
}


