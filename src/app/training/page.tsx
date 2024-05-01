import InstallationImage from '/public/trainingimg1.jpg'; 
import Hero from "@/components/Hero";
import Link from "next/link"; 

export default function Training() {
    return (
        <div>
            
            <Hero
                imgData={InstallationImage}
                imgAlt='solar Installation'
                title="Your investment deserves expertise. 
                Trust us to guide and execute your professional 
                installations. From solar to CCTV, fire alarms, 
                and smart Home amplifiers, we've got you covered"/>
            <h1 className="text-3xl md:text-3xl xl:text-4xl text-center xl:ml-48 xl:text-left mt-4 font-bold text-red-500">Our Courses</h1>
            <div>
                <div className="md:ml-36 xl:ml-48 md:grid md:grid-cols-2 gap-10">
                    <div>
                        <h1 className="text-2xl text-center md:text-left mt-4 font-bold">COURSE TITLE</h1>
                        <h2 className="text-2xl text-center md:text-left mt-4">Renewable Energy/Solar system Installation Training</h2>
                        <h1 className="text-2xl text-center md:text-left mt-4 font-bold">COURSE CODE</h1>
                        <h2 className="text-2xl text-center md:text-left mt-4">RESI-101</h2>
                        <h1 className="text-2xl text-center md:text-left mt-4 font-bold">Course Modules:</h1>
                        <h1 className="text-2xl text-center md:text-left mt-4 font-bold">Introduction to Renewable Energy:</h1>
                        <ul className="list-disc list-inside text-start xl:text-2xl py-2 ml-2 ">
                                <li className="py-2">
                                Overview of renewable energy sources    
                                </li>
                                <li className="py-2">
                                Importance and benefits of renewable energy
                                </li>
                                <li className="py-2">
                                Global trends and market analysis
                                </li>
                                <li className="py-2">
                                <Link href="/training/solartraining" legacyBehavior>
                                    <a className="text-red-500">Click here to see the complete solar system installation module</a>
                                </Link>
                            </li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="text-3xl text-center md:text-left mt-4 font-bold">COURSE TITLE</h1>
                            <h2 className="text-2xl text-center md:text-left mt-4">CCTV Training and Installation</h2>
                            <h1 className="text-2xl text-center md:text-left mt-4 font-bold">COURSE CODE</h1>
                            <h2 className="text-2xl text-center md:text-left mt-4">CCTV-101</h2>
                            <h1 className="text-2xl text-center md:text-left mt-4 font-bold">Course Modules:</h1>
                            <h1 className="text-2xl text-center md:text-left mt-4 font-bold">Introduction to CCTV Systems:</h1>
                            <ul className="list-disc list-inside text-start xl:text-2xl py-2 ml-2 ">
                                <li className="py-2">
                                Overview of closed-circuit television (CCTV)    
                                </li>
                                <li className="py-2">
                                Importance and benefits of CCTV systems
                                </li>
                                <li className="py-2">
                                Global trends and market analysis in surveillance technology
                                </li>
                                <li className="py-2">
                                <Link href="/training/cctvtraining" legacyBehavior>
                                    <a className="text-red-500">Click here to see the complete CCTV system installation module</a>
                                </Link>
                            </li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="text-3xl text-center md:text-left mt-4 font-bold">COURSE TITLE</h1>
                            <h2 className="text-2xl text-center md:text-left mt-4">Conventional Fire Alarm Installation Training</h2>
                            <h1 className="text-2xl text-center md:text-left mt-4 font-bold">COURSE CODE</h1>
                            <h2 className="text-2xl text-center md:text-left mt-4">CFAT-101</h2>
                            <h1 className="text-2xl text-center md:text-left mt-4 font-bold">Course Modules:</h1>
                            <h1 className="text-2xl text-center md:text-left mt-4 font-bold">Introduction to Fire Alarm Systems:</h1>
                            <ul className="list-disc list-inside text-start xl:text-2xl py-2 ml-2 ">
                                <li className="py-2">
                                Overview of fire alarm systems    
                                </li>
                                <li className="py-2">
                                Importance and benefits of fire alarm systems
                                </li>
                                <li className="py-2">
                                Global trends and market analysis in fire alarm technology
                                </li>
                                <li className="py-2">
                                <Link href="/training/firealarmtraining" legacyBehavior>
                                    <a className="text-red-500">Click here to see the complete fire alarm system installation module</a>
                                </Link>
                            </li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="text-3xl text-center md:text-left mt-4 font-bold">COURSE TITLE</h1>
                            <h2 className="text-2xl text-center md:text-left mt-4">HTML & CSS Essentials</h2>
                            <h1 className="text-2xl text-center md:text-left mt-4 font-bold">COURSE CODE</h1>
                            <h2 className="text-2xl text-center md:text-left mt-4">HCS-101</h2>
                            <h1 className="text-2xl text-center md:text-left mt-4 font-bold">Course Syllables:</h1>
                            <h1 className="text-2xl text-center md:text-left mt-4 font-bold">Introduction to HTML:</h1>
                            <ul className="list-disc list-inside  text-start xl:text-2xl py-2 ml-2 ">
                                <li className="py-2">
                                Coding Basics: Intro to HTML Syntax    
                                </li>
                                <li className="py-2">
                                Understanding the structure of HTML documents
                                </li>
                                <li className="py-2">
                                Exploring basic HTML tags:
                                </li>
                                <li className="py-2">
                                <Link href="/training/htmlcssessentials" legacyBehavior>
                                    <a className="text-red-500">Click here to see the complete HTML & CSS Essential module</a>
                                </Link>
                            </li>
                            </ul>
                        </div>     
                </div>  
                </div> 

        </div>
    );
}



